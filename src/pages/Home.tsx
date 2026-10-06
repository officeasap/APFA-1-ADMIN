
const commandAreas = [
  {
    label: "PEOPLE",
    description: "Academy users, applicants, coaches, and administrative identities.",
    state: "AWAITING API",
  },
  {
    label: "ADMINISTRATION",
    description: "Subscription decisions, authority controls, and operational administration.",
    state: "AWAITING API",
  },
  {
    label: "FOOTBALL",
    description: "Training operations, programmes, coaches, and academy activity.",
    state: "AWAITING API",
  },
  {
    label: "EDUCATION",
    description: "Courses, lessons, learning progress, and educational operations.",
    state: "AWAITING API",
  },
  {
    label: "RECORDS",
    description: "Certificates, participant records, and canonical academy history.",
    state: "AWAITING API",
  },
  {
    label: "AUDIT",
    description: "Administrative activity, decisions, and system traceability.",
    state: "AWAITING API",
  },
] as const;

const systemState = [
  {
    label: "API",
    value: "NOT CONNECTED",
  },
  {
    label: "DATABASE",
    value: "NOT CONNECTED",
  },
  {
    label: "SESSION",
    value: "NOT CONNECTED",
  },
  {
    label: "ENVIRONMENT",
    value: "PRODUCTION",
  },
] as const;

export function Home() {
  return (
    <div className="space-y-6">
      <section className="apfa-admin-object overflow-hidden p-8 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(260px,0.6fr)] lg:items-end">
          <div>
            <p className="apfa-admin-kicker text-[var(--apfa-admin-ember)]">
              MASTER MAXX / COMMAND OVERVIEW
            </p>

            <h2 className="apfa-admin-editorial mt-4 max-w-4xl text-5xl leading-[0.9] text-[var(--apfa-admin-paper)] sm:text-6xl">
              Administrative
              <br />
              Command Surface
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-[var(--apfa-admin-paper)]/68">
              Central control surface for Allen Premier Football Academy
              administration. Operational data remains intentionally
              disconnected until the canonical backend boundary is connected.
            </p>
          </div>

          <div className="apfa-admin-pressed rounded-2xl bg-[rgba(0,0,0,0.2)] p-5">
            <p className="apfa-admin-kicker text-[var(--apfa-admin-paper)]/45">
              AUTHORITY
            </p>

            <p className="apfa-admin-mono mt-4 text-lg font-semibold text-[var(--apfa-admin-paper)]">
              MASTER MAXX
            </p>

            <p className="mt-1 text-xs leading-5 text-[var(--apfa-admin-paper)]/48">
              CHAIRMAN SUPER-ADMIN
            </p>

            <div className="mt-6 border-t border-[rgba(255,255,255,0.08)] pt-4">
              <p className="apfa-admin-kicker text-[var(--apfa-admin-paper)]/40">
                COMMAND STATE
              </p>

              <p className="apfa-admin-mono mt-2 text-sm text-[var(--apfa-admin-ember)]">
                INITIALIZING
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="apfa-admin-object p-6">
          <p className="apfa-admin-kicker text-[var(--apfa-admin-ember)]">
            PEOPLE
          </p>

          <p className="apfa-admin-numeric mt-5 text-4xl text-[var(--apfa-admin-paper)]">
            —
          </p>

          <p className="mt-3 text-xs leading-5 text-[var(--apfa-admin-paper)]/48">
            Awaiting canonical people data.
          </p>
        </article>

        <article className="apfa-admin-object p-6">
          <p className="apfa-admin-kicker text-[var(--apfa-admin-ember)]">
            DECISIONS
          </p>

          <p className="apfa-admin-numeric mt-5 text-4xl text-[var(--apfa-admin-paper)]">
            —
          </p>

          <p className="mt-3 text-xs leading-5 text-[var(--apfa-admin-paper)]/48">
            Subscription decisions will appear here.
          </p>
        </article>

        <article className="apfa-admin-object p-6">
          <p className="apfa-admin-kicker text-[var(--apfa-admin-ember)]">
            AUDIT
          </p>

          <p className="apfa-admin-numeric mt-5 text-4xl text-[var(--apfa-admin-paper)]">
            —
          </p>

          <p className="mt-3 text-xs leading-5 text-[var(--apfa-admin-paper)]/48">
            Audit activity will appear here.
          </p>
        </article>
      </section>

      <section className="apfa-admin-object p-6 sm:p-8">
        <div className="flex flex-col gap-3 border-b border-[rgba(255,255,255,0.08)] pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="apfa-admin-kicker text-[var(--apfa-admin-ember)]">
              CONTROL DOMAINS
            </p>

            <h3 className="apfa-admin-editorial mt-2 text-4xl leading-none text-[var(--apfa-admin-paper)]">
              Administrative Areas
            </h3>
          </div>

          <p className="apfa-admin-mono text-[10px] text-[var(--apfa-admin-paper)]/38">
            LIVE DATA / PENDING CONNECTION
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {commandAreas.map((area) => (
            <article
              key={area.label}
              className="apfa-admin-pressed rounded-2xl bg-[rgba(0,0,0,0.16)] p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="apfa-admin-kicker text-[var(--apfa-admin-paper)]/70">
                  {area.label}
                </p>

                <span className="apfa-admin-mono shrink-0 text-[9px] text-[var(--apfa-admin-ember)]">
                  {area.state}
                </span>
              </div>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--apfa-admin-paper)]/58">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <article className="apfa-admin-object p-6 sm:p-8">
          <p className="apfa-admin-kicker text-[var(--apfa-admin-ember)]">
            PRODUCTION
          </p>

          <h3 className="apfa-admin-editorial mt-3 text-4xl leading-none text-[var(--apfa-admin-paper)]">
            System State
          </h3>

          <div className="mt-7 space-y-3">
            {systemState.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-4 rounded-xl bg-[rgba(0,0,0,0.16)] px-4 py-3"
              >
                <span className="apfa-admin-mono text-[10px] text-[var(--apfa-admin-paper)]/48">
                  {item.label}
                </span>

                <span
                  className={
                    item.value === "PRODUCTION"
                      ? "apfa-admin-mono text-[10px] text-[var(--apfa-admin-success)]"
                      : "apfa-admin-mono text-[10px] text-[var(--apfa-admin-paper)]/42"
                  }
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </article>

        <article className="apfa-admin-object p-6 sm:p-8">
          <p className="apfa-admin-kicker text-[var(--apfa-admin-ember)]">
            COMMAND PRINCIPLE
          </p>

          <blockquote className="apfa-admin-editorial mt-5 max-w-3xl text-3xl leading-tight text-[var(--apfa-admin-paper)] sm:text-4xl">
            No administrative state is presented as live until the canonical
            backend confirms it.
          </blockquote>

          <div className="mt-7 border-t border-[rgba(255,255,255,0.08)] pt-5">
            <p className="apfa-admin-mono text-xs leading-6 text-[var(--apfa-admin-paper)]/45">
              UI FOUNDATION / CANONICAL BACKEND PENDING
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
