"use client"

import { Users } from "lucide-react"
import { motion } from "framer-motion"

interface Survey {
  id: string
  title: string
  status: "Ongoing" | "Ended"
  description?: string
  reward?: string
  participants?: number
  timeLeft?: string
  formId?: number | string
  releaseDate?: string // ISO date string
}

interface SurveyListProps {
  surveys: Survey[]
  onSurveySelect: (surveyId: string) => void
}

export default function SurveyList({ surveys, onSurveySelect }: SurveyListProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="mb-8">
        {/* <h1 className="text-3xl font-bold text-white mb-2">Participate in Surveys</h1>
        <p className="text-blue-200">Join ongoing research studies and earn rewards</p> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {surveys.length === 0 ? (
          <div className="text-gray-400 col-span-full">No surveys found.</div>
        ) : (
          surveys.map((survey, index) => (
            <motion.div
              key={survey.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl hover:border-blue-400/50 transition-all duration-200 cursor-pointer"
              onClick={() => onSurveySelect(survey.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-400/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                  {survey.status === "Ongoing"
                    ? (survey.timeLeft
                      ? survey.timeLeft + ' left'
                      : (survey.releaseDate
                        ? (() => {
                          // Calculate days left (assuming 30 days duration)
                          const release = new Date(survey.releaseDate);
                          const today = new Date();
                          const daysSinceRelease = Math.floor((today.getTime() - release.getTime()) / (1000 * 60 * 60 * 24));
                          const daysLeft = Math.max(0, 30 - daysSinceRelease);
                          return daysLeft > 0 ? daysLeft + ' days left' : 'Ends today';
                        })()
                        : '30 days left'))
                    : 'Ended'}
                </div>
              </div>

              <h3 className="text-white font-bold text-lg mb-2">{survey.title || "Untitled Survey"}</h3>
              <p className="text-gray-300 text-sm mb-4">{survey.description || "No description."}</p>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Reward:</span>
                  <span className="text-blue-400 font-medium">{survey.reward || "50 Mini Tokens"}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Participants:</span>
                  <span className="text-white">{survey.participants || Math.floor(Math.random() * 1000 + 100)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">FormId:</span>
                  <span className="text-white">{survey.formId || 'N/A'}</span>
                </div>
              </div>

              <button className="w-full bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 py-2 rounded-xl hover:bg-white/20 transition-all duration-200">
                View Analytics
              </button>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  )
}