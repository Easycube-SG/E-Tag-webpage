import type { ReactNode } from 'react'

export type ShopperStep = {
  title: string
  description: string
  icon: ReactNode
}

type ShopperJourneyGridProps = {
  steps: ShopperStep[]
}

function ChevronBanner({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex h-[4.5rem] items-center justify-center bg-easycube-blue-light"
      style={{
        clipPath:
          'polygon(1rem 0, calc(100% - 1rem) 0, 100% 50%, calc(100% - 1rem) 100%, 1rem 100%, 0 50%)',
      }}
    >
      {children}
    </div>
  )
}

export default function ShopperJourneyGrid({ steps }: ShopperJourneyGridProps) {
  return (
    <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10">
      {steps.map((step) => (
        <article key={step.title}>
          <ChevronBanner>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-easycube-navy shadow-sm">
              {step.icon}
            </span>
          </ChevronBanner>
          <h3 className="mt-4 text-lg font-bold text-easycube-navy">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-easycube-text-secondary">
            {step.description}
          </p>
        </article>
      ))}
    </div>
  )
}
