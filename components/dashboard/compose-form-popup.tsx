"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ComposeFormProps {
  onProceed: () => void
  onClose: () => void
}

export default function backComposeForm({ onProceed, onClose }: ComposeFormProps) {
  const [formData, setFormData] = useState({
    organizationName: "",
    gmail: "",
    estimatedTime: "",
    eligibility: "",
    incentiveProvided: "",
    rewardPerParticipant: "",
    incentivizedSlots: "",
    totalTargetParticipants: "",
    totalBudget: "",
    startDate: "",
    endDate: "",
    consentNote: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleProceed = () => {
    // Validate required fields here if needed
    onProceed()
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen bg-black text-white overflow-y-auto"
    >
      <div className="max-w-4xl mx-auto p-6">
        {/* Header with Back Button */}
        <div className="flex items-center gap-4 mb-8">
          {/* <button
            onClick={onClose}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button> */}
          <div>
            <h1 className="text-3xl font-bold text-white">Create New Survey</h1>
            <p className="text-gray-400 mt-1">Fill in the details to create your research survey</p>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
          <div className="space-y-6">
            {/* Organization and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="orgName" className="text-white text-sm font-medium">
                  Organization Name (optional)
                </Label>
                <Input
                  id="orgName"
                  value={formData.organizationName}
                  onChange={(e) => handleInputChange("organizationName", e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-11 focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter organization name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gmail" className="text-white text-sm font-medium">
                  Gmail <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="gmail"
                  type="email"
                  value={formData.gmail}
                  onChange={(e) => handleInputChange("gmail", e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-11 focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@gmail.com"
                  required
                />
              </div>
            </div>

            {/* Estimated Time */}
            <div className="space-y-2">
              <Label htmlFor="estimatedTime" className="text-white text-sm font-medium">
                Estimated Time to Complete <span className="text-red-400">*</span>
              </Label>
              <Select onValueChange={(value) => handleInputChange("estimatedTime", value)}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white h-11 focus:ring-2 focus:ring-blue-500">
                  <SelectValue placeholder="Select estimated time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5-10 minutes">5-10 minutes</SelectItem>
                  <SelectItem value="10-15 minutes">10-15 minutes</SelectItem>
                  <SelectItem value="15-30 minutes">15-30 minutes</SelectItem>
                  <SelectItem value="30+ minutes">30+ minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Target Audience */}
            <div className="space-y-2">
              <Label htmlFor="eligibility" className="text-white text-sm font-medium">
                Eligibility/Target Audience <span className="text-red-400">*</span>
              </Label>
              <Textarea
                id="eligibility"
                value={formData.eligibility}
                onChange={(e) => handleInputChange("eligibility", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[80px] focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your target audience (age, location, occupation, etc.)"
                rows={3}
              />
            </div>

            {/* Incentive Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="incentive" className="text-white text-sm font-medium">
                  Incentive Provided <span className="text-red-400">*</span>
                </Label>
                <Select onValueChange={(value) => handleInputChange("incentiveProvided", value)}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white h-11 focus:ring-2 focus:ring-blue-500">
                    <SelectValue placeholder="Yes/No" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reward" className="text-white text-sm font-medium">
                  Reward Per Participant
                </Label>
                <Input
                  id="reward"
                  value={formData.rewardPerParticipant}
                  onChange={(e) => handleInputChange("rewardPerParticipant", e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-11 focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 50 Mini Tokens or $10"
                />
              </div>
            </div>

            {/* Participant Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="slots" className="text-white text-sm font-medium">
                  Number of Incentivized Slots
                </Label>
                <Input
                  id="slots"
                  value={formData.incentivizedSlots}
                  onChange={(e) => handleInputChange("incentivizedSlots", e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-11 focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., first 200 participants"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="totalParticipants" className="text-white text-sm font-medium">
                  Total Target Participants <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="totalParticipants"
                  value={formData.totalTargetParticipants}
                  onChange={(e) => handleInputChange("totalTargetParticipants", e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-11 focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 1000"
                />
              </div>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-white text-sm font-medium">
                Total Budget Committed
              </Label>
              <Input
                id="budget"
                value={formData.totalBudget}
                onChange={(e) => handleInputChange("totalBudget", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-11 focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., $5000"
              />
            </div>

            {/* Date Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="startDate" className="text-white text-sm font-medium">
                  Survey Start Date <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange("startDate", e.target.value)}
                  className="bg-white/10 border-white/20 text-white h-11 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="endDate" className="text-white text-sm font-medium">
                  Survey End Date <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleInputChange("endDate", e.target.value)}
                  className="bg-white/10 border-white/20 text-white h-11 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Consent Note */}
            <div className="space-y-2">
              <Label htmlFor="consent" className="text-white text-sm font-medium">
                Consent Note <span className="text-red-400">*</span>
              </Label>
              <Textarea
                id="consent"
                value={formData.consentNote}
                onChange={(e) => handleInputChange("consentNote", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[80px] focus:ring-2 focus:ring-blue-500"
                placeholder="Information about who is conducting this research and how data will be used"
                rows={3}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <Button
                onClick={onClose}
                variant="outline"
                className="flex-1 bg-transparent border-white/20 text-white hover:bg-white/10 h-12"
              >
                Save as Draft
              </Button>
              <Button
                onClick={handleProceed}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium h-12 transition-colors"
              >
                Proceed to Survey Builder
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}