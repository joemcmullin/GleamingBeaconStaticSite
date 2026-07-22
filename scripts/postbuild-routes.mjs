// Emit a real index.html at each client-side route so GitHub Pages serves the
// legal pages with a clean HTTP 200 (not the 404-redirect fallback). The SPA
// router reads location.pathname and renders the matching page. The 404.html
// fallback still covers any other unknown deep link.
import { mkdirSync, copyFileSync } from 'node:fs'
import { join } from 'node:path'

const ROUTES = ['privacy', 'terms', 'support']
const dist = 'dist'
const source = join(dist, 'index.html')

for (const route of ROUTES) {
  const dir = join(dist, route)
  mkdirSync(dir, { recursive: true })
  copyFileSync(source, join(dir, 'index.html'))
  console.log(`route → ${route}/index.html`)
}
