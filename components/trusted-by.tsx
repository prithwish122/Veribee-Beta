"use client"
import { motion } from "motion/react"

export default function TrustedBy() {
  const companies = [
    "Uniswap",
    "Compound",
    "Curve",
    "1inch",
    "SushiSwap",
    "Balancer",
    "Yearn",
    "Aave",
    "MakerDAO",
    "Synthetix",
    "Chainlink",
    "Polygon",
  ]

  return (
    <div className="w-full bg-black py-24 overflow-hidden">
      <div className="text-center mb-16 px-8">
        <h2 className="text-blue-200/80 text-xl font-medium font-sans">Trusted by privacy-conscious traders from</h2>
      </div>
      <div className="relative">
        <motion.div
          className="flex space-x-16 whitespace-nowrap"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 text-3xl font-medium text-blue-300/60 hover:text-blue-200 transition-colors font-sans"
            >
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
