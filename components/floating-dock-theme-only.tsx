"use client"

import { FloatingDock } from "@/components/ui/floating-dock"
import { useTheme } from "next-themes"
import { IconMoonStars } from "@tabler/icons-react"

export default function FloatingDockThemeOnly({
  desktopClassName,
  mobileClassName,
}: {
  desktopClassName?: string
  mobileClassName?: string
}) {
  const { resolvedTheme, setTheme } = useTheme()

  const items = [
    {
      title: "Toggle dark mode",
      href: "#",
      icon: (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            setTheme(resolvedTheme === "dark" ? "light" : "dark")
          }}
          aria-label="Toggle dark mode"
          className="flex h-full w-full items-center justify-center"
        >
          <IconMoonStars className="h-full w-full text-neutral-600 dark:text-neutral-200" />
        </button>
      ),
    },
  ]

  return <FloatingDock items={items} desktopClassName={desktopClassName} mobileClassName={mobileClassName} />
}
