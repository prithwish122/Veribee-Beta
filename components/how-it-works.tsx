"use client"

import { useEffect, useMemo, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

type Step = {
  title: string
  description: string
  width: "normal" | "large" | "small"
}

const steps: Step[] = [
  {
    title: "1. Design & Launch",
    description: "Create fully customizable, secure survey forms.",
    width: "normal",
  },
  {
    title: "2. Agentic Verification",
    description: "AI agents validate, deduplicate, and enrich every response.",
    width: "large",
  },
  {
    title: "3. Escrow-Based Incentivization",
    description: "Rewards released only for high-quality, verified answers.",
    width: "large",
  },
  {
    title: "4. Instant Research Insights",
    description: "Auto-transformed data delivered via sleek, interactive dashboards.",
    width: "large",
  },
]

function directionalSnap(tl: gsap.core.Timeline) {
  let snapProgress = 0
  let lastScrollTween = 0

  // expose setters so init() can update these on clicks
  const setRecentScroll = (progress: number) => {
    snapProgress = progress
    lastScrollTween = Date.now()
  }

  const snapFn = (value: number, st: ScrollTrigger) => {
    if (Date.now() - lastScrollTween < 1650) {
      // recently finished a tweened scroll, so don't overshoot
      return snapProgress
    }
    const labels = tl.labels
    const duration = tl.duration()
    const arr: number[] = []
    for (const p in labels) {
      arr.push((labels[p] as number) / duration)
    }
    arr.sort((a, b) => a - b)
    if (st.direction > 0) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= value) return arr[i]
      }
      return arr[arr.length - 1]
    } else {
      let i = arr.length
      while (i--) {
        if (arr[i] <= value) return arr[i]
      }
    }
    return arr[0]
  }

  // return tuple: actual snap function and the updater for click events
  return { snapFn, setRecentScroll }
}

export function HowItWorks() {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const navRef = useRef<HTMLDivElement | null>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)
  const stRef = useRef<ScrollTrigger | null>(null)
  const cleanupRef = useRef<() => void>(() => {})

  useMemo(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
    }
    return null
  }, [])

  useEffect(() => {
    if (!wrapperRef.current) return

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(wrapperRef.current!.querySelectorAll("section"))
      const navItems = gsap.utils.toArray<HTMLElement>(navRef.current?.querySelectorAll("[data-nav]") || [])

      const getMaxWidth = () => sections.reduce((val, section) => val + section.offsetWidth, 0)
      let maxWidth = getMaxWidth()

      const tl = gsap.timeline()
      tl.to(sections, {
        x: () => window.innerWidth - maxWidth,
        duration: 1,
        ease: "none",
      })
      tlRef.current = tl

      const { snapFn, setRecentScroll } = directionalSnap(tl)

      const st = ScrollTrigger.create({
        animation: tl,
        trigger: wrapperRef.current!,
        pin: true,
        scrub: 0, // Set scrub to 0 for immediate 1:1 scroll response
        snap: { snapTo: snapFn as any, duration: 0.5 },
        end: () => "+=" + (maxWidth - window.innerWidth), // Use exact horizontal distance
        invalidateOnRefresh: true,
      })
      stRef.current = st

      function init() {
        gsap.set(sections, { x: 0 })
        maxWidth = getMaxWidth()

        const distance = maxWidth - window.innerWidth
        let position = 0

        tl.clear()
        tl.add("label0", 0)
        tl.to(
          sections,
          {
            x: () => window.innerWidth - maxWidth,
            duration: 1,
            ease: "none",
          },
          0,
        )

        sections.forEach((section, i) => {
          const progress = position
          position += section.offsetWidth / distance
          tl.add(`label${i + 1}`, position)

          if (navItems[i]) {
            navItems[i].onclick = null
            navItems[i].onclick = () => {
              setRecentScroll(progress)
              gsap.to(window, {
                scrollTo: (maxWidth - window.innerWidth) * progress,
                duration: 1,
                overwrite: "auto",
              })
            }
          }
        })
        st.vars.end = () => "+=" + (maxWidth - window.innerWidth)
        st.refresh()
      }

      init()
      ScrollTrigger.addEventListener("refreshInit", init)

      cleanupRef.current = () => {
        ScrollTrigger.removeEventListener("refreshInit", init)
        stRef.current?.kill()
        tlRef.current?.kill()
      }
    }, wrapperRef)

    return () => {
      cleanupRef.current?.()
      ctx.revert()
    }
  }, [])

  return (
    <section aria-labelledby="how-it-works-title" className="relative">
      <h2 id="how-it-works-title" className="sr-only">
        How it works
      </h2>

      <div ref={wrapperRef} className="wrapper relative flex h-screen flex-nowrap items-stretch bg-black">
        {steps.map((step, idx) => {
          const base = "section shrink-0 h-full flex items-center w-screen"
          const bg = "bg-black"

          return (
            <section key={step.title} className={`${base} ${bg} border-r border-neutral-800`} aria-label={step.title}>
              <div className="relative mx-6 w-full md:mx-12 grid grid-cols-12 items-center gap-2 md:gap-4">
                <div className="col-span-12 md:col-span-5 flex items-center justify-start md:justify-end overflow-visible">
                  <span
                    aria-hidden="true"
                    className="block select-none font-black leading-[0.65] text-white/8 md:text-white/12"
                    style={{
                      fontSize: "clamp(32rem, 90vh, 120rem)",
                    }}
                  >
                    {idx + 1}
                  </span>
                </div>

                <div className="col-span-12 md:col-span-7 relative z-10 max-w-4xl md:-ml-8 lg:-ml-12">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
                      <span className="text-sm font-bold text-black">{idx + 1}</span>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
                  </div>

                  <h3 className="text-pretty font-black tracking-tight text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9]">
                    {step.title.replace(/^\d+\.\s*/, "")}
                  </h3>
                  <p className="mt-4 md:mt-6 text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-200 max-w-2xl text-pretty">
                    {step.description}
                  </p>

                  <div className="mt-6 md:mt-8 h-1 w-16 bg-gradient-to-r from-white/40 to-white/10 rounded-full"></div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      <nav
        ref={navRef}
        aria-label="How it works navigation"
        className="fixed left-1/2 top-4 z-20 -translate-x-1/2"
      ></nav>
    </section>
  )
}

export default HowItWorks
