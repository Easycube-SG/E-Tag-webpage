import { useEffect } from 'react'

const PAGE_TITLE =
  'Courier & Delivery Service Singapore | Easycube — From S$1.20'
const PAGE_DESCRIPTION =
  'Affordable courier and delivery service in Singapore. Hyper-local drop-off and self-collection from neighbourhood nodes for as low as S$1.20 per parcel. Built for small businesses and home-based sellers.'

const faqs = [
  {
    question: 'How long does it take to deliver my parcels?',
    answer:
      'Upon pickup, parcels are delivered within 24 hours.',
  },
  {
    question: 'Where are the collection points located?',
    answer:
      'All collection points are within 5min walk from MRT / Bus interchange so it provide the best convenience for your customers to collect their parcels.',
  },
  {
    question: 'What is the insurance coverage for my parcels?',
    answer:
      'We offer the full price item value or up to $150, whichever is lower, for any lost or damaged parcels.',
  },
  {
    question: 'How is the parcel stored?',
    answer:
      'Our Shop collection point keep them safe in a dedicated area, with CCTV monitoring and in-person monitoring.',
  },
  {
    question: 'How do i drop off my parcels at collection points?',
    answer:
      'Once you have uploaded your delivery manifest to our dashboard. Get your shipping label up and drop off to the collection point.',
  },
  {
    question: 'Is this service integrated to my existing e-commerce platform?',
    answer:
      'We are exploring integration with Shopify, Shopcada and other popular e-commerce platforms to make it easier for you to manage your deliveries. Contact us if you want this integrated and we will have dedicated account executive to work with you.',
  },
  {
    question: 'Can we process return?',
    answer:
      'We are working to provide this service, stay tuned for updates.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Easycube Courier & Delivery Service',
  description: PAGE_DESCRIPTION,
  provider: {
    '@type': 'Organization',
    name: 'Easycube',
    url: 'https://easycubesg.com/',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Singapore',
  },
  serviceType: ['Courier service', 'Delivery service', 'Last mile delivery'],
  offers: {
    '@type': 'Offer',
    priceCurrency: 'SGD',
    price: '1.20',
    description: 'Same-point drop and collect from S$1.20 per parcel',
  },
  url: 'https://easycubesg.com/',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name'
  let el = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function LandingSeo() {
  useEffect(() => {
    document.title = PAGE_TITLE
    setMeta('description', PAGE_DESCRIPTION)
    setMeta('og:title', PAGE_TITLE, true)
    setMeta('og:description', PAGE_DESCRIPTION, true)
    setMeta('og:url', 'https://easycubesg.com/', true)

    let canonical = document.head.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = 'https://easycubesg.com/'
  }, [])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}

export { faqs }
