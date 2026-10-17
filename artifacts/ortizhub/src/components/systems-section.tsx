import { systemsAndAi, type SystemStatus } from "@/data/systems";

const statusClasses: Record<SystemStatus, string> = {
  "In Development": "border-primary/40 bg-primary/10 text-primary",
  "Coming Soon": "border-border bg-secondary/40 text-muted-foreground",
  Live: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
};

export function SystemsSection() {
  return (
    <section className="border-t border-border bg-secondary/10 py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Systems &amp; AI
          </span>
          <h2 className="mb-5 text-3xl font-bold text-white md:text-5xl">
            OrtizHub Systems &amp; AI
          </h2>
          <p className="text-lg text-muted-foreground">
            Systems built to help builders manage, grow and automate.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {systemsAndAi.map((system) => (
            <article
              key={system.title}
              className="flex h-full flex-col border border-border bg-secondary/30 p-7"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold leading-snug text-white">
                  {system.title}
                </h3>
                <span
                  className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[system.status]}`}
                >
                  {system.status}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {system.description}
              </p>
              {system.workers && (
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="AI workers">
                  {system.workers.map((worker) => (
                    <li
                      key={worker}
                      className="rounded-full border border-border px-3 py-1 text-xs text-white/80"
                    >
                      {worker}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <p className="mt-7 text-center text-xs leading-relaxed text-muted-foreground">
          These systems are in development. Nothing here is financial advice or a promise of returns.
        </p>
      </div>
    </section>
  );
}
