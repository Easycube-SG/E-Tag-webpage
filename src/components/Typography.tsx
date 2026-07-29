import type { ElementType, ReactNode } from 'react'

type SplitHeadingProps = {
  accent: string
  rest: string
  as?: ElementType
  size?: 'hero' | 'section' | 'card'
  invert?: boolean
  onDark?: boolean
  className?: string
}

const sizeClasses = {
  hero: 'text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl',
  section: 'text-3xl font-bold sm:text-4xl',
  card: 'text-xl font-bold leading-snug sm:text-2xl',
}

export function SplitHeading({
  accent,
  rest,
  as: Tag = 'h2',
  size = 'section',
  invert = false,
  onDark = false,
  className = '',
}: SplitHeadingProps) {
  const accentClass = invert
    ? 'text-easycube-blue-light'
    : onDark
      ? 'text-easycube-blue'
      : 'text-easycube-blue'
  const restClass = invert || onDark ? 'text-white' : 'text-easycube-navy'

  return (
    <Tag className={`${sizeClasses[size]} ${className}`.trim()}>
      <span className={accentClass}>{accent}</span>{' '}
      <span className={restClass}>{rest}</span>
    </Tag>
  )
}

export function LeadText({
  children,
  className = '',
  invert = false,
}: {
  children: ReactNode
  className?: string
  invert?: boolean
}) {
  return (
    <p
      className={`text-base leading-relaxed sm:text-lg ${
        invert ? 'text-white/85' : 'text-easycube-text-secondary'
      } ${className}`.trim()}
    >
      {children}
    </p>
  )
}

export function BodyText({
  children,
  className = '',
  invert = false,
}: {
  children: ReactNode
  className?: string
  invert?: boolean
}) {
  return (
    <p
      className={`text-sm leading-relaxed sm:text-base ${
        invert ? 'text-white/75' : 'text-easycube-text-secondary'
      } ${className}`.trim()}
    >
      {children}
    </p>
  )
}

export function PillLink({
  href,
  children,
  className = '',
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      className={`inline-flex w-fit items-center gap-1.5 rounded-full border border-easycube-border bg-white px-5 py-2.5 text-sm font-semibold text-easycube-navy transition-colors hover:border-easycube-blue hover:text-easycube-blue ${className}`.trim()}
    >
      {children}
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </a>
  )
}
