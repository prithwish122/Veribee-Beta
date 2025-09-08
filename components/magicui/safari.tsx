import type * as React from "react"
import { cn } from "@/lib/utils"
import src from "gsap/src"

type SafariProps = {
  url?: string
  className?: string
  children?: React.ReactNode
  videoSrc?: string
  videoProps?: React.VideoHTMLAttributes<HTMLVideoElement>
}

export function Safari({ 
  url = "veribee.tech", 
  className, 
  children,
  videoSrc,
  videoProps 
}: SafariProps) {
  return (
    <div
      className={cn("w-full overflow-hidden rounded-xl border bg-background shadow-sm", className)}
      role="region"
      aria-label="Safari preview"
    >
      {/* Top bar */}
      <div className="flex items-center gap-2 border-b px-3 py-2">
        <div className="flex items-center gap-1.5">
          {/* neutral dots to keep palette compact */}
          <span className="size-3 rounded-full bg-foreground/20" aria-hidden="true" />
          <span className="size-3 rounded-full bg-foreground/20" aria-hidden="true" />
          <span className="size-3 rounded-full bg-foreground/20" aria-hidden="true" />
        </div>
        <div className="mx-auto w-full max-w-xl">
          <div className="rounded-md border bg-muted/50 px-3 py-1.5 text-center text-[13px] text-foreground/70">
            {url}
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="aspect-[16/10] w-full bg-muted/30">
        {src ? (
          <img 
            src=""
            // alt="Dashboard Preview"
            className="h-[800p] w-full "
            
          />
        ) : children ? (
          children
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-foreground/60">Preview area</p>
              <p className="text-xs text-foreground/50">Add any content here.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}