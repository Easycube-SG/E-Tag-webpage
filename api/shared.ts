import type { VercelRequest } from '@vercel/node'
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
  const origin = req?.headers.origin
  if (typeof origin === 'string') {
    return origin.replace(/\/$/, '')
  }
  return 'http://localhost:3001'
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
