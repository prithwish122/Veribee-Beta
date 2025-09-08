"use client"

import { Safari } from "@/components/magicui/safari"
import { BlueBlurBackground } from "@/components/blue-blur-background"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Hero-only background image (100vh) */}
      <BlueBlurBackground src="/images/hero-bg.jpg" className="-z-20" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4">
        <h1 className="text-center text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl -mt-[50px]">
          Data that matters, insights that shatter.
        </h1>
        {/* <p className="mt-3 max-w-2xl text-center text-base text-foreground/70 md:text-lg">
          Host surveys, collect feedback, and run research at lightning speed, no human intervention
        </p> */}
        <div className="mt-8 w-full max-w-6xl">
          <Safari url="veribee.tech" className="w-full" />
        </div>
      </div>
    </section>
  )
}
