import { useState } from 'react'

const faqs = [
  {
    question: 'What hardware do I need to get started?',
    answer:
      'You need an Android gateway device (phone), BLE tags, and a Bluetooth advertiser unit. Contact us to order tags and hardware for your plan.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Most shops complete setup in under an hour. Pair your Bluetooth device, register tags, and your team can start scanning parcels immediately.',
  },
  {
    question: 'Does it work offline?',
    answer:
      'Yes. Tagging and retrieval work locally over BLE. Events sync to the cloud when your device reconnects to the internet.',
  },
  {
    question: 'Can I manage multiple shop locations?',
    answer:
      'The Enterprise plan supports multi-location dashboards. Contact us to discuss your specific setup.',
  },
  {
    question: 'What happens when a tag battery runs low?',
    answer:
      'The app alerts you when tag signal strength drops. Replacement tags can be ordered directly through your account.',
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
                  <div className="px-6 pb-5 text-easycube-text-secondary">
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
