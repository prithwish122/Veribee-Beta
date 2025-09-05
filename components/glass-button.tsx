"use client"

import type React from "react"

const GlassButton = ({
  children,
  onClick,
  disabled = false,
  className = "",
}: {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
}) => {
  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/20 p-1">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-full py-3 px-6 bg-black/30 hover:bg-black/40 text-white font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center space-x-2 text-base ${className}`}
      >
        {children}
      </button>
    </div>
  )
}

export default GlassButton
