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
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover/bento:opacity-100"
        style={{
          background: "radial-gradient(60% 60% at 50% 50%, rgba(37,99,235,0.35), rgba(37,99,235,0.0) 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl ring-0 group-hover/bento:ring-1 transition duration-500"
        style={{ boxShadow: "0 0 0 0 rgba(59,130,246,0)", borderColor: "rgba(59,130,246,0.5)" }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">{header}</div>

      {/* subtle sweep */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover/bento:translate-x-full transition-transform duration-700 ease-out" />
    </div>
  )
}

const StatHeader = ({
  value,
  label,
  desc,
}: {
  value: string
  label: string
  desc: string
}) => (
  <div className="relative flex h-44 md:h-[11rem] w-full items-center justify-center text-center p-6">
    <div className="relative z-[1] group-hover/bento:scale-105 transition-transform duration-500 ease-out">
      {/* large number/percentage */}
      <div className="text-5xl md:text-6xl font-bold tracking-tight leading-none text-white">{value}</div>
      <div className="mt-2 text-base md:text-lg font-semibold tracking-wide text-white/95">{label}</div>
      <p className="mx-auto mt-3 max-w-sm text-[13px] md:text-sm leading-relaxed text-white/80">{desc}</p>
    </div>
  </div>
)

export function BentoGridDemo() {
  return (
    // removed page-level gradient; keep section padding only
    <section className="py-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Why choose us ?</h2>
        </div>

        <BentoGrid className="md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={<StatHeader value={item.value} label={item.label} desc={item.desc} />}
              className={item.className}
              bgUrl="/images/grid.png"
              overlayOpacity={0.6}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Backed by AI and ZK identity to eliminate bots and duplicates.",
    value: "98%",
    label: "Verified Responses",
    desc: "Backed by AI and ZK identity to eliminate bots and duplicates.",
    className: "md:col-span-2",
  },
  {
    title: "The Digital Revolution",
    description: "Escrow smart contracts ensure instant, tamper-proof payouts.",
    value: "100%",
    label: "Fair Rewards",
    desc: "Escrow smart contracts ensure instant, tamper-proof payouts.",
    className: "md:col-span-1",
  },
  {
    title: "The Art of Design",
    description: "AI-powered analytics deliver results in real time.",
    value: "70%",
    label: "Faster Insights",
    desc: "AI-powered analytics deliver results in real time.",
    className: "md:col-span-1",
  },
  {
    title: "The Power of Communication",
    description: "Fully automated surveys — seamless, trustless, and efficient.",
    value: "0%",
    label: "Manual Effort",
    desc: "Fully automated surveys — seamless, trustless, and efficient.",
    className: "md:col-span-2",
  },
]

export default BentoGridDemo
