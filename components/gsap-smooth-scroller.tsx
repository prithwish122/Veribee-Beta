"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

type Props = {
  children: React.ReactNode
  // Lower = slower/smoother, Higher = snappier. Recommended: 0.06 - 0.14
  smoothness?: number
}

export default function GsapSmoothScroller({ children, smoothness = 0.08 }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const content = contentRef.current
    if (!wrapper || !content) return

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReduced) return

    // Fix wrapper to viewport; translate content to simulate eased scroll
    gsap.set(wrapper, { position: "fixed", inset: 0, overflow: "hidden", width: "100%", height: "100vh" })
    gsap.set(content, { willChange: "transform" })

    const measureAndSetBodyHeight = () => {
      const h = content.getBoundingClientRect().height
      const newH = `${Math.max(h, window.innerHeight)}px`
      if (document.body.style.height !== newH) {
        document.body.style.height = newH
      }
    }
    // Initialize once
    measureAndSetBodyHeight()

    // Flag updates from observers/events; do not write during observer delivery
    let pendingHeightUpdate = false
    const markPending = () => {
      pendingHeightUpdate = true
    }

    const ro = new ResizeObserver(markPending)
    ro.observe(content)
    window.addEventListener("resize", markPending, { passive: true })

    let target = window.scrollY
    let current = target
    const ease = Math.min(Math.max(smoothness, 0.02), 0.3)

    const onScroll = () => {
      target = window.scrollY
    }

    const onTick = () => {
      // Process any pending height updates safely in the animation frame
      if (pendingHeightUpdate) {
        pendingHeightUpdate = false
        measureAndSetBodyHeight()
      }
      current += (target - current) * ease
      gsap.set(content, { y: -current })
      if (Math.abs(target - current) < 0.1) current = target
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    gsap.ticker.add(onTick)

    return () => {
      window.removeEventListener("scroll", onScroll)
      gsap.ticker.remove(onTick)
      ro.disconnect()
      window.removeEventListener("resize", markPending)
      document.body.style.height = ""
      gsap.set(wrapper, { clearProps: "all" })
      gsap.set(content, { clearProps: "all" })
    }
  }, [smoothness])

  return (
    <div ref={wrapperRef} id="gsap-smooth-wrapper">
      <div ref={contentRef} id="gsap-smooth-content">
        {children}
      </div>
    </div>
  )
}
