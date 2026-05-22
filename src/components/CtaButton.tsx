type CtaButtonProps = {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
  children: React.ReactNode
}

export default function CtaButton({
  href = '#contact',
  onClick,
  variant = 'primary',
  className = '',
  children,
}: CtaButtonProps) {
  const base =
    'inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-easycube-blue sm:w-auto'

  const styles =
    variant === 'primary'
      ? 'bg-easycube-blue text-white shadow-md hover:bg-easycube-blue-dark hover:shadow-lg'
      : 'border border-easycube-border bg-white text-easycube-navy hover:border-easycube-blue hover:text-easycube-blue'

  const classes = `${base} ${styles} ${className}`

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {children}
      </button>
    )
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  )
}
