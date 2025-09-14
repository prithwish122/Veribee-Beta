"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import SurveyList from "@/components/dashboard/survey-list"
import SurveyAnalytics from "@/components/dashboard/survey-analytics"

type Survey = {
  formId: string | number;
  title: string;
  status: "Ongoing" | "Ended";
  description?: string;
  reward?: string;
  participants?: number;
  timeLeft?: string;
  releaseDate?: string;
};

export default function DashboardView() {
  const [surveys, setSurveys] = useState<Survey[]>([])
  const [selectedSurvey, setSelectedSurvey] = useState<string | number | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("/api/forms")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch forms")
        return res.json()
      })
      .then((data) => {
        if (data?.forms) {
          setSurveys(data.forms)
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (selectedSurvey) {
    const survey = surveys.find((s) => s.formId === selectedSurvey);
    if (!survey) {
      // Defensive: If survey not found, go back
      setSelectedSurvey(null);
      return null;
    }
    return (
      <SurveyAnalytics survey={survey} onBack={() => setSelectedSurvey(null)} />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Research Dashboard</h1>
        <p className="text-blue-200">
          Manage your research forms and analyze responses
        </p>
      </div>

      {loading && <p className="text-blue-200">Loading surveys...</p>}
      {error && <p className="text-red-400">{error}</p>}
      {!loading && !error && (
        <SurveyList surveys={surveys} onSurveySelect={setSelectedSurvey} />
      )}
    </motion.div>
  )
}
