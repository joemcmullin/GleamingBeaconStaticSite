import SandParticles from './SandParticles'
import WaitlistForm from './WaitlistForm'
import StoreBadges from './StoreBadges'

export default function WaitlistCTA() {
  return (
    <section id="waitlist" className="relative overflow-hidden bg-bg px-6 py-28 sm:py-36">
      {/* soft gold halo */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, var(--glow-strong) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />
      <SandParticles density={1.1} className="pointer-events-none absolute inset-0 z-[1]" />
      <div className="container-x relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal eyebrow mb-4">Be first to know</p>
          <h2 className="reveal mb-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Join the waitlist
          </h2>
          <p className="reveal mx-auto mb-9 max-w-xl font-body text-lg text-muted">
            Gleaming Beacon is nearly ready. Leave your email and we'll send a single
            note the day it arrives on the App Store and Google Play.
          </p>
          <div className="reveal mx-auto mb-7 max-w-xl">
            <WaitlistForm id="cta-waitlist" size="lg" />
          </div>
          <StoreBadges className="justify-center" />
        </div>
      </div>
    </section>
  )
}
