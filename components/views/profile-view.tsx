"use client"

import { User, Settings } from "lucide-react"
import { motion } from "framer-motion"
import GlassButton from "@/components/glass-button"

export default function ProfileView() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Profile Settings</h1>
        <p className="text-blue-200">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl"
        >
          <div className="flex items-center space-x-3 mb-6">
            <User className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-bold text-white">Personal Information</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400/50 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400/50 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-2">Location</label>
              <input
                type="text"
                placeholder="Enter your location"
                className="w-full p-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-blue-400/50 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-6">
            <GlassButton>Save Changes</GlassButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Settings className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-bold text-white">Preferences</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg border border-white/20">
              <span className="text-white">Email Notifications</span>
              <input type="checkbox" className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg border border-white/20">
              <span className="text-white">Survey Reminders</span>
              <input type="checkbox" className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg border border-white/20">
              <span className="text-white">Data Analytics</span>
              <input type="checkbox" className="w-4 h-4" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
