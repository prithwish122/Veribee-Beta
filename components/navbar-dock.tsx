"use client"

import { useEffect, useState } from "react"
import { FloatingDock } from "@/components/ui/floating-dock"
import { ThemeToggle } from "@/components/theme-toggle"
import { IconBrandGithub, IconBrandX, IconExchange, IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react"

export function NavbarDock() {
  const [toBottom, setToBottom] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setToBottom(window.scrollY > 40)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
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
  ]

  return (
    <div
      className={[
        "z-50 flex w-full items-center justify-center gap-2 px-4",
        toBottom ? "fixed bottom-6 left-1/2 -translate-x-1/2" : "absolute top-4 left-1/2 -translate-x-1/2",
      ].join(" ")}
      role="navigation"
      aria-label="Floating dock navigation"
    >
      <FloatingDock items={links} />
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
    </div>
  )
}
