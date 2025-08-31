"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import type { PropsWithChildren } from "react"

type GridBeamsProps = PropsWithChildren<{
  gridSize?: number
  gridColor?: string
  rayCount?: number
  rayOpacity?: number
  raySpeed?: number
  rayLength?: string
  gridFadeStart?: number
  gridFadeEnd?: number
  className?: string
}>

const range = (n: number) => Array.from({ length: n }, (_, i) => i)

export function GridBeams({
  gridSize = 24,
  gridColor = "rgba(255, 255, 255, 0.1)",
  rayCount = 20,
  rayOpacity = 0.55,
  raySpeed = 1.5,
  rayLength = "40vh",
  gridFadeStart = 5,
  gridFadeEnd = 90,
  className,
  children,
}: GridBeamsProps) {
  return (
    <div className={cn("relative isolate", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px, ${gridSize}px ${gridSize}px`,
          maskImage: `radial-gradient(ellipse at center, rgba(0,0,0,0.8) ${gridFadeStart}%, rgba(0,0,0,0) ${gridFadeEnd}%)`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {range(rayCount).map((i) => {
          const delay = (i * (raySpeed / rayCount)) % raySpeed
          const left = `${i * (100 / rayCount)}%`
          return (
            <span
              key={i}
              style={
                {
                  "--delay": `-${delay}s`,
                  "--speed": `${raySpeed}s`,
                  left,
                } as React.CSSProperties
              }
              className="absolute top-0 h-[200%] w-px rotate-[28deg]"
            >
              <span
                className="absolute top-[-50%] left-0 w-[2px] bg-blue-400/60 dark:bg-cyan-300/60"
                style={
                  {
                    opacity: rayOpacity,
                    animation: "gb-slide var(--speed) linear infinite",
                    animationDelay: "var(--delay)",
                    filter: "blur(0.5px)",
                    ["--rayLength" as any]: rayLength,
                    height: "var(--rayLength)",
                  } as React.CSSProperties
                }
              />
            </span>
          )
        })}
      </div>
      <div className="relative">{children}</div>
      <style>{`
        @keyframes gb-slide {
          0% { transform: translateY(-60%); }
          100% { transform: translateY(160%); }
        }
      `}</style>
    </div>
  )
}
