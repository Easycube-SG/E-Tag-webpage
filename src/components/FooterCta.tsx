import CtaButton from './CtaButton'

export default function FooterCta() {
  return (
    <>
      <section className="bg-easycube-navy py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to transform your parcel operations?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Join shops that are already saving time and delighting customers
            with Easycube TAG.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CtaButton>Get Started Today</CtaButton>
            <CtaButton href="#pricing" variant="secondary">
              View Pricing
            </CtaButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-easycube-border bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <img
            src="/easycube_logo.png"
            alt="Easycube TAG"
            className="h-8 w-auto opacity-80"
          />
          <p className="text-sm text-easycube-text-secondary">
            &copy; {new Date().getFullYear()} Easycube TAG. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
