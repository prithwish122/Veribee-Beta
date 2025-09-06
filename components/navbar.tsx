"use client"
import { Button } from "@/components/ui/moving-border"
import { Shield, BarChart3, FileText } from "lucide-react"
import Link from "next/link"

export default function VeribeeNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <Shield className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Features",
      link: "#features",
      icon: <Shield className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Docs",
      link: "#how-it-works",
      icon: <BarChart3 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <FileText className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ]

  return (
    <div className="relative w-full">
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[5001] flex items-center gap-x-48">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/veribee.png" alt="Veribee Logo" className="h-8 w-8 rounded-full" />
          <span className="text-blue-200 text-lg font-bold font-sans">Veribee</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center space-x-8 bg-black/80 backdrop-blur-md border border-blue-500/20 rounded-full px-8 py-3 ml-16">
          {/* Navigation Items */}
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="text-blue-200 hover:text-blue-100 transition-colors text-sm font-medium font-sans"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        {/* Launch App Button */}
        <Link href="/dashboard" className="cursor-pointer">
          <Button
            hover="pointer"
            borderRadius="1.75rem"
            className="bg-blue-950/80 backdrop-blur-md text-blue-100 border-blue-500/30 hover:border-blue-400/50 transition-all font-sans cursor-pointer"
          >
            Launch App
          </Button>
        </Link>
        {/* <appkit-button /> */}
      </div>
    </div>
  )
}