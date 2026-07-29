import CtaButton from '../CtaButton'
import heroImage from '../../assets/new-hero-image.png'

export default function LandingHero() {
  return (
    <section className="relative w-full overflow-hidden bg-easycube-navy">
      <img
        src={heroImage}
        alt="Easycube hyper-local delivery network"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-easycube-blue-light">
            Easycube Delivery
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hyper Local Delivery System
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl">
            The first high-capacity, hyper-local exchange network in Singapore.
            Drop off and  collect from the same point
          </p>
          <div className="mt-8">
            <CtaButton href="/#contact" className="!w-auto">
              Deliver now
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  )
}
