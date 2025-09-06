"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { FloatingDock } from "@/components/ui/floating-dock"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  IconHome,
  IconTerminal2,
  IconNewSection,
  IconFileText,
  IconRocket,
} from "@tabler/icons-react"

export default function FloatingDockWithNightMode({
  className,
  mobileClassName,
}: {
  className?: string
  mobileClassName?: string
}) {
  const { theme, setTheme } = useTheme()

  const items = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Features",
      icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#features",
    },
    {
      title: "How it Works",
      icon: <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#how-it-works",
    },
    {
      title: "Read Docs",
      icon: <IconFileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#docs",
    },
  ] as const

  return (
    <div className="flex items-center">
      {/* Veribee Logo on the left */}
      <div className="mr-[100px]"> {/* 100px gap from logo to dock */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
            <IconRocket className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Veribee
          </span>
        </Link>
      </div>
      
      <FloatingDock items={items as any} desktopClassName={className} mobileClassName={mobileClassName} />
      
      <div className="ml-[100px]"> {/* 100px gap from dock to launch app button */}
        <Link href="/dashboard">
          <Button
            className="bg-blue-950/80 backdrop-blur-md text-blue-100 border border-blue-500/30 hover:border-blue-400/50 transition-all font-sans px-6 py-3 text-base whitespace-nowrap rounded-[1.75rem]"
          >
            Launch App
          </Button>
        </Link>
      </div>
    </div>
  )
}

export { FloatingDockWithNightMode }