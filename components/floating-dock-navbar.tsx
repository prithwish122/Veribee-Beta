"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { FloatingDock } from "@/components/ui/floating-dock"
import { IconMoonStars } from "@tabler/icons-react"
import { useTheme } from "next-themes"

function ThemeDockIcon() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const isDark = (resolvedTheme ?? theme) === "dark"

  function handleClick(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Toggle dark mode"
      className="flex h-full w-full items-center justify-center text-neutral-600 dark:text-neutral-200"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <IconMoonStars className="h-full w-full" />
    </button>
  )
}

export function FloatingDockNavbar() {
  const [atTop, setAtTop] = useState(true)

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 80)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    {
      title: "Toggle theme",
      icon: <ThemeDockIcon />,
      href: "#",
    },
  ]

  return (
    <div
      className={cn(
        "fixed left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ease-out",
        atTop ? "top-4" : "bottom-4",
      )}
      role="navigation"
      aria-label="Floating dock navigation"
    >
      <FloatingDock items={links} />
    </div>
  )
}
