"use client"

import { motion } from "framer-motion"
import {
  TrendingUp,
  Activity,
  PieChart,
  Shield,
  Trophy,
  Zap,
  Target,
  Globe,
  Users,
  FileText,
  Search,
} from "lucide-react"
import { useState } from "react"

const MainContent = ({ themeColor = "#f96e34" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="ml-72 space-y-8 pt-20"
    >
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <ReputationTimelineCard themeColor={themeColor} />
        </div>
        <div className="col-span-4">
          <ProofTypeDistributionCard themeColor={themeColor} />
        </div>
        <div className="col-span-6">
          <RecentActivityCard themeColor={themeColor} />
        </div>
        <div className="col-span-6">
          <MultiChainReputationCard themeColor={themeColor} />
        </div>
      </div>
    </motion.div>
  )
}

const ReputationTimelineCard = ({ themeColor = "#f96e34" }) => {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const filters = [
    { id: "all", label: "All Activity" },
    { id: "dao", label: "DAO" },
    { id: "trading", label: "Trading" },
    { id: "nft", label: "NFT" },
  ]

  const timelineData = Array.from({ length: 30 }, (_, i) => ({
    day: i,
    score: 70 + Math.sin(i * 0.2) * 15 + Math.random() * 10,
    activity: ["dao", "trading", "nft"][Math.floor(Math.random() * 3)],
  }))

  const filteredData =
    selectedFilter === "all" ? timelineData : timelineData.filter((item) => item.activity === selectedFilter)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 h-full relative overflow-hidden border border-white/10 shadow-2xl"
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <TrendingUp className={`w-6 h-6`} style={{ color: themeColor }} />
            <h3 className="text-2xl font-bold text-white">SURVEY RESPONSES</h3>
          </div>
          <div className="flex space-x-2">
            {filters.map((filter) => (
              <div key={filter.id} className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-1">
                <button
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    selectedFilter === filter.id
                      ? `bg-[${themeColor}]/20 text-[${themeColor}] border border-[${themeColor}]/30`
                      : "bg-transparent text-gray-400 hover:text-white"
                  }`}
                  style={
                    selectedFilter === filter.id
                      ? { color: themeColor, borderColor: themeColor, backgroundColor: "#f96e3420" }
                      : {}
                  }
                >
                  {filter.label}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex items-end justify-between space-x-1 mb-6">
          {filteredData.slice(-25).map((item, i) => (
            <motion.div
              key={i}
              className="rounded-t-sm flex-1 min-w-0 shadow-sm"
              style={{
                background: `linear-gradient(to top, ${themeColor}99 60%, ${themeColor})`,
              }}
              initial={{ height: "0%" }}
              animate={{ height: `${(item.score / 100) * 100}%` }}
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
            <div className="text-3xl font-bold" style={{ color: themeColor }}>
              {Math.round(timelineData[timelineData.length - 1]?.score || 85)}
            </div>
            <div className="text-gray-400 text-sm">Response Rate</div>
          </div>
          <span className="text-gray-400 text-sm">Today</span>
        </div>
      </div>
    </motion.div>
  )
}

const ProofTypeDistributionCard = ({ themeColor = "#f96e34" }) => {
  const proofTypes = [
    {
      title: "Demographics",
      value: 2847,
      color: themeColor,
      icon: Shield,
    },
    {
      title: "Preferences",
      value: 1923,
      color: themeColor,
      icon: Trophy,
    },
    {
      title: "Behavior",
      value: 1456,
      color: themeColor,
      icon: Zap,
    },
    {
      title: "Feedback",
      value: 892,
      color: themeColor,
      icon: Target,
    },
  ]

  const total = proofTypes.reduce((sum, item) => sum + item.value, 0)
  const proofTypesWithPercentages = proofTypes.map((proof) => ({
    ...proof,
    percentage: Math.round((proof.value / total) * 100),
  }))

  let cumulativeAngle = 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 h-full relative overflow-hidden border border-white/10 shadow-2xl"
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center space-x-3 mb-6">
          <PieChart className="w-6 h-6" style={{ color: themeColor }} />
          <h3 className="text-xl font-bold text-white">RESPONSE DISTRIBUTION</h3>
        </div>
        <div className="flex-1 flex items-center justify-center mb-6">
          <div className="relative w-48 h-48">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
              {proofTypesWithPercentages.map((proof, i) => {
                const angle = (proof.value / total) * 360
                const radius = 80
                const circumference = 2 * Math.PI * radius
                const strokeDasharray = circumference
                const strokeDashoffset = circumference - (circumference * proof.value) / total
                const result = (
                  <motion.circle
                    key={proof.title}
                    cx="100"
                    cy="100"
                    r={radius}
                    fill="transparent"
                    stroke={themeColor}
                    strokeWidth="16"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    className="drop-shadow-lg"
                    style={{
                      transformOrigin: "100px 100px",
                      transform: `rotate(${cumulativeAngle}deg)`,
                      filter: `drop-shadow(0 0 8px ${themeColor}40)`,
                    }}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 1.5, delay: i * 0.2 + 0.3, ease: "easeInOut" }}
                  />
                )
                cumulativeAngle += angle
                return result
              })}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{total.toLocaleString()}</div>
                <div className="text-xs text-gray-400">Total Responses</div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {proofTypesWithPercentages.map((proof, i) => (
            <motion.div
              key={proof.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + 0.5 }}
              className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-200"
            >
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: themeColor }} />
                <div>
                  <div className="text-white font-medium text-sm">{proof.title}</div>
                  <div className="text-gray-400 text-xs">{proof.value.toLocaleString()} responses</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white font-bold text-sm">{proof.percentage}%</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const RecentActivityCard = ({ themeColor = "#f96e34" }) => {
  const activities = [
    {
      type: "survey",
      title: "Consumer Preferences Survey",
      description: "Market research for new product launch",
      amount: "245 responses",
      time: "2m ago",
      status: "Active",
      icon: FileText,
    },
    {
      type: "analysis",
      title: "Data Analysis Complete",
      description: "Demographics study results ready",
      amount: "89% completion",
      time: "5m ago",
      status: "Complete",
      icon: Search,
    },
    {
      type: "reward",
      title: "Participant Rewards",
      description: "Mini tokens distributed to participants",
      amount: "+150 tokens",
      time: "8m ago",
      status: "Distributed",
      icon: Trophy,
    },
    {
      type: "form",
      title: "New Form Created",
      description: "Healthcare satisfaction survey",
      amount: "Ready to launch",
      time: "12m ago",
      status: "Draft",
      icon: Users,
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 h-full relative overflow-hidden border border-white/10 shadow-2xl"
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center space-x-3 mb-8">
          <Activity className="w-6 h-6" style={{ color: themeColor }} />
          <h3 className="text-2xl font-bold text-white">Recent Activity</h3>
        </div>
        <div className="space-y-4 flex-1 overflow-y-auto">
          {activities.map((activity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + 0.4 }}
              className="flex items-center justify-between p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#f96e34]/30 transition-all duration-200"
            >
              <div className="flex items-center space-x-4">
                <div
                  className="w-12 h-12"
                  style={{ backgroundColor: "#f96e341A", borderColor: "#f96e3433" }}
                  className="rounded-xl flex items-center justify-center border"
                >
                  <activity.icon className="w-5 h-5" style={{ color: themeColor }} />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{activity.title}</div>
                  <div className="text-gray-400 text-xs">{activity.description}</div>
                  <div className="text-gray-500 text-xs mt-1">{activity.time}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-300">{activity.amount}</div>
                <div className="text-[#f96e34] text-xs">{activity.status}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const MultiChainReputationCard = ({ themeColor = "#f96e34" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 h-full relative overflow-hidden border border-white/10 shadow-2xl"
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center space-x-3 mb-8">
          <Globe className="w-6 h-6" style={{ color: themeColor }} />
          <h3 className="text-2xl font-bold text-white">SURVEY ANALYTICS</h3>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24</div>
              <div className="text-gray-400 text-sm">Active Surveys</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: themeColor }}>
                94.2%
              </div>
              <div className="text-gray-400 text-sm">Response Rate</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white">Research Platform</div>
              <div className="text-gray-400 text-sm mt-2">Advanced survey analytics and insights</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default MainContent
