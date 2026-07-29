import { useState } from 'react'
import { BodyText, SplitHeading } from '../Typography'
import advantageImage from '../../assets/Easycube adv.png'

const features = [
  {
    accent: 'Beat',
    title: 'cart abandonment',
    description: 'Shipping costs drive >70% of drop-off. Offer pickup at checkout.',
  },
  {
    accent: 'End',
    title: 'collection hassle',
    description: 'Stop juggling home and office handovers. We run the node.',
  },
  {
    accent: 'Deliver',
    title: 'within 24 hours',
    description: 'Parcels move to collection points the day after pickup.',
  },
  {
    accent: 'Zero',
    title: 'interference',
    description: 'A digital handshake from your desk to the collection point.',
  },
  {
    accent: 'Automated',
    title: 'SMS PIN',
    description: 'Buyers get a secure PIN the moment their parcel arrives.',
  },
  {
    accent: 'Extended',
    title: 'collection hours',
    description: 'Nodes open 8 AM – 11 PM so buyers collect after work.',
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
          <SplitHeading accent="The EasyCube" rest="advantage" onDark />
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
                    <SplitHeading
                      accent={feature.accent}
                      rest={feature.title}
                      as="span"
                      size="card"
                      onDark
                      className="text-left text-lg sm:text-xl"
                    />
                    <AccordionIcon open={isOpen} />
                  </button>
                  {isOpen && (
                    <BodyText invert className="pb-6">
                      {feature.description}
                    </BodyText>
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
