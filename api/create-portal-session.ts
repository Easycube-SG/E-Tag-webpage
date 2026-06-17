import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getSiteUrl, getStripe, validateEmail } from './shared.js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'method_not_allowed' })
  }

  try {
    const email = validateEmail(req.body?.email)
    if (!email) {
      return res.status(400).json({ error: 'invalid_email' })
    }

    const stripe = getStripe()
    const customers = await stripe.customers.list({ email, limit: 1 })

    if (!customers.data.length) {
      return res.status(404).json({ error: 'not_found' })
    }

    const siteUrl = getSiteUrl(req)
    const session = await stripe.billingPortal.sessions.create({
      customer: customers.data[0].id,
      return_url: `${siteUrl}/subscription`,
    })

    return res.status(200).json({ url: session.url })
  } catch (err) {
    console.error('create-portal-session error:', err)
    return res.status(500).json({ error: 'portal_failed' })
  }
}
