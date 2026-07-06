// The Gleaming Beacon mark — the glossy raster render (AI-cutout, transparent).
// WebP with PNG fallback; @2x for retina. Decorative alongside the wordmark text,
// so it's aria-hidden. `priority` eager-loads the hero instance.
export default function Beacon({ className = '', priority = false }) {
  return (
    <picture>
      <source srcSet="/beacon.webp" type="image/webp" />
      <img
        src="/beacon.png"
        srcSet="/beacon.png 1x, /beacon@2x.png 2x"
        alt=""
        aria-hidden="true"
        draggable="false"
        decoding="async"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        className={className}
      />
    </picture>
  )
}
