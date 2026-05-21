import workflowImage from '../assets/Workflow.png'

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

        <div className="mt-12 overflow-hidden rounded-2xl border border-easycube-border bg-easycube-muted/30 shadow-sm">
          <img
            src={workflowImage}
            alt="How Easycube TAG works: digital inbound scan at the counter, customer self-collection from a designated rack, and instant outbound confirmation with data handover"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
