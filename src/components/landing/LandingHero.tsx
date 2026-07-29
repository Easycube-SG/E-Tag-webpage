import CtaButton from '../CtaButton'
import { LeadText, SplitHeading } from '../Typography'
import heroImage from '../../assets/new-hero-image.png'

export default function LandingHero() {
  return (
    <section className="relative w-full overflow-hidden bg-easycube-navy">
      <img
        src={heroImage}
        alt="Easycube hyper-local delivery network"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-easycube-navy/85 via-easycube-navy/40 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-easycube-blue-light">
            Easycube Delivery
          </p>
          <SplitHeading
            accent="Hyper-local"
            rest="delivery system"
            as="h1"
            size="hero"
            invert
            className="mt-3 drop-shadow-md"
          />
          <LeadText invert className="mt-6 drop-shadow-sm">
            Singapore&apos;s node-to-node network. Drop off once. Collect at the same point.
          </LeadText>
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
