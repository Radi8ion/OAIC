import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Calendar, FileText, Upload, Award, Layout } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/Alert';

export const metadata: Metadata = {
  title: 'Call for Poster Presentations',
  description:
    'Submit your poster abstract for OAIC 2026. Share your work-in-progress and get feedback from the community.',
};



const submissionInstructions = [
  'Submit a 2–4 page Article',
  'IEEE double-column format required',
  'Submission portal to be announced',
  'Include "Poster:" prefix in the title',
  'Accepted posters receive participation certificate',
  'Best Poster Award presented at closing ceremony',
  'Poster format shall be shared with the accepted authors'
];

export default function CallForPostersPage() {
  return (
    <>
      <PageHeader
        title="Call for Poster Presentations"
        description="Share your research in progress and engage directly with the AI community."
        breadcrumbs={[
          {
            href: '/authors/call-for-posters',
            label: 'Call for Poster Presentations',
          },
        ]}
      />
      <Section className="pb-24">
        <div className="mx-auto max-w-6xl">
          {/* Intro Box */}
          <div className="mb-14 bg-primary-50 border-none border-l-4 border-l-primary-600 rounded-r-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">About Poster Presentations</h3>
            <p className="text-lg md:text-xl text-primary-950 leading-relaxed font-medium">
              Poster presentations at OAIC 2026 offer an excellent
              opportunity to present your early-stage or work-in-progress
              research to a diverse audience of AI researchers and
              practitioners. The interactive format encourages direct
              discussion and valuable feedback.
            </p>
          </div>

          <SectionHeader
            title="Submission Instructions"
            subtitle="Please review the requirements and guidelines for preparing and submitting your poster presentation:"
            className="mb-10 text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Card 1: Formatting & Length */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 hover:shadow-md hover:border-primary-200 transition-all duration-300 flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 flex-shrink-0">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary-950 mb-2">Paper Length & Format</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Submit a <strong>2–4 page Article</strong>. The standard IEEE double-column format is strictly required for the submission.
                </p>
              </div>
            </div>

            {/* Card 2: Submission Details */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 hover:shadow-md hover:border-primary-200 transition-all duration-300 flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 flex-shrink-0">
                <Upload className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary-950 mb-2">Title & Portal</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Ensure you include the <strong>&quot;Poster:&quot;</strong> prefix in your submission title. The submission portal details will be announced soon.
                </p>
              </div>
            </div>

            {/* Card 3: Awards & Recognition */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 hover:shadow-md hover:border-primary-200 transition-all duration-300 flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 flex-shrink-0">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary-950 mb-2">Awards & Certification</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  All accepted poster presenters will receive a participation certificate. A prestigious <strong>Best Poster Award</strong> will be presented during the closing ceremony.
                </p>
              </div>
            </div>

            {/* Card 4: Presentation Guidelines */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 hover:shadow-md hover:border-primary-200 transition-all duration-300 flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 flex-shrink-0">
                <Layout className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary-950 mb-2">Poster Design Template</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Detailed guidelines and templates for the physical poster format shall be shared directly with the authors of accepted works.
                </p>
              </div>
            </div>
          </div>

          <Alert className="mt-14 bg-primary-50 border-none border-l-4 border-l-primary-600 rounded-r-lg shadow-sm text-primary-950 p-6">
            <Calendar className="h-6 w-6 text-primary-600" />
            <AlertTitle className="font-bold text-xl text-primary-900 ml-2">Key Date</AlertTitle>
            <AlertDescription className="text-lg mt-2 ml-2">
              Poster Submission Deadline:{' '}
              <strong className="font-bold text-primary-900">15 Aug 2026</strong>
            </AlertDescription>
          </Alert>

          <div className="mt-12 text-center flex justify-center items-center gap-6">
            <Button as="a" href="#" className="bg-primary-600 hover:bg-primary-500 text-white text-lg px-8 py-6 shadow-md transition-transform hover:-translate-y-1 rounded-md border-none font-bold">
              Submit Poster Abstract
            </Button>
            <Button as="a" href="#" className="bg-primary-600 hover:bg-primary-500 text-white text-lg px-8 py-6 shadow-md transition-transform hover:-translate-y-1 rounded-md border-none font-bold">
              Abstract format
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
