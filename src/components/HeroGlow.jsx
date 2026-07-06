// The champagne-gold lantern glow behind the hero mark — a soft radial light,
// slowly rotating rays, and faint concentric almanac geometry. Reads beautifully
// on grey, especially in dark mode. Purely decorative.
export default function HeroGlow() {
  const rays = Array.from({ length: 48 }, (_, i) => {
    const angle = (i / 48) * Math.PI * 2
    const inner = 130
    const outer = i % 2 === 0 ? 300 : 230
    const x1 = 300 + Math.cos(angle) * inner
    const y1 = 300 + Math.sin(angle) * inner
    const x2 = 300 + Math.cos(angle) * outer
    const y2 = 300 + Math.sin(angle) * outer
    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
  })

  return (
    <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
      <svg
        viewBox="0 0 600 600"
        className="h-[135%] w-[135%] max-w-[900px] glow-breathe sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="hero-radial" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="var(--accent)" style={{ stopOpacity: 'var(--glow-core)' }} />
            <stop offset="45%" stopColor="var(--glow-mid)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--glow-mid)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="300" cy="300" r="300" fill="url(#hero-radial)" />

        <g
          className="ray-spin"
          stroke="var(--accent)"
          strokeWidth="1"
          style={{ opacity: 'var(--ray-opacity)' }}
        >
          {rays}
        </g>

        <g
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.1"
          style={{ opacity: 'calc(var(--ray-opacity) * 0.9)' }}
        >
          <circle cx="300" cy="300" r="120" />
          <circle cx="300" cy="300" r="175" />
          <circle cx="300" cy="300" r="230" />
          <path d="M300 180 L360 300 L300 420 L240 300 Z" />
          <path d="M180 300 L300 240 L420 300 L300 360 Z" />
        </g>
      </svg>
    </div>
  )
}
