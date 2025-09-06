"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard-sidebar";
import ParticipateView from "@/components/views/participate-view";
import dynamic from "next/dynamic";
import ProfileView from "@/components/views/profile-view";
import DocsView from "@/components/views/docs-view";
import DashboardView from "@/components/views/dashboard-view";
import Survey from "@/components/Survey";
import ComposeFormPopup from "@/components/dashboard/compose-form-popup";

// Dynamically load survey renderer (no SSR)
const SurveyComponent = dynamic(() => import("@/components/Survey-render"), {
  ssr: false,
});

export default function DashboardPage() {
  const [currentView, setCurrentView] = useState("");
  const [showComposePopup, setShowComposePopup] = useState(false);
  const [selectedSurvey, setSelectedSurvey] = useState<any | null>(null);
  const [showExitSurveyConfirm, setShowExitSurveyConfirm] = useState(false);
  const [pendingNav, setPendingNav] = useState<null | (() => void)>(null);

  // Intercept navigation if a survey is open
  const navWithSurveyConfirm = (navFn: () => void) => {
    if (selectedSurvey) {
      setShowExitSurveyConfirm(true);
      setPendingNav(() => () => {
        setSelectedSurvey(null);
        navFn();
      });
    } else {
      navFn();
    }
  };

  const handleDashboard = () =>
    navWithSurveyConfirm(() => {
      setCurrentView("dashboard");
      setShowComposePopup(false);
    });

  const handleParticipate = () =>
    navWithSurveyConfirm(() => {
      setCurrentView("participate");
      setShowComposePopup(false);
    });

  const handleProfile = () =>
    navWithSurveyConfirm(() => {
      setCurrentView("profile");
      setShowComposePopup(false);
    });

  const handleReadDocs = () =>
    navWithSurveyConfirm(() => {
      setCurrentView("docs");
      setShowComposePopup(false);
    });

  const handleCompose = () =>
    navWithSurveyConfirm(() => {
      setShowComposePopup(true);
    });
  // (Removed duplicate handler declarations)

  const handleComposeFormProceed = () => {
    setShowComposePopup(false);
    setCurrentView("compose");
  };

  const handleComposeFormClose = () => {
    setShowComposePopup(false);
  };

  const renderCurrentView = () => {
    // If survey is selected → render form
    if (selectedSurvey) {
      return (
        <SurveyComponent
          json={selectedSurvey.json}
          onComplete={() => setSelectedSurvey(null)}
        />
      );
    }

    // Else render normal views
    switch (currentView) {
      case "dashboard":
        return <DashboardView />;
      case "participate":
        return <ParticipateView onSelectSurvey={setSelectedSurvey} />;
      case "profile":
        return <ProfileView />;
      case "docs":
        return <DocsView />;
      case "compose":
        return (
          <Survey
            onBack={() => {
              setCurrentView("dashboard");
            }}
          />
        );
      default:
        return <DashboardView />;
    }
  };

  const isCompose = currentView === "compose";

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

      <main className={`${isCompose ? "ml-72 h-screen" : "ml-72 p-6"} relative z-10`}>
        {renderCurrentView()}

        {showComposePopup && (
          <div className="absolute inset-0 z-40">
            <ComposeFormPopup
              onProceed={handleComposeFormProceed}
              onClose={handleComposeFormClose}
            />
          </div>
        )}
        {/* Exit survey confirmation modal */}
        {showExitSurveyConfirm && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60">
            <div className="bg-white rounded-xl p-8 shadow-2xl max-w-sm w-full">
              <h3 className="text-lg font-bold mb-4 text-gray-900">Exit Survey?</h3>
              <p className="mb-6 text-gray-700">You have an unfinished survey. Are you sure you want to exit? All progress will be lost.</p>
              <div className="flex justify-end gap-4">
                <button
                  className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
                  onClick={() => {
                    setShowExitSurveyConfirm(false);
                    setPendingNav(null);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
                  onClick={() => {
                    setShowExitSurveyConfirm(false);
                    if (pendingNav) pendingNav();
                    setPendingNav(null);
                  }}
                >
                  Yes, Exit
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
''