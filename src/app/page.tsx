import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/sections/HeroSection';
import { Button } from '@/components/ui/Button';
import { importantDates as dates } from '@/data/dates';
import { BrainCircuit, ShieldCheck, Leaf, Radio, Landmark, Scale } from 'lucide-react';

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
  description: 'The 2026 1st Odisha AI Conference (OAIC) is a premier platform for exchanging ideas and presenting research findings in AI. Join us in Bhubaneswar, India, December 19-20, 2026.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* News and Announcements */}
      <section className="pt-12 pb-6 bg-white">
        <div className="container-wide">
          <div className="border border-primary-400 p-5 md:p-8 relative group hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-bold text-primary-900">News and Announcements</h2>
            <Link href="/authors/call-for-papers" className="text-sm md:text-lg text-primary-400 hover:text-primary-600 hover:underline font-semibold transition-colors">
              OAIC 2026 Call for Papers Announced
            </Link>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="section-padding bg-white relative">
        <div className="container-wide">
          <div className="relative flex flex-col lg:flex-row lg:min-h-[400px]">
            {/* Background Image Container */}
            <div className="relative lg:absolute lg:inset-0 w-full lg:w-2/3 h-[200px] sm:h-[300px] lg:h-full z-0">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80')" }}
              >
                <div className="absolute inset-0 bg-primary-900/40 mix-blend-multiply" />
              </div>
              <div className="absolute top-4 md:top-8 left-0 bg-primary-900 text-white px-6 md:px-8 py-3 md:py-4 shadow-lg">
                <h2 className="text-xl md:text-2xl font-bold">Important Dates</h2>
              </div>
            </div>

            {/* Dates List - Overlapping on right */}
            <div className="w-full lg:w-1/2 ml-auto flex flex-col justify-center space-y-3 z-10 py-6 lg:py-12 px-4 lg:px-0 -mt-10 sm:-mt-16 lg:mt-0 relative">
              {dates.map((item, index) => (
                <div key={index} className="flex shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <div className="bg-primary-900 text-white font-bold p-3 md:p-4 w-24 md:w-32 flex items-center justify-center shrink-0 group-hover:bg-primary-800 transition-colors text-center text-xs md:text-base">
                    {item.date}
                  </div>
                  <div className="bg-white border border-gray-200 p-3 md:p-4 flex-1 flex flex-col justify-center text-xs md:text-sm group-hover:border-primary-400 transition-colors">
                    <span className="font-bold text-gray-800">{item.event}</span>
                  </div>
                </div>
              ))}
              <div className="flex justify-end pt-4 md:pt-6">
                <Button as={Link} href="/authors/important-dates" className="bg-primary-400 hover:bg-primary-500 text-white rounded-none border-none shadow-md transition-transform hover:-translate-y-1 w-full sm:w-auto text-center justify-center">
                  See All Dates
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-wide max-w-[1300px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: welcome text */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#e67e22]">
                <span className="h-px w-8 bg-[#e67e22]" />
                Welcome
              </span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary-900 font-serif">Welcome to OAIC 2026!</h2>

              <div className="mt-6 rounded-r-xl border-l-4 border-[#e67e22] bg-orange-50/70 px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Conference Theme</p>
                <p className="text-lg md:text-2xl font-bold text-primary-900 leading-snug">
                  Sovereignty in AI: From Indigenous Intelligence to Global Impact
                </p>
              </div>

              <div className="mt-6 space-y-4 text-base md:text-[17px] text-gray-700 leading-relaxed text-justify md:text-left">
                <p>
                  The Odisha AI Conference (OAIC) 2026 is a global platform bringing together visionaries, researchers, academicians, innovators, entrepreneurs, industry leaders, policymakers and young minds from across the world.
                </p>
                <p>
                  Under the theme &quot;Sovereignty in AI: From Indigenous Intelligence to Global Impact,&quot; the conference explores the evolving landscape of Artificial Intelligence, with a focus on technological sovereignty, indigenous capabilities, research and innovation, responsible AI, and the opportunities to create meaningful global impact.
                </p>
                <p>
                  The conference aims to foster interdisciplinary dialogue, showcase cutting-edge research, encourage international collaboration and connect academia, industry, government and society. It provides a platform to discuss how nations, institutions and communities can develop their own AI capabilities while contributing to a shared global AI ecosystem.
                </p>
                <p>
                  OAIC welcomes diverse perspectives, breakthrough ideas and transformative innovations from across the world.
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 p-5 md:p-6 text-white shadow-md">
                <p className="text-base md:text-lg font-medium leading-relaxed">
                  Our invitation is to the global AI community: Come, share your knowledge, exchange ideas, build collaborations and contribute to shaping the future of Artificial Intelligence.
                </p>
              </div>
            </div>

            {/* Right: emphasis card */}
            <aside className="lg:col-span-5 lg:sticky lg:top-28 rounded-3xl border border-primary-100 bg-gradient-to-b from-primary-50/70 to-white shadow-md overflow-hidden">
              <div className="bg-primary-900 px-6 py-4">
                <h3 className="text-sm md:text-base font-bold uppercase tracking-[0.15em] text-white">
                  Particular emphasis on
                </h3>
              </div>
              <ul className="divide-y divide-primary-100">
                {emphasis.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-4 px-6 py-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-800">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm md:text-base font-medium text-gray-700 leading-snug">{text}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

    </>
  );
}
