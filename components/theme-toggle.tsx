"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const current = theme === "system" ? systemTheme : theme
  const isDark = current === "dark"

  return (
    <button
      type="button"
      onClick={() => mounted && setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-xl px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors"
    >
      {mounted ? (isDark ? "Light mode" : "Dark mode") : "Theme"}
    </button>
  )
}
