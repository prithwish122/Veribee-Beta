import type React from "react"

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
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
}) => {
  return (
    <div
      className={`relative row-span-1 rounded-xl group/bento overflow-hidden border border-bento-border bg-bento-card backdrop-blur-sm transition-all duration-300 ease-out hover:border-bento-glow/30 hover:shadow-lg hover:shadow-bento-glow/10 ${className}`}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-bento-card/50 to-bento-bg/80" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end items-start p-6">
        {header}
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/2 to-transparent -skew-x-12 -translate-x-full group-hover/bento:translate-x-full transition-transform duration-700 ease-out" />
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
    <div className="relative z-[1] group-hover/bento:scale-105 transition-transform duration-300 ease-out">
      <div className="text-xl md:text-2xl font-bold tracking-tight leading-none text-foreground mb-3">{title}</div>
      <p className="max-w-sm text-sm md:text-base font-medium leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  </div>
)

export function BentoGridDemo() {
  return (
    <section className="py-16 px-6 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-2">Our Solution</h2>
        </div>
        <BentoGrid className="md:auto-rows-[20rem]">
          {/* 1st box: OCID Integration */}
          <BentoGridItem
            className="md:col-span-2"
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

export default BentoGridDemo