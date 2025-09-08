"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export const description = "A pie chart with a label"


const defaultChartData = [
  { category: "satisfied", responses: 275, fill: "var(--color-satisfied)" },
  { category: "neutral", responses: 200, fill: "var(--color-neutral)" },
  { category: "dissatisfied", responses: 187, fill: "var(--color-dissatisfied)" },
  { category: "very-satisfied", responses: 173, fill: "var(--color-very-satisfied)" },
  { category: "no-response", responses: 90, fill: "var(--color-no-response)" },
];

const defaultChartConfig = {
  responses: {
    label: "Responses",
  },
  satisfied: {
    label: "Satisfied",
    color: "#3b82f6",
  },
  neutral: {
    label: "Neutral",
    color: "#60a5fa",
  },
  dissatisfied: {
    label: "Dissatisfied",
    color: "#1d4ed8",
  },
  "very-satisfied": {
    label: "Very Satisfied",
    color: "#2563eb",
  },
  "no-response": {
    label: "No Response",
    color: "#1e40af",
  },
} satisfies ChartConfig;

export function ChartPieEnhanced({ chartData = defaultChartData, chartConfig = defaultChartConfig }: {
  chartData?: typeof defaultChartData,
  chartConfig?: typeof defaultChartConfig
}) {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 h-full relative overflow-hidden border border-white/20 shadow-2xl">
      <div className="absolute inset-0 bg-gray-900/40 rounded-2xl"></div>
      <div className="relative z-10 h-full flex flex-col">
        <div className="items-center pb-4">
          <h3 className="text-xl font-bold text-white mb-2">RESPONSE BREAKDOWN</h3>
          {/* <p className="text-blue-200 text-sm">Survey satisfaction levels</p> */}
        </div>
        <div className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="[&_.recharts-pie-label-text]:fill-white mx-auto aspect-square max-h-[250px] pb-0"
          >
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie data={chartData} dataKey="responses" label nameKey="category" />
            </PieChart>
          </ChartContainer>
        </div>
        <div className="flex-col gap-2 text-sm pt-4">
          {/* <div className="flex items-center gap-2 leading-none font-medium text-white">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div> */}
          <div className="text-blue-200 leading-none">Current Pie Representation</div>
        </div>
      </div>
    </div>
  );
}

