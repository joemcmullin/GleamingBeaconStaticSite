import ThemeToggle from './ThemeToggle'

export default function Footer() {
  return (
    <footer className="rounded-t-[2.5rem] border-t border-border bg-bg-alt px-6 pb-12 pt-16">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <p className="mb-1 font-display text-2xl font-semibold tracking-wide">
            Gleaming Beacon<span className="align-super text-sm text-accent">™</span>
          </p>
          <p className="mb-8 font-display text-xl italic text-accent">
            Clear light, quietly offered.
          </p>

          <div className="mb-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Coming soon — iOS &amp; Android
          </div>

          <ThemeToggle />
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="mx-auto max-w-3xl text-center font-body text-xs leading-relaxed text-muted">
            Gleaming Beacon offers reflective guidance for entertainment and lifestyle
            purposes and is not professional, medical, financial, or legal advice.
          </p>
          <p className="mt-4 text-center font-mono text-[11px] tracking-wide text-muted">
            © {new Date().getFullYear()} Gleaming Beacon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
