import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-ink/15">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span className="hidden text-hairline sm:inline" aria-hidden>
            /
          </span>
          <span>
            {site.coords.lat} · {site.coords.lng}
          </span>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors duration-200 hover:text-signal"
            aria-label="GitHub"
          >
            <Github size={18} strokeWidth={1.75} />
          </Link>
          <Link
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors duration-200 hover:text-signal"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} strokeWidth={1.75} />
          </Link>
          <Link
            href={`mailto:${site.email}`}
            className="text-muted-foreground transition-colors duration-200 hover:text-signal"
            aria-label="Email"
          >
            <Mail size={18} strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
