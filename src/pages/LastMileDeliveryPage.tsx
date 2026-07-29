import MerchantFlowChart from '../components/last-mile/MerchantFlowChart'
import ShopperJourneyGrid from '../components/last-mile/ShopperJourneyGrid'
import { BodyText, SplitHeading } from '../components/Typography'

const merchantSteps = [
  {
    step: '1',
    title: 'Merchant OMS',
    description:
      'Export your daily orders directly from your existing platform.',
    chartDescription: 'Platform exports orders',
  },
  {
    step: '2',
    title: 'Upload CSV/XLS',
    description:
      'Upload the order manifest to our website dashboard before 4:00 PM daily.',
    chartDescription: 'To our website and dashboard. Before 4:00 PM daily',
  },
  {
    step: '3',
    title: 'EasyCube Dashboard',
    description:
      'View staging statuses, collection schedules, and optimized routes in real time.',
    chartDescription: 'View staging and routes',
  },
  {
    step: '4',
    title: 'Print Shipping Label',
    description:
      'Print the required label containing all necessary shipping details and IDs.',
    chartDescription: 'Contain all necessary info and shipping ID',
  },
  {
    step: '5',
    title: 'Parcel Pick Up / Drop Off',
    description:
      'Hand over parcels via our runner pickup or drop them off at designated collection points.',
    chartDescription: 'Centralized collection points',
  },
]

const labelDetails = [
  'Shipping ID | Customer Surname | Phone Number | Order Date',
]

const shopperSteps = [
  {
    title: '1. PIN Notification',
    description:
      'Shopper receives a unique PIN via SMS or app when their order is ready for collection.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
  {
    title: '2. Visit Collection Point',
    description:
      'Shopper visits their nearest neighborhood collection point at their convenience.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zM7.5 21l1.5-6.75h6L16.5 21M9 10.5l-1.5 4.5M15 10.5l1.5 4.5" />
      </svg>
    ),
  },
  {
    title: '3. PIN Verification',
    description:
      'Staff or kiosk verifies the PIN through our closed-loop digital handshake system.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: '4. Handover',
    description:
      'Parcel is retrieved and handed to the shopper — logged with exact timestamp.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 11.25L10.5 8.25m3 3l3-3M12 8.25v8.25M3.75 9.75h16.5a1.5 1.5 0 011.5 1.5v4.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5v-4.5a1.5 1.5 0 011.5-1.5z" />
      </svg>
    ),
  },
]

const heroStats = [
  {
    label: 'Hyper-Local',
    stat: 'Network',
    sub: 'Singapore node-to-node exchange',
  },
  {
    label: 'Delivery as low as',
    stat: '$1.20',
    sub: 'per parcel',
  },
  {
    label: 'Deliver within',
    stat: '24 Hours',
    sub: 'upon pickup',
  },
]

export default function LastMileDeliveryPage() {
  return (
    <main className="bg-easycube-bg py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-easycube-blue">
            Last-Mile Delivery
          </p>
          <SplitHeading
            accent="Convert more carts"
            rest="with last-mile delivery"
            as="h1"
            size="section"
            className="mt-2"
          />
          <div className="mx-auto mt-8 grid max-w-5xl gap-5 sm:grid-cols-3">
            {heroStats.map((item) => (
              <article
                key={item.label}
                className="flex flex-col items-center rounded-2xl border border-easycube-blue/25 bg-gradient-to-b from-white to-easycube-blue-light/50 px-5 py-8 text-center shadow-lg shadow-easycube-blue/10 ring-1 ring-easycube-blue/10"
              >
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-easycube-blue">
                  {item.label}
                </p>
                <p className="mt-3 text-3xl font-bold leading-none text-easycube-navy sm:text-4xl">
                  {item.stat}
                </p>
                <p className="mt-3 text-sm text-easycube-text-secondary">{item.sub}</p>
              </article>
            ))}
          </div>
        </header>

        <section className="mt-12 rounded-2xl border border-easycube-border bg-white p-6 shadow-sm sm:p-8">
          <SplitHeading accent="How it" rest="works" as="h2" size="card" />
          <BodyText className="mt-3">
            Keep your OMS. We automate last-mile nodes with 24/7 tracking.
          </BodyText>

          <div className="mt-8">
            <MerchantFlowChart steps={merchantSteps} />
          </div>

          <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-semibold text-amber-900">
              Print labels before drop-off
            </p>
            <p className="mt-2 text-sm text-amber-900/90">
              Collection points cannot print shipping labels for you.
            </p>
          </div>

          <h3 className="mt-8 text-sm font-semibold text-easycube-navy">
            Required Label Details
          </h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-easycube-text-secondary">
            {labelDetails.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-2xl border border-easycube-border bg-white p-6 shadow-sm sm:p-8">
          <SplitHeading accent="Shopper collection" rest="made familiar" as="h2" size="card" />
          <BodyText className="mt-3">
            PIN to handover — secure, simple, and fully logged.
          </BodyText>

          <ShopperJourneyGrid steps={shopperSteps} />
        </section>

        <div className="mt-10 text-center">
          <a
            href="/#contact"
            className="inline-flex rounded-lg bg-easycube-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-easycube-blue-dark"
          >
            Get started
          </a>
        </div>
      </div>
    </main>
  )
}
