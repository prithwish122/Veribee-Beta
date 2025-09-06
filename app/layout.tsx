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

export const metadata: Metadata = {
  title: "Veribee | Beta",
  description: "",
  generator: "",
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
               {children}
             </ContextProvider>
            
            {/* <GsapSmoothScroller smoothness={0.06}>{children}</GsapSmoothScroller> */}
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
