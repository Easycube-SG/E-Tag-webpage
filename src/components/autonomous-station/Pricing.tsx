import CtaButton from '../CtaButton'

const smeIncludes = [
  'Up to 100 Easycube wireless light tags',
  '1 Easycube mobile gateway',
  'Android Search-to-Light application',
  'SKU/location database import',
  'Tag-to-location setup tools',
  'Search-to-light functionality',
  'Sequential order-picking support',
  'Onboarding and setup support',
]

const enterpriseExtras = [
  'Everything in SME',
  'Customisation to your WMS',
  'On-site survey of inventory and planning',
  'Unlimited mobile gateways',
]

function IncludeList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm text-easycube-text sm:text-base"
        >
          <svg
            className="mt-0.5 h-5 w-5 shrink-0 text-easycube-success"
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
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-easycube-bg py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-easycube-navy sm:text-4xl">
            Pricing
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="flex flex-col rounded-2xl border border-easycube-border bg-white p-8 shadow-sm sm:p-10">
            <div>
              <h3 className="text-xl font-bold text-easycube-navy sm:text-2xl">
                SME
              </h3>
              <p className="mt-3 text-4xl font-bold tracking-tight text-easycube-blue sm:text-5xl">
                S$2,500
              </p>
              <p className="mt-3 text-base text-easycube-text-secondary">
                For up to 100 searchable warehouse locations.
              </p>
            </div>

            <div className="mt-8 flex-1 border-t border-easycube-border pt-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-easycube-navy">
                Includes
              </p>
              <IncludeList items={smeIncludes} />
            </div>

            <div className="mt-8 space-y-2 border-t border-easycube-border pt-8 text-sm text-easycube-text-secondary sm:text-base">
              <p>No rack wiring required.</p>
              <p>No WMS replacement required.</p>
            </div>

            <div className="mt-8">
              <CtaButton href="/pilot-trial" className="!w-full sm:!w-auto">
                Sign up Pilot at $1500
              </CtaButton>
            </div>
          </article>

          <article className="flex flex-col rounded-2xl border border-easycube-border bg-white p-8 shadow-sm sm:p-10">
            <div>
              <h3 className="text-xl font-bold text-easycube-navy sm:text-2xl">
                Enterprise
              </h3>
              <p className="mt-3 text-4xl font-bold tracking-tight text-easycube-blue sm:text-5xl">
                Custom
              </p>
              <p className="mt-3 text-base text-easycube-text-secondary">
                For larger operations that need integration and on-site planning.
              </p>
            </div>

            <div className="mt-8 flex-1 border-t border-easycube-border pt-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-easycube-navy">
                Includes
              </p>
              <IncludeList items={enterpriseExtras} />
            </div>

            <div className="mt-8 space-y-2 border-t border-easycube-border pt-8 text-sm text-easycube-text-secondary sm:text-base">
              <p>No rack wiring required.</p>
              <p>Built around your existing warehouse systems.</p>
            </div>

            <div className="mt-8">
              <CtaButton href="/#contact" className="!w-full sm:!w-auto">
                Contact us
              </CtaButton>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
