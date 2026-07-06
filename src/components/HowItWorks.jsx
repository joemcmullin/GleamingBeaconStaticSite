import { MousePointerClick, Cpu, FileText, Wand2 } from 'lucide-react'

const STEPS = [
  {
    icon: MousePointerClick,
    label: 'Step 01',
    title: 'Explore the modules',
    body: 'Move through the systems that interest you, entering only what you wish to share about yourself, your birth, and your home.',
  },
  {
    icon: Cpu,
    label: 'Step 02',
    title: 'The app computes',
    body: 'Deterministic engines run real astronomical and traditional calculations — precisely, and entirely on your device.',
  },
  {
    icon: FileText,
    label: 'Step 03',
    title: 'A personal report',
    body: 'Your results are composed into one calm, deeply customizable report you read live inside the app.',
  },
  {
    icon: Wand2,
    label: 'Step 04',
    title: 'Refined by on-device AI',
    body: 'Where your device offers it, on-device AI gently personalizes the wording. Optional, private, and never required.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="bg-bg px-6 py-24 sm:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal eyebrow mb-4">How it works</p>
          <h2 className="reveal mb-6 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            From curiosity to a reading
          </h2>
          <p className="reveal font-body text-lg text-muted">
            Four unhurried steps. No account to create, nothing uploaded.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-8 md:grid-cols-4 md:gap-5">
          {/* connecting line on desktop */}
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
            aria-hidden="true"
          />
          {STEPS.map((s, i) => {
            const Icon = s.icon
            return (
              <li
                key={s.label}
                className="reveal relative flex flex-col items-start md:items-center md:text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="relative z-10 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-surface text-accent shadow-soft">
                  <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <span className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-ink">
                  {s.label}
                </span>
                <h3 className="mb-2 font-display text-2xl font-semibold">{s.title}</h3>
                <p className="max-w-xs font-body text-[15px] leading-relaxed text-muted">
                  {s.body}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
