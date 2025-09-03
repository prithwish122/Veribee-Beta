import type React from "react"
import { Shield, Settings, Bot, Lock } from "lucide-react"
import { motion } from "motion/react"

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

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6">{header}</div>

      {/* subtle sweep */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover/bento:translate-x-full transition-transform duration-700 ease-out" />
    </div>
  )
}

const FeatureHeader = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) => (
  <div className="relative flex h-full w-full flex-col items-center justify-center text-center">
    <motion.div
      className="mb-4 p-4 rounded-2xl bg-blue-500/10 border border-blue-400/20 group-hover/bento:bg-blue-500/20 transition-colors duration-500"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Icon className="w-8 h-8 text-blue-400 group-hover/bento:text-blue-300 transition-colors duration-500" />
    </motion.div>
    
    <motion.div
      className="space-y-3 group-hover/bento:scale-105 transition-transform duration-500 ease-out"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h3 className="text-xl md:text-2xl font-bold tracking-wide text-white/95 leading-tight">
        {title}
      </h3>
      <p className="mx-auto max-w-sm text-sm md:text-base font-medium leading-relaxed text-white/80">
        {description}
      </p>
    </motion.div>

    {/* Floating particles animation */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  </div>
)

export function BentoGridDemo() {
  return (
    <section className="py-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-2">Our Solution</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <BentoGrid className="md:auto-rows-[20rem]">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <BentoGridItem
                  title={item.title}
                  description={item.description}
                  header={<FeatureHeader icon={item.icon} title={item.title} description={item.description} />}
                  className={item.className}
                  bgUrl="/images/grid.png"
                  overlayOpacity={0.6}
                />
              </motion.div>
            ))}
          </BentoGrid>
        </motion.div>
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