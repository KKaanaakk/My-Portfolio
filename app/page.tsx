'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import SignalTrace from '@/components/SignalTrace';
import SpecFrame from '@/components/SpecFrame';
import { experiences, projects, site } from '@/lib/site';

const channels = [
  {
    code: 'Now',
    title: site.now.company,
    body: site.now.focus,
    href: '/experience',
  },
  {
    code: 'Was',
    title: experiences[1].company,
    body: 'Recruitment platform. AI agents in text, audio, and video.',
    href: '/experience',
  },
  {
    code: 'Paper',
    title: 'IEEE ATNT',
    body: projects[0].title,
    href: '/projects',
  },
];

export default function Home() {
  const reduce = useReducedMotion();
  const fade = {
    initial: reduce ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-24 sm:px-6 lg:px-8">
      <section className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.7fr)] lg:items-end lg:gap-16 lg:py-16">
        <motion.div {...fade}>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="spec-kicker">{site.city}</p>
            <span className="hidden h-px w-8 bg-hairline sm:block" aria-hidden />
            <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-moss">
              <span className="live-dot" aria-hidden />
              Live · {site.now.company}
            </p>
          </div>
          <h1 className="spec-title mt-5 max-w-[14ch] text-[clamp(4.25rem,16vw,11.5rem)]">
            Kanak
            <span className="block">Joshi</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
            I ship AI in production, then go back and prove the research. Analytics platforms,
            agents, and an IEEE paper on catching SYN floods with a CNN.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="spec-btn">
              Open work
              <ArrowUpRight size={16} strokeWidth={1.75} />
            </Link>
            <Link href="/contact" className="spec-btn-ghost">
              Send a ping
            </Link>
          </div>
        </motion.div>

        <motion.aside
          className="border border-ink/20 bg-panel/70 p-5"
          {...fade}
          transition={{ duration: 0.45, delay: reduce ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="spec-kicker">Instrument</p>
          <dl className="mt-5 space-y-4 font-mono text-[12px] uppercase tracking-[0.16em]">
            <div className="flex justify-between gap-4 border-b border-hairline pb-3">
              <dt className="text-muted-foreground">Role</dt>
              <dd className="text-right text-foreground">{site.now.role}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-hairline pb-3">
              <dt className="text-muted-foreground">Stack</dt>
              <dd className="text-right text-foreground">React · Node · Python</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-hairline pb-3">
              <dt className="text-muted-foreground">Focus</dt>
              <dd className="text-right text-foreground">AI · Security</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Grid</dt>
              <dd className="text-right text-foreground">{site.coords.lat}</dd>
            </div>
          </dl>
        </motion.aside>
      </section>

      <SpecFrame className="px-3 py-6 sm:px-5">
        <SignalTrace />
      </SpecFrame>

      <section className="mt-16 border-t border-ink/20">
        {channels.map((channel) => (
          <Link
            key={channel.code}
            href={channel.href}
            className="group grid gap-2 border-b border-ink/20 py-7 transition-colors duration-200 hover:bg-panel/60 sm:grid-cols-[7rem_1fr_auto] sm:items-baseline sm:gap-8"
          >
            <span className="spec-kicker text-signal-deep">{channel.code}</span>
            <span>
              <span className="block font-display text-3xl uppercase leading-none tracking-tight sm:text-4xl">
                {channel.title}
              </span>
              <span className="mt-2 block max-w-xl text-muted-foreground">{channel.body}</span>
            </span>
            <span className="spec-link self-center">
              Read
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
