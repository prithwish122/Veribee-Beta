import Spline from "@splinetool/react-spline/next"

type InsightIntroProps = {
  className?: string
}

export default function InsightIntro({ className }: InsightIntroProps) {
  return (
    <section
      className={`mx-auto w-full max-w-6xl px-4 md:px-6 ${className ?? ""}`}
      aria-label="Why reliable feedback matters"
    >
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
        {/* Left: copy */}
        <div className="space-y-4">
          <p className="text-pretty text-2xl font-extrabold leading-10 text-foreground md:text-4xl">
            40% of survey responses are fake, 60% of rewards are wasted, and 80% of insights never reach
            decision-makers. The need for reliable, verified feedback has never been higher.
          </p>
        </div>

        {/* Right: Spline canvas (interactive) */}
        <div className="group relative rounded-xl bg-black/20 p-2">
          <div className="relative h-64 w-full overflow-hidden rounded-lg md:h-96">
            <Spline
              scene="https://prod.spline.design/PzRuGNbahKkkOkQ4/scene.splinecode"
              eventsTarget="document"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
// }
//       </div>
//     </section>
//   )
// }
