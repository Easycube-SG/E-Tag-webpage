import { useState } from 'react'
import CtaButton from './CtaButton'

const navLinks = [
  { label: 'Benefits', href: '/#benefits' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Pilot trial', href: '/pilot-trial' },
  { label: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-easycube-border bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/easycube_logo.png"
            alt="Easycube TAG"
            className="h-10 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-easycube-text-secondary transition-colors hover:text-easycube-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <CtaButton href="/#pricing">Get Started</CtaButton>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-easycube-navy md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-easycube-border bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2 text-sm font-medium text-easycube-text-secondary hover:bg-easycube-muted hover:text-easycube-blue"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <CtaButton href="/#pricing" className="mt-2 w-full">
              Get Started
            </CtaButton>
          </nav>
        </div>
      )}
    </header>
  )
}
