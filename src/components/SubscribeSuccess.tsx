import { useEffect, useState } from 'react'
import { formatSgd, PILOT_MONTHLY_SGD } from '../lib/pricing'

type SessionDetails = {
  email: string | null
  plan: string
}

export default function SubscribeSuccess() {
  const [details, setDetails] = useState<SessionDetails | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const sessionId = params.get('session_id')

    if (!sessionId) {
      setLoading(false)
      return
    }

    fetch(`/api/checkout-session?session_id=${encodeURIComponent(sessionId)}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) setDetails(data as SessionDetails)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className="bg-easycube-bg py-16 sm:py-24">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
        <div className="rounded-2xl border border-easycube-border bg-white p-10 shadow-sm">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-easycube-success/15 text-easycube-success">
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-easycube-navy">
            Welcome to Easycube TAG Pilot!
          </h1>
          <p className="mt-3 text-easycube-text-secondary">
            Your subscription is active at {formatSgd(PILOT_MONTHLY_SGD)}/month.
            {loading
              ? ' Loading your details…'
              : details?.email
                ? ` A confirmation will be sent to ${details.email}.`
                : ' Check your email for a receipt from Stripe.'}
          </p>

          <div className="mt-8 space-y-3 text-left text-sm text-easycube-text-secondary">
            <p>
              <strong className="text-easycube-navy">What happens next</strong>
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>We will reach out within 1–2 business days to help with setup.</li>
              <li>
                BLE tags and hardware are ordered separately — use our contact
                form if you have not already.
              </li>
              <li>
                Manage or cancel your subscription anytime on our{' '}
                <a
                  href="/subscription"
                  className="font-medium text-easycube-blue hover:underline"
                >
                  Subscription page
                </a>
                .
              </li>
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/subscription"
              className="rounded-lg bg-easycube-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-easycube-blue-dark"
            >
              Manage subscription
            </a>
            <a
              href="/"
              className="rounded-lg border border-easycube-border px-6 py-3 text-sm font-semibold text-easycube-navy transition-colors hover:border-easycube-blue hover:text-easycube-blue"
            >
              Back to home
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
