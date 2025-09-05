"use client"

import { motion } from "motion/react"
import { ChevronRight, BarChart3, Users } from "lucide-react"

const DashSidebar = ({
  onDashboard,
  onParticipate,
  currentView,
}: {
  onDashboard: () => void
  onParticipate: () => void
  currentView: string
}) => {
  const menuItems = [
    { title: "Dashboard", icon: BarChart3, active: currentView === "dashboard", onClick: onDashboard },
    { title: "Participate", icon: Users, active: currentView === "participate", onClick: onParticipate },
  ]

  return (
    <div className="fixed left-0 top-0 w-72 h-screen bg-black/40 backdrop-blur-xl border-r border-white/20 flex flex-col z-20 shadow-2xl">
      <nav className="flex-1 px-6 py-8">
        <div className="space-y-2">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`group flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
                item.active
                  ? "bg-black/30 backdrop-blur-sm text-white border border-blue-400/50 shadow-lg shadow-blue-400/20"
                  : "text-gray-300 hover:text-white hover:bg-black/20 hover:backdrop-blur-sm hover:border hover:border-white/20"
              }`}
              onClick={item.onClick}
            >
              <div className="flex items-center space-x-3">
                <item.icon className={`w-5 h-5 ${item.active ? "text-blue-400" : ""}`} />
                <span className="text-sm font-medium">{item.title}</span>
              </div>
              {item.active && <ChevronRight className="w-4 h-4 text-blue-400" />}
            </motion.div>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default DashSidebar
