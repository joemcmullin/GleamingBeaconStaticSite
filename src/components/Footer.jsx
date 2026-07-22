import ThemeToggle from './ThemeToggle'
import { Link } from '../router'

const EXPLORE = [
  { to: '/#what', label: 'What it is' },
  { to: '/#modules', label: 'The modules' },
  { to: '/#how', label: 'How it works' },
  { to: '/#privacy', label: 'Privacy by design' },
]

const LEGAL = [
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Service' },
  { to: '/support', label: 'Support' },
]

function FooterColumn({ heading, links }) {
  return (
    <nav aria-label={heading}>
      <h2 className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-ink">
        {heading}
      </h2>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="magnetic font-body text-sm text-muted hover:text-ink"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function Footer() {
  return (
    <footer className="rounded-t-[2.5rem] border-t border-border bg-bg-alt px-6 pb-12 pt-16">
      <div className="container-x">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="magnetic inline-block font-display text-2xl font-semibold tracking-wide"
            >
              Gleaming Beacon<span className="align-super text-sm text-accent">™</span>
            </Link>
            <p className="mt-2 font-display text-xl italic text-accent">
              Clear light, quietly offered.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Coming soon — iOS &amp; Android
            </div>
          </div>

          <FooterColumn heading="Explore" links={EXPLORE} />
          <FooterColumn heading="Legal" links={LEGAL} />
        </div>

        <div className="mt-14 flex flex-col items-center gap-5 border-t border-border pt-8">
          <ThemeToggle />
          <p className="mx-auto max-w-3xl text-center font-body text-xs leading-relaxed text-muted">
            Gleaming Beacon offers reflective guidance for entertainment and lifestyle
            purposes and is not professional, medical, financial, or legal advice.
          </p>
          <p className="text-center font-mono text-[11px] tracking-wide text-muted">
            © {new Date().getFullYear()} Gleaming Beacon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
