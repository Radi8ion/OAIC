import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import Section from '@/components/layout/Section';
import { 
  Presentation, 
  Code, 
  Users, 
  FileText, 
  Building, 
  MessageSquare, 
  Clock,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Program At a Glance',
  description:
    'Full program framework of OAIC 2026 - keynotes, workshops, hackathons, and exhibitions.',
};

const programEvents = [
  {
    title: 'Conference',
    icon: Presentation,
    description: 'Highlighting keynote addresses by global AI pioneers, peer-reviewed technical paper presentations, and specialized research tracks.',
    badge: 'Core Program'
  },
  {
    title: 'Hackathon',
    icon: Code,
    description: 'A high-energy competitive arena for developers, students, and researchers to build innovative AI-driven solutions addressing real-world problems.',
    badge: 'Interactive'
  },
  {
    title: 'Workshop',
    icon: Users,
    description: 'Co-located focused sessions and hands-on tutorials led by leading academicians and industry practitioners in specialized AI fields.',
    badge: 'Learning'
  },
  {
    title: 'Student Posters',
    icon: FileText,
    description: 'A dedicated platform for young researchers and students to present work-in-progress, network with experts, and receive direct feedback.',
    badge: 'Research'
  },
  {
    title: 'Exhibition',
    icon: Building,
    description: 'Showcasing cutting-edge AI technologies, demos, and solutions from leading tech companies, startups, and academic institutions.',
    badge: 'Industry'
  },
  {
    title: 'Panel Discussion',
    icon: MessageSquare,
    description: 'Insightful panel discussions exploring the future of artificial intelligence, ethical considerations, policy, and state development priorities.',
    badge: 'Dialogue'
  }
];

export default function AtAGlancePage() {
  return (
    <>
      <PageHeader
        title="Program At a Glance"
        description="A comprehensive framework of the inaugural 2026 IEEE Odisha AI Conference. December 19–20, 2026."
        breadcrumbs={[
          { href: '/program/at-a-glance', label: 'Program At a Glance' },
        ]}
      />
      <Section className="pb-24">
        <div className="mx-auto max-w-6xl">
          {/* To Be Updated Callout Banner */}
          <div className="mb-14 bg-gradient-to-r from-primary-50 to-blue-50 border-l-4 border-l-primary-600 rounded-r-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-5 justify-between">
            <div className="flex gap-4">
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-700 flex-shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-black text-primary-950 flex items-center gap-2">
                  Program Schedule Under Finalization
                  <span className="inline-flex items-center rounded-full bg-primary-100 px-2 py-0.5 text-xs font-bold text-primary-800">
                    To be Updated
                  </span>
                </h3>
                <p className="mt-1 text-gray-700 text-base leading-relaxed">
                  The detailed day-by-day session timetable and speaker line-up are currently being finalized. Registered participants will receive updates via email.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-primary-950 flex items-center justify-center gap-2">
              <Sparkles className="h-6 w-6 text-[#e67e22]" />
              Conference Program Elements
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-base">
              OAIC 2026 features a diverse line-up of academic, research, and collaborative sessions designed to foster state-of-the-art AI discourse.
            </p>
          </div>

          {/* Grid of 6 Elements */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programEvents.map((event) => {
              const Icon = event.icon;
              return (
                <div 
                  key={event.title}
                  className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                      {event.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-950 mb-2 group-hover:text-primary-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-1">
                    {event.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
