"use client"

import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"

export function SurveyBarChart() {
  // Mock data: Replace with API call in future
  const responseData = [
    { day: 0, responses: 62 },
    { day: 1, responses: 68 },
    { day: 2, responses: 73 },
    { day: 3, responses: 80 },
    { day: 4, responses: 77 },
    { day: 5, responses: 70 },
    { day: 6, responses: 65 },
    { day: 7, responses: 60 },
    { day: 8, responses: 58 },
    { day: 9, responses: 61 },
    { day: 10, responses: 66 },
    { day: 11, responses: 72 },
    { day: 12, responses: 78 },
    { day: 13, responses: 81 },
    { day: 14, responses: 79 },
    { day: 15, responses: 74 },
    { day: 16, responses: 69 },
    { day: 17, responses: 65 },
    { day: 18, responses: 63 },
    { day: 19, responses: 67 },
    { day: 20, responses: 71 },
    { day: 21, responses: 76 },
    { day: 22, responses: 80 },
    { day: 23, responses: 83 },
    { day: 24, responses: 81 },
    { day: 25, responses: 77 },
    { day: 26, responses: 72 },
    { day: 27, responses: 68 },
    { day: 28, responses: 65 },
    { day: 29, responses: 63 },
  ];

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
