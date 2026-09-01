'use client';

import PageIntro from '@/components/PageIntro';
import { experiences } from '@/lib/site';

export default function Experience() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <PageIntro kicker="Log · Experience" title="Shift log">
        Two companies. Same job: take a fuzzy product idea and leave behind a system people can
        actually run.
      </PageIntro>

      <ol className="mt-16 space-y-6">
        {experiences.map((exp) => (
          <li key={exp.company}>
            <article className="grid gap-8 border border-ink/20 bg-panel/40 p-6 sm:p-8 lg:grid-cols-[11rem_1fr]">
              <div className="lg:border-r lg:border-hairline lg:pr-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {exp.start}
                </p>
                {exp.current ? (
                  <p className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-moss">
                    <span className="live-dot" aria-hidden />
                    Current
                  </p>
                ) : (
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Closed
                  </p>
                )}
              </div>

              <div>
                <p className="spec-kicker">{exp.period}</p>
                <h2 className="mt-2 font-display text-4xl uppercase leading-none tracking-tight sm:text-5xl">
                  {exp.company}
                </h2>
                <p className="mt-3 text-lg text-foreground">{exp.role}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {exp.tech.map((item) => (
                    <li key={item} className="spec-chip">
                      {item}
                    </li>
                  ))}
                </ul>

                <ul className="mt-8 space-y-4">
                  {exp.achievements.map((item) => (
                    <li
                      key={item}
                      className="grid grid-cols-[0.75rem_1fr] gap-3 leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 block h-1.5 w-1.5 bg-signal" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
