"use client"

import { useEffect, useRef } from "react"

// Lenis is inferred automatically by v0; no package.json edit required
import Lenis from "lenis"

export default function LenisProvider() {
  const rafRef = useRef<number | null>(null)
  const lenisRef = useRef<InstanceType<typeof Lenis> | null>(null)

  useEffect(() => {
    // Respect user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      // lower damping = more momentum; 0.1–0.2 is subtle, 0.05 is very floaty
      // tweak for comfortable inertia without feeling laggy
      duration: 1.6, // seconds it takes to catch up; keep snappy but smooth
      easing: (t: number) => 1 - Math.pow(1 - t, 2), // ease-out quad (smooth, predictable)
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 1.2, // small boost on touch devices
    })
    lenisRef.current = lenis

    const raf = (time: number) => {
      lenis.raf(time)
      rafRef.current = requestAnimationFrame(raf)
    }
    rafRef.current = requestAnimationFrame(raf)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      try {
        lenis.destroy()
      } catch {
        // no-op
      }
    }
  }, [])

  return null
}
