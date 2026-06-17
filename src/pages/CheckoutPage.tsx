import { useCallback, useState } from 'react'
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { fetchPilotCheckoutClientSecret } from '../lib/checkout'
import { formatSgd, PILOT_MONTHLY_SGD } from '../lib/pricing'

const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as
  | string
  | undefined

const stripePromise = publishableKey ? loadStripe(publishableKey) : null

export default function CheckoutPage() {
  const [initError, setInitError] = useState<string | null>(
    publishableKey ? null : 'Stripe is not configured for this environment.',
  )

  const fetchClientSecret = useCallback(async () => {
    try {
      return await fetchPilotCheckoutClientSecret()
    } catch {
      setInitError('Unable to start checkout. Please try again or contact us.')
      throw new Error('checkout_failed')
    }
  }, [])

  if (initError) {
    return (
      <main className="bg-easycube-bg py-16 sm:py-24">
        <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
          <div className="rounded-2xl border border-easycube-border bg-white p-8 shadow-sm">
            <p className="text-easycube-text-secondary">{initError}</p>
            <a
              href="/#pricing"
              className="mt-6 inline-block rounded-lg bg-easycube-blue px-6 py-3 text-sm font-semibold text-white hover:bg-easycube-blue-dark"
            >
              Back to pricing
            </a>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-easycube-bg py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-easycube-navy sm:text-4xl">
            Subscribe to Pilot
          </h1>
          <p className="mt-2 text-easycube-text-secondary">
            Secure payment powered by Stripe. Cancel anytime from our{' '}
            <a href="/subscription" className="text-easycube-blue hover:underline">
              Subscription page
            </a>
            .
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-start">
          <aside className="rounded-2xl border border-easycube-border bg-white p-6 shadow-sm lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-wide text-easycube-blue">
              Order summary
            </p>
            <h2 className="mt-2 text-xl font-semibold text-easycube-navy">
              Easycube TAG Pilot
            </h2>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-easycube-blue">
                {formatSgd(PILOT_MONTHLY_SGD)}
              </span>
              <span className="text-easycube-text-secondary">/month</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-easycube-text-secondary">
              <li>Monthly subscription, billed automatically</li>
              <li>Visa and Mastercard accepted</li>
              <li>BLE tags billed separately — contact us to order</li>
              <li>Cancel anytime — effective end of billing period</li>
            </ul>
            <a
              href="/#pricing"
              className="mt-6 inline-block text-sm font-medium text-easycube-blue hover:underline"
            >
              ← Back to pricing
            </a>
          </aside>

          <div className="min-h-[480px] rounded-2xl border border-easycube-border bg-white p-4 shadow-sm sm:p-6">
            {stripePromise && (
              <EmbeddedCheckoutProvider
                stripe={stripePromise}
                options={{ fetchClientSecret }}
              >
                <EmbeddedCheckout />
              </EmbeddedCheckoutProvider>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
