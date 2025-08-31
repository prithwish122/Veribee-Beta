import { cn } from "@/lib/utils"

type Props = {
  className?: string
  overlay?: boolean
  src?: string
}

/**
 * BlueBlurBackground
 * Renders the provided blurred blue image as a full-cover background.
 */
export function BlueBlurBackground({ className, overlay = false, src }: Props) {
  return (
    <div aria-hidden role="presentation" className={cn("absolute inset-0 pointer-events-none select-none", className)}>
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${src ?? "/images/blue-blur.png"}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Optional subtle overlay for readability */}
      {overlay && <div className="absolute inset-0 bg-black/20 dark:bg-black/30" />}
    </div>
  )
}
