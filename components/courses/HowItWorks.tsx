// "How it works" block for course hubs (Accounting, Biology).
//
// Deliberately NOT styled as cards or buttons: no borders, no icons, no hover.
// Students tapped the old step cards expecting them to open something.
// The only clickable element here is the real "Start with topic ..." link.

import Link from "next/link";

export interface HowItWorksStep {
  title: string;
  text: string;
  /** Shows a "coming soon" label for features not built yet */
  soon?: boolean;
}

export default function HowItWorks({
  id,
  title,
  intro,
  steps,
  startHref,
  startLabel,
}: {
  id: string;
  title: string;
  intro: string;
  steps: HowItWorksStep[];
  startHref: string;
  startLabel: string;
}) {
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="text-2xl sm:text-3xl font-bold font-display text-efe-fg">
        {title}
      </h2>
      <p className="mt-2 text-base sm:text-lg text-efe-muted max-w-2xl">{intro}</p>

      <ol className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
        {steps.map((s, i) => (
          <li key={s.title} className="flex items-start gap-4">
            <span
              aria-hidden
              className="mt-0.5 w-9 h-9 shrink-0 rounded-full bg-efe-accent text-white flex items-center justify-center text-base font-bold"
            >
              {i + 1}
            </span>
            <div>
              <h3 className="text-lg font-bold text-efe-fg leading-snug">
                {s.title}
                {s.soon && (
                  <span className="ml-2 align-middle text-xs font-semibold text-efe-muted">
                    (coming soon)
                  </span>
                )}
              </h3>
              <p className="mt-0.5 text-base text-efe-muted leading-relaxed">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <Link href={startHref} className="efe-btn efe-btn-primary">
          {startLabel} →
        </Link>
        <span className="text-sm text-efe-muted">or pick any topic from the list below.</span>
      </div>
    </section>
  );
}
