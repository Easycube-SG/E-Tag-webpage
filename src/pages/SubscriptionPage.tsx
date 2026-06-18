import { useState, type FormEvent } from 'react'
import { openBillingPortal } from '../lib/portal'
import {
  formatSgd,
  PILOT_DEPOSIT_SGD,
  PILOT_TAG_UNIT_PRICE_SGD,
} from '../lib/pricing'

export default function SubscriptionPage() {
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      await openBillingPortal(email)
    } catch (err) {
      if (err instanceof Error && err.message === 'not_found') {
        setError(
          'We could not find a subscription for this email. Check the spelling, use the email from checkout, or contact us for help.',
        )
      } else {
        setError('Something went wrong. Please try again or contact us.')
      }
      setSubmitting(false)
    }
  }

  return (
    <main className="bg-easycube-bg py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-easycube-navy sm:text-4xl">
            Manage your subscription
          </h1>
          <p className="mt-4 text-lg text-easycube-text-secondary">
            For customers with an active recurring Stripe subscription. Pilot
            registration deposits are one-time — contact us for billing
            questions.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-md rounded-2xl border border-easycube-border bg-white p-8 shadow-sm"
        >
          <label
            htmlFor="subscription-email"
            className="mb-1.5 block text-sm font-medium text-easycube-navy"
          >
            Subscription email
          </label>
          <p className="mb-3 text-xs text-easycube-text-secondary">
            Enter the email address you used when subscribing to the Pilot plan.
          </p>
          <input
            id="subscription-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={submitting}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@shop.com"
            className="w-full rounded-lg border border-easycube-border bg-white px-4 py-2.5 text-sm text-easycube-text placeholder:text-easycube-text-secondary/60 focus:border-easycube-blue focus:outline-none focus:ring-2 focus:ring-easycube-blue/20 disabled:cursor-not-allowed disabled:opacity-60"
          />

          {error && (
            <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 w-full rounded-lg bg-easycube-blue py-3 text-sm font-semibold text-white transition-colors hover:bg-easycube-blue-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? 'Redirecting…' : 'Manage subscription'}
          </button>
        </form>

        <div className="mt-16 space-y-12">
          <InstructionSection
            title="How to check your subscription"
            steps={[
              'Enter the email you used at Pilot signup in the form above.',
              'Click Manage subscription — you will be taken to the Stripe billing portal.',
              'In the portal you can see your plan name, status (active or cancelling), next billing date, and past invoices.',
            ]}
          />

          <InstructionSection
            title="How to cancel your subscription"
            steps={[
              'Open the billing portal using your subscription email (form above).',
              'Select Cancel plan or Cancel subscription.',
              'Confirm the cancellation when prompted.',
              'Your subscription remains active until the end of your current billing period — you will not be charged for the following month.',
              'Stripe will email you a confirmation. You can return here anytime before the period ends to check your status.',
            ]}
          />

          <InstructionSection
            title="How to update your payment method"
            steps={[
              'Open the billing portal with your subscription email.',
              'Choose Update payment method and enter your new Visa or Mastercard details.',
              'Save — future renewals will use the updated card.',
            ]}
          />

          <div className="rounded-2xl border border-easycube-border bg-white p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-easycube-navy">
              Good to know
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-easycube-text-secondary">
              <li>
                Pilot registration is a one-time{' '}
                {formatSgd(PILOT_DEPOSIT_SGD)} deposit — not managed here.
                This portal is for active recurring subscriptions only.
              </li>
              <li>
                BLE tags and hardware are billed separately (
                {formatSgd(PILOT_TAG_UNIT_PRICE_SGD)}/tag for Pilot) — contact
                us after the trial; not managed in the Stripe portal.
              </li>
              <li>
                Cancellation of a recurring plan takes effect at the end of the
                current billing period.
              </li>
              <li>
                No password or Easycube account is required — your subscription
                is linked to your email in Stripe.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-easycube-blue/30 bg-easycube-blue/5 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-easycube-navy">
              Need help?
            </h2>
            <p className="mt-2 text-sm text-easycube-text-secondary">
              If you cannot access your subscription or have questions about
              billing, contact us with your shop name and subscription email.
            </p>
            <a
              href="/#contact"
              className="mt-4 inline-flex rounded-lg bg-easycube-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-easycube-blue-dark"
            >
              Contact support
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

function InstructionSection({
  title,
  steps,
}: {
  title: string
  steps: string[]
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-easycube-navy">{title}</h2>
      <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm text-easycube-text-secondary">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  )
}
