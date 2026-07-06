import { Apple } from 'lucide-react'

// Android robot head — Lucide has no official mark, so a small inline glyph.
function AndroidGlyph({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 9a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1Zm12 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1ZM8 9v8a1 1 0 0 0 1 1h1v3a1 1 0 0 0 2 0v-3h0v3a1 1 0 0 0 2 0v-3h1a1 1 0 0 0 1-1V9H8Zm7.5-4.9.9-1.35a.4.4 0 0 0-.66-.44l-.98 1.47A6.2 6.2 0 0 0 12 3.2c-.98 0-1.9.2-2.76.58L8.26 2.3a.4.4 0 1 0-.66.44l.9 1.36A5.3 5.3 0 0 0 6 8h12a5.3 5.3 0 0 0-2.5-3.9ZM10 6.4a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4Zm4 0a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4Z" />
    </svg>
  )
}

function Badge({ icon, store }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-2.5 text-ink">
      {icon}
      <span className="flex flex-col leading-tight">
        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-accent-ink">
          Coming soon
        </span>
        <span className="font-body text-sm">{store}</span>
      </span>
    </div>
  )
}

export default function StoreBadges({ className = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Badge icon={<Apple size={22} strokeWidth={1.6} aria-hidden="true" />} store="App Store" />
      <Badge icon={<AndroidGlyph size={22} />} store="Google Play" />
    </div>
  )
}
