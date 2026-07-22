import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { Link } from '../router'

const SECTION_LINKS = [
  { href: '#what', label: 'What it is' },
  { href: '#modules', label: 'Modules' },
  { href: '#how', label: 'How it works' },
]

const PAGE_LINKS = [
  { to: '/privacy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
  { to: '/support', label: 'Support' },
]

// Reveal-on-scroll chrome: the navbar stays hidden while the hero is in view
// (the hero owns the brand up top), then slides + fades in once past it.
export default function Nav() {
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const sentinel = document.getElementById('hero-sentinel')
    if (!sentinel || !('IntersectionObserver' in window)) {
      setRevealed(true)
      return
    }
    // The sentinel sits at the hero's bottom edge. It's "not intersecting" both
    // when it's below the fold (hero in view → hide) and when it's scrolled above
    // the viewport (hero gone → reveal). boundingClientRect.top disambiguates:
    // top < 0 means we've scrolled past the hero.
    const io = new IntersectionObserver(
      ([entry]) => setRevealed(entry.boundingClientRect.top < 1),
      { threshold: 0 }
    )
    io.observe(sentinel)
    return () => io.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-magnetic ${
        revealed
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-full opacity-0'
      }`}
      aria-hidden={!revealed}
    >
      <nav className="border-b border-border/70 bg-bg/70 backdrop-blur-xl">
        <div className="container-x flex h-16 items-center justify-between gap-4">
          <a href="#top" className="magnetic flex items-center gap-2.5" aria-label="Gleaming Beacon — top">
            <span className="font-display text-lg font-semibold tracking-wide">
              Gleaming Beacon
            </span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {SECTION_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="magnetic font-body text-sm text-muted hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <span className="h-4 w-px bg-border" aria-hidden="true" />
            {PAGE_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="magnetic font-body text-sm text-muted hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="#waitlist"
              className="magnetic hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-white shadow-soft hover:bg-accent-hover sm:inline-flex"
            >
              Join the waitlist
            </a>
            <ThemeToggle compact />
          </div>
        </div>
      </nav>
    </header>
  )
}
