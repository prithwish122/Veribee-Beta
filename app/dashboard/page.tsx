"use client"

import { BarChart3, FileText, Plus, Filter, Coins, Eye, TrendingUp, Download, Brain } from "lucide-react"
// import ZeyoSidebar from "@/components/zeyo-sidebar"
import GlassButton from "@/components/glass-button"
import { useState } from "react"
import { motion } from "framer-motion"
import DashSidebar from "@/components/dashboard-sidebar"
import { FloatingDock } from "@/components/ui/floating-dock"
import FloatingDockWithNightMode from "@/components/floating-dock-with-night-mode"

function CreateManageFormsSection() {
  const handleSetFilters = () => {
    console.log("[v0] Set Eligibility Filters clicked")
    // TODO: Navigate to filters setup page
  }

  const handleConfigureIncentives = () => {
    console.log("[v0] Configure Incentives clicked")
    // TODO: Navigate to incentives setup page
  }

  const handleCreateNewForm = () => {
    console.log("[v0] Create New Form clicked")
    // TODO: Navigate to form creation page
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 h-full relative overflow-hidden border border-white/20 shadow-2xl"
    >
                      {/* <FloatingDockWithNightMode /> */}
        
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center space-x-3 mb-8">
          <FileText className="w-6 h-6 text-blue-400" />
          <h3 className="text-2xl font-bold text-white">Create & Manage Research Forms</h3>
        </div>

        <div className="flex-1 space-y-4">
          <p className="text-gray-200 mb-6">Design custom digital forms for your research studies.</p>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={handleSetFilters}
              className="flex items-center justify-between p-4 bg-black/20 backdrop-blur-sm rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-200 cursor-pointer hover:bg-black/30"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-400/30 border border-blue-400/50 rounded-xl flex items-center justify-center">
                  <Filter className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">Set Eligibility Filters</div>
                  <div className="text-gray-300 text-xs">Location, Age, Demographics</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={handleConfigureIncentives}
              className="flex items-center justify-between p-4 bg-black/20 backdrop-blur-sm rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-200 cursor-pointer hover:bg-black/30"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-400/30 border border-blue-400/50 rounded-xl flex items-center justify-center">
                  <Coins className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">Configure Incentives</div>
                  <div className="text-gray-300 text-xs">Mini Tokens</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10">
          <GlassButton onClick={handleCreateNewForm}>
            <Plus className="w-4 h-4 mr-2" />
            Create New Form
          </GlassButton>
        </div>
      </div>
    </motion.div>
  )
}

function ResponseAnalyticsSection() {
  const handleViewData = () => {
    console.log("[v0] View Summarized Data & Trends clicked")
    // TODO: Navigate to data visualization page
  }

  const handleHypothesisTesting = () => {
    console.log("[v0] AI-Based Hypothesis Testing clicked")
    // TODO: Navigate to hypothesis testing page
  }

  const handleExportData = () => {
    console.log("[v0] Export Cleaned Data clicked")
    // TODO: Trigger data export
  }

  const handleViewAnalytics = () => {
    console.log("[v0] View Analytics clicked")
    // TODO: Navigate to analytics dashboard
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 h-full relative overflow-hidden border border-white/20 shadow-2xl"
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center space-x-3 mb-8">
          <BarChart3 className="w-6 h-6 text-blue-400" />
          <h3 className="text-2xl font-bold text-white">Response Analytics</h3>
        </div>

        <div className="flex-1 space-y-4">
          <p className="text-gray-200 mb-6">View and analyze the data collected from your studies.</p>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={handleViewData}
              className="flex items-center justify-between p-4 bg-black/20 backdrop-blur-sm rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-200 cursor-pointer hover:bg-black/30"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-400/30 border border-blue-400/50 rounded-xl flex items-center justify-center">
                  <Eye className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">View Summarized Data & Trends</div>
                  <div className="text-gray-300 text-xs">Data visualization and insights</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              onClick={handleHypothesisTesting}
              className="flex items-center justify-between p-4 bg-black/20 backdrop-blur-sm rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-200 cursor-pointer hover:bg-black/30"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-400/30 border border-blue-400/50 rounded-xl flex items-center justify-center">
                  <Brain className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">AI-Based Hypothesis Testing</div>
                  <div className="text-gray-300 text-xs">Premium feature</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              onClick={handleExportData}
              className="flex items-center justify-between p-4 bg-black/20 backdrop-blur-sm rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-200 cursor-pointer hover:bg-black/30"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-400/30 border border-blue-400/50 rounded-xl flex items-center justify-center">
                  <Download className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">Export Cleaned Data</div>
                  <div className="text-gray-300 text-xs">Download processed results</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10">
          <GlassButton onClick={handleViewAnalytics}>
            <TrendingUp className="w-4 h-4 mr-2" />
            View Analytics
          </GlassButton>
        </div>
      </div>
    </motion.div>
  )
}

export default function DashboardPage() {
  const [currentView, setCurrentView] = useState("dashboard")

  const handleDashboard = () => setCurrentView("dashboard")
  const handleParticipate = () => setCurrentView("participate")

  return (
    <div className="min-h-screen bg-black">
      <DashSidebar onDashboard={handleDashboard} onParticipate={handleParticipate} currentView={currentView} />

      <main className="ml-72 p-6 space-y-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Research Dashboard</h1>
          <p className="text-blue-200">Manage your research forms and analyze responses</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CreateManageFormsSection />
          <ResponseAnalyticsSection />
        </div>
      </main>
    </div>
  )
}
