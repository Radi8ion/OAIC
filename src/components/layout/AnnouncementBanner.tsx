import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const EDAS_URL = 'https://edas.info/login.php?rurl=aHR0cHM6Ly9lZGFzLmluZm8vTjM1MzYxP2M9MzUzNjE%3D';

const items = [
  { text: 'Call for Posters: present your ongoing research at OAIC 2026', href: '/authors/call-for-posters' },
  { text: 'Poster abstract submission deadline: 25 November 2026', href: '/authors/call-for-posters' },
  { text: 'Submit posters through the EDAS portal', href: EDAS_URL, external: true },
];

function Sequence({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {[0, 1].flatMap((n) =>
        items.map((item) => (
          <li key={`${n}-${item.text}`} className="flex items-center">
            <Link
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              tabIndex={hidden ? -1 : undefined}
              className="whitespace-nowrap px-6 text-white/90 hover:text-white hover:underline"
            >
              {item.text}
            </Link>
            <span className="h-1 w-1 rounded-full bg-white/40" aria-hidden />
          </li>
        )),
      )}
    </ul>
  );
}

export default function AnnouncementBanner() {
  return (
    <div role="region" aria-label="Announcements" className="bg-primary-950 text-[13px] text-white">
      <div className="flex h-10 items-stretch">
        <span className="flex shrink-0 items-center bg-brand-700 px-3 text-[11px] font-semibold uppercase tracking-wider sm:px-4">
          Notice
        </span>

        <div className="relative min-w-0 flex-1 overflow-hidden">
          <div className="animate-marquee h-full items-center">
            <Sequence />
            <Sequence hidden />
          </div>
        </div>

        <Link
          href="/authors/call-for-posters"
          className="hidden shrink-0 items-center gap-1.5 border-l border-white/15 px-4 text-[13px] font-medium text-white hover:bg-white/10 hover:text-white md:flex"
        >
          Submit a poster
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
