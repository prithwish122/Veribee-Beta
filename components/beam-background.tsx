"use client"

import { useMemo } from "react"
import { cn } from "@/lib/utils"
import { GridBeams } from "@/components/magicui/grid-beams"

type Beam = {
  left: string
  rotation: number
  delay: number
  duration: number
  width: string
  opacity: number
}

export function BeamBackground() {
  // Bluish moving beams with subtle cyan accent
  const beams = useMemo<Beam[]>(() => {
    const count = 8
    return Array.from({ length: count }).map((_, i) => ({
      left: `${(i / count) * 100}%`,
      rotation: -25 + Math.random() * 50,
      delay: Math.random() * 4,
      duration: 8 + Math.random() * 6,
      width: `${38 + Math.random() * 22}vw`,
      opacity: 0.15 + Math.random() * 0.25,
    }))
  }, [])

  return (
    <GridBeams
      gridSize={0}
      gridColor="rgba(255, 255, 255, 0.2)"
      rayCount={20}
      rayOpacity={0.55}
      raySpeed={1.5}
      rayLength="40vh"
      gridFadeStart={5}
      gridFadeEnd={90}
      className="h-full w-full"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden",
          // Subtle bluish glow
          "bg-[radial-gradient(60%_50%_at_50%_0%,rgba(37,99,235,0.22),transparent_70%)]",
          "dark:bg-[radial-gradient(60%_50%_at_50%_0%,rgba(29,78,216,0.3),transparent_70%)]",
        )}
        aria-hidden="true"
      >
        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.06] [background:linear-gradient(to_right,rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:40px_40px]" />
        {/* Beams */}
        {beams.map((b, i) => (
          <div
            key={i}
            className="absolute top-[-30%] h-[160%] translate-x-[-50%] blur-2xl will-change-transform"
            style={{
              left: b.left,
              opacity: b.opacity,
              width: b.width,
              transform: `rotate(${b.rotation}deg)`,
              animation: `beam-move ${b.duration}s ease-in-out ${b.delay}s infinite alternate`,
              background: "linear-gradient(90deg, rgba(56,189,248,0.0), rgba(59,130,246,0.6), rgba(56,189,248,0.0))",
            }}
          />
        ))}
      </div>
    </GridBeams>
  )
}
