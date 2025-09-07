"use client"

import { useState } from "react"
import Sidebar from "@/components/dashboard-sidebar"
import ParticipateView from "@/components/views/participate-view"
import ProfileView from "@/components/views/profile-view"
import DocsView from "@/components/views/docs-view"
import DashboardView from "@/components/views/dashboard-view"
import Survey from "@/components/Survey"
import ComposeFormPopup from "@/components/dashboard/compose-form-popup"

export default function DashboardPage() {
  const [currentView, setCurrentView] = useState("")
  const [showComposePopup, setShowComposePopup] = useState(false)

  const handleDashboard = () => {
    setCurrentView("dashboard")
    setShowComposePopup(false)
  }
  const handleParticipate = () => {
    setCurrentView("participate")
    setShowComposePopup(false)
  }
  const handleProfile = () => {
    setCurrentView("profile")
    setShowComposePopup(false)
  }
  const handleReadDocs = () => {
    setCurrentView("docs")
    setShowComposePopup(false)
  }

  const handleCompose = () => {
    setShowComposePopup(true)
  }

  const handleComposeFormProceed = () => {
    setShowComposePopup(false)
    setCurrentView("compose")
  }

  const handleComposeFormClose = () => {
    setShowComposePopup(false)
  }

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
      case "compose":
        return (
          <Survey
            onBack={(): void => {
              throw new Error("Function not implemented.")
            }}
          />
        )
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

      {/* Main content area with relative positioning for popup */}
      <main className={`${isCompose ? "ml-72 h-screen" : "ml-72 p-6"} relative z-10`}>
        {renderCurrentView()}

        {/* Popup renders within the main content area with high z-index */}
        {showComposePopup && (
          <div className="absolute inset-0 z-40">
            <ComposeFormPopup onProceed={handleComposeFormProceed} onClose={handleComposeFormClose} />
          </div>
        )}
      </main>
    </div>
  )
}
