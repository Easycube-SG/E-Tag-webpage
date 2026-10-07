export type HeaderVariant = 'site' | 'autonomous-station'

export type NavLink = { label: string; href: string }

export const siteNavLinks: NavLink[] = [
  { label: 'How it benefits', href: '/#how-it-benefits' },
  { label: 'Station Pilot', href: '/pilot-trial' },
  { label: 'Contact', href: '/#contact' },
]

export function getHeaderCta(variant: HeaderVariant): {
  label: string
  href: string
} {
  if (variant === 'autonomous-station') {
    return { label: 'Request a Demo', href: '/#contact' }
  }
  return { label: 'Request a Demo', href: '/#contact' }
}
