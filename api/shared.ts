import type { VercelRequest, VercelResponse } from '@vercel/node'
import Stripe from 'stripe'

export type PlanId = 'pilot'

let stripeClient: Stripe | null = null

export function getStripe(): Stripe {
  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) {
    throw new Error('STRIPE_SECRET_KEY is not configured')
  }
  if (!stripeClient) {
    stripeClient = new Stripe(secretKey)
  }
  return stripeClient
}

function normalizeSiteUrl(url: string): string {
  const trimmed = url.replace(/\/$/, '')
  if (/^https?:\/\//i.test(trimmed)) return trimmed
  return `https://${trimmed}`
}

export function getSiteUrl(req?: VercelRequest): string {
  if (process.env.SITE_URL) {
    return normalizeSiteUrl(process.env.SITE_URL)
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  // Local dev only — never trust Origin on Vercel deploys
  if (!process.env.VERCEL) {
    const origin = req?.headers.origin
    if (typeof origin === 'string') {
      return origin.replace(/\/$/, '')
    }
  }
  return 'http://localhost:3001'
}

export function getClientIp(req: VercelRequest): string {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0]?.trim() || 'unknown'
  }
  if (Array.isArray(forwarded) && forwarded[0]) {
    return forwarded[0].split(',')[0]?.trim() || 'unknown'
  }
  const realIp = req.headers['x-real-ip']
  if (typeof realIp === 'string') return realIp
  return req.socket?.remoteAddress ?? 'unknown'
}

function urlOrigin(value: string): string | null {
  try {
    const url = new URL(value)
    return `${url.protocol}//${url.host}`
  } catch {
    return null
  }
}

export function getAllowedOrigins(): string[] {
  const origins = new Set<string>()

  if (process.env.SITE_URL) {
    origins.add(normalizeSiteUrl(process.env.SITE_URL).replace(/\/$/, ''))
  }
  if (process.env.VERCEL_URL) {
    origins.add(`https://${process.env.VERCEL_URL}`)
  }
  if (!process.env.VERCEL || process.env.VERCEL_ENV !== 'production') {
    origins.add('http://localhost:3001')
    origins.add('http://localhost:5173')
  }

  return [...origins]
}

function matchesAllowedOrigin(value: string, allowed: string[]): boolean {
  const origin = urlOrigin(value) ?? value.replace(/\/$/, '')
  return allowed.some((entry) => origin === entry.replace(/\/$/, ''))
}

/** Returns false and sends 403 when the request origin is not allowed. */
export function enforceAllowedOrigin(
  req: VercelRequest,
  res: VercelResponse,
): boolean {
  const allowed = getAllowedOrigins()
  if (!allowed.length) return true

  const origin = req.headers.origin
  if (typeof origin === 'string' && matchesAllowedOrigin(origin, allowed)) {
    return true
  }

  const referer = req.headers.referer
  if (typeof referer === 'string' && matchesAllowedOrigin(referer, allowed)) {
    return true
  }

  // Browsers always send Origin on cross-origin POST; same-origin GET may omit it
  if (req.method === 'GET' && !origin && !referer && !process.env.VERCEL) {
    return true
  }

  res.status(403).json({ error: 'forbidden' })
  return false
}

/** One-time Pilot registration deposit (Stripe Price ID, type: one_time). */
export function getPilotDepositPriceId(): string | undefined {
  return process.env.STRIPE_PRICE_PILOT_DEPOSIT
}

export function validatePlan(plan: unknown): plan is PlanId {
  return plan === 'pilot'
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateEmail(email: unknown): string | null {
  if (typeof email !== 'string') return null
  const trimmed = email.trim().toLowerCase()
  if (!EMAIL_REGEX.test(trimmed)) return null
  return trimmed
}
