import CtaButton from './CtaButton'
import { LeadText, SplitHeading } from './Typography'
import type { HeaderVariant } from '../lib/nav'

type FooterCtaProps = {
  showCta?: boolean
  variant?: HeaderVariant
}

export default function FooterCta({
  showCta = true,
  variant = 'site',
}: FooterCtaProps) {
  const isAutonomousStation = variant === 'autonomous-station'

  return (
    <>
      {showCta && (
        <section className="bg-easycube-navy py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            {isAutonomousStation ? (
              <>
                <SplitHeading accent="Ready to transform" rest="your parcel ops?" onDark />
                <LeadText invert className="mx-auto mt-4 max-w-2xl">
                  Join shops saving time with Easycube TAG.
                </LeadText>
              </>
            ) : (
              <>
                <SplitHeading accent="Ready to deliver" rest="smarter?" onDark />
                <LeadText invert className="mx-auto mt-4 max-w-2xl">
                  Join merchants running hyper-local delivery across Singapore.
                </LeadText>
              </>
            )}
            <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
              {isAutonomousStation ? (
                <CtaButton href="/autonomous-station#contact">
                  Request a Demo
                </CtaButton>
              ) : (
                <>
                  <CtaButton href="/#contact">Deliver now</CtaButton>
                  <CtaButton href="/last-mile-delivery" variant="secondary">
                    Learn more
                  </CtaButton>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-easycube-border bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <img
            src="/easycube_logo.png"
            alt="Easycube"
            className="h-8 w-auto opacity-80"
          />
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a
              href="/"
              className="text-easycube-text-secondary transition-colors hover:text-easycube-blue"
            >
              Home
            </a>
            <a
              href="/last-mile-delivery"
              className="text-easycube-text-secondary transition-colors hover:text-easycube-blue"
            >
              Last Mile Delivery
            </a>
            <a
              href="/autonomous-station"
              className="text-easycube-text-secondary transition-colors hover:text-easycube-blue"
            >
              Autonomous Station
            </a>
            <a
              href="/pilot-trial"
              className="text-easycube-text-secondary transition-colors hover:text-easycube-blue"
            >
              Pilot trial
            </a>
            <a
              href="/subscription"
              className="text-easycube-text-secondary transition-colors hover:text-easycube-blue"
            >
              Subscription
            </a>
            <a
              href={isAutonomousStation ? '/autonomous-station#contact' : '/#contact'}
              className="text-easycube-text-secondary transition-colors hover:text-easycube-blue"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="text-easycube-text-secondary transition-colors hover:text-easycube-blue"
            >
              Privacy
            </a>
          </nav>
          <p className="text-sm text-easycube-text-secondary">
            &copy; {new Date().getFullYear()} Easycube. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
