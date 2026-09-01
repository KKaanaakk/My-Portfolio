import './globals.css';
import type { Metadata } from 'next';
import { Barlow_Condensed, Public_Sans, IBM_Plex_Mono } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { site } from '@/lib/site';

const display = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${site.name} · Full-stack developer`,
  description:
    'Full-stack developer in Pune. Ships AI in production. Publishes cybersecurity research.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-ink focus:px-4 focus:py-2 focus:text-limestone"
        >
          Skip to content
        </a>
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main id="content" className="flex-grow pt-[4.25rem]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
