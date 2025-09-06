"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import SurveyList from "@/components/dashboard/survey-list"
import SurveyAnalytics from "@/components/dashboard/survey-analytics"

const mockSurveys = [
  {
    id: "consumer-behavior",
    title: "Consumer Behavior Study",
    status: "Ongoing" as const,
  },
  {
    id: "healthcare-satisfaction",
    title: "Healthcare Satisfaction Survey",
    status: "Ongoing" as const,
  },
  {
    id: "tech-adoption",
    title: "Technology Adoption Research",
    status: "Ended" as const,
  },
  {
    id: "market-research",
    title: "Market Research Analysis",
    status: "Ongoing" as const,
  },
]

export default function DashboardView() {
  const [selectedSurvey, setSelectedSurvey] = useState<string | null>(null)

  if (selectedSurvey) {
    const survey = mockSurveys.find((s) => s.id === selectedSurvey)
    return <SurveyAnalytics survey={survey} onBack={() => setSelectedSurvey(null)} />
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Research Dashboard</h1>
        <p className="text-blue-200">Manage your research forms and analyze responses</p>
      </div>

      <SurveyList surveys={mockSurveys} onSurveySelect={setSelectedSurvey} />
    </motion.div>
  )
}
