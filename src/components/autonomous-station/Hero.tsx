import CtaButton from '../CtaButton'

const eyebrow = 'Easycube TAG - E.TAG'
const headline = 'Collect parcels in split seconds'
const subline =
  'Enhance your collection point with our Smart E.Tag'

const mobileBtnClass = '!w-auto shrink-0 px-3.5 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm'

export default function Hero() {
  return (
    <section className="w-full overflow-hidden">
      {/* Mobile: compact text column on the left, product visible on the right */}
      <div className="relative min-h-[300px] md:hidden">
        <img
          src="/autonomous-station/heropage_mobile.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-contain object-[center_right]"
        />
        <div className="relative flex min-h-[300px] items-center px-4 py-8">
          <div className="max-w-[58%]">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-easycube-blue-light">
              {eyebrow}
            </p>
            <h1 className="mt-1.5 text-xl font-bold leading-snug text-white">
              {headline}
            </h1>
            <p className="mt-2 text-[11px] leading-relaxed text-white/85">
              {subline}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <CtaButton href="/autonomous-station#contact" className={mobileBtnClass}>Request a Demo</CtaButton>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: full overlay layout */}
      <div className="relative hidden w-full md:block">
        <img
          src="/autonomous-station/heropage.png"
          alt="Easycube TAG smart parcel tagging system in a retail shop"
          className="block h-auto w-full min-h-[360px] object-cover lg:min-h-[480px]"
        />
        <div className="absolute inset-0 flex items-center bg-gradient-to-r from-easycube-navy/80 via-easycube-navy/50 to-transparent">
          <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:px-8">
            <div className="max-w-xl text-left">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-easycube-blue-light">
                {eyebrow}
              </p>
              <h1 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
                {headline}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-white/90">
                {subline}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CtaButton href="/autonomous-station#contact" className="!w-auto">Request a Demo</CtaButton>
                <CtaButton href="/autonomous-station#workflow" variant="secondary" className="!w-auto">
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
