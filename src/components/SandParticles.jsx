import { useEffect, useRef } from 'react'

// A mystical wave of sand — a dense band of fine golden grains that FLOWS across
// the scene and undulates like a gust (Prince of Persia: Sands of Time).
// Grains are drawn as tiny velocity-aligned streaks; the whole mass rides a
// moving wave path with gusts. The MOUSE disturbs the sand: grains within the
// cursor's radius are pushed aside and swirl back as it passes.
// Canvas 2D, theme-aware, tab-hidden pause, still-wave reduced-motion fallback.
export default function SandParticles({ density = 1, className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0
    let h = 0
    let grains = []
    let raf = 0
    let running = true
    let t = 0
    let last = 0

    // Pointer state (client coords; converted per-frame to canvas space).
    const mouse = { cx: -1e4, cy: -1e4, vx: 0, vy: 0, lx: -1e4, ly: -1e4 }

    const rnd = (a, b) => a + Math.random() * (b - a)

    // Vertical centre of the sand band as it travels across (nx) and evolves
    // over time — a slow primary swoop plus a faster ripple.
    const bandCenter = (nx, time) =>
      0.5 +
      0.17 * Math.sin(time * 0.16 + nx * 2.3) +
      0.06 * Math.sin(time * 0.47 + nx * 5.7 + 1.1)

    const spawn = () => ({
      x: rnd(-0.15, 1.15) * w,
      off: (Math.random() < 0.5 ? -1 : 1) * Math.pow(Math.random(), 1.7),
      spd: rnd(0.55, 1.7),
      thick: rnd(0.4, 1.0),
      a: rnd(0.12, 0.42), // slightly dimmer per-grain — double the count, same overall glow
      tw: rnd(0, Math.PI * 2),
      twS: rnd(0.4, 1.5),
      len: rnd(0.4, 1.3),
      // random swirl (eddy) — each grain orbits a moving local centre
      eA: rnd(4, 22), // eddy radius px
      eS: rnd(0.5, 1.8) * (Math.random() < 0.5 ? -1 : 1), // spin speed + direction
      eP: rnd(0, Math.PI * 2),
      // mouse-disturbance displacement (springs back to 0)
      ox: 0,
      oy: 0,
      px: 0,
      py: 0,
      init: false,
    })

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = Math.max(1, Math.round(w * dpr))
      canvas.height = Math.max(1, Math.round(h * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // finer grains, packed much denser (doubled)
      const count = Math.min(5200, Math.round(((w * h) / 550) * density))
      grains = Array.from({ length: count }, spawn)
    }

    const onPointerMove = (e) => {
      mouse.cx = e.clientX
      mouse.cy = e.clientY
    }
    const onPointerLeave = () => {
      mouse.cx = -1e4
      mouse.cy = -1e4
    }

    const step = (dt) => {
      t += dt
      const dark = document.documentElement.classList.contains('dark')
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = dark ? 'lighter' : 'source-over'
      ctx.lineCap = 'round'
      ctx.strokeStyle = dark ? 'rgb(240,214,140)' : 'rgb(140,100,34)'

      // mouse in canvas space + its velocity (drag imparts a directional gust)
      const rect = canvas.getBoundingClientRect()
      const mx = mouse.cx - rect.left
      const my = mouse.cy - rect.top
      if (mouse.lx > -9e3) {
        mouse.vx = mouse.cx - mouse.lx
        mouse.vy = mouse.cy - mouse.ly
      }
      mouse.lx = mouse.cx
      mouse.ly = mouse.cy
      const R = 130 // interaction radius
      const R2 = R * R

      // gusts: wind surges and eases so the whole mass blows in waves
      const gust = 1 + 0.5 * Math.sin(t * 0.22) + 0.22 * Math.sin(t * 0.63 + 2)
      const wind = 120 * gust
      const band = h * 0.24
      const spring = Math.pow(0.001, dt) // ~0.9 at 60fps — displacement decay

      for (const p of grains) {
        p.x += (wind * (0.55 + p.spd * 0.6)) * dt
        const nx = p.x / w
        const cy = bandCenter(nx, t) * h
        const flow = Math.sin(nx * 6.0 + t * 0.9 + p.off * 3) * band * 0.14
        // random swirl: an elliptical eddy orbit whose phase is tied to position,
        // so neighbouring grains curl together into visible vortices in the flow
        const eddy = t * p.eS + nx * 9 + p.eP
        const ex = Math.cos(eddy) * p.eA
        const ey = Math.sin(eddy) * p.eA * 0.65
        let y = cy + p.off * band * p.thick + flow + ey

        // --- mouse disturbance: push grains out of the cursor's path ---
        const gx = p.x + p.ox + ex
        const gy = y + p.oy
        const dxm = gx - mx
        const dym = gy - my
        const d2 = dxm * dxm + dym * dym
        if (d2 < R2 && d2 > 0.01) {
          const d = Math.sqrt(d2)
          const f = (1 - d / R) * 260 * dt // radial push, stronger near centre
          p.ox += (dxm / d) * f
          p.oy += (dym / d) * f
          // entrain a little of the cursor's motion (swirl as it drags through)
          p.ox += mouse.vx * 0.35 * (1 - d / R)
          p.oy += mouse.vy * 0.35 * (1 - d / R)
        }
        p.ox *= spring
        p.oy *= spring

        const fx = p.x + p.ox + ex
        y += p.oy

        if (!p.init) {
          p.px = fx
          p.py = y
          p.init = true
        }
        if (p.x > w + 60) {
          p.x -= w + 120
          p.ox = 0
          p.oy = 0
          p.px = p.x
          p.py = y
        }

        const dx = fx - p.px
        const dy = y - p.py
        const d = Math.hypot(dx, dy) || 1
        // tiny streaks — grains, not comets
        const streak = Math.min(2.5 + p.len * 5.5 * gust + Math.min(d * 0.6, 8), 16)
        const twk = 0.55 + 0.45 * Math.sin(t * p.twS * 2.4 + p.tw)
        const edge = 1 - Math.abs(p.off) * 0.35
        ctx.globalAlpha = Math.min(1, p.a * twk * edge * (dark ? 1 : 0.95))
        ctx.lineWidth = (dark ? 0.45 : 0.42) + p.thick * 0.45

        ctx.beginPath()
        ctx.moveTo(fx - (dx / d) * streak, y - (dy / d) * streak)
        ctx.lineTo(fx, y)
        ctx.stroke()

        p.px = fx
        p.py = y
      }

      ctx.globalAlpha = 1
      ctx.globalCompositeOperation = 'source-over'
    }

    const frame = (ts) => {
      if (!running) return
      if (!last) last = ts
      let dt = (ts - last) / 1000
      last = ts
      if (dt > 0.05) dt = 0.05
      step(dt)
      raf = requestAnimationFrame(frame)
    }

    // Still wave of sand for reduced-motion.
    const drawStatic = () => {
      const dark = document.documentElement.classList.contains('dark')
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = dark ? 'lighter' : 'source-over'
      ctx.lineCap = 'round'
      ctx.strokeStyle = dark ? 'rgb(240,214,140)' : 'rgb(140,100,34)'
      const band = h * 0.24
      for (const p of grains) {
        const nx = p.x / w
        const y = bandCenter(nx, 0) * h + p.off * band * p.thick
        ctx.globalAlpha = Math.min(1, p.a * (1 - Math.abs(p.off) * 0.35) * 0.85)
        ctx.lineWidth = 0.45 + p.thick * 0.45
        const streak = 2.5 + p.len * 5
        ctx.beginPath()
        ctx.moveTo(p.x - streak, y)
        ctx.lineTo(p.x, y)
        ctx.stroke()
      }
      ctx.globalAlpha = 1
      ctx.globalCompositeOperation = 'source-over'
    }

    const onVisibility = () => {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(raf)
      } else if (!reduce) {
        running = true
        last = 0
        raf = requestAnimationFrame(frame)
      }
    }

    resize()
    if (reduce) {
      drawStatic()
    } else {
      raf = requestAnimationFrame(frame)
    }
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibility)
    // canvas is pointer-events:none, so listen on window
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerleave', onPointerLeave)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [density])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{ width: '100%', height: '100%' }}
    />
  )
}
