"use client"

import { motion } from "framer-motion"

interface Survey {
  id: string
  title: string
  status: "Ongoing" | "Ended"
}

interface SurveyListProps {
  surveys: Survey[]
  onSurveySelect: (surveyId: string) => void
}

export default function SurveyList({ surveys, onSurveySelect }: SurveyListProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <h3 className="text-2xl font-bold text-white mb-6">Surveys</h3>
      <div className="space-y-4">
        {surveys.map((survey, index) => (
          <motion.div
            key={survey.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSurveySelect(survey.id)}
            className="w-full bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl hover:border-blue-400/50 transition-all duration-200 cursor-pointer hover:bg-black/30"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold text-white">{survey.title}</h4>
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium text-white ${
                  survey.status === "Ongoing"
                    ? "bg-green-600 border border-green-500"
                    : "bg-red-600 border border-red-500"
                }`}
              >
                {survey.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
