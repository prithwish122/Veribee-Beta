"use client";

import { useState, useEffect } from "react";
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

// Connect Popup Component
const ConnectPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center">
      {/* Blurred backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Glass UI Popup */}
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4">
        {/* Glass effect inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl pointer-events-none" />
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Content */}
        <div className="relative z-10 text-center">
          <div className="mb-6">
            {/* <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400/30 to-blue-500/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
              {/* <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg> */}
            {/* </div>  */}
            <h2 className="text-2xl font-bold text-white mb-2">Connect Your Wallet</h2>
            {/* <p className="text-white/80 text-sm leading-relaxed">
              Link your profile to access all features and sync your data across devices.
            </p> */}
            <div className="flex items-center justify-center space-x-4 mt-4 ">
                  <appkit-button />
                </div>
          </div>
          
          {/* Connect Button */}
          
          
          
        </div>
      </div>
    </div>
  );
};

export default function DashboardPage() {
  const [currentView, setCurrentView] = useState("profile"); // Default to profile
  const [showConnectPopup, setShowConnectPopup] = useState(true); // Show connect popup on load
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

  const handleComposeFormProceed = () => {
    setShowComposePopup(false);
    setCurrentView("compose");
  };

  const handleComposeFormClose = () => {
    setShowComposePopup(false);
  };

  const handleConnectPopupClose = () => {
    setShowConnectPopup(false);
  };

  const renderCurrentView = () => {
    // If survey is selected → render form
    if (selectedSurvey) {
      return (
        <SurveyComponent
          json={{ ...selectedSurvey.json, formId: selectedSurvey.formId }}
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
        return <ProfileView />; // Default to profile view
    }
  };

  const isCompose = currentView === "compose";

  return (
    <div className="min-h-screen bg-black">
      {/* Blur effect when connect popup is shown */}
      <div className={`${showConnectPopup ? 'blur-sm' : ''} transition-all duration-300`}>
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
        </main>
      </div>

      {/* Connect Popup */}
      {showConnectPopup && (
        <ConnectPopup onClose={handleConnectPopupClose} />
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
    </div>
  );


}

