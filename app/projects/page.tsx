'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import { projects, site } from '@/lib/site';

export default function Projects() {
  const featured = projects.find((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <PageIntro kicker="Work · Projects" title="Proof of signal">
        Research that cleared peer review, plus the smaller builds that keep the hands sharp.
      </PageIntro>

      {featured ? (
        <article className="mt-16 border border-ink/20 bg-ink p-6 text-limestone sm:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
            {featured.kicker}
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl uppercase leading-[0.9] tracking-tight sm:text-6xl">
            {featured.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-limestone/75">
            {featured.description}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {featured.tech.map((item) => (
              <li
                key={item}
                className="border border-limestone/25 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-limestone/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>
      ) : null}

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((project) => (
          <article key={project.title} className="border border-ink/20 bg-panel/50 p-6 sm:p-8">
            <p className="spec-kicker text-signal-deep">{project.kicker}</p>
            <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] tracking-tight">
              {project.title}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{project.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <li key={item} className="spec-chip">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-ink/20 pt-10 sm:flex-row sm:items-end">
        <div>
          <p className="spec-kicker">Repository</p>
          <p className="mt-3 max-w-md text-muted-foreground">
            The public trail lives on GitHub. Not every experiment is polished. That is the point.
          </p>
        </div>
        <Link
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="spec-btn"
        >
          github.com/kanakjoshi
          <ArrowUpRight size={16} strokeWidth={1.75} />
        </Link>
      </div>
    </div>
  );
}
