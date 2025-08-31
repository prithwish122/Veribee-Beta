"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Loader from "@/components/loader"

type SplashLoaderProps = {
  children: React.ReactNode
  minDurationMs?: number
}

export default function SplashLoader({ children, minDurationMs = 1200 }: SplashLoaderProps) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShow(false), Math.max(0, minDurationMs))
    return () => clearTimeout(t)
  }, [minDurationMs])

  if (show) {
    return (
      <div
        className="fixed inset-0 z-50 grid place-items-center bg-black text-foreground"
        role="status"
        aria-live="polite"
        aria-label="Loading"
      >
        <Loader />
      </div>
    )
  }

  return <>{children}</>
}
