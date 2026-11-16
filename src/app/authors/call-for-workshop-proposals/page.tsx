import type { Metadata } from 'next';
import { Check, ExternalLink } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import Section from '@/components/layout/Section';
import PastAware from '@/components/ui/PastAware';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Call for Workshop Proposals',
  description: 'Submit your workshop proposal for OAIC 2026. We welcome industry and academic workshops on AI topics.',
};

const EDAS_URL = 'https://edas.info/login.php?rurl=aHR0cHM6Ly9lZGFzLmluZm8vTjM1MzYxP2M9MzUzNjE%3D';

const proposalTopics = [
  'Workshop title and acronym',
  'Organiser names, affiliations, and contact details',
  'Workshop scope and topics (500 words max)',
  'Format: half-day or full-day, invited speakers, papers',
  'Target audience and expected attendance',
  'Brief organiser biographies',
  'Workshop website URL (if available)',
  'History of previous editions (if applicable)',
];

const keyDates = [
  { date: '30th September 2026', iso: '2026-09-30', event: 'Workshop proposal deadline' },
  { date: '15th October 2026', iso: '2026-10-15', event: 'Acceptance notification' },
  { date: '19th–20th December 2026', iso: '2026-12-20', event: 'Workshop days' },
];

export default function WorkshopProposalsPage() {
  return (
    <>
      <PageHeader
        title="Call for Workshop Proposals"
        description="Organise a focused workshop at OAIC 2026 on your AI research area or industry application."
        breadcrumbs={[{ label: 'Authors' }, { href: '/authors/call-for-workshop-proposals', label: 'Workshop Proposals' }]}
      />
      <Section>
        <div className="container-wide max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            <div>
              <h2 className="heading-rule text-2xl font-semibold">Student Workshops</h2>
              <p className="mt-3 leading-relaxed text-gray-700">
                Workshops at OAIC 2026 are focused three-hour events co-located with the main conference. They provide a platform for in-depth discussion of emerging or specialised AI topics, bringing together researchers and practitioners with shared interests. Workshops are designed for <strong>students</strong> to engage in hands-on, collaborative learning.
              </p>
            </div>
            <div>
              <h2 className="heading-rule text-2xl font-semibold">Tutorials for Faculty and Researchers</h2>
              <p className="mt-3 leading-relaxed text-gray-700">
                In addition to student workshops, OAIC 2026 will feature dedicated <strong>tutorials for faculty and researchers</strong>. These sessions provide in-depth technical knowledge, emerging methodologies, and hands-on exposure to advanced AI topics, helping faculty and researchers stay at the forefront of AI and bring new insights back to their institutions.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5 md:mt-12">
            <div className="surface p-6 md:p-8 lg:col-span-3">
              <h2 className="text-xl font-semibold md:text-2xl">Proposal guidelines</h2>
              <p className="mt-1 text-sm text-gray-500">What to include</p>
              <ul className="mt-6 space-y-3.5">
                {proposalTopics.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" aria-hidden />
                    <span className="text-[15px] text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface p-6 md:p-8 lg:col-span-2">
              <h2 className="text-xl font-semibold md:text-2xl">Key dates</h2>
              <p className="mt-1 text-sm text-gray-500">Timeline</p>
              <ol className="mt-6 space-y-5">
                {keyDates.map((d) => (
                  <PastAware as="li" key={d.event} iso={d.iso} className="border-l-2 border-brand-700 pl-4 data-[past=true]:border-gray-200">
                    <p className="text-sm font-semibold text-brand-700 group-data-[past=true]:text-gray-400 group-data-[past=true]:line-through">{d.date}</p>
                    <p className="mt-0.5 text-[15px] text-gray-800 group-data-[past=true]:text-gray-500 group-data-[past=true]:line-through">{d.event}</p>
                  </PastAware>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-10">
            <Button as="a" href={EDAS_URL} target="_blank" rel="noopener noreferrer" variant="accent" size="lg">
              Submit workshop proposal
              <ExternalLink className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
