import { useEffect, useRef, useState } from 'react'
import gatewayImage from '../../assets/Minimal Black Gateway with Blue Cube Logo.png'
import trackerImage from '../../assets/White Tracker and Blue-Accented Clip.png'
import integratedImage from '../../assets/Smartphone and IoT Devices Studio Shot.png'

const specs = [
  'Bluetooth Low Energy',
  '9 months of Runtime',
  'Replaceable battery (CR2032)',
  'LED light and Buzzer',
  'Coverage up to 78 sqft per Advertiser',
  'Run on Android Device',
  'No Wi-Fi required',
]

const slides = [
  {
    src: gatewayImage,
    alt: 'Easycube mobile gateway with blue cube logo',
  },
  {
    src: trackerImage,
    alt: 'Easycube wireless tracker tag with blue-accented clip',
  },
  {
    src: integratedImage,
    alt: 'full integrated solution with smartphone and IoT devices',
  }
]

export default function Benefits() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const onScroll = () => {
      const width = track.clientWidth
      if (width === 0) return
      const index = Math.round(track.scrollLeft / width)
      setActiveIndex(Math.min(Math.max(index, 0), slides.length - 1))
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (index: number) => {
    const track = trackRef.current
    if (!track) return
    track.scrollTo({
      left: index * track.clientWidth,
      behavior: 'smooth',
    })
  }

  return (
    <section id="specifications" className="bg-easycube-bg py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)] lg:gap-10">
          <div>
            <h2 className="text-3xl font-bold text-easycube-navy sm:text-4xl">
              Specifications
            </h2>
            <ul className="mt-10 space-y-4">
              {specs.map((spec) => (
                <li key={spec} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-easycube-success/15 text-easycube-success">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span className="text-base font-medium text-easycube-navy sm:text-lg">
                    {spec}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-w-0">
            <div
              ref={trackRef}
              className="flex aspect-square w-full snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-2xl bg-white [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Product images"
            >
              {slides.map((slide) => (
                <div
                  key={slide.alt}
                  className="box-border h-full min-w-full shrink-0 grow-0 basis-full snap-center"
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="h-full w-full object-contain object-center"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                type="button"
                aria-label="Previous image"
                onClick={() =>
                  scrollTo((activeIndex - 1 + slides.length) % slides.length)
                }
                className="flex h-9 w-9 items-center justify-center rounded-full border border-easycube-border bg-white text-easycube-navy transition-colors hover:border-easycube-blue hover:text-easycube-blue"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <div className="flex gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.alt}
                    type="button"
                    aria-label={`Show image ${index + 1}`}
                    aria-current={activeIndex === index}
                    onClick={() => scrollTo(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeIndex === index
                        ? 'w-6 bg-easycube-blue'
                        : 'w-2.5 bg-easycube-border hover:bg-easycube-blue/50'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next image"
                onClick={() => scrollTo((activeIndex + 1) % slides.length)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-easycube-border bg-white text-easycube-navy transition-colors hover:border-easycube-blue hover:text-easycube-blue"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
