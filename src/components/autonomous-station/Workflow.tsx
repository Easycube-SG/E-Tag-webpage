import howItWorksImage from '../../assets/How it work.png'

const steps = [
  {
    step: '1',
    title: 'Import SKU Database',
    description: 'Use your existing SKU-location data.',
  },
  {
    step: '2',
    title: 'Search or Scan',
    description: 'Mobile app sends command through gateway.',
  },
  {
    step: '3',
    title: 'Location Lights Up',
    description: 'The correct shelf or bin responds instantly.',
  },
  {
    step: '4',
    title: 'Pick with Confidence',
    description: 'Find any item, by anyone.',
  },
]

export default function Workflow() {
  return (
    <section id="workflow" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Mobile: readable step cards (desktop image later) */}
        <div className="md:hidden">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-easycube-blue">
              How it works
            </p>
            <h2 className="mt-2 text-3xl font-bold text-easycube-navy">
              Make Every Warehouse Searchable
            </h2>
            <p className="mt-4 text-lg text-easycube-text-secondary">
              Find any item. By anyone. From your phone.
            </p>
          </div>
          <ol className="mt-10 space-y-4">
            {steps.map((item) => (
              <li
                key={item.step}
                className="rounded-2xl border border-easycube-border bg-easycube-muted/30 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-easycube-blue text-sm font-bold text-white">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-easycube-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-easycube-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Desktop: full how-it-works graphic */}
        <div className="hidden md:block">
          <img
            src={howItWorksImage}
            alt="How it works: import SKU database, search or scan from your phone, location lights up, pick with confidence — make every warehouse searchable"
            className="mx-auto block h-auto w-full max-w-5xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
