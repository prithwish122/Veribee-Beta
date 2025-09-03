"use client"
import React, { useEffect, useRef, useState } from "react"
import { useMotionValueEvent, useScroll } from "motion/react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export const StickyScroll = ({
  contentClassName,
}: {
  contentClassName?: string
}) => {
  const content = [
    {
      title: "Design & Launch",
      description:
        "Create fully customizable, secure survey forms.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Design & Launch
        </div>
      ),
    },
    {
      title: "Agentic Verification",
      description:
        "AI agents validate, deduplicate, and enrich every response.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] text-white">
          Agentic Verification
        </div>
      ),
    },
    {
      title: "Escrow-Based Incentivization",
      description:
        "Rewards released only for high-quality, verified answers.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
          Escrow-Based Incentivization
        </div>
      ),
    },
    {
      title: "Instant Research Insights",
      description:
        "Auto-transformed data delivered via sleek, interactive dashboards.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Instant Research Insights
        </div>
      ),
    },
  ]

  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint)
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index
      }
      return acc
    }, 0)
    setActiveCard(closestBreakpointIndex)
  })

  // Always use black background
  const backgroundColor = "#000000"

  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
  ]
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ]

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0])

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length])
  }, [activeCard])

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColor,
      }}
      className="relative flex h-[30rem] w-full justify-center space-x-10 overflow-y-auto rounded-md p-10 scrollbar-hide"
      ref={ref}
      style={{
        backgroundColor: backgroundColor,
        width: "100%",
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE/Edge
      }}
    >
      {/* Hide scrollbar for webkit browsers */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-32">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-4xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-xl font-semibold leading-relaxed text-slate-200 bg-black/30 rounded-lg p-4 shadow-lg"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn("sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block", contentClassName)}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  )
}
//   )
// }
//         {content[activeCard].content ?? null}
//       </div>
//     </motion.div>
//   )
// }
//   )
// }
