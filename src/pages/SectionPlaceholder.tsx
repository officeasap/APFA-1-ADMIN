interface SectionPlaceholderProps {
  title: string;
  kicker: string;
}

export function SectionPlaceholder({
  title,
  kicker,
}: SectionPlaceholderProps) {
  return (
    <section className="apfa-admin-object min-h-[420px] p-8">
      <p className="apfa-admin-kicker text-[var(--apfa-admin-ember)]">
        {kicker}
      </p>

      <h2 className="apfa-admin-editorial mt-3 text-5xl leading-none text-[var(--apfa-admin-paper)]">
        {title}
      </h2>

      <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--apfa-admin-paper)]/65">
        This administrative workspace is reserved for the canonical
        {` ${title.toLowerCase()}`} control surface.
      </p>

      <div className="mt-10 inline-flex items-center rounded-xl bg-[rgba(0,0,0,0.18)] px-4 py-3">
        <span className="apfa-admin-mono text-xs text-[var(--apfa-admin-paper)]/55">
          WORKSPACE / PREPARATION
        </span>
      </div>
    </section>
  );
}