"use client"

import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"

export function SurveyBarChart() {
  const responseData = Array.from({ length: 30 }, (_, i) => ({
    day: i,
    responses: 50 + Math.sin(i * 0.3) * 20 + Math.random() * 15,
  }))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 h-full relative overflow-hidden border border-white/20 shadow-2xl"
    >
      <div className="absolute inset-0 bg-gray-900/40 rounded-2xl"></div>
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <TrendingUp className="w-6 h-6 text-blue-400" />
            <h3 className="text-2xl font-bold text-white">SURVEY RESPONSES</h3>
          </div>
        </div>
        <div className="flex-1 flex items-end justify-between space-x-1 mb-6">
          {responseData.slice(-25).map((item, i) => (
            <motion.div
              key={i}
              className="rounded-t-sm flex-1 min-w-0 shadow-sm"
              style={{
                background: "linear-gradient(to top, #3b82f699 60%, #3b82f6)",
              }}
              initial={{ height: "0%" }}
              animate={{ height: `${(item.responses / 100) * 100}%` }}
              transition={{
                duration: 0.8,
                delay: i * 0.02,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">30 days ago</span>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">
              {Math.round(responseData[responseData.length - 1]?.responses || 75)}
            </div>
            <div className="text-gray-400 text-sm">Daily Responses</div>
          </div>
          <span className="text-gray-400 text-sm">Today</span>
        </div>
      </div>
    </motion.div>
  )
}
