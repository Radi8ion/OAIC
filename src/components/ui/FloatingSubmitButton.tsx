'use client';

import Link from 'next/link';
import { FileUp, ExternalLink } from 'lucide-react';

export default function FloatingSubmitButton() {
  const submitUrl =
    'https://edas.info/login.php?rurl=aHR0cHM6Ly9lZGFzLmluZm8vTjM1MzYxP2M9MzUzNjE%3D';

  return (
    <aside
      aria-label="Paper submission quick action"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 group"
    >
      {/* Decorative accent border frame */}
      <div className="absolute -bottom-1.5 -right-1.5 w-full h-full border-2 border-[#E58A3E] rounded-xl z-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />

      <Link
        href={submitUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 flex items-center gap-3 bg-[#0C527D] hover:bg-[#08283C] text-white px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-0.5 border border-white/20"
      >
        {/* Pulsing Icon Indicator */}
        <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 text-amber-300">
          <FileUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
          </span>
        </span>

        {/* Text Details */}
        <span className="flex flex-col text-left">
          <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300">
            EDAS Portal
          </span>
          <span className="text-sm sm:text-base font-extrabold tracking-wide text-white leading-tight flex items-center gap-1.5">
            Submit Paper
            <ExternalLink className="h-3.5 w-3.5 text-white/70 group-hover:text-white transition-colors" />
          </span>
        </span>
      </Link>
    </aside>
  );
}
