import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getPilotDepositPriceId, getSiteUrl, getStripe, validatePlan } from './shared.js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'method_not_allowed' })
  }

  try {
    const { plan } = req.body ?? {}
    if (!validatePlan(plan)) {
      return res.status(400).json({ error: 'invalid_plan' })
    }

    const priceId = getPilotDepositPriceId()
    if (!priceId) {
      return res.status(500).json({ error: 'server_misconfigured' })
    }

    const siteUrl = getSiteUrl(req)
    const stripe = getStripe()

    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded_page',
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      payment_intent_data: {
        metadata: { plan: 'pilot', type: 'registration_deposit' },
      },
      metadata: { plan: 'pilot', type: 'registration_deposit' },
      payment_method_types: ['card'],
      return_url: `${siteUrl}/subscribe/success?session_id={CHECKOUT_SESSION_ID}`,
    })

    if (!session.client_secret) {
      return res.status(500).json({ error: 'checkout_failed' })
    }

    return res.status(200).json({ clientSecret: session.client_secret })
  } catch (err) {
    console.error('create-checkout-session error:', err)
    return res.status(500).json({ error: 'checkout_failed' })
  }
}
