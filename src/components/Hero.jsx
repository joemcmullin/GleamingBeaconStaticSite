import Lantern from './Lantern'
import HeroGlow from './HeroGlow'
import SandParticles from './SandParticles'
import WaitlistForm from './WaitlistForm'
import StoreBadges from './StoreBadges'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden px-6 pb-20 pt-28 sm:pt-24"
    >
      <HeroGlow />
      <SandParticles density={1.8} className="pointer-events-none absolute inset-0 z-[2]" />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Hero lockup — mark leads, draws on at load */}
          <div className="reveal mb-8 flex flex-col items-center">
            <Lantern
              uid="hero"
              drawOn
              title="Gleaming Beacon lantern mark"
              className="h-28 w-auto drop-shadow-[0_10px_30px_var(--glow-lantern)]"
            />
          </div>

          <h1 className="reveal mb-4 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            Gleaming Beacon
            <span className="align-super text-[0.32em] font-body text-accent">™</span>
          </h1>

          <p className="reveal mb-8 font-display text-2xl italic text-accent sm:text-3xl">
            A Personal Life Alignment Platform
          </p>

          <p className="reveal mx-auto mb-9 max-w-xl font-body text-lg text-muted sm:text-xl">
            Astronomy, numerology, feng shui and the Eastern traditions — united in
            one calm almanac and computed entirely on your phone. Your birth, home
            and family details never leave the device.
          </p>

          <div className="reveal mx-auto mb-6 max-w-xl">
            <WaitlistForm id="hero-waitlist" size="lg" />
          </div>

          <div className="reveal flex flex-col items-center gap-5">
            <StoreBadges className="justify-center" />
          </div>
        </div>
      </div>

      {/* Sentinel at the hero's bottom edge — drives the navbar reveal */}
      <div id="hero-sentinel" className="absolute bottom-0 h-px w-full" aria-hidden="true" />
    </section>
  )
}
