import { ShieldCheck, Telescope, Layers, Sparkles } from 'lucide-react'

const CARDS = [
  {
    icon: ShieldCheck,
    title: 'Private by design',
    body: 'Everything is computed on-device. Your birth details, your home, your family — none of it ever leaves your phone. The alignment app that never sees your data.',
  },
  {
    icon: Telescope,
    title: 'Genuinely accurate',
    body: 'Real ephemeris-grade astronomical calculation sits underneath every reading — the true position of the sky, not vague guesswork dressed up as insight.',
  },
  {
    icon: Layers,
    title: 'Unified traditions',
    body: 'Western astronomy, numerology, feng shui, the Chinese and Thai lunar systems, and home alignment — gathered into one coherent picture instead of eight scattered apps.',
  },
  {
    icon: Sparkles,
    title: 'AI-optional',
    body: 'A complete report is always generated. Where your device offers on-device AI, it refines the wording to fit you. Nothing is required, nothing is sent away.',
  },
]

export default function WhatItIs() {
  return (
    <section id="what" className="bg-bg px-6 py-24 sm:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal eyebrow mb-4">What it is</p>
          <h2 className="reveal mb-6 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            A well-made almanac for a modern life
          </h2>
          <p className="reveal font-body text-lg text-muted">
            Gleaming Beacon brings together the traditions people have long used to
            find their footing — the sky, the numbers, the placement of a home — and
            renders them into a single personalized, deeply customizable report. Calm,
            serious, and built to be read again and again.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {CARDS.map((c, i) => {
            const Icon = c.icon
            return (
              <div
                key={c.title}
                className="reveal magnetic group rounded-3xl border border-border bg-surface p-8 shadow-soft hover:border-accent/50 hover:shadow-lift"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/30 bg-accent-soft text-accent">
                  <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <h3 className="mb-2.5 font-display text-2xl font-semibold">{c.title}</h3>
                <p className="font-body text-[15px] leading-relaxed text-muted">{c.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
