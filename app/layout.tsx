import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import GsapSmoothScroller from "@/components/gsap-smooth-scroller"
import { FloatingDockWithNightMode } from "@/components/floating-dock-with-night-mode"
import ContextProvider from "@/context"
import { headers } from 'next/headers' // added
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Veribee | Beta",
  description: "AI-Powered Survey Platform for Rapid Insights",
  icons: {
    icon: "/favicon.ico",
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersObj = await headers();
  const cookies = headersObj.get('cookie')
  return (
    <html lang="en" className="min-h-screen">
      <body className={`min-h-screen min-h-dvh bg-transparent font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
             <ContextProvider cookies={cookies}>
              {/* <Navbar /> */}
               {children}
               <Toaster />
             </ContextProvider>
            
            {/* <GsapSmoothScroller smoothness={0.06}>{children}</GsapSmoothScroller> */}
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
