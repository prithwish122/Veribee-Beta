// "use client" is required for GSAP + DOM measurements
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
  const scrollSpeed = 4

  // register GSAP plugins once
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

      // timeline driving horizontal translation
      const tl = gsap.timeline()
      tl.to(sections, {
        x: () => window.innerWidth - maxWidth,
        duration: 1,
        ease: "none",
      })
      tlRef.current = tl

      // build the directional snap helper
      const { snapFn, setRecentScroll } = directionalSnap(tl)

      // ScrollTrigger controls: pin + scrub + snap across labels
      const st = ScrollTrigger.create({
        animation: tl,
        trigger: wrapperRef.current!,
        pin: true,
        scrub: 1,
        snap: { snapTo: snapFn as any, duration: 0.5 },
        end: () => "+=" + maxWidth / scrollSpeed,
        invalidateOnRefresh: true,
      })
      stRef.current = st

      function init() {
        gsap.set(sections, { x: 0 })
        maxWidth = getMaxWidth()

        const distance = maxWidth - window.innerWidth
        let position = 0

        // clear old labels if any
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

        // add labels for each section and wire nav clicks
        sections.forEach((section, i) => {
          const progress = position
          position += section.offsetWidth / distance
          tl.add(`label${i + 1}`, position)

          if (navItems[i]) {
            // remove previous listeners to avoid duplicates
            navItems[i].onclick = null
            navItems[i].onclick = () => {
              // tween page scroll to the computed progress position
              setRecentScroll(progress)
              gsap.to(window, {
                scrollTo: (maxWidth / scrollSpeed) * progress,
                duration: 1,
                overwrite: "auto",
              })
            }
          }
        })
        // refresh trigger end based on latest width
        st.vars.end = () => "+=" + maxWidth / scrollSpeed
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

      {/* Wrapper: pinned, horizontal-scrolling sections */}
      <div ref={wrapperRef} className="wrapper relative flex h-screen flex-nowrap items-stretch bg-black">
        {/* Sections */}
        {steps.map((step, idx) => {
          const base = "section shrink-0 h-full flex items-center"
          const widthClass = step.width === "large" ? "" : step.width === "small" ? "" : "w-screen"

          const bg = idx % 2 === 0 ? "bg-neutral-950" : "bg-neutral-900"

          const styleWidth =
            step.width === "large"
              ? { width: "150vw" as const }
              : step.width === "small"
                ? { width: "46rem" as const }
                : undefined

          return (
            <section
              key={step.title}
              className={`${base} ${widthClass} ${bg} border-r border-neutral-800`}
              style={styleWidth}
              aria-label={step.title}
            >
              <div className="relative mx-6 w-full md:mx-12 grid grid-cols-12 items-center gap-8">
                {/* Left: ultra-large translucent numeral filling viewport height */}
                <div className="col-span-12 md:col-span-6 flex items-center justify-start overflow-visible">
                  <span
                    aria-hidden="true"
                    className="block select-none font-black leading-[0.7] text-white/10"
                    style={{
                      fontSize: "clamp(40rem, 105vh, 150rem)",
                    }}
                  >
                    {idx + 1}
                  </span>
                </div>

                {/* Right: very large bold content beside the number */}
                <div className="col-span-12 md:col-span-6 relative z-10 max-w-4xl">
                  <h3 className="text-pretty font-black tracking-tight text-white text-5xl md:text-7xl lg:text-8xl">
                    {step.title.replace(/^\d+\.\s*/, "")}
                  </h3>
                  <p className="mt-6 text-xl leading-8 text-neutral-300 md:text-2xl md:leading-9">{step.description}</p>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* Fixed Nav */}
      <nav ref={navRef} aria-label="How it works navigation" className="fixed left-1/2 top-4 z-20 -translate-x-1/2">
        
      </nav>
    </section>
  )
}

export default HowItWorks
