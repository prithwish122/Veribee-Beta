"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export const description = "A radar chart with dots"


const defaultChartData = [
  { metric: "Engagement", score: 186 },
  { metric: "Completion", score: 305 },
  { metric: "Quality", score: 237 },
  { metric: "Response Time", score: 273 },
  { metric: "Accuracy", score: 209 },
  { metric: "Satisfaction", score: 214 },
];

const defaultChartConfig = {
  score: {
    label: "Score",
    color: "#3b82f6",
  },
} satisfies ChartConfig;

export function ChartRadarEnhanced({ chartData = defaultChartData, chartConfig = defaultChartConfig }: {
  chartData?: typeof defaultChartData,
  chartConfig?: typeof defaultChartConfig
}) {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 h-full relative overflow-hidden border border-white/20 shadow-2xl">
      <div className="absolute inset-0 bg-gray-900/40 rounded-2xl"></div>
      <div className="relative z-10 h-full flex flex-col">
        <div className="items-center pb-4">
          <h3 className="text-xl font-bold text-white mb-2">TOP INFLUENCING PARAMETERS</h3>
          {/* <p className="text-blue-200 text-sm">Survey performance indicators</p> */}
        </div>
        <div className="pb-0 flex-1">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px] w-full"
          >
            <RadarChart
              data={chartData}
              width={250}
              height={250}
            >
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <PolarAngleAxis dataKey="metric" className="text-white text-[15px]" />
              <PolarGrid className="stroke-white/20" />
              <Radar
                dataKey="score"
                fill="#3b82f6"
                fillOpacity={0.6}
                stroke="#3b82f6"
                dot={{
                  r: 3, // smaller dot radius
                  fillOpacity: 1,
                }}
              />
            </RadarChart>
          </ChartContainer>
        </div>
        <div className="flex-col gap-2 text-sm pt-4">
          {/* <div className="flex items-center gap-2 leading-none font-medium text-white">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div> */}
          <div className="text-blue-200 flex items-center gap-2 leading-none">Current Radar Representation</div>
        </div>
      </div>
    </div>
  );
}
export { RadarChart }

