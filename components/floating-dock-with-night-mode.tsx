"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { FloatingDock } from "@/components/ui/floating-dock"
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconMoonStars,
} from "@tabler/icons-react"

export default function FloatingDockWithNightMode({
  className,
  mobileClassName,
}: {
  className?: string
  mobileClassName?: string
}) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = React.useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.preventDefault()
      setTheme(theme === "dark" ? "light" : "dark")
    },
    [theme, setTheme],
  )

  const items = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Products",
      icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Components",
      icon: <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: <img src="https://assets.aceternity.com/logo-dark.png" width={20} height={20} alt="Aceternity Logo" />,
      href: "#",
    },
    {
      title: "Changelog",
      icon: <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: theme === "dark" ? "Light Mode" : "Dark Mode",
      icon: <IconMoonStars className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      onClick: toggleTheme,
    },
  ] as const

  return <FloatingDock items={items as any} desktopClassName={className} mobileClassName={mobileClassName} />
}

export { FloatingDockWithNightMode }
