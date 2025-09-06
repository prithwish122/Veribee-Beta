"use client"

import { motion } from "framer-motion"
import GlassButton from "@/components/glass-button"
import { SurveyBarChart,  SurveyRadarChart } from "@/components/survey-analytics"

interface Survey {
  id: string
  title: string
  status: "Ongoing" | "Ended"
}

interface SurveyAnalyticsProps {
  survey?: Survey
  onBack: () => void
}

export default function SurveyAnalytics({ survey, onBack }: SurveyAnalyticsProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-screen flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">{survey?.title}</h1>
          <p className="text-blue-200">Survey Analytics Dashboard</p>
        </div>
        <GlassButton onClick={onBack}>← Back</GlassButton>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <SurveyBarChart surveyTitle={survey?.title || ""} />
        </div>

        <div className="space-y-6">
          {/* <SurveyPieChart /> */}
          <SurveyRadarChart />
        </div>
      </div>
    </motion.div>
  )
}
