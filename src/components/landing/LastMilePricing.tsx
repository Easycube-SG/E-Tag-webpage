const tiers = [
  {
    name: 'Same-Point Drop & Collect at Node',
    badge: 'The Hero Offer',
    bestFor: 'HBBs selling within their own estate or neighborhood.',
    price: 'S$1.20',
    period: 'per parcel',
    features: [
      'Businesses Drop parcels at our collection point',
      'Auto notification for shoppers',
      'E-proof of delivery',
    ],
    highlighted: true,
  },
  {
    name: 'Doorstep Pick-Up to Node',
    bestFor: 'Merchants who need doorstep pickup to a nearby collection node.',
    price: 'S$2.20',
    period: 'per parcel',
    features: [
      'Easycube Fleet pick up',
      'Drop parcels at at our collection point',
      'Auto notification for shoppers',
      'E-proof of delivery',
    ],
    highlighted: false,
  },
]

export default function LastMilePricing() {
  return (
    <section id="pricing" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-easycube-navy sm:text-4xl">
            Pricing
          </h2>
          <p className="mt-4 text-lg text-easycube-text-secondary">
            Simple per-parcel pricing for hyper-local delivery.{' '}
            <a href="/last-mile-delivery" className="font-medium text-easycube-blue hover:underline">
              Learn how it works
            </a>
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
                tier.highlighted
                  ? 'border-easycube-blue bg-white shadow-lg ring-2 ring-easycube-blue'
                  : 'border-easycube-border bg-easycube-muted/30 shadow-sm'
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-easycube-blue px-4 py-1 text-xs font-semibold text-white">
                  {tier.badge}
                </span>
              )}
              {!tier.highlighted && (
                <p className="text-xs font-semibold uppercase tracking-wide text-easycube-blue">
                  {tier.badge}
                </p>
              )}
              <div className="mt-4 text-center">
                <p className="text-5xl font-bold leading-none tracking-tight text-easycube-blue sm:text-6xl">
                  {tier.price}
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-easycube-text-secondary">
                  {tier.period}
                </p>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-easycube-navy sm:text-xl">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-easycube-text-secondary">
                <strong className="text-easycube-navy">Best for:</strong>{' '}
                {tier.bestFor}
              </p>
              <ul className="mt-6 flex-1 space-y-2">
                {tier.features.map((feature) => (
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
                href="/#contact"
                className="mt-8 block rounded-lg bg-easycube-blue py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-easycube-blue-dark"
              >
                Get started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
