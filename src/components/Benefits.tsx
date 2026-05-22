import CtaButton from './CtaButton'

const benefits = [
  {
    title: 'Cut search time dramatically',
    description:
      'Staff no longer dig through stacks of parcels. BLE-guided retrieval gets packages to customers faster.',
  },
  {
    title: 'Reduce misplacement errors',
    description:
      'Every parcel is linked to a unique tag at intake, so outbound handoffs are accurate and auditable.',
  },
  {
    title: 'Scale without extra headcount',
    description:
      'Handle higher daily parcel volumes with the same team using scan-first workflows and floating smart bar tools.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="bg-easycube-bg py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-easycube-navy sm:text-4xl">
              Why choose Easycube-TAG
            </h2>
            <p className="mt-4 text-lg text-easycube-text-secondary">
              Turn parcel chaos into a repeatable system your front-line staff
              can trust — from first scan to customer pickup.
            </p>

            <ul className="mt-10 space-y-6">
              {benefits.map((benefit) => (
                <li key={benefit.title} className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-easycube-success/15 text-easycube-success">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-easycube-navy">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-easycube-text-secondary">
                      {benefit.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <CtaButton>Start Your Free Trial</CtaButton>
            </div>
          </div>

          <div className="rounded-2xl border border-easycube-border bg-white p-4 shadow-sm sm:p-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <StatCard value="80%" label="Faster parcel retrieval" />
              <StatCard value="$$" label="Take in more parcels" />
              <StatCard value="3×" label="More parcels per hour" />
              <StatCard value="24/7" label="Inventory visibility" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-easycube-blue-light p-4 text-center sm:p-6">
      <p className="text-2xl font-bold text-easycube-blue sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs text-easycube-text-secondary sm:mt-2 sm:text-sm">{label}</p>
    </div>
  )
}
