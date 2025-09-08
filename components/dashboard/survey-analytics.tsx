
import { useEffect, useState } from "react";


import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SurveyBarChart } from "@/components/dashboard/survey-bar-chart";
import { ChartPieEnhanced } from "./chart-pie-enhanced";
import { ChartRadarEnhanced } from "./chart-radar-enhanced";



interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function SurveyAnalytics({ survey, onBack }: { survey: any, onBack: () => void }) {
  const [pieChartData, setPieChartData] = useState<any[]>([]);
  const [pieChartConfig, setPieChartConfig] = useState<any>({});
  const [radarChartData, setRadarChartData] = useState<any[]>([]);
  const [radarChartConfig, setRadarChartConfig] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I can help you analyze your survey data. What would you like to know about the response patterns, satisfaction levels, or performance metrics?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    async function fetchAnalysis() {
      setLoading(true);
      try {
        // 1. Fetch questionJson
        const qRes = await fetch(`/api/specific-form?formId=${survey.formId}`);
        const qData = await qRes.json();
        if (!qData.success) throw new Error(qData.error || "Failed to fetch form");
        const questions = qData.json;

        // 2. Fetch all user responses
        const aRes = await fetch(`/api/responses?formId=${survey.formId}`);
        const aData = await aRes.json();
        if (!aData.success) throw new Error(aData.error || "Failed to fetch responses");
        const answers = aData;

        // 3. Call chart-analysis API
        const response = await fetch('/api/chart-analysis', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ questionJson: questions, usersAnswerJson: answers }),
        });
        if (!response.ok) {
          throw new Error(`API call failed with status: ${response.status}`);
        }
        const analysisData = await response.json();

        // 4. Parse and assign chart data/config
        setPieChartData(analysisData.pieChartAnalysis.chartData);
        setPieChartConfig(analysisData.pieChartAnalysis.chartConfig);
        setRadarChartData(analysisData.radarChartAnalysis.chartData);
        setRadarChartConfig(analysisData.radarChartAnalysis.chartConfig);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Failed to fetch or parse chart analysis:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchAnalysis();
  }, [survey.formId]);

  const sendMessage = () => {
    if (!inputMessage.trim()) return;
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Based on the current survey analytics, I can see that satisfaction levels are trending upward with a 5.2% increase this month. The response breakdown shows strong engagement across all categories, and our performance metrics indicate excellent completion rates and response quality.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="min-h-screen bg-black p-4">
      <button onClick={onBack} className="mb-4 px-4 py-2 bg-blue-700 text-white rounded-lg"> &#8592;</button>
      <div className="grid grid-cols-2 gap-4 h-[calc(100vh-6rem)] max-h-screen">
        {/* Bar Chart - Top Left */}
        <div className="min-h-0 flex flex-col">
          <SurveyBarChart />
        </div>

        {/* Pie Chart - Top Right */}
        <div className="min-h-0 flex flex-col">
          <ChartPieEnhanced chartData={pieChartData} chartConfig={pieChartConfig} />
        </div>

        {/* Chatbot Container - Bottom Left */}
        <div className="min-h-0 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 h-full relative overflow-hidden border border-white/20 shadow-2xl flex flex-col"
          >
            <div className="absolute inset-0 bg-gray-900/40 rounded-2xl"></div>
            <div className="relative z-10 h-full flex flex-col min-h-0">
              <div className="flex items-center gap-3 mb-3 flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-white">CHATBOT ASSISTANT</h3>
              </div>

              <ScrollArea className="flex-1 mb-3 pr-2 min-h-0">
                <div className="space-y-2">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`$ {
                          message.sender === "user"
                            ? "max-w-[80%] p-2 rounded-lg bg-blue-600/90 backdrop-blur-sm text-white text-sm"
                            : "w-full p-3 rounded-lg bg-gray-800/80 backdrop-blur-sm text-slate-100 border border-white/20"
                        }`}
                      >
                        <p className={message.sender === "bot" ? "text-sm leading-relaxed" : "text-sm"}>
                          {message.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="flex gap-2 flex-shrink-0">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask about your survey data..."
                  className="flex-1 bg-gray-800/60 border-white/30 text-white placeholder:text-gray-300 backdrop-blur-sm h-9 text-sm"
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                />
                <Button
                  onClick={sendMessage}
                  size="sm"
                  className="bg-blue-600/80 hover:bg-blue-700/80 backdrop-blur-sm border border-blue-500/30 h-9 w-9 p-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Radar Chart - Bottom Right */}
        <div className="min-h-0 flex flex-col">
          <ChartRadarEnhanced chartData={radarChartData} chartConfig={radarChartConfig} />
        </div>
      </div>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="flex flex-col items-center">
            <svg className="animate-spin h-10 w-10 text-blue-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
            </svg>
            <span className="text-white text-lg font-semibold">Loading analytics...</span>
          </div>
        </div>
      )}
    </motion.div>
  );
}
