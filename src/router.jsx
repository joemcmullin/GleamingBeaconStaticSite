import { useEffect, useState } from 'react'

// Minimal dependency-free client-side router. Clean URLs (/privacy, /terms,
// /support) work on GitHub Pages via the public/404.html redirect + the decode
// script in index.html. Supports /#anchor links that navigate home then scroll.

const norm = (p) => {
  const s = (p || '/').replace(/\/+$/, '')
  return s === '' ? '/' : s
}

const subscribers = new Set()
const notify = () => subscribers.forEach((fn) => fn())

const isExternal = (to) => /^(https?:)?\/\//.test(to) || to.startsWith('mailto:') || to.startsWith('tel:')

export function navigate(to) {
  if (isExternal(to)) {
    window.location.href = to
    return
  }
  const [rawPath, hash] = to.split('#')
  const path = norm(rawPath || window.location.pathname)
  const changingPage = norm(window.location.pathname) !== path

  window.history.pushState(null, '', path + (hash ? '#' + hash : ''))
  notify()

  if (hash) {
    const doScroll = () => {
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ behavior: changingPage ? 'auto' : 'smooth' })
    }
    // Give the destination page a moment to render when we switch pages.
    changingPage ? setTimeout(doScroll, 120) : doScroll()
  } else {
    window.scrollTo({ top: 0, behavior: changingPage ? 'auto' : 'smooth' })
  }
}

export function useRoute() {
  const [path, setPath] = useState(() => norm(window.location.pathname))
  useEffect(() => {
    const update = () => setPath(norm(window.location.pathname))
    subscribers.add(update)
    window.addEventListener('popstate', update)
    return () => {
      subscribers.delete(update)
      window.removeEventListener('popstate', update)
    }
  }, [])
  return path
}

export function Link({ to, className, children, ...rest }) {
  const onClick = (e) => {
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      isExternal(to)
    ) {
      return
    }
    e.preventDefault()
    navigate(to)
  }
  return (
    <a href={to} onClick={onClick} className={className} {...rest}>
      {children}
    </a>
  )
}
