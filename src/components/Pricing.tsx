import {
  formatSgd,
  PILOT_MONTHLY_SGD,
  PILOT_TAG_UNIT_PRICE_SGD,
  STANDARD_MONTHLY_SGD,
  STANDARD_TAG_UNIT_PRICE_SGD,
} from '../lib/pricing'

type PlanId = 'pilot' | 'standard' | 'enterprise'

const plans: {
  id: PlanId
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlighted: boolean
  checkout: boolean
}[] = [
  {
    id: 'pilot',
    name: 'Pilot',
    price: formatSgd(PILOT_MONTHLY_SGD),
    period: '/month',
    description: 'Try Easycube TAG at a reduced rate while we refine the product with early partners.',
    features: [
      '1 gateway device',
      `${formatSgd(PILOT_TAG_UNIT_PRICE_SGD)} per BLE tag (hardware billed separately)`,
      'Inbound & outbound workflows',
      'Basic inventory view',
      'Cancel anytime — effective end of billing period',
    ],
    highlighted: true,
    checkout: true,
  },
  {
    id: 'standard',
    name: 'Standard',
    price: formatSgd(STANDARD_MONTHLY_SGD),
    period: '/month',
    description: 'For small shops handling up to 500 parcels daily.',
    features: [
      '1 gateway device',
      `${formatSgd(STANDARD_TAG_UNIT_PRICE_SGD)} per BLE tag (hardware billed separately)`,
      'Inbound & outbound workflows',
      'Basic inventory view',
    ],
    highlighted: false,
    checkout: false,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Multi-location operations with advanced needs.',
    features: [
      'Unlimited gateways',
      'Custom tag quantities',
      'Multi-shop dashboard',
      'Dedicated onboarding',
      'SLA & account manager',
    ],
    highlighted: false,
    checkout: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-easycube-bg py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-easycube-navy sm:text-4xl">
            Pricing
          </h2>
          <p className="mt-4 text-lg text-easycube-text-secondary">
            Choose a plan that fits your shop. Pilot subscriptions are available
            online; Standard and Enterprise — contact us to get started.
          </p>
          <p className="mt-2 text-sm text-easycube-text-secondary">
            Already subscribed?{' '}
            <a
              href="/subscription"
              className="font-medium text-easycube-blue hover:underline"
            >
              Manage your subscription
            </a>
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
                plan.highlighted
                  ? 'border-easycube-blue bg-white shadow-lg ring-2 ring-easycube-blue'
                  : 'border-easycube-border bg-white shadow-sm'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-easycube-blue px-4 py-1 text-xs font-semibold text-white">
                  Pilot program
                </span>
              )}
              <h3 className="text-lg font-semibold leading-snug text-easycube-navy sm:text-xl">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-easycube-blue sm:text-4xl">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-easycube-text-secondary">
                    {plan.period}
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm text-easycube-text-secondary">
                {plan.description}
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-easycube-text"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-easycube-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.checkout ? (
                <a
                  href="/checkout"
                  className="mt-8 block w-full rounded-lg bg-easycube-blue py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-easycube-blue-dark"
                >
                  Get Started
                </a>
              ) : (
                <a
                  href="#contact"
                  className={`mt-8 block rounded-lg py-3 text-center text-sm font-semibold transition-colors ${
                    plan.id === 'enterprise'
                      ? 'border border-easycube-border text-easycube-navy hover:border-easycube-blue hover:text-easycube-blue'
                      : 'border border-easycube-border text-easycube-navy hover:border-easycube-blue hover:text-easycube-blue'
                  }`}
                >
                  {plan.id === 'enterprise' ? 'Contact Sales' : 'Contact us'}
                </a>
              )}

              {plan.checkout && (
                <p className="mt-3 text-center text-xs text-easycube-text-secondary">
                  Visa & Mastercard accepted ·{' '}
                  <a
                    href="/subscription"
                    className="text-easycube-blue hover:underline"
                  >
                    Manage or cancel
                  </a>
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
