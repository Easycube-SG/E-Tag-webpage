const plans = [
  {
    name: 'Starter',
    price: '$39',
    period: '/month',
    description: 'For small shops handling up to 500 parcels daily.',
    features: [
      '1 gateway device',
      '$3 per BLE tags',
      'Inbound & outbound workflows',
      'Basic inventory view',
    ],
    highlighted: false,
  },
  {
    name: 'Dedicated Collection point',
    price: '$99',
    period: '/month',
    description: 'For growing collection points with higher volume.',
    features: [
      'Up to 3 gateway (for extended range',
      '>800 BLE tags included',
      'Dedicated dashboard',
      'Priority support',
    ],
    highlighted: true,
  },
  {
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
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-easycube-bg py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-easycube-navy sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-easycube-text-secondary">
            Choose a plan that fits your daily parcel volume. All plans include
            the Easycube TAG app and backend access.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? 'border-easycube-blue bg-white shadow-lg ring-2 ring-easycube-blue'
                  : 'border-easycube-border bg-white shadow-sm'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-easycube-blue px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-easycube-navy">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-easycube-blue">
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
              <a
                href="#contact"
                className={`mt-8 block rounded-lg py-3 text-center text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-easycube-blue text-white hover:bg-easycube-blue-dark'
                    : 'border border-easycube-border text-easycube-navy hover:border-easycube-blue hover:text-easycube-blue'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
