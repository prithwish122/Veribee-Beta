"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { Globe } from "./Globe"

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const faqs = [
    {
  question: "What is Veribee?",
  answer:
    "Veribee is a Web3 survey platform that combines AI analysis, smart contracts, and OCID-based identity to ensure fair, authentic, and privacy-preserving responses.",
},
{
  question: "How does Veribee prevent spam or fake responses?",
  answer:
    "Veribee uses OCID identity verification and AI-powered validation to filter out spam, duplicates, and low-quality answers before rewards are released.",
},
{
  question: "How are rewards distributed?",
  answer:
    "Rewards are locked in escrow smart contracts and released automatically only when AI verifies that the response meets the required quality standards.",
},
{
  question: "Can developers submit code in surveys?",
  answer:
    "Yes! Veribee supports code editor inputs, making it perfect for technical surveys, hackathons, and developer feedback collection.",
},
{
  question: "Is my data private on Veribee?",
  answer:
    "Absolutely. Veribee leverages OCID authentication and blockchain technology to keep your identity private while maintaining authenticity.",
},
{
  question: "Who can use Veribee?",
  answer:
    "Anyone—from DAOs and startups to educators and hackathon organizers—can use Veribee to collect secure, high-quality feedback.",
}

  ]

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="w-full bg-black py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl tracking-tight text-white mb-6 font-sans"
          >
            Everything you <span className="italic text-blue-300">need</span> to know.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-200/80 font-sans"
          >
            Got questions? We've got answers. Here's everything you need to know before getting started.
          </motion.p>
        </div>

        {/* Side by side layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* FAQ Section - Left Side */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="border border-blue-500/20 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-950/20 to-black/20 hover:from-blue-950/30 hover:to-black/30 transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-800/10 transition-colors duration-200"
                >
                  <span className="text-white font-medium text-lg pr-4 font-sans">{faq.question}</span>
                  <motion.div animate={{ rotate: openItems.includes(index) ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-5 h-5 text-blue-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-8 pb-6 text-blue-200/90 leading-relaxed font-sans">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Globe Section - Right Side */}
          <div className="flex items-center justify-center lg:justify-start sticky top-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
               
              <Globe className="drop-shadow-2xl" />
            
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}