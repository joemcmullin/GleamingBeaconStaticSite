import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from '../hooks/ThemeContext'

const LABEL = { light: 'Light', dark: 'Dark', system: 'System' }

export default function ThemeToggle({ compact = false }) {
  const { mode, cycle } = useTheme()
  const Icon = mode === 'light' ? Sun : mode === 'dark' ? Moon : Monitor

  return (
    <button
      type="button"
      onClick={cycle}
      className="magnetic inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-muted hover:text-ink hover:border-accent"
      aria-label={`Theme: ${LABEL[mode]}. Activate to change.`}
      title={`Theme: ${LABEL[mode]}`}
    >
      <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
      {!compact && (
        <span className="font-mono text-[11px] uppercase tracking-[0.12em]">
          {LABEL[mode]}
        </span>
      )}
    </button>
  )
}
