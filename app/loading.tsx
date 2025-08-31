"use client"

import Loader from "@/components/loader"

export default function Loading() {
  return (
    <div
      className="min-h-[100dvh] grid place-items-center bg-black text-foreground"
      role="status"
      aria-live="polite"
      aria-label="Loading content"
    >
      <Loader />
    </div>
  )
}
