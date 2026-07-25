import { useState } from 'react'
import { ArrowRight, Check, Loader2 } from 'lucide-react'

// Waitlist form — wired per the studio SOP "Email Routing & Support (New App)":
// POSTs directly to the Fernand helpdesk API (NOT Formspree/third-party forms).
// A signup lands as a Fernand conversation in the shared inbox.
//
// ── CONFIG (per SOP §Website form configuration) ─────────────────────────────
// FERNAND_APP_ID: the Fernand workspace slug (Settings → Chat). Default is the
//   shared studio workspace (same pattern as Daily Crescendo) — CONFIRM before
//   launch, and allow-list the site's domain in Fernand → Chat → Allow-listed
//   domains (POSTs from non-allow-listed origins are silently rejected).
const FERNAND_APP_ID = 'journey-tracker'
const FERNAND_ENDPOINT = 'https://api.getfernand.com/messenger/contact'
const FORM_SUBJECT = '[Gleaming Beacon] Waitlist signup'

export default function WaitlistForm({ id = 'waitlist', size = 'md' }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const big = size === 'lg'

  async function onSubmit(e) {
    e.preventDefault()
    if (!name || !email || status === 'loading') return
    setStatus('loading')
    try {
      // SOP: the `name` field becomes the Fernand contact name — collect a real
      // name so contacts don't render as title-cased email addresses.
      const res = await fetch(FERNAND_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-AppId': FERNAND_APP_ID,
        },
        body: JSON.stringify({
          slug: FERNAND_APP_ID,
          name,
          email,
          subject: FORM_SUBJECT,
          message: `Please add me to the Gleaming Beacon launch waitlist.\n\nName: ${name}\nEmail: ${email}\nSource: pre-launch site (${window.location.hostname || 'local'})`,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        className="flex items-center justify-center gap-3 rounded-2xl border border-accent/40 bg-accent-soft px-6 py-4 text-ink"
        role="status"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white">
          <Check size={16} strokeWidth={2.4} aria-hidden="true" />
        </span>
        <span className="font-body">
          You're on the list. We'll light the way when it's ready.
        </span>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="w-full" noValidate>
      <div className={`flex flex-col gap-3 ${big ? '' : 'sm:gap-2'}`}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <label htmlFor={`${id}-name`} className="sr-only">
              Your name
            </label>
            <input
              id={`${id}-name`}
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                if (status === 'error') setStatus('idle')
              }}
              placeholder="Your name"
              className={`w-full rounded-2xl border border-border bg-surface text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none ${
                big ? 'px-5 py-4 text-lg' : 'px-4 py-3.5'
              }`}
            />
          </div>
          <div className="relative flex-1">
            <label htmlFor={`${id}-email`} className="sr-only">
              Email address
            </label>
            <input
              id={`${id}-email`}
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status === 'error') setStatus('idle')
              }}
              placeholder="you@example.com"
              aria-invalid={status === 'error'}
              className={`w-full rounded-2xl border border-border bg-surface text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none ${
                big ? 'px-5 py-4 text-lg' : 'px-4 py-3.5'
              }`}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`magnetic inline-flex items-center justify-center gap-2 rounded-2xl bg-accent font-medium text-white shadow-soft hover:bg-accent-hover disabled:opacity-70 ${
            big ? 'px-7 py-4 text-lg' : 'px-6 py-3.5'
          }`}
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={18} className="animate-spin" aria-hidden="true" />
              <span>Adding you…</span>
            </>
          ) : (
            <>
              <span>Notify me</span>
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </>
          )}
        </button>
      </div>
      <p
        className={`mt-3 font-mono text-[11px] tracking-wide ${
          status === 'error' ? 'text-red-600 dark:text-red-400' : 'text-muted'
        }`}
        role={status === 'error' ? 'alert' : undefined}
      >
        {status === 'error'
          ? 'Something went wrong. Please try again.'
          : 'One email when we launch. No spam, no sharing — ever.'}
      </p>
    </form>
  )
}
