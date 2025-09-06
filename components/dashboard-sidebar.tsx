"use client"

import { motion } from "motion/react"
import { ChevronRight, BarChart3, Users, User, BookOpen, Edit3 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Sidebar = ({
  onDashboard,
  onParticipate,
  onProfile,
  onReadDocs,
  onCompose,
  currentView,
}: {
  onDashboard: () => void
  onParticipate: () => void
  onProfile: () => void
  onReadDocs: () => void
  onCompose: () => void
  currentView: string
}) => {
  const composeButton = {
    title: "Compose",
    icon: Edit3,
    onClick: onCompose,
    isCompose: true,
  }

  const menuItems = [
    { title: "Dashboard", icon: BarChart3, active: currentView === "dashboard", onClick: onDashboard },
    { title: "Participate", icon: Users, active: currentView === "participate", onClick: onParticipate },
    { title: "Profile", icon: User, active: currentView === "profile", onClick: onProfile },
    { title: "Read Docs", icon: BookOpen, active: currentView === "docs", onClick: onReadDocs },
  ]

  return (
    <div className="fixed left-0 top-0 w-72 h-screen bg-black/40 backdrop-blur-xl border-r border-white/20 flex flex-col z-20 shadow-2xl">
      <nav className="flex-1 px-6 py-8">
        {/* Logo */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-3 px-2"
          >
             <Link href="/" className="flex items-center space-x-3">
      <div className="w-8 h-8 relative">
        <Image
          src="/images/veribee.png"
          alt="Veribee Logo"
          width={32}
          height={32}
          className="w-full h-full object-contain filter brightness-0 invert"
        />
      </div>
      <span className="text-white font-bold text-xl">Veribee</span>
    </Link>
          </motion.div>
        </div>

        {/* Compose Button */}
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 cursor-pointer hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg"
            onClick={composeButton.onClick}
          >
            <div className="flex items-center space-x-3">
              <composeButton.icon className="w-5 h-5 text-white" />
              <span className="text-white font-bold text-sm">{composeButton.title}</span>
            </div>
          </motion.div>
        </div>

        {/* Menu Items */}
        <div className="space-y-2">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
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

      {/* Connect Wallet Button with higher z-index for modal */}
      <div className="flex justify-center mb-10 relative z-50">
        <appkit-button  balance="hide"/>
      </div>

      {/* Global style to ensure appkit modal appears on top */}
      {/* <style jsx global>{`
        appkit-modal,
        appkit-modal *,
        [data-appkit-modal],
        [data-appkit-modal] * {
          z-index: 9999 !important;
        }
      `}</style> */}
    </div>
  )
}

export default Sidebar