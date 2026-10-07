import {
  formatSgd,
  PILOT_DEPOSIT_SGD,
  PILOT_PACKAGE_SGD,
  TAG_PACKAGE_SGD,
} from '../lib/pricing'

const pilotIncludes = [
  '100 Easycube wireless light tags',
  '1 Easycube mobile gateway',
  'Android Search-to-Light application',
  'SKU/location database import',
  'Tag-to-location setup tools',
  'Search-to-light functionality',
  'Sequential order-picking support',
  'Onboarding and setup support',
]

const sections = [
  {
    id: 'benefits',
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
        Station Pilot gets the{' '}
        <strong className="text-easycube-navy">same Easycube TAG package</strong>{' '}
        as our standard offer (up to 50 searchable warehouse locations), at a
        discounted pilot price of{' '}
        <strong className="text-easycube-navy">
          {formatSgd(PILOT_PACKAGE_SGD)}
        </strong>{' '}
        instead of {formatSgd(TAG_PACKAGE_SGD)}.
      </>
    ),
  },
  {
    id: 'includes',
    title: 'What you get',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    ),
    body: (
      <ul className="mt-1 space-y-2">
        {pilotIncludes.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-easycube-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            <span>{item}</span>
          </li>
        ))}
        <li className="pt-1 text-easycube-text-secondary">
          No rack wiring required. No WMS replacement required.
        </li>
      </ul>
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
        A setup and training session is arranged before the trial. The pilot
        runs with our team supporting onboarding and feedback. Final package
        billing is settled at the pilot price of{' '}
        <strong className="text-easycube-navy">
          {formatSgd(PILOT_PACKAGE_SGD)}
        </strong>{' '}
        if you continue after the trial.
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
        to register your interest. The deposit is credited toward the pilot
        package price of {formatSgd(PILOT_PACKAGE_SGD)} when you proceed.
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
            Station Pilot
          </p>
          <h1 className="mt-2 text-3xl font-bold text-easycube-navy sm:text-4xl">
            Station Pilot Onboarding
          </h1>
          <p className="mt-4 text-lg text-easycube-text-secondary">
            Same Easycube TAG package at a pilot price of{' '}
            {formatSgd(PILOT_PACKAGE_SGD)} — register with a{' '}
            {formatSgd(PILOT_DEPOSIT_SGD)} deposit.
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
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-semibold text-easycube-navy">
                    {section.title}
                  </h2>
                  <div className="mt-2 text-sm leading-relaxed text-easycube-text-secondary">
                    {section.body}
                  </div>
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
            confirm your spot in the Station Pilot program.
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
