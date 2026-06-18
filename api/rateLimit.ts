import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getClientIp } from './shared.js'

type RateLimitOptions = {
  namespace: string
  limit: number
  windowSec?: number
  /** Extra suffix (e.g. email) for per-resource limits */
  identifier?: string
}

let redis: Redis | null | undefined
const limiters = new Map<string, Ratelimit>()

function getRedis(): Redis | null {
  if (redis !== undefined) return redis

  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) {
    redis = null
    return null
  }

  redis = new Redis({ url, token })
  return redis
}

function getLimiter(namespace: string, limit: number, windowSec: number): Ratelimit | null {
  const client = getRedis()
  if (!client) return null

  const cacheKey = `${namespace}:${limit}:${windowSec}`
  let limiter = limiters.get(cacheKey)
  if (!limiter) {
    limiter = new Ratelimit({
      redis: client,
      limiter: Ratelimit.slidingWindow(limit, `${windowSec} s`),
      prefix: `easycube:${namespace}`,
    })
    limiters.set(cacheKey, limiter)
  }
  return limiter
}

/** Returns false if rate limited (response already sent). Skips when Upstash is not configured. */
export async function enforceRateLimit(
  req: VercelRequest,
  res: VercelResponse,
  options: RateLimitOptions,
): Promise<boolean> {
  const { namespace, limit, windowSec = 60, identifier } = options
  const limiter = getLimiter(namespace, limit, windowSec)
  if (!limiter) return true

  const ip = getClientIp(req)
  const key = identifier ? `${ip}:${identifier}` : ip
  const { success, limit: max, remaining, reset } = await limiter.limit(key)

  res.setHeader('X-RateLimit-Limit', String(max))
  res.setHeader('X-RateLimit-Remaining', String(remaining))
  res.setHeader('X-RateLimit-Reset', String(reset))

  if (!success) {
    res.status(429).json({ error: 'rate_limit_exceeded' })
    return false
  }

  return true
}
