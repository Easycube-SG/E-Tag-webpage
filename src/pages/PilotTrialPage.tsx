import {
  formatCentsPerParcel,
  formatSgd,
  PILOT_DEPOSIT_SGD,
  PILOT_PARCEL_CENTS,
  PILOT_TAG_UNIT_PRICE_SGD,
  STANDARD_PARCEL_CENTS,
  STANDARD_TAG_UNIT_PRICE_SGD,
} from '../lib/pricing'

const sections = [
  {
    id: 'Pilot Trialist Benefits',
    title: 'Pilot Benefits',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
      />
    ),
    body: (
      <>
        Trialists get tags at{' '}
        <strong className="text-easycube-navy">
          {formatSgd(PILOT_TAG_UNIT_PRICE_SGD)}/tag
        </strong>{' '}
        (standard price {formatSgd(STANDARD_TAG_UNIT_PRICE_SGD)}/tag). This is only collected <strong className="text-easycube-navy">after the trial ends</strong>.
        For usage after the trial, Pilot is billed at{' '}
        <strong className="text-easycube-navy">
          {formatCentsPerParcel(PILOT_PARCEL_CENTS)} per parcel
        </strong>{' '}
        (Standard at {formatCentsPerParcel(STANDARD_PARCEL_CENTS)} per parcel).
      </>
    ),
  },
  {
    id: 'duration',
    title: 'Duration',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M4.5 8.25h15M4.5 19.5h15a1.5 1.5 0 001.5-1.5V6.75a1.5 1.5 0 00-1.5-1.5h-15a1.5 1.5 0 00-1.5 1.5v11.25a1.5 1.5 0 001.5 1.5z"
      />
    ),
    body: (
      <>
        The pilot trial commence at end of July (A session will be arranged to do the setup and training prior to the trial) 
        and runs for <strong className="text-easycube-navy">1 month</strong>.
        During this period your shop uses Easycube TAG with our team supporting
        setup and feedback.
      </>
    ),
  },
  {
    id: 'billing',
    title: 'Billing & deposit',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
      />
    ),
    body: (
      <>
        We take a{' '}
        <strong className="text-easycube-navy">
          {formatSgd(PILOT_DEPOSIT_SGD)} deposit
        </strong>{' '}
        to register your interest. If the trial meet your expectations, we will work on the detail billing.
      </>
    ),
  },
]

export default function PilotTrialPage() {
  return (
    <main className="bg-easycube-bg py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-easycube-blue">
            Pilot program
          </p>
          <h1 className="mt-2 text-3xl font-bold text-easycube-navy sm:text-4xl">
            Pilot Trial Onboarding
          </h1>
          <p className="mt-4 text-lg text-easycube-text-secondary">
            Everything you need to know before joining as a pilot trialist
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {sections.map((section) => (
            <article
              key={section.id}
              className="rounded-2xl border border-easycube-border bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-easycube-blue-light text-easycube-blue">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.75}
                  >
                    {section.icon}
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-easycube-navy">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-easycube-text-secondary">
                    {section.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-easycube-blue/30 bg-easycube-blue/5 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-easycube-navy">
            Ready to register your interest?
          </h2>
          <p className="mt-2 text-sm text-easycube-text-secondary">
            Pay the {formatSgd(PILOT_DEPOSIT_SGD)} deposit securely online to
            confirm your spot in the pilot program.
          </p>
          <div className="mt-6">
            <a
              href="/checkout"
              className="inline-flex justify-center rounded-lg bg-easycube-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-easycube-blue-dark"
            >
              Register interest — {formatSgd(PILOT_DEPOSIT_SGD)} deposit
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-easycube-text-secondary">
          Questions before signing up?{' '}
          <a href="/#contact" className="font-medium text-easycube-blue hover:underline">
            Contact us
          </a>{' '}
          or email us after registering — we will reach out with your setup date.
        </p>
      </div>
    </main>
  )
}
