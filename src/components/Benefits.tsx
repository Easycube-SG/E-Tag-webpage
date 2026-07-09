import CtaButton from './CtaButton'
import productVideo from '../assets/ETAG-introduction.mp4'

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
              <CtaButton>Start Your Trial Now</CtaButton>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[280px] overflow-hidden rounded-2xl border border-easycube-border bg-black shadow-lg sm:max-w-[320px]">
              <video
                className="aspect-[48/91] h-auto w-full object-contain"
                controls
                playsInline
                preload="metadata"
                aria-label="E.TAG product introduction video"
              >
                <source src={productVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
