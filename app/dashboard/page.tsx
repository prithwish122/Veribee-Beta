"use client"

import {
  BarChart3,
  FileText,
  Plus,
  Filter,
  Coins,
  Eye,
  TrendingUp,
  Download,
  Brain,
  Users,
  BookOpen,
  User,
  Settings,
} from "lucide-react"
import Sidebar from "@/components/dashboard-sidebar"
import Survey from "@/components/Survey"
import GlassButton from "@/components/glass-button"
import MainContent from "@/components/main-content"
import { ChartRadarDots, ChartPieLabel } from "@/components/chart-components"
import { useState } from "react"
import { motion } from "framer-motion"

function ParticipateView() {
  const mockSurveys = [
    {
      id: 1,
      title: "Consumer Behavior Study",
      description: "Understanding shopping patterns in digital marketplaces",
      reward: "50 Mini Tokens",
      participants: "1,234",
      timeLeft: "3 days",
      status: "Active",
    },
    {
      id: 2,
      title: "Healthcare Satisfaction Survey",
      description: "Patient experience and service quality assessment",
      reward: "75 Mini Tokens",
      participants: "892",
      timeLeft: "1 week",
      status: "Active",
    },
    {
      id: 3,
      title: "Technology Adoption Research",
      description: "How people adapt to new digital technologies",
      reward: "100 Mini Tokens",
      participants: "567",
      timeLeft: "5 days",
      status: "Active",
    },
  ]

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Participate in Surveys</h1>
        <p className="text-blue-200">Join ongoing research studies and earn rewards</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockSurveys.map((survey, index) => (
          <motion.div
            key={survey.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl hover:border-blue-400/50 transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">{survey.status}</span>
              </div>
              <div className="bg-blue-400/20 text-blue-300 px-2 py-1 rounded-full text-xs">{survey.timeLeft} left</div>
            </div>

            <h3 className="text-white font-bold text-lg mb-2">{survey.title}</h3>
            <p className="text-gray-300 text-sm mb-4">{survey.description}</p>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Reward:</span>
                <span className="text-blue-400 font-medium">{survey.reward}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Participants:</span>
                <span className="text-white">{survey.participants}</span>
              </div>
            </div>

            <GlassButton className="w-full">Join Survey</GlassButton>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function ProfileView() {
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

function ReadDocsView() {
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

function DashboardView() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Research Dashboard</h1>
        <p className="text-blue-200">Manage your research forms and analyze responses</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ChartRadarDots />
        <ChartPieLabel />
      </div>


    </motion.div>
  )
}

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
  const handleProfile = () => setCurrentView("profile")
  const handleReadDocs = () => setCurrentView("docs")
  const handleCompose = () => setCurrentView("compose")

  const renderCurrentView = () => {
    switch (currentView) {
      case "dashboard":
        return <DashboardView />
      case "participate":
        return <ParticipateView />
      case "profile":
        return <ProfileView />
      case "docs":
        return <ReadDocsView />
      case "compose":
        return <Survey />
      default:
        return <DashboardView />
    }
  }

  const isCompose = currentView === "compose"
  return (
    <div className="min-h-screen bg-black">
      <Sidebar
        onDashboard={handleDashboard}
        onParticipate={handleParticipate}
        onProfile={handleProfile}
        onReadDocs={handleReadDocs}
        onCompose={handleCompose}
        currentView={currentView}
      />

      <main className={isCompose ? "ml-72 h-screen" : "ml-72 p-6"}>{renderCurrentView()}</main>
    </div>
  )
}
