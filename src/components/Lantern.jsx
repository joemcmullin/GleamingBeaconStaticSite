// The Gleaming Beacon lantern mark — lifted from the master build plan.
// One glyph, reused as hero lockup, navbar/footer badge, and favicon.
// `uid` namespaces the SVG gradient ids so multiple instances never collide.

export default function Lantern({
  uid = 'lantern',
  className = '',
  drawOn = false,
  title,
}) {
  return (
    <svg
      viewBox="0 0 60 90"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role={title ? 'img' : 'presentation'}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
    >
      <defs>
        <linearGradient id={`${uid}-g`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E0C27E" />
          <stop offset="1" stopColor="#A67C2E" />
        </linearGradient>
        <radialGradient id={`${uid}-glow`} cx="50%" cy="45%" r="55%">
          <stop offset="0" stopColor="#F5E6BE" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#F5E6BE" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* inner warm halo behind the flame */}
      <ellipse cx="30" cy="46" rx="26" ry="30" fill={`url(#${uid}-glow)`} />

      <g
        fill="none"
        stroke={`url(#${uid}-g)`}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* hanging ring + stem */}
        <path d="M30 4 L30 12" />
        <circle cx="30" cy="15" r="3" fill={`url(#${uid}-g)`} stroke="none" />
        {/* crown */}
        <path d="M18 20 Q30 15 42 20 L38 26 L22 26 Z" />
        {/* body — the signature draw-on stroke */}
        <path
          d="M20 26 Q10 46 20 66 Q30 74 40 66 Q50 46 40 26 Z"
          pathLength="100"
          data-draw={drawOn ? 'body' : undefined}
          style={
            drawOn
              ? {
                  strokeDasharray: 100,
                  strokeDashoffset: 100,
                  animation: 'draw-on 1600ms cubic-bezier(0.16,1,0.3,1) 200ms forwards',
                }
              : undefined
          }
        />
        {/* flame */}
        <path
          d="M22 40 Q30 34 38 40 Q30 52 22 40 Z"
          fill={`url(#${uid}-g)`}
          stroke="none"
          opacity="0.6"
        />
        {/* base */}
        <path d="M22 68 L38 68 L35 76 L25 76 Z" />
        <path d="M28 80 L32 80" />
      </g>
    </svg>
  )
}
