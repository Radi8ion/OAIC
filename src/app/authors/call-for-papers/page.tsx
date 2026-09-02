import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { submissionTypes } from '@/data/callForPapers';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import { Button } from '@/components/ui/Button';
import { FileText } from 'lucide-react';
import TracksSection from '@/components/sections/TracksSection';

export const metadata: Metadata = {
  title: 'Call for Papers',
  description:
    'OAIC 2026 invites original research contributions across all areas of artificial intelligence.',
};

export default function CallForPapersPage() {
  return (
    <>
      <PageHeader
        title="Call for Papers"
        description="OAIC 2026 invites original, unpublished research contributions across all areas of artificial intelligence."
        breadcrumbs={[
          { href: '/authors/call-for-papers', label: 'Call for Papers' },
        ]}
      />

      <Section>
        <div className="mx-auto max-w-6xl py-6">
          {/* Invitation to Authors Section */}
          <div className="mb-12 md:mb-16 bg-white rounded-2xl border border-gray-100 p-6 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
              {/* Left Column: Text & Callout */}
              <div className="lg:col-span-7">
                <h2 className="text-2xl md:text-3xl font-extrabold text-primary-950 mb-6 border-b border-gray-100 pb-4">
                  Invitation to Authors
                </h2>
                <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed text-justify md:text-left">
                  <p>
                    The Organizing Committee of the <strong>2026 1st IEEE Odisha AI Conference (OAIC)</strong> invites researchers, academicians, industry professionals, and practitioners worldwide to submit original, unpublished contributions on Artificial Intelligence and applications (see tracks and focus below). OAIC 2026 is the inaugural edition of a regional conference dedicated to fostering excellence in AI research and its transformative applications across industry, governance, healthcare, energy, and society. The conference will serve as a premier forum for exchanging ideas, presenting research findings, and building interdisciplinary collaborations that address real-world challenges through AI-driven solutions — with a special emphasis on the development priorities of the state of Odisha and the broader Indian subcontinent.
                  </p>
                  <p>
                    The conference will feature keynote addresses by leading researchers and practitioners, technical paper presentations, tutorials and workshops, and dedicated industry sessions — creating a vibrant ecosystem for knowledge exchange between academia and industry.
                  </p>
                </div>
                
                {/* Publication Callout */}
                <div className="mt-8 bg-primary-50 border-l-4 border-[#e67e22] p-5 rounded-r-xl">
                  <p className="text-sm md:text-base font-semibold text-primary-950 leading-relaxed">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-black uppercase bg-[#e67e22] text-white mr-3">
                      Publication
                    </span>
                    All accepted and presented papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE quality requirements.{' '}
                    <span className="font-bold text-primary-900">IEEE Conference Record Number: 72676.</span>
                  </p>
                </div>
              </div>

              {/* Right Column: Canva Flyer Embed */}
              <div className="lg:col-span-5 w-full flex flex-col items-center lg:mt-16">
                <div 
                  className="w-full relative rounded-xl overflow-hidden border border-gray-200 shadow-md bg-gray-50"
                  style={{ paddingTop: '141.453%', height: 0 }}
                >
                  <iframe
                    loading="lazy"
                    className="absolute inset-0 w-full h-full border-none"
                    src="https://www.canva.com/design/DAHKvR4DX5s/c2Ox3OO-wFsKhVkOXKYkyw/view?embed"
                    allowFullScreen
                    allow="fullscreen"
                  />
                </div>
                <div className="mt-3 text-center text-xs text-gray-500 font-medium">
                  <a
                    href="https://www.canva.com/design/DAHKvR4DX5s/c2Ox3OO-wFsKhVkOXKYkyw/view?utm_content=DAHKvR4DX5s&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-500 hover:underline transition-colors font-semibold"
                  >
                    e gradient (23.4 x 33.1 in)
                  </a>{' '}
                  by Bharat Jyoti Ranjan Sahu .{' '}
                  <a
                    href="https://www.canva.com/design/DAHKvR4DX5s/c2Ox3OO-wFsKhVkOXKYkyw/view?utm_content=DAHKvR4DX5s&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-500 hover:underline transition-colors font-semibold"
                  >
                    Embed link
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Conference Tracks Section */}
          <SectionHeader
            title="Conference Tracks"
            subtitle="Explore our conference tracks and submit your contributions to the appropriate areas of interest:"
          />
          
          <div className="mb-16 mt-8 md:mb-20 md:mt-10 px-4 md:px-0">
            <TracksSection />
          </div>

          {/* Submission Types Section */}
          <SectionHeader
            title="Submission Types"
            subtitle="Choose the format that best fits your contribution."
          />
          <div className="mb-12 mt-8 md:mb-16 md:mt-10 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl mx-auto px-4 md:px-0">
            {submissionTypes.map((type) => (
              <div
                key={type.type}
                className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 p-5 md:p-6 hover:border-primary-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="mb-4 md:mb-6 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-primary-50 group-hover:bg-primary-400 transition-colors duration-300">
                  <FileText className="h-6 w-6 md:h-7 md:w-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-primary-900 mb-2 md:mb-3">{type.type}</h3>
                <div className="mb-3 md:mb-4">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {type.pages}
                  </span>
                </div>
                <p className="text-sm md:text-base text-gray-600 font-medium flex-1">
                  {type.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pb-8">
            <Button as="a" href="https://edas.info/login.php?rurl=aHR0cHM6Ly9lZGFzLmluZm8vTjM1MzYxP2M9MzUzNjE%3D" target="_blank" rel="noopener noreferrer" className="bg-primary-600 hover:bg-primary-500 text-white text-lg px-8 py-6 shadow-md transition-transform hover:-translate-y-1 rounded-md border-none font-bold">
              Submit Your Paper
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
