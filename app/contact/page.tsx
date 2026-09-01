'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import PageIntro from '@/components/PageIntro';
import SpecFrame from '@/components/SpecFrame';
import { site } from '@/lib/site';

const channels = [
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    label: 'Phone',
    value: site.phone,
    href: site.phoneHref,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'kanak-joshi',
    href: site.linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'kanakjoshi',
    href: site.github,
    external: true,
  },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <PageIntro kicker="Ping · Contact" title="Send the packet">
        If the work looks like a fit, write. Full-time, freelance, or a sharp consulting problem —
        I read everything that lands.
      </PageIntro>

      <SpecFrame className="mt-16 overflow-hidden">
        <Link
          href={`mailto:${site.email}`}
          className="group block bg-ink px-5 py-10 text-limestone sm:px-10 sm:py-14"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
            Primary channel
          </p>
          <p className="mt-4 break-all font-display text-[clamp(2rem,7vw,5.5rem)] uppercase leading-[0.85] tracking-tight">
            {site.email}
          </p>
          <p className="spec-link mt-6 text-limestone/70 group-hover:text-signal">
            Open mail client
            <ArrowUpRight size={14} />
          </p>
        </Link>
      </SpecFrame>

      <div className="mt-6 grid gap-px bg-ink/15 sm:grid-cols-2">
        {channels.map((channel) => (
          <Link
            key={channel.label}
            href={channel.href}
            target={channel.external ? '_blank' : undefined}
            rel={channel.external ? 'noopener noreferrer' : undefined}
            className="flex items-center justify-between gap-4 bg-limestone px-5 py-6 transition-colors duration-200 hover:bg-panel"
          >
            <span>
              <span className="spec-kicker block">{channel.label}</span>
              <span className="mt-2 block font-display text-2xl uppercase leading-none tracking-tight">
                {channel.value}
              </span>
            </span>
            <ArrowUpRight size={18} strokeWidth={1.75} className="shrink-0 text-muted-foreground" />
          </Link>
        ))}
      </div>

      <div className="mt-16 grid gap-10 border-t border-ink/20 pt-10 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="spec-kicker">Location</p>
          <p className="mt-3 font-display text-4xl uppercase leading-none tracking-tight">
            {site.city}
          </p>
          <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
            {site.coords.lat} · {site.coords.lng}
          </p>
        </div>
        <div>
          <p className="spec-kicker">Available for</p>
          <ul className="mt-4 space-y-2 text-foreground">
            <li>Full-time roles</li>
            <li>Freelance builds</li>
            <li>Consulting</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
