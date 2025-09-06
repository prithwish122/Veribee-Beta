"use client"

import { useState } from "react"
import Sidebar from "@/components/dashboard-sidebar"
import ParticipateView from "@/components/views/participate-view"
import ProfileView from "@/components/views/profile-view"
import DocsView from "@/components/views/docs-view"
import DashboardView from "@/components/views/dashboard-view"

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
        return <DocsView />
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
