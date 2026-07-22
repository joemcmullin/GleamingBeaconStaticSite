import { useEffect } from 'react'
import LegalHeader from './LegalHeader'
import Footer from '../../components/Footer'
import { LEGAL_UPDATED } from './legalMeta'

// Shared shell for the legal subpages: header, a readable prose column in the
// site theme, and the shared footer.
export default function LegalLayout({ current, title, intro, children }) {
  useEffect(() => {
    const prev = document.title
    document.title = `${title} · Gleaming Beacon`
    return () => {
      document.title = prev
    }
  }, [title])

  return (
    <>
      <a
        href="#legal-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <LegalHeader current={current} />

      <main id="legal-content" className="px-6 py-16 sm:py-24">
        <article className="container-x max-w-3xl">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            Last updated · {LEGAL_UPDATED}
          </p>
          {intro && (
            <p className="mt-6 font-body text-lg leading-relaxed text-muted">{intro}</p>
          )}
          <div className="legal-prose mt-10">{children}</div>
        </article>
      </main>

      <Footer />
    </>
  )
}
