export function PrimaryCTA() {
  return (
    <div className="mt-8 flex flex-col items-center gap-2">
      <a
        href="#get-started"
        className="inline-flex items-center justify-center rounded-xl bg-[linear-gradient(180deg,#1f3a8a_0%,#3b82f6_60%,#93c5fd_100%)] px-6 py-3 font-semibold text-white shadow-[0_8px_40px_-12px_rgba(59,130,246,0.6)] hover:shadow-[0_12px_50px_-12px_rgba(59,130,246,0.75)] transition-shadow"
      >
        Get started for free
      </a>
      <p className="text-xs text-white/60">No credit card required</p>
    </div>
  )
}
