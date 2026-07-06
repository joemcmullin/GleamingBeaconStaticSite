import { Smartphone, CloudOff, KeyRound, UserX } from 'lucide-react'

const POINTS = [
  {
    icon: Smartphone,
    title: 'Computed on your device',
    body: 'Every calculation and every word of your report is produced on your phone — not on a server we control.',
  },
  {
    icon: CloudOff,
    title: 'Nothing is uploaded',
    body: 'Your birth details, your home layout, and your family data are never transmitted, synced, or stored elsewhere.',
  },
  {
    icon: UserX,
    title: 'No account required',
    body: 'There is no sign-up, no profile on our end, and no identity for us to lose. You simply open the app.',
  },
  {
    icon: KeyRound,
    title: 'Yours to keep or erase',
    body: 'Your data lives only where you can see it. Delete the app and it is gone — completely and immediately.',
  },
]

export default function Privacy() {
  return (
    <section id="privacy" className="bg-bg-alt px-6 py-24 sm:py-32">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="reveal eyebrow mb-4">Privacy</p>
            <h2 className="reveal mb-6 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              The alignment app that
              <br />
              <span className="gold-text italic">never sees your data</span>.
            </h2>
            <p className="reveal mb-6 font-body text-lg text-muted">
              Guidance this personal should stay personal. Gleaming Beacon is built so
              that the most intimate details you enter — when and where you were born,
              the shape of your home, the people you live with — remain on your phone,
              under your control, always.
            </p>
            <p className="reveal font-body text-lg text-muted">
              Not anonymized. Not encrypted-in-transit. Simply never sent.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {POINTS.map((p, i) => {
              const Icon = p.icon
              return (
                <div
                  key={p.title}
                  className="reveal rounded-3xl border border-border bg-surface p-6 shadow-soft"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/30 bg-accent-soft text-accent">
                    <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3 className="mb-2 font-display text-xl font-semibold leading-snug">
                    {p.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
