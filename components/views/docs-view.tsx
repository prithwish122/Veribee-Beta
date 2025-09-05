"use client"

import { BookOpen, FileText } from "lucide-react"
import { motion } from "framer-motion"

export default function DocsView() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Documentation</h1>
        <p className="text-blue-200">Learn how to use Veribee research platform</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl"
        >
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-bold text-white">Getting Started</h3>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-black/20 rounded-lg border border-white/20 hover:border-blue-400/50 transition-all cursor-pointer">
              <h4 className="text-white font-medium mb-2">Creating Your First Survey</h4>
              <p className="text-gray-300 text-sm">Learn how to design and deploy research forms</p>
            </div>
            <div className="p-4 bg-black/20 rounded-lg border border-white/20 hover:border-blue-400/50 transition-all cursor-pointer">
              <h4 className="text-white font-medium mb-2">Setting Up Incentives</h4>
              <p className="text-gray-300 text-sm">Configure rewards and mini tokens for participants</p>
            </div>
            <div className="p-4 bg-black/20 rounded-lg border border-white/20 hover:border-blue-400/50 transition-all cursor-pointer">
              <h4 className="text-white font-medium mb-2">Data Analysis</h4>
              <p className="text-gray-300 text-sm">Understanding analytics and insights</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl"
        >
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-bold text-white">API Reference</h3>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-black/20 rounded-lg border border-white/20 hover:border-blue-400/50 transition-all cursor-pointer">
              <h4 className="text-white font-medium mb-2">Authentication</h4>
              <p className="text-gray-300 text-sm">API keys and authentication methods</p>
            </div>
            <div className="p-4 bg-black/20 rounded-lg border border-white/20 hover:border-blue-400/50 transition-all cursor-pointer">
              <h4 className="text-white font-medium mb-2">Survey Endpoints</h4>
              <p className="text-gray-300 text-sm">Create and manage surveys programmatically</p>
            </div>
            <div className="p-4 bg-black/20 rounded-lg border border-white/20 hover:border-blue-400/50 transition-all cursor-pointer">
              <h4 className="text-white font-medium mb-2">Data Export</h4>
              <p className="text-gray-300 text-sm">Export survey data via API</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
