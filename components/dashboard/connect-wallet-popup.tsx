"use client"

import { Users } from "lucide-react"
import { motion } from "framer-motion"
import GlassButton from "@/components/glass-button"

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

export default function ParticipateView() {
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
