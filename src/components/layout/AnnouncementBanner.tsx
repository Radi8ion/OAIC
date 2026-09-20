'use client';

import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function AnnouncementBanner() {
  const announcementText =
    'Date extended upto Sep 30 for Full Paper Submission';

  return (
    <div
      role="region"
      aria-label="Important Announcement"
      className="relative bg-gradient-to-r from-[#061d2d] via-[#0c4063] to-[#061d2d] text-white border-b border-amber-400/30 overflow-hidden text-xs sm:text-sm font-medium z-40"
    >
      <div className="flex items-center h-9 sm:h-10">
        {/* Left Sticky Badge */}
        <div className="relative z-20 flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold px-3 sm:px-4 h-full shrink-0 shadow-md transition-colors">
          <span className="text-base sm:text-lg animate-star-flash leading-none">
            🌟
          </span>
          <span className="text-[10px] sm:text-xs tracking-wider uppercase">
            Notice
          </span>
          <span className="hidden sm:inline-block h-3.5 w-px bg-amber-700/50 mx-0.5" />
          <span className="hidden sm:inline-block text-[11px] font-semibold text-amber-950">
            Updated
          </span>
        </div>

        {/* Continuous Running Marquee */}
        <div className="relative flex-1 overflow-hidden h-full flex items-center">
          <div className="animate-marquee items-center whitespace-nowrap py-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-6 sm:gap-10 px-4 sm:px-6">
                <Link
                  href="/authors/important-dates"
                  className="flex items-center gap-2 text-amber-200 hover:text-white transition-colors duration-200"
                >
                  <span className="animate-star-flash text-amber-300 text-sm">
                    ★
                  </span>
                  <strong className="text-white font-bold tracking-wide">
                    {announcementText}
                  </strong>
                  <span className="hidden md:inline text-amber-300/90 text-xs">
                    (OAIC 2026)
                  </span>
                  <span className="inline-flex items-center gap-0.5 text-[11px] font-bold text-amber-300 hover:underline ml-1">
                    View Details
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>

                <span className="text-amber-400/60 font-mono select-none" aria-hidden="true">
                  ◆
                </span>

                <Link
                  href="https://edas.info/login.php?rurl=aHR0cHM6Ly9lZGFzLmluZm8vTjM1MzYxP2M9MzUzNjE%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors duration-200"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  <span className="font-semibold text-amber-100">
                    Submit via EDAS Portal
                  </span>
                  <span className="text-[10px] bg-amber-400/20 text-amber-200 border border-amber-300/40 rounded px-1.5 py-0.5 font-bold uppercase">
                    Deadline: Sep 30
                  </span>
                </Link>

                <span className="text-amber-400/60 font-mono select-none" aria-hidden="true">
                  ◆
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right CTA Quick Button */}
        <div className="relative z-20 hidden md:flex items-center h-full shrink-0 pr-3 sm:pr-4 pl-2 bg-gradient-to-l from-[#061d2d] to-transparent">
          <Link
            href="https://edas.info/login.php?rurl=aHR0cHM6Ly9lZGFzLmluZm8vTjM1MzYxP2M9MzUzNjE%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-400 hover:bg-amber-300 text-gray-950 font-bold text-[11px] px-3 py-1 rounded shadow transition-all hover:scale-105 flex items-center gap-1"
          >
            <span>Submit Now</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
