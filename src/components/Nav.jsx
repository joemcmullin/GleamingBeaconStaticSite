import { useEffect, useState } from 'react'
import Beacon from './Beacon'
import ThemeToggle from './ThemeToggle'

const LINKS = [
  { href: '#what', label: 'What it is' },
  { href: '#modules', label: 'Modules' },
  { href: '#how', label: 'How it works' },
  { href: '#privacy', label: 'Privacy' },
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
            <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-[#3a3020] bg-[#17130D]">
              <Beacon priority className="h-7 w-auto" />
            </span>
            <span className="font-display text-lg font-semibold tracking-wide">
              Gleaming Beacon
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="magnetic font-body text-sm text-muted hover:text-ink"
              >
                {l.label}
              </a>
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
