import { CalendarCheck, CheckCircle2, Folder, Inbox, ListChecks } from "lucide-react"

export function HeroFloatingCards() {
  return (
    <div className="relative mx-auto mt-12 grid w-full max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)_260px] lg:gap-8 lg:px-8">
      {/* Left sidebar: categories */}
      <aside className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]">
        <div className="p-4">
          <h3 className="mb-3 text-sm font-semibold text-white/90">Categories</h3>
          <ul className="flex flex-col gap-2">
            {[
              { icon: Inbox, label: "Today" },
              { icon: Folder, label: "Work" },
              { icon: CalendarCheck, label: "Upcoming" },
              { icon: CheckCircle2, label: "Completed" },
            ].map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"
              >
                <Icon className="size-4 text-blue-400" aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Center: main task card */}
      <main className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <div className="text-sm font-medium text-white/90">Upcoming tasks</div>
          <div className="text-xs text-white/60">Auto-sorted</div>
        </div>
        <ul className="divide-y divide-white/10">
          {[
            { title: "Design wireframes for onboarding", due: "Today, 5:00 PM" },
            { title: "Prepare sprint planning notes", due: "Tomorrow, 10:00 AM" },
            { title: "Email client about requirements", due: "Fri, 1:30 PM" },
            { title: "Refactor task service module", due: "Mon, 11:00 AM" },
          ].map((t, i) => (
            <li
              key={i}
              className="group flex items-center justify-between px-5 py-4 hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-6 place-items-center rounded-md border border-white/10 bg-white/5 group-hover:bg-white/10">
                  <ListChecks className="size-3.5 text-blue-400" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-medium text-white/90">{t.title}</p>
                  <p className="text-xs text-white/60">{t.due}</p>
                </div>
              </div>
              <button
                className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80 hover:bg-white/10 hover:text-white"
                aria-label="Mark done"
              >
                Mark done
              </button>
            </li>
          ))}
        </ul>
      </main>

      {/* Right: utility tags */}
      <aside className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)]">
        <div className="p-4">
          <h3 className="mb-3 text-sm font-semibold text-white/90">Quick labels</h3>
          <div className="grid grid-cols-3 gap-3">
            {["UI", "Docs", "Bug", "API", "UX", "Perf"].map((t, i) => (
              <span
                key={i}
                className="grid place-items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 ring-1 ring-blue-400/20 hover:ring-blue-400/40 hover:bg-white/10 transition"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </div>
  )
}
