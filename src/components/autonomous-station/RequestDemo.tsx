import CtaButton from '../CtaButton'

export default function RequestDemo() {
  return (
    <section className="bg-easycube-bg py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-easycube-navy sm:text-4xl">
          See Easycube TAG in your shop
        </h2>
        <p className="mt-4 text-lg text-easycube-text-secondary">
          Book a demo and we&apos;ll walk you through setup, workflows, and how
          Autonomous Station fits your collection point.
        </p>
        <div className="mt-8">
          <CtaButton href="/autonomous-station#contact" className="!w-auto">
            Request a Demo
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
