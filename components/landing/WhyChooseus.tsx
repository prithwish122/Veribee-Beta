import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconShield,
//   IconZap,
  IconLock,
  IconCoins,
} from "@tabler/icons-react";

export default function WhyChoose() {
  return (
    <div className="w-full bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl text-white mb-6 tracking-tight font-bold">
            Why Choose Us?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Advanced solutions for modern data collection and verification needs
          </p>
        </div>
        
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-[#1a1a1a] border border-[#333]"></div>
);

const items = [
  {
    title: "OCID Integration",
    description: "Prevent bots and multiple submissions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconShield className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Instant Insights",
    description: "Clean data, sleek dashboards, decisions in minutes.",
    header: <Skeleton />,
    className: "md:col-span-1",
    // icon: <IconZap className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Agentic Verification",
    description: "Filter out fake and duplicate responses instantly.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconLock className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Escrow-Based Incentivization",
    description: "Rewards are locked and released only for verified and relevant responses.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconCoins className="h-4 w-4 text-neutral-500" />,
  },
];