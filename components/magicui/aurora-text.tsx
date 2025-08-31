import type * as React from "react"

type AuroraTextProps = {
  children: React.ReactNode
  className?: string
}

/**
 * AuroraText
 * Gradient text for hero headlines (bluish theme).
 */
export function AuroraText({ children, className }: AuroraTextProps) {
  return (
    <span
      className={
        "bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent " + (className ?? "")
      }
    >
      {children}
    </span>
  )
}
