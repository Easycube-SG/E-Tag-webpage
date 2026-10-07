import { useState, type ReactNode } from 'react'

type Faq = {
  question: string
  answer: ReactNode
}

const faqs: Faq[] = [
  {
    question: 'Is Easycube a warehouse management system?',
    answer: (
      <>
        <p>
          No. Easycube does not replace your WMS, ERP or inventory software.
        </p>
        <p className="mt-3">
          We use the SKU and location information you already have and connect
          those locations to physical wireless tags.
        </p>
      </>
    ),
  },
  {
    question: 'Do I need to integrate Easycube with my WMS?',
    answer: (
      <>
        <p>
          Not necessarily. The initial system can work from a simple
          SKU-to-location database or exported file.
        </p>
        <p className="mt-3">
          The goal is to keep initial deployment as lightweight as possible.
        </p>
      </>
    ),
  },
  {
    question: 'Do I need to re-label my warehouse?',
    answer: (
      <>
        <p>
          No. Easycube is designed to work with your existing rack, shelf and
          bin barcodes.
        </p>
        <p className="mt-3">
          The existing location barcode is paired with an Easycube tag during
          setup.
        </p>
      </>
    ),
  },
  {
    question: 'Does my warehouse need Wi-Fi everywhere?',
    answer: (
      <>
        <p>
          The Easycube tags communicate wirelessly with the Easycube mobile
          gateway.
        </p>
        <p className="mt-3">
          Exact connectivity requirements will depend on the deployment
          environment.
        </p>
      </>
    ),
  },
  {
    question: 'Do I need to install wires on the racks?',
    answer: (
      <p>
        No. The tags are wireless and designed to be attached directly to
        existing locations.
      </p>
    ),
  },
  {
    question: 'What happens when I search for an SKU?',
    answer: (
      <>
        <p>
          The mobile application checks the SKU&apos;s mapped storage location
          and sends a command through the Easycube gateway.
        </p>
        <p className="mt-3">The corresponding physical tag lights up.</p>
      </>
    ),
  },
  {
    question: 'Can it work with an order containing multiple SKUs?',
    answer: (
      <>
        <p>
          Yes. Easycube can guide the operator through multiple mapped locations
          sequentially.
        </p>
        <p className="mt-3">For example:</p>
        <p className="mt-2 font-medium text-easycube-navy">
          Item 1 💡 → Item 2 💡 → Item 3 💡
        </p>
      </>
    ),
  },
  {
    question: 'What happens if we move an SKU?',
    answer: (
      <>
        <p>Simply update its location mapping.</p>
        <p className="mt-3">
          You do not need to move or rebuild the entire system.
        </p>
      </>
    ),
  },
  {
    question: 'Can the same tag be reassigned?',
    answer: (
      <>
        <p>Yes.</p>
        <p className="mt-3">
          Tags can be re-paired to different warehouse locations when layouts or
          storage arrangements change.
        </p>
      </>
    ),
  },
  {
    question: 'Who is Easycube designed for?',
    answer: (
      <>
        <p>Easycube is primarily designed for operations such as:</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>3PL warehouses</li>
          <li>e-commerce fulfilment</li>
          <li>SME distributors</li>
          <li>spare-parts storage</li>
          <li>manufacturing stores</li>
          <li>manual kitting operations</li>
          <li>warehouses with frequent staff onboarding</li>
        </ul>
      </>
    ),
  },
  {
    question: 'How many locations can we start with?',
    answer: (
      <>
        <p>The starter package supports 50 locations.</p>
        <p className="mt-3">
          We recommend beginning with a defined warehouse zone or high-frequency
          SKU area before expanding.
        </p>
      </>
    ),
  },
  {
    question: 'Why is the Pilot Programme cheaper?',
    answer: (
      <>
        <p>
          We are working with our first group of warehouse partners to validate
          Search-to-Light in real operations.
        </p>
        <p className="mt-3">
          Pilot customers receive preferential pricing in exchange for feedback
          and collaboration with our engineering team.
        </p>
      </>
    ),
  },
  {
    question: 'What happens after the pilot?',
    answer: (
      <>
        <p>
          If the system provides measurable value, we can discuss expanding
          Search-to-Light into additional warehouse locations.
        </p>
        <p className="mt-3">
          There is no requirement to automate the entire warehouse.
        </p>
      </>
    ),
  },
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-easycube-navy sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-easycube-text-secondary">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="mt-12 divide-y divide-easycube-border rounded-2xl border border-easycube-border bg-easycube-muted/30">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-semibold text-easycube-navy">
                    {faq.question}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-easycube-blue transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-easycube-text-secondary sm:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
