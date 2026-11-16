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
    'OAIC 2026 program: pre-conference workshops on 18th December and conference days on 19th–20th December 2026.',
};

const stats = [
  { icon: CalendarDays, value: '3', label: 'Days', sub: '18th–20th Dec 2026' },
  { icon: Mic2, value: '4', label: 'Keynotes', sub: 'Plenary + 3 keynotes' },
  { icon: MessageSquare, value: '4', label: 'Panel Discussions', sub: 'AI, Quantum, Cyber, Startups' },
  { icon: FlaskConical, value: '12', label: 'Technical Tracks', sub: 'Onsite and virtual' },
];

const happenings = [
  { icon: Handshake, label: 'Workshops', date: '18th Dec' },
  { icon: Presentation, label: 'Posters', date: '19th Dec' },
  { icon: PartyPopper, label: 'Cultural Evening', date: '19th Dec' },
  { icon: Code, label: 'Hackathon Finals', date: '20th Dec' },
  { icon: Building, label: 'Startup Exhibition', date: '20th Dec' },
  { icon: Landmark, label: 'Valedictory', date: '20th Dec' },
];

export default function AtAGlancePage() {
  return (
    <>
      <PageHeader
        title="Program at a Glance"
        description="Pre-conference workshops on 18th December, followed by two conference days on 19th–20th December 2026. This programme is tentative."
        breadcrumbs={[{ label: 'Program' }, { href: '/program/at-a-glance', label: 'At a Glance' }]}
      />
      <Section className="pt-8 md:pt-12">
        <div className="container-wide">
          <div className="surface grid grid-cols-2 divide-gray-200 lg:grid-cols-4 lg:divide-x">
            {stats.map(({ icon: Icon, value, label, sub }, i) => (
              <div
                key={label}
                className={`flex items-start gap-3 p-4 md:p-6 ${i < 2 ? 'border-b border-gray-200 lg:border-b-0' : ''} ${i % 2 === 0 ? 'border-r border-gray-200 lg:border-r-0' : ''}`}
              >
                <Icon className="mt-1 hidden h-5 w-5 shrink-0 text-primary-800 sm:block" aria-hidden />
                <div>
                  <p className="font-serif text-3xl font-semibold leading-none text-primary-950">{value}</p>
                  <p className="mt-1.5 text-sm font-medium text-gray-800">{label}</p>
                  <p className="mt-0.5 hidden text-xs text-gray-500 sm:block">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          <ul className="mt-4 flex flex-wrap gap-2">
            {happenings.map(({ icon: Icon, label, date }) => (
              <li key={label} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-700">
                <Icon className="h-3.5 w-3.5 text-gray-400" aria-hidden />
                {label}
                <span className="text-xs font-semibold text-brand-700">{date}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 md:mt-10">
            <ProgramSchedule />
          </div>

          <p className="mt-10 text-sm text-gray-500">
            This is a tentative programme and is subject to change. Speakers and timings will be updated as they are confirmed.
          </p>
        </div>
      </Section>
    </>
  );
}
