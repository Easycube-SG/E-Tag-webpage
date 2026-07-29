import { useState } from 'react'
import advantageImage from '../../assets/Easycube adv.png'

const features = [
  {
    title: 'Beat Cart Abandonment',
    description:
      'Shoppers bail out during checkout because of high delivery costs. Offer a pickup option to retain your customers and boost conversion rates.',
  },
  {
    title: 'End Self-Collection Issues',
    description:
      'You will no longer have to face constant visits to your residential or office locations.',
  },
  {
    title: 'Deliver within 24 hours',
    description:
      'We provide delivery within 24 hours upon pickup of the parcel.',
  },
  {
    title: 'Zero Interference',
    description:
      'Our smart system provides a smooth handshake for delivery at your office and at the self-collection point.',
  },
  {
    title: 'Automated SMS Handshake',
    description:
      'When you drop off, the system instantly texts the buyer a secure PIN for collection.',
  },
  {
    title: 'Extended Hours',
    description:
      'Collection points operate from morning until late (8 AM – 11 PM), giving office workers the flexibility to collect after work.',
  },
]

function AccordionIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg
        className="h-5 w-5 shrink-0 text-white/70"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    )
  }

  return (
    <svg
      className="h-5 w-5 shrink-0 text-white/70"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  )
}

export default function EasyCubeAdvantage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="advantage" className="bg-[#0a1628] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            The EasyCube Advantage
          </h2>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-3xl bg-white/5">
            <img
              src={advantageImage}
              alt="Customer collecting a parcel at an EasyCube collection point"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            {features.map((feature, index) => {
              const isOpen = openIndex === index

              return (
                <div key={feature.title}>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 py-6 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="text-lg font-semibold text-white sm:text-xl">
                      {feature.title}
                    </span>
                    <AccordionIcon open={isOpen} />
                  </button>
                  {isOpen && (
                    <p className="pb-6 text-base leading-relaxed text-white/75">
                      {feature.description}
                    </p>
                  )}
                  <div
                    className="h-px bg-gradient-to-r from-pink-500/50 via-purple-500/40 to-easycube-blue/60"
                    aria-hidden
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
