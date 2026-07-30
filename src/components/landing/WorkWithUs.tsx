import type { ReactNode } from 'react'
import { BodyText, SplitHeading } from '../Typography'
import deliveryMockup from '../../assets/desired delivery.png'

type Audience = {
  accent: string
  title: string
  description: string
  icon: ReactNode
}

type AudienceText = {
  accent: string
  title: string
  description: string
}

const audiences = {
  homeSellers: {
    accent: 'Your dedicated',
    title: 'drop-off point',
    description: 'Drop off and collect at our collection point (within 5min walk to MRT or bus interchange) in your neighbourhood',
    icon: (
      <svg className="h-10 w-10 text-easycube-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  logistics: {
    accent: 'Next Day',
    title: 'Delivery',
    description: 'Our Hyper-Local delivery allow us to provide the fastest delivery option for your customers.',
    icon: (
      <svg className="h-10 w-10 text-easycube-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  converts: {
    accent: 'Delivery that',
    title: 'bring more business',
    description:
      'Provide the best shipping option for your customers, reduce your min spending and convert more sales.',
  },
} satisfies Record<string, AudienceText & { icon?: ReactNode }>

function CardVisual({ icon }: { icon: ReactNode }) {
  return (
    <div className="relative flex h-36 w-36 shrink-0 items-center justify-center sm:h-40 sm:w-40">
      <div className="absolute inset-2 rounded-full bg-easycube-blue-light/70" aria-hidden />
      <div className="relative flex h-[85%] w-[85%] items-center justify-center rounded-3xl bg-white shadow-lg ring-1 ring-easycube-border/50">
        {icon}
      </div>
    </div>
  )
}

function BentoCard({
  item,
  className = '',
}: {
  item: Audience
  className?: string
}) {
  return (
    <article
      className={`grid min-h-[17rem] grid-cols-[minmax(0,1fr)_auto] grid-rows-[auto_1fr] gap-x-4 gap-y-4 rounded-[1.75rem] bg-easycube-muted/60 p-8 sm:min-h-[18rem] sm:gap-x-5 sm:p-9 ${className}`}
    >
      <div className="col-span-2">
        <SplitHeading accent={item.accent} rest={item.title} as="h3" size="card" />
      </div>

      <div className="col-start-1 row-start-2 min-w-0 self-start">
        <BodyText>{item.description}</BodyText>
      </div>

      <div className="col-start-2 row-start-2 self-end">
        <CardVisual icon={item.icon} />
      </div>
    </article>
  )
}

function DeliveryFeatureCard({ item }: { item: AudienceText }) {
  return (
    <article className="grid min-h-0 grid-cols-1 items-center gap-6 lg:grid-cols-[25fr_75fr] lg:gap-10">
      <div className="min-w-0 self-center lg:pr-4">
        <SplitHeading accent={item.accent} rest={item.title} as="h3" size="card" />
        <BodyText className="mt-4">{item.description}</BodyText>
      </div>

      <img
        src={deliveryMockup}
        alt="Checkout screen showing self-collection as a free local delivery option"
        className="h-auto w-full object-contain"
      />
    </article>
  )
}

export default function WorkWithUs() {
  return (
    <section id="work-with-us" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SplitHeading accent="Work" rest="with us" />
        </div>

        <div className="mt-14 space-y-5">
          <div className="grid gap-5 lg:grid-cols-2">
            <BentoCard item={audiences.homeSellers} />
            <BentoCard item={audiences.logistics} />
          </div>
          <DeliveryFeatureCard item={audiences.converts} />
        </div>
      </div>
    </section>
  )
}
