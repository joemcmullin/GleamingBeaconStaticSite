import ThemeToggle from '../../components/ThemeToggle'
import { Link } from '../../router'
import { LEGAL_LINKS } from './legalMeta'

// Solid, always-visible header for the legal subpages (they have no hero, so the
// reveal-on-scroll behaviour of the landing nav doesn't apply here).
export default function LegalHeader({ current }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/80 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          className="magnetic flex items-center gap-2.5"
          aria-label="Gleaming Beacon — home"
        >
          <span className="font-display text-lg font-semibold tracking-wide">
            Gleaming Beacon
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Legal">
          <Link to="/" className="magnetic font-body text-sm text-muted hover:text-ink">
            Home
          </Link>
          {LEGAL_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              aria-current={current === l.to ? 'page' : undefined}
              className={`magnetic font-body text-sm ${
                current === l.to ? 'text-accent-ink' : 'text-muted hover:text-ink'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            to="/#waitlist"
            className="magnetic hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-white shadow-soft hover:bg-accent-hover sm:inline-flex"
          >
            Join the waitlist
          </Link>
          <ThemeToggle compact />
        </div>
      </div>
    </header>
  )
}
