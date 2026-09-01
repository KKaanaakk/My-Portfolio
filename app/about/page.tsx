'use client';

import PageIntro from '@/components/PageIntro';
import SpecFrame from '@/components/SpecFrame';
import { education, marks, site, skillGroups } from '@/lib/site';

export default function About() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <PageIntro kicker="Spec · About" title="Working notes">
        Full-stack from Pune. I design the feature, the API, and the performance budget — then keep
        the code something another engineer can live in.
      </PageIntro>

      <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
        <SpecFrame className="p-6 sm:p-8">
          <p className="spec-kicker">Profile</p>
          <p className="mt-5 text-lg leading-relaxed text-foreground">
            {site.name} builds production systems in React and Node, with Python when the problem
            wants a model or a service. Recent work is live analytics and AI assistance at{' '}
            {site.now.company}. Before that, recruitment agents at Skitre.ai. The through-line is
            the same: ship the product, then make the internals hold.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The academic spine is cyber security — M.Tech at PES, a CNN for SYN flood detection
            that made it into IEEE. That research habit still shows up in how I treat auth, data,
            and anything that faces a network.
          </p>
        </SpecFrame>

        <div>
          <p className="spec-kicker">Education</p>
          <ol className="mt-6 space-y-8">
            {education.map((item) => (
              <li key={item.degree} className="border-l-2 border-signal pl-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {item.period}
                </p>
                <h2 className="mt-2 font-display text-3xl uppercase leading-none tracking-tight">
                  {item.degree}
                </h2>
                <p className="mt-2 text-foreground">{item.school}</p>
                <p className="text-muted-foreground">{item.focus}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <section className="mt-20">
        <p className="spec-kicker">Legend</p>
        <h2 className="spec-title mt-3 text-4xl sm:text-5xl">Tools on the bench</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label} className="border-t border-ink/20 pt-5">
              <h3 className="font-mono text-[12px] uppercase tracking-[0.2em] text-signal-deep">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="spec-chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 border-t border-ink/20 pt-10">
        <p className="spec-kicker">Marks</p>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {marks.map((mark) => (
            <article key={mark.title}>
              <h3 className="font-display text-2xl uppercase leading-tight tracking-tight">
                {mark.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{mark.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
