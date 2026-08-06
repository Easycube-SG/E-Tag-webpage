export type HeaderVariant = 'site' | 'autonomous-station'

export type NavLink = { label: string; href: string }

export const siteNavLinks: NavLink[] = [
  { label: 'Last Mile Delivery', href: '/last-mile-delivery' },
  { label: 'Autonomous Station', href: '/autonomous-station' },
  { label: 'Station Pilot', href: '/pilot-trial' },
  { label: 'Contact', href: '/#contact' },
]

export function getHeaderCta(variant: HeaderVariant): {
  label: string
  href: string
} {
  if (variant === 'autonomous-station') {
    return { label: 'Request a Demo', href: '/autonomous-station#contact' }
  }
  return { label: 'Deliver now', href: '/#contact' }
}
