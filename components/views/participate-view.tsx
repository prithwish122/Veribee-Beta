"use client"

import { Users } from "lucide-react"
import { motion } from "framer-motion"
import GlassButton from "@/components/glass-button"
import { useEffect, useState } from "react"
import { useAppKitAccount } from "@reown/appkit/react"
import dynamic from "next/dynamic"
import { toast } from "sonner"

const SurveyComponent = dynamic(() => import("@/components/Survey-render"), { ssr: false })

type ParticipateViewProps = {
  onSelectSurvey?: (survey: any) => void;
};

export default function ParticipateView({ onSelectSurvey }: ParticipateViewProps) {
  const [surveys, setSurveys] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const { address } = useAppKitAccount()

  useEffect(() => {
    setLoading(true)
    fetch("/api/forms")
      .then((res) => res.json())
      .then((data) => {
        if (data?.forms) setSurveys(data.forms)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Participate in Surveys</h1>
        <p className="text-blue-200">Join ongoing research studies and earn rewards</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {loading ? (
          <div className="text-gray-400 col-span-full">Loading surveys...</div>
        ) : surveys.length === 0 ? (
          <div className="text-gray-400 col-span-full">No surveys found.</div>
        ) : (
          surveys.map((survey, index) => (
            <motion.div
              key={survey.formId || survey._id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl hover:border-blue-400/50 transition-all duration-200 cursor-pointer"
              onClick={async () => {
                if (!address) {
                  toast.error("Please connect your wallet to participate.")
                  return
                }
                try {
                  const res = await fetch("/api/check-response", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ formId: survey.formId, address })
                  })
                  const data = await res.json()
                  if (data.success && data.alreadyResponded) {
                    toast.warning("You have already responded to this survey.")
                    return
                  }
                  if (onSelectSurvey) onSelectSurvey(survey)
                } catch (err) {
                  toast.error("Failed to check response status. Please try again.")
                }
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-400 text-sm font-medium">{survey.status || "Active"}</span>
                </div>
                <div className="bg-blue-400/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                  {survey.timeLeft || "N/A"} left
                </div>
              </div>

              <h3 className="text-white font-bold text-lg mb-2">{survey.title || "Untitled Survey"}</h3>
              <p className="text-gray-300 text-sm mb-4">{survey.json?.description || survey.description || "No description."}</p>

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
                  <span className="text-gray-400">FormID:</span>
                  <span className="text-white">{survey.formId || survey._id || "N/A"}</span>
                </div>
              </div>

              <GlassButton className="w-full">Join Survey</GlassButton>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  )
}
