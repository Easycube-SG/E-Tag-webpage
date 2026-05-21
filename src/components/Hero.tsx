import CtaButton from './CtaButton'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full">
        <img
          src="/heropage.png"
          alt="Easycube TAG smart parcel tagging system in a retail shop"
          className="block h-auto w-full min-h-[280px] object-cover sm:min-h-[360px] lg:min-h-[480px]"
        />
        <div className="absolute inset-0 flex items-center bg-gradient-to-r from-easycube-navy/80 via-easycube-navy/50 to-transparent">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="max-w-xl text-left">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-easycube-blue-light">
                Easycube TAG - E.TAG
              </p>
              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Tag, track, and retrieve parcels in seconds
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
                Easycube TAG links every parcel to a SMART tag. Working with your existing
                Collection Point App (SPX / NinjaPoint)
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CtaButton>Request a Demo</CtaButton>
                <CtaButton href="#workflow" variant="secondary">
                  See How It Works
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
