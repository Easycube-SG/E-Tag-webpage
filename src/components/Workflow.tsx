import workflowImage from '../assets/Workflow.png'

const steps = [
  {
    step: '1',
    title: 'Digital Handshake & Inbound Scan',
    description:
      'Customer shows their barcode at the counter. Staff scans the parcel and links it in seconds — no leaving the register.',
  },
  {
    step: '2',
    title: 'Customer Finds Their Parcel',
    description:
      'The customer walks to the tagged shelf on their own. The BLE tag lights up on the correct parcel so they pick the right one.',
  },
  {
    step: '3',
    title: 'Instant Outbound & Data Handover',
    description:
      'Staff confirms handover at the counter. Parcel data syncs automatically — fast, accurate, and auditable.',
  },
]

export default function Workflow() {
  return (
    <section id="workflow" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-easycube-navy sm:text-4xl">
            How it Works
          </h2>
          <p className="mt-4 text-lg text-easycube-text-secondary">
            Never Leave Your Counter again.
          </p>
        </div>

        {/* Mobile: readable step cards */}
        <ol className="mt-10 space-y-4 md:hidden">
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

        {/* Desktop: full infographic */}
        <div className="mt-12 hidden overflow-hidden rounded-2xl border border-easycube-border bg-easycube-muted/30 shadow-sm md:block">
          <img
            src={workflowImage}
            alt="How Easycube TAG works: digital inbound scan at the counter, customer self-collection from a designated rack, and instant outbound confirmation with data handover"
            className="block h-auto w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
