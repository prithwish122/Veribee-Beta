export function TrustStrip() {
  return (
    <section className="mx-auto mt-16 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <p className="text-center text-sm text-white/70">Trusted by over 50,000 designers and developers</p>

      <h3 className="mt-6 text-center text-balance text-xl font-bold text-white sm:text-2xl">
        Three simple steps to organized bliss
      </h3>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          {
            title: "Capture",
            desc: "Quickly add tasks with smart defaults and shortcuts.",
          },
          {
            title: "Organize",
            desc: "Group by project, priority, or deadline with filters.",
          },
          {
            title: "Conquer",
            desc: "Focus mode and reminders keep you moving forward.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-white/90 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] hover:bg-white/7 transition-colors"
          >
            <h4 className="text-base font-semibold">{card.title}</h4>
            <p className="mt-2 text-sm text-white/70">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
