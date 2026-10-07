import { useState } from 'react'
import { BodyText, LeadText, SplitHeading } from '../Typography'
import { faqs } from './LandingSeo'

export default function LandingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-easycube-bg py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SplitHeading accent="Courier & delivery" rest="FAQs" />
          <LeadText className="mt-4">
            Common questions about our delivery service in Singapore.
          </LeadText>
        </div>

        <div className="mt-12 divide-y divide-easycube-border rounded-2xl border border-easycube-border bg-white">
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
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <BodyText>{faq.answer}</BodyText>
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
