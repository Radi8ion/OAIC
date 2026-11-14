import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import Section from '@/components/layout/Section';
import ProgramSchedule from '@/components/sections/ProgramSchedule';
import {
  Mic2,
  MessageSquare,
  FlaskConical,
  Handshake,
  Code,
  Building,
  CalendarDays,
  Presentation,
  PartyPopper,
  Landmark,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Program at a Glance',
  description:
    'OAIC 2026 program: pre-conference workshops on 18 December and conference days on 19–20 December 2026.',
};

const stats = [
  { icon: CalendarDays, value: '3', label: 'Days', sub: '18 – 20 Dec 2026' },
  { icon: Mic2, value: '4', label: 'Keynotes', sub: 'Plenary + 3 keynotes' },
  { icon: MessageSquare, value: '4', label: 'Panel Discussions', sub: 'AI, Quantum, Cyber, Startups' },
  { icon: FlaskConical, value: '12', label: 'Technical Tracks', sub: 'Onsite and virtual' },
];

const happenings = [
  { icon: Handshake, label: 'Workshops', date: '18 Dec' },
  { icon: Presentation, label: 'Posters', date: '19 Dec' },
  { icon: PartyPopper, label: 'Cultural Evening', date: '19 Dec' },
  { icon: Code, label: 'Hackathon Finals', date: '20 Dec' },
  { icon: Building, label: 'Startup Exhibition', date: '20 Dec' },
  { icon: Landmark, label: 'Valedictory', date: '20 Dec' },
];

export default function AtAGlancePage() {
  return (
    <>
      <PageHeader
        title="Program at a Glance (Tentative)"
        description="Pre-conference workshops on 18 December, followed by two conference days on 19–20 December 2026."
        breadcrumbs={[{ href: '/program/at-a-glance', label: 'Program at a Glance' }]}
      />
      <Section className="pt-4 md:pt-5 pb-12 md:pb-16">
        <div className="container-wide max-w-[1400px] px-4 md:px-8">
          <div className="mb-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 shadow-lg">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#e67e22] via-[#f2c94c] to-[#e67e22]" />

            <div className="relative grid grid-cols-2 lg:grid-cols-4 items-center gap-y-3 px-4 pt-8 pb-7 md:px-6 lg:divide-x lg:divide-white/15">
              {stats.map(({ icon: Icon, value, label, sub }) => (
                <div key={label} className="flex items-center justify-center gap-3 px-2">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#f2c94c]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-4xl font-black leading-none text-white font-serif">{value}</div>
                  <div className="leading-tight text-left">
                    <div className="text-sm font-bold uppercase tracking-wider text-white">{label}</div>
                    <div className="hidden sm:block text-xs text-primary-200">{sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative flex items-center justify-center border-t border-white/10 bg-black/15 px-4 py-5 md:px-6">
              <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
                {happenings.map(({ icon: Icon, label, date }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 py-1 pl-3 pr-1 text-[13px] font-medium text-white"
                  >
                    <Icon className="h-3.5 w-3.5 text-primary-200" />
                    {label}
                    <span className="rounded-full bg-[#e67e22] px-2 py-0.5 text-xs font-black text-white">{date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ProgramSchedule />

          <p className="mt-8 text-center text-sm text-gray-500">
            This is a tentative programme and is subject to change. Speakers and timings will be updated as they are confirmed.
          </p>
        </div>
      </Section>
    </>
  );
}
