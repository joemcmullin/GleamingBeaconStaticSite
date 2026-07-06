import { Orbit, Hash, Compass, Rabbit, Moon, MoonStar, Gem, Home } from 'lucide-react'

const MODULES = [
  { icon: Orbit, name: 'Astronomy', desc: 'Ephemeris-grade positions of sun, moon and planets for your exact moment and place.' },
  { icon: Hash, name: 'Numerology', desc: 'Life-path and personal cycles drawn from your name and date of birth.' },
  { icon: Compass, name: 'Feng shui', desc: 'Directional and elemental balance for how you orient your space and choices.' },
  { icon: Rabbit, name: 'Chinese zodiac', desc: 'Your animal sign and element within the sixty-year cycle.' },
  { icon: Moon, name: 'Thai lunar', desc: 'The Thai lunar calendar and its day-of-birth traditions.' },
  { icon: MoonStar, name: 'Moon cycles', desc: 'Phases and lunar rhythm mapped against your own timeline.' },
  { icon: Gem, name: 'Chakra · colour · stone', desc: 'Correspondences of energy centres, colours and stones tuned to you.' },
  { icon: Home, name: 'Home & household', desc: 'Alignment for your dwelling and the people who share it.' },
]

export default function Modules() {
  return (
    <section id="modules" className="bg-bg-alt px-6 py-24 sm:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal eyebrow mb-4">The modules</p>
          <h2 className="reveal mb-6 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Eight systems, one quiet light
          </h2>
          <p className="reveal font-body text-lg text-muted">
            Explore as few or as many as you like. Each is a lens; the app weaves the
            ones you choose into a single coherent reading.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m, i) => {
            const Icon = m.icon
            return (
              <div
                key={m.name}
                className="reveal magnetic flex flex-col rounded-3xl border border-border bg-surface p-6 shadow-soft hover:border-accent/50 hover:shadow-lift"
                style={{ transitionDelay: `${(i % 4) * 50}ms` }}
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/25 bg-accent-soft text-accent">
                  <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <h3 className="mb-2 font-display text-xl font-semibold leading-snug">{m.name}</h3>
                <p className="font-body text-sm leading-relaxed text-muted">{m.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
