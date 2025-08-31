import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import GsapSmoothScroller from "@/components/gsap-smooth-scroller"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={`min-h-screen min-h-dvh bg-transparent font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <GsapSmoothScroller smoothness={0.08}>{children}</GsapSmoothScroller>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
