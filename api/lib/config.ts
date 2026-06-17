import type { VercelRequest } from '@vercel/node'

export type PlanId = 'pilot'

export const PILOT_MONTHLY_SGD = 20
export const STANDARD_MONTHLY_SGD = 39

export function getSiteUrl(req?: VercelRequest): string {
  if (process.env.SITE_URL) {
    return process.env.SITE_URL.replace(/\/$/, '')
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  const origin = req?.headers.origin
  if (typeof origin === 'string') {
    return origin.replace(/\/$/, '')
  }
  return 'http://localhost:5173'
}

export function getPilotPriceId(): string | undefined {
  return process.env.STRIPE_PRICE_PILOT
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
