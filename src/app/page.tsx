import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BrainCircuit, Landmark, Leaf, Radio, Scale, ShieldCheck } from 'lucide-react';
import PastAware from '@/components/ui/PastAware';
import HeroSection from '@/components/sections/HeroSection';
import { Button } from '@/components/ui/Button';
import { importantDates } from '@/data/dates';

const emphasis = [
  { icon: BrainCircuit, text: 'Foundational advances and explainable AI' },
  { icon: ShieldCheck, text: 'Causal reasoning, trustworthy systems, and next-generation learning paradigms' },
  { icon: Leaf, text: 'AI for sustainable development and climate resilience' },
  { icon: Radio, text: 'AI integration with emerging technologies (6G, quantum computing, edge intelligence)' },
  { icon: Landmark, text: 'AI-driven solutions for government, disaster management, and rural development' },
  { icon: Scale, text: 'Ethical, responsible use of AI' },
];

export const metadata: Metadata = {
  title: 'OAIC 2026',
  description:
    'The 2026 1st Odisha AI Conference (OAIC) is a premier platform for exchanging ideas and presenting research findings in AI. Join us in Bhubaneswar, India, 19th–20th December 2026.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* News and Announcements */}
      <section className="pt-8 md:pt-10">
        <div className="container-wide">
          <div className="surface flex flex-col gap-3 border-l-[3px] border-l-brand-700 p-5 text-center md:flex-row md:items-center md:justify-between md:px-8 md:py-6 md:text-left">
            <h2 className="text-xl font-semibold md:text-3xl">News and Announcements</h2>
            <Link href="/authors/call-for-papers" className="inline-flex items-center justify-center gap-1.5 font-semibold md:text-lg">
              OAIC 2026 Call for Papers announced
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="relative flex flex-col lg:min-h-[420px] lg:flex-row">
            <div className="relative z-0 h-52 w-full overflow-hidden rounded-lg sm:h-72 lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-2/3">
              <Image src="/images/hero-3.jpg" alt="" fill sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-primary-950/45" />
              <div className="absolute left-0 top-5 border-l-4 border-brand-700 bg-primary-950 px-6 py-3 shadow-lg md:top-8 md:px-8 md:py-4">
                <h2 className="text-xl font-semibold text-white md:text-2xl">Important Dates</h2>
              </div>
            </div>

            <div className="relative z-10 -mt-12 ml-auto flex w-full flex-col justify-center gap-3 px-3 sm:-mt-16 sm:px-6 lg:mt-0 lg:w-1/2 lg:px-0 lg:py-10">
              {importantDates.map((item) => (
                <PastAware key={item.event} iso={item.iso} className="flex overflow-hidden rounded-md bg-white shadow-md ring-1 ring-gray-200 transition-shadow hover:shadow-lg">
                  <div className="flex w-28 shrink-0 items-center justify-center bg-primary-950 p-3 text-center text-xs font-semibold text-white md:w-36 md:text-sm group-data-[past=true]:bg-gray-400">
                    <time className="group-data-[past=true]:line-through">{item.date}</time>
                  </div>
                  <div className="flex flex-1 flex-wrap items-center gap-x-2 gap-y-1 p-3 text-sm md:p-4">
                    <span className="font-medium text-gray-800 group-data-[past=true]:text-gray-400 group-data-[past=true]:line-through">{item.event}</span>
                    {item.status === 'extended' && (
                      <span className="rounded bg-brand-50 px-1.5 py-0.5 text-xs font-medium text-brand-700 group-data-[past=true]:hidden">Extended</span>
                    )}
                    <span className="hidden rounded bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-500 group-data-[past=true]:inline">Passed</span>
                  </div>
                </PastAware>
              ))}
              <div className="flex justify-end pt-2">
                <Button as={Link} href="/authors/important-dates" variant="accent" className="w-full sm:w-auto">
                  See all dates
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="section-padding border-t border-gray-200 bg-gray-50">
        <div className="container-wide grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-semibold md:text-4xl">Welcome to OAIC 2026</h2>

            <div className="callout mt-6">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">Conference theme</p>
              <p className="mt-1 font-serif text-lg font-semibold leading-snug text-primary-950 md:text-xl">
                Sovereignty in AI: From Indigenous Intelligence to Global Impact
              </p>
            </div>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-700 md:text-[17px]">
              <p>
                The Odisha AI Conference (OAIC) 2026 is a global platform bringing together visionaries, researchers, academicians, innovators, entrepreneurs, industry leaders, policymakers and young minds from across the world.
              </p>
              <p>
                Under the theme &ldquo;Sovereignty in AI: From Indigenous Intelligence to Global Impact,&rdquo; the conference explores the evolving landscape of Artificial Intelligence, with a focus on technological sovereignty, indigenous capabilities, research and innovation, responsible AI, and the opportunities to create meaningful global impact.
              </p>
              <p>
                The conference aims to foster interdisciplinary dialogue, showcase cutting-edge research, encourage international collaboration and connect academia, industry, government and society. It provides a platform to discuss how nations, institutions and communities can develop their own AI capabilities while contributing to a shared global AI ecosystem.
              </p>
              <p>
                OAIC welcomes diverse perspectives, breakthrough ideas and transformative innovations from across the world. Our invitation is to the global AI community: come, share your knowledge, exchange ideas, build collaborations and contribute to shaping the future of Artificial Intelligence.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="surface lg:sticky lg:top-24">
              <h3 className="rounded-t-lg bg-primary-950 px-5 py-3.5 font-sans text-sm font-semibold uppercase tracking-wider text-white">
                Particular emphasis on
              </h3>
              <ul className="divide-y divide-gray-100">
                {emphasis.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-4 px-5 py-3.5">
                    <span className="icon-badge h-9 w-9">
                      <Icon className="h-[18px] w-[18px]" aria-hidden />
                    </span>
                    <span className="text-[15px] leading-snug text-gray-700">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

    </>
  );
}
