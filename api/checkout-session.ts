import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getStripe } from './shared.js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'method_not_allowed' })
  }

  const sessionId = req.query.session_id
  if (typeof sessionId !== 'string' || !sessionId.startsWith('cs_')) {
    return res.status(400).json({ error: 'invalid_session_id' })
  }

  try {
    const stripe = getStripe()
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.status !== 'complete') {
      return res.status(400).json({ error: 'session_not_complete' })
    }

    return res.status(200).json({
      email: session.customer_details?.email ?? session.customer_email,
      plan: session.metadata?.plan ?? 'pilot',
      type: session.metadata?.type ?? 'registration_deposit',
    })
  } catch (err) {
    console.error('checkout-session error:', err)
    return res.status(500).json({ error: 'session_lookup_failed' })
  }
}
