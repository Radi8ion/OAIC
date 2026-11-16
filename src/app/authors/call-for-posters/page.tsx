import type { Metadata } from 'next';
import { Award, CalendarDays, ExternalLink, FileText, LayoutTemplate, Upload } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Call for Poster Presentations',
  description: 'Submit your poster abstract for OAIC 2026. Share your work-in-progress and get feedback from the community.',
};

const EDAS_URL = 'https://edas.info/login.php?rurl=aHR0cHM6Ly9lZGFzLmluZm8vTjM1MzYxP2M9MzUzNjE%3D';

const instructions = [
  {
    icon: FileText,
    title: 'Paper length and format',
    body: (
      <>Submit a <strong>2–4 page article</strong>. The standard IEEE double-column format is required.</>
    ),
  },
  {
    icon: Upload,
    title: 'Title and portal',
    body: (
      <>Include the <strong>&ldquo;Poster:&rdquo;</strong> prefix in your submission title. Submissions are processed through the EDAS portal.</>
    ),
  },
  {
    icon: Award,
    title: 'Awards and certification',
    body: (
      <>All accepted poster presenters receive a participation certificate. A <strong>Best Poster Award</strong> will be presented at the closing ceremony.</>
    ),
  },
  {
    icon: LayoutTemplate,
    title: 'Poster template',
    body: <>Guidelines and templates for the physical poster will be shared directly with authors of accepted work.</>,
  },
];

export default function CallForPostersPage() {
  return (
    <>
      <PageHeader
        title="Call for Poster Presentations"
        description="Share your research in progress and engage directly with the AI community."
        breadcrumbs={[{ label: 'Authors' }, { href: '/authors/call-for-posters', label: 'Call for Posters' }]}
      />
      <Section>
        <div className="container-wide max-w-5xl">
          <div className="max-w-3xl">
            <span className="eyebrow">About poster presentations</span>
            <p className="mt-3 text-lg leading-relaxed text-gray-700 md:text-xl">
              Poster presentations at OAIC 2026 offer an excellent opportunity to present early-stage or work-in-progress research to a diverse audience of AI researchers and practitioners. The interactive format encourages direct discussion and valuable feedback.
            </p>
          </div>

          <div className="mt-12 md:mt-16">
            <SectionHeader
              align="left"
              title="Submission Instructions"
              subtitle="Review the requirements below before preparing your poster submission."
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              {instructions.map(({ icon: Icon, title, body }) => (
                <div key={title} className="surface flex gap-4 p-6">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary-800" aria-hidden />
                  <div>
                    <h3 className="font-sans text-base font-semibold">{title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-gray-600">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Alert className="mt-10">
            <CalendarDays aria-hidden />
            <AlertTitle>Key date</AlertTitle>
            <AlertDescription>
              Poster submission deadline: <strong className="text-primary-950">15 Nov 2026</strong>
            </AlertDescription>
          </Alert>

          <div className="mt-10">
            <Button as="a" href={EDAS_URL} target="_blank" rel="noopener noreferrer" variant="accent" size="lg">
              Submit poster abstract
              <ExternalLink className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
