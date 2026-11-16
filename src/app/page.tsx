import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BrainCircuit, Landmark, Leaf, Radio, Scale, ShieldCheck } from 'lucide-react';
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
    'The 2026 1st Odisha AI Conference (OAIC) is a premier platform for exchanging ideas and presenting research findings in AI. Join us in Bhubaneswar, India, December 19-20, 2026.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Announcement */}
      <section className="pt-10 md:pt-14">
        <div className="container-wide">
          <div className="surface flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between md:px-8 md:py-6">
            <div>
              <span className="eyebrow">News and Announcements</span>
              <p className="mt-1 font-serif text-lg font-semibold text-primary-950 md:text-xl">
                OAIC 2026 Call for Papers announced
              </p>
            </div>
            <Link href="/authors/call-for-papers" className="inline-flex items-center gap-1.5 text-sm font-semibold">
              Read the call
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="section-padding">
        <div className="container-wide grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <span className="eyebrow">Welcome</span>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Welcome to OAIC 2026</h2>

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
              <h3 className="border-b border-gray-200 px-6 py-4 font-sans text-sm font-semibold uppercase tracking-wider text-primary-950">
                Particular emphasis on
              </h3>
              <ul className="divide-y divide-gray-100">
                {emphasis.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-4 px-6 py-4">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary-800" aria-hidden />
                    <span className="text-[15px] leading-snug text-gray-700">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Important dates */}
      <section className="section-padding border-t border-gray-200 bg-gray-50">
        <div className="container-wide grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <span className="eyebrow">Plan ahead</span>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Important Dates</h2>
            <p className="mt-3 text-gray-600">All deadlines are 11:59 PM Anywhere on Earth (AoE).</p>
            <Button as={Link} href="/authors/important-dates" variant="outline" className="mt-6 hidden lg:inline-flex">
              See all dates
            </Button>
          </div>

          <ol className="surface divide-y divide-gray-200 lg:col-span-8">
            {importantDates.map((item) => (
              <li key={item.event} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-6 md:px-6">
                <time className="shrink-0 text-sm font-semibold text-brand-700 sm:w-40">{item.date}</time>
                <span className="text-[15px] text-gray-800">
                  {item.event}
                  {item.status === 'extended' && (
                    <span className="ml-2 inline-block rounded bg-brand-50 px-1.5 py-0.5 align-middle text-xs font-medium text-brand-700">
                      Extended
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ol>

          <Button as={Link} href="/authors/important-dates" variant="outline" className="w-full lg:hidden">
            See all dates
          </Button>
        </div>
      </section>
    </>
  );
}
