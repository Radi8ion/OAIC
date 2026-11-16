'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ChevronUp, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/cn';

const maintainers: { name: string; href?: string }[] = [
  { name: 'Manish Prakash', href: 'https://www.linkedin.com/in/manishx/' },
  { name: 'Mohit Kumar', href: 'https://www.linkedin.com/in/mohit-kumar-1978a7351/' },
  { name: 'Rasmiranjan' },
  { name: 'Preeti Mahapatra' },
  { name: 'Waiz Alam' },
];

export default function NexusCredit() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative flex items-center gap-2 text-xs text-gray-400">
      <span>Website managed and maintained by</span>
      <a
        href="https://nexusopen.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 font-semibold tracking-wide text-white hover:text-white"
      >
        <Image src="/images/nexus-logo.png" alt="" width={512} height={488} className="h-4 w-auto" />
        NEXUS
      </a>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="nexus-maintainers"
        aria-label="Show website maintainers"
        className="rounded p-0.5 text-gray-400 hover:bg-white/10 hover:text-white"
      >
        <ChevronUp className={cn('h-4 w-4 transition-transform', !open && 'rotate-180')} aria-hidden />
      </button>

      {open && (
        <div
          id="nexus-maintainers"
          className="animate-dropdown absolute bottom-full right-0 z-20 mb-2 w-48 overflow-hidden rounded-md border border-white/10 bg-primary-900 shadow-lg"
        >
          <p className="border-b border-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-white/60">
            Maintainers
          </p>
          <ul className="py-1">
            {maintainers.map((m) => (
              <li key={m.name}>
                {m.href ? (
                  <a
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-1.5 text-xs text-white/90 hover:bg-white/10 hover:text-white"
                  >
                    {m.name}
                    <ExternalLink className="h-3 w-3 text-white/50" aria-label="LinkedIn profile" />
                  </a>
                ) : (
                  <span className="block px-3 py-1.5 text-xs text-white/90">{m.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
