import { useEffect, useState } from 'react'
import { formatSgd, PILOT_DEPOSIT_SGD } from '../lib/pricing'

type SessionDetails = {
  email: string | null
  plan: string
  type: string
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
            Thank you — you&apos;re registered!
          </h1>
          <p className="mt-3 text-easycube-text-secondary">
            Your {formatSgd(PILOT_DEPOSIT_SGD)} pilot registration deposit was
            received.
            {loading
              ? ' Loading your details…'
              : details?.email
                ? ` A receipt will be sent to ${details.email}.`
                : ' Check your email for a receipt from Stripe.'}
          </p>

          <div className="mt-8 space-y-3 text-left text-sm text-easycube-text-secondary">
            <p>
              <strong className="text-easycube-navy">What happens next</strong>
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                We will contact you via WhatsApp or email with your setup date
                (trial commences end of July).
              </li>
              <li>
                Review the{' '}
                <a href="/pilot-trial" className="text-easycube-blue hover:underline">
                  pilot trial onboarding
                </a>{' '}
                page for billing and hardware details.
              </li>
              <li>
                Questions? Use our{' '}
                <a href="/#contact" className="text-easycube-blue hover:underline">
                  contact form
                </a>
                .
              </li>
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="/pilot-trial"
              className="rounded-lg bg-easycube-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-easycube-blue-dark"
            >
              View pilot trial info
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
