import type { Metadata } from 'next';
import { ExternalLink, FileText } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import TracksSection from '@/components/sections/TracksSection';
import { Button } from '@/components/ui/Button';
import { submissionTypes } from '@/data/callForPapers';

export const metadata: Metadata = {
  title: 'Call for Papers',
  description: 'OAIC 2026 invites original research contributions across all areas of artificial intelligence.',
};

const EDAS_URL = 'https://edas.info/login.php?rurl=aHR0cHM6Ly9lZGFzLmluZm8vTjM1MzYxP2M9MzUzNjE%3D';
const FLYER_URL = 'https://www.canva.com/design/DAHKvR4DX5s/c2Ox3OO-wFsKhVkOXKYkyw/view';

export default function CallForPapersPage() {
  return (
    <>
      <PageHeader
        title="Call for Papers"
        description="OAIC 2026 invites original, unpublished research contributions across all areas of artificial intelligence."
        breadcrumbs={[{ label: 'Authors' }, { href: '/authors/call-for-papers', label: 'Call for Papers' }]}
      />

      <Section>
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <span className="eyebrow">Invitation to authors</span>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Share your research at OAIC 2026</h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-gray-700 md:text-[17px]">
                <p>
                  The Organizing Committee of the <strong>2026 1st IEEE Odisha AI Conference (OAIC)</strong> invites researchers, academicians, industry professionals, and practitioners worldwide to submit original, unpublished contributions on Artificial Intelligence and applications (see tracks and focus below). OAIC 2026 is the inaugural edition of a regional conference dedicated to fostering excellence in AI research and its transformative applications across industry, governance, healthcare, energy, and society. The conference will serve as a premier forum for exchanging ideas, presenting research findings, and building interdisciplinary collaborations that address real-world challenges through AI-driven solutions, with a special emphasis on the development priorities of the state of Odisha and the broader Indian subcontinent.
                </p>
                <p>
                  The conference will feature keynote addresses by leading researchers and practitioners, technical paper presentations, tutorials and workshops, and dedicated industry sessions, creating a vibrant ecosystem for knowledge exchange between academia and industry.
                </p>
              </div>

              <div className="callout mt-6">
                <p className="font-semibold text-primary-950">Publication</p>
                <p className="mt-1 text-sm leading-relaxed text-gray-700 md:text-base">
                  All accepted and presented papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE quality requirements. IEEE Conference Record Number: <strong>72676</strong>.
                </p>
              </div>

              <Button as="a" href={EDAS_URL} target="_blank" rel="noopener noreferrer" variant="accent" size="lg" className="mt-8">
                Submit your paper
                <ExternalLink className="h-4 w-4" aria-hidden />
              </Button>
            </div>

            <div className="lg:col-span-5">
              <div className="surface relative w-full overflow-hidden" style={{ paddingTop: '141.453%' }}>
                <iframe
                  loading="lazy"
                  title="OAIC 2026 Call for Papers flyer"
                  className="absolute inset-0 h-full w-full border-0"
                  src={`${FLYER_URL}?embed`}
                  allowFullScreen
                  allow="fullscreen"
                />
              </div>
              <a
                href={FLYER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium"
              >
                Open flyer in a new tab
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
              <p className="mt-1 text-xs text-gray-500">Flyer design by Bharat Jyoti Ranjan Sahu</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-gray-200 bg-gray-50">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Scope"
            title="Conference Tracks"
            subtitle="Select a track to see its sub-tracks and topics, then submit to the area that best fits your work."
          />
          <TracksSection />
        </div>
      </Section>

      <Section>
        <div className="container-wide">
          <SectionHeader eyebrow="Formats" title="Submission Types" subtitle="Choose the format that best fits your contribution." />
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
            {submissionTypes.map((type) => (
              <div key={type.type} className="surface flex flex-col p-6">
                <FileText className="h-6 w-6 text-primary-800" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold">{type.type}</h3>
                <p className="mt-1 text-sm font-medium text-brand-700">{type.pages}</p>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button as="a" href={EDAS_URL} target="_blank" rel="noopener noreferrer" variant="accent" size="lg">
              Submit your paper
              <ExternalLink className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
