'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CalendarDays, ExternalLink, MapPin } from 'lucide-react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Button } from '@/components/ui/Button';

const slides = ['/images/hero-1.png', '/images/hero-2.jpg', '/images/hero-3.jpg', '/images/hero-4.jpg'];

const EDAS_URL = 'https://edas.info/login.php?rurl=aHR0cHM6Ly9lZGFzLmluZm8vTjM1MzYxP2M9MzUzNjE%3D';

type SplideLike = { index: number; Components: { Controller: { getEnd: () => number } } };

export default function HeroSection() {
  const [progress, setProgress] = useState(0);

  const updateProgress = (splide: SplideLike) => {
    const end = splide.Components.Controller.getEnd() + 1;
    setProgress(Math.min((splide.index + 1) / end, 1) * 100);
  };

  return (
    <section className="relative">
      <div className="relative h-[38vh] min-h-60 w-full overflow-hidden sm:h-[50vh] md:h-[60vh]">
        <Splide
          hasTrack={false}
          aria-label="Conference highlights"
          options={{ type: 'fade', rewind: true, autoplay: true, interval: 5000, speed: 800, arrows: false, pagination: false, drag: false }}
          onMounted={updateProgress}
          onMove={updateProgress}
          className="absolute inset-0 h-full w-full"
        >
          <SplideTrack className="h-full w-full">
            {slides.map((src, i) => (
              <SplideSlide key={src} className="h-full w-full">
                <div className="relative h-full w-full">
                  <Image src={src} alt="" fill sizes="100vw" className="object-cover" priority={i === 0} />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-primary-950/10 to-transparent" />
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
        <div className="absolute inset-x-0 bottom-0 z-10 h-1 bg-black/20">
          <div className="h-full bg-white/80 transition-[width] duration-500 ease-out" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="container-wide relative z-20 -mt-12 sm:-mt-28 md:-mt-40">
        <div className="bg-dots border-t-4 border-brand-700 bg-primary-950 px-6 py-7 text-white shadow-xl sm:px-10 sm:py-9 md:px-12 md:py-11">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">1st Odisha AI Conference</p>
          <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl lg:text-6xl">OAIC 2026</h1>
          <p className="mt-4 max-w-2xl font-serif text-lg text-white/90 md:text-xl">
            Sovereignty in AI: From Indigenous Intelligence to Global Impact
          </p>

          <dl className="mt-6 flex flex-col gap-3 text-sm text-white/85 sm:flex-row sm:gap-8 md:text-base">
            <div className="flex items-center gap-2">
              <dt className="sr-only">Dates</dt>
              <CalendarDays className="h-4 w-4 shrink-0 text-white/60" aria-hidden />
              <dd>19th–20th December 2026</dd>
            </div>
            <div className="flex items-center gap-2">
              <dt className="sr-only">Venue</dt>
              <MapPin className="h-4 w-4 shrink-0 text-white/60" aria-hidden />
              <dd>Bhubaneswar, Odisha, India</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button as="a" href={EDAS_URL} target="_blank" rel="noopener noreferrer" variant="accent" size="lg">
              Submit a Paper
              <ExternalLink className="h-4 w-4" aria-hidden />
            </Button>
            <Button as={Link} href="/authors/call-for-papers" variant="inverse" size="lg">
              Call for Papers
            </Button>
            <Button as={Link} href="/patrons-exhibitors" variant="outline-inverse" size="lg">
              Become a Patron
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
