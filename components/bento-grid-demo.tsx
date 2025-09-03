import type React from "react"
// Import icons/animations from Magic UI and Aceternity UI
import { ShieldCheckIcon } from "@heroicons/react/24/outline"
import { SparklesCore } from "@/components/magicui/sparkles-core"
import { MagicWand } from "@/components/magicui/magic-wand"
import { RocketIcon } from "lucide-react"
import { CoinsIcon } from "lucide-react"

// BentoGrid Components
const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div className={`grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  )
}

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  bgUrl,
  overlayOpacity = 0.55,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  bgUrl?: string
  overlayOpacity?: number
}) => {
  return (
    <div
      className={`relative row-span-1 rounded-3xl group/bento overflow-hidden border border-white/10 transition-all duration-500 ease-out hover:scale-[1.02] ${className}`}
      style={{
        background: bgUrl ? `url(${bgUrl})` : "linear-gradient(135deg, #111827 0%, #0b1220 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* overlay for legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80 transition-all duration-500 group-hover/bento:from-black/75 group-hover/bento:via-black/60 group-hover/bento:to-black/85"
        style={{ opacity: overlayOpacity }}
      />
      {/* blue glow on hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 blur-sm transition-opacity duration-300 group-hover/bento:opacity-100"
        style={{
          background: "radial-gradient(40% 40% at 50% 50%, rgba(59,130,246,0.15), rgba(59,130,246,0.0) 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl ring-0 group-hover/bento:ring-1 transition duration-500"
        style={{ boxShadow: "0 0 0 0 rgba(59,130,246,0)", borderColor: "rgba(59,130,246,0.5)" }}
      />

      <div className="relative z-10 h-full flex flex-col justify-end items-start p-6">{header}</div>

      {/* subtle sweep */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover/bento:translate-x-full transition-transform duration-700 ease-out" />
    </div>
  )
}

const StatHeader = ({
  title,
  desc,
}: {
  title: string
  desc: string
}) => (
  <div className="relative w-full text-left">
    <div className="relative z-[1] group-hover/bento:scale-105 transition-transform duration-500 ease-out">
      <div className="text-2xl md:text-3xl font-extrabold tracking-tight leading-none text-white drop-shadow-lg mb-3">{title}</div>
      <p className="max-w-sm text-base md:text-lg font-semibold leading-relaxed text-white/90">{desc}</p>
    </div>
  </div>
)

export function BentoGridDemo() {
  return (
    <section className="py-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="ext-4xl md:text-6xl font-extrabold text-foreground mb-2">Our Solution</h2>
        </div>
        <BentoGrid className="md:auto-rows-[20rem]">
          {/* 1st box: OCID Integration */}
          <BentoGridItem
            className="md:col-span-2"
            bgUrl="/images/grid.png"
            overlayOpacity={0.6}
            header={
              <StatHeader
                title="OCID Integration"
                desc="Prevent bots and multiple submissions."
              />
            }
          />
          {/* 2nd box: Instant Insights */}
          <BentoGridItem
            className="md:col-span-1"
            bgUrl="/images/grid.png"
            overlayOpacity={0.6}
            header={
              <StatHeader
                title="Instant Insights"
                desc="Clean data, sleek dashboards, decisions in minutes."
              />
            }
          />
          {/* 3rd box: Agentic Verification */}
          <BentoGridItem
            className="md:col-span-1"
            bgUrl="/images/grid.png"
            overlayOpacity={0.6}
            header={
              <StatHeader
                title="Agentic Verification"
                desc="Filter out fake and duplicate responses instantly."
              />
            }
          />
          {/* 4th box: Escrow-Based Incentivization */}
          <BentoGridItem
            className="md:col-span-2"
            bgUrl="/images/grid.png"
            overlayOpacity={0.6}
            header={
              <StatHeader
                title="Escrow-Based Incentivization"
                desc="Rewards are locked and released only for verified and relevant responses."
              />
            }
          />
        </BentoGrid>
      </div>
    </section>
  )
}

const items = [
  {
    icon: Shield,
    title: "OCID Integration",
    description: "Prevent bots and multiple submissions.",
    className: "md:col-span-2",
  },
  {
    icon: Settings,
    title: "Fully Customizable Forms",
    description: "Flexible surveys tailored to your needs.",
    className: "md:col-span-1",
  },
  {
    icon: Bot,
    title: "Agentic Verification",
    description: "Filter out fake and duplicate responses instantly.",
    className: "md:col-span-1",
  },
  {
    icon: Lock,
    title: "Escrow-Based Incentivization",
    description: "Rewards are locked and released only for verified and relevant responses.",
    className: "md:col-span-2",
  },
]

export default BentoGridDemo