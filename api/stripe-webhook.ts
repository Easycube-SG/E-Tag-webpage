import type { VercelRequest, VercelResponse } from '@vercel/node'
import { buffer } from 'micro'
import Stripe from 'stripe'
import { getStripe } from './lib/stripe'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).end('Method Not Allowed')
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET is not configured')
    return res.status(500).end('Server misconfigured')
  }

  let event: Stripe.Event

  try {
    const rawBody = await buffer(req)
    const signature = req.headers['stripe-signature']
    if (typeof signature !== 'string') {
      return res.status(400).end('Missing stripe-signature')
    }
    const stripe = getStripe()
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return res.status(400).end('Webhook Error')
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        console.log('Checkout completed:', {
          sessionId: session.id,
          customerEmail: session.customer_details?.email ?? session.customer_email,
          plan: 'pilot',
        })
        break
      }
      case 'invoice.paid': {
        const invoice = event.data.object as Stripe.Invoice
        console.log('Invoice paid:', {
          invoiceId: invoice.id,
          customerEmail: invoice.customer_email,
          amount: invoice.amount_paid,
        })
        break
      }
      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        console.log('Invoice payment failed:', {
          invoiceId: invoice.id,
          customerEmail: invoice.customer_email,
        })
        break
      }
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        console.log('Subscription updated:', {
          subscriptionId: subscription.id,
          status: subscription.status,
          cancelAtPeriodEnd: subscription.cancel_at_period_end,
        })
        break
      }
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        console.log('Subscription deleted:', {
          subscriptionId: subscription.id,
        })
        break
      }
      default:
        break
    }
  } catch (err) {
    console.error('Webhook handler error:', err)
    return res.status(500).end('Webhook handler failed')
  }

  return res.status(200).json({ received: true })
}
