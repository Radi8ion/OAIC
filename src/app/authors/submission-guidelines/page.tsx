import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { AlertTriangle, Check, ExternalLink, Info, ShieldCheck } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import Section from '@/components/layout/Section';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { Button } from '@/components/ui/Button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';

export const metadata: Metadata = {
  title: 'Submission Guidelines',
  description: 'Everything you need to know to prepare and submit your paper to OAIC 2026.',
};

const IEEE_TEMPLATES_URL = 'https://www.ieee.org/conferences/publishing/templates.html';

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Check className="mt-1 h-4 w-4 shrink-0 text-brand-700" aria-hidden />
          <span className="text-[15px] leading-relaxed text-gray-700 md:text-base">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SpecGrid({ specs }: { specs: { label: string; value: string }[] }) {
  return (
    <dl className="surface grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 sm:divide-y-0">
      {specs.map((s, i) => (
        <div
          key={s.label}
          className={`flex items-center justify-between gap-4 px-4 py-3 sm:border-gray-200 ${i >= 2 ? 'sm:border-t' : ''} ${i % 2 === 0 ? 'sm:border-r' : ''}`}
        >
          <dt className="text-sm text-gray-600">{s.label}</dt>
          <dd className="shrink-0 text-sm font-semibold text-primary-950">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Panel({ children }: { children: ReactNode }) {
  return <div className="surface space-y-6 p-5 md:p-8">{children}</div>;
}

function GeneralGuidelines() {
  return (
    <Panel>
      <Alert>
        <AlertTriangle aria-hidden />
        <AlertTitle>Anonymization requirement</AlertTitle>
        <AlertDescription>
          Authors must anonymize their submissions, removing names, affiliations, and acknowledgements to ensure a fair double-blind peer review.
        </AlertDescription>
      </Alert>
      <p className="leading-relaxed text-gray-700 md:text-lg">
        All papers submitted to OAIC 2026 must be original, unpublished work not currently under review at any other venue. Submissions must be in English and comply with the IEEE double-column conference format.
      </p>
      <CheckList
        items={[
          'Papers must not exceed the specified page limits (excluding references).',
          'Additional pages (beyond the 6-page limit) will be charged at ₹1000 per page for Indian authors and $100 per page for international authors.',
          'Submitted papers must not be under review elsewhere simultaneously.',
          'At least one author of an accepted paper must register for the conference and present the paper.',
        ]}
      />
    </Panel>
  );
}

function FormattingGuidelines() {
  return (
    <Panel>
      <SpecGrid
        specs={[
          { label: 'Format', value: 'IEEE double-column, A4' },
          { label: 'Full paper length', value: '6 pages (+ refs)' },
          { label: 'Font', value: 'Times New Roman, 10pt' },
          { label: 'File format', value: 'PDF only' },
          { label: 'File size limit', value: '10 MB' },
        ]}
      />
      <div>
        <p className="text-[15px] text-gray-700">
          Use the official IEEE conference templates (LaTeX and Microsoft Word).
        </p>
        <Button as="a" href={IEEE_TEMPLATES_URL} target="_blank" rel="noopener noreferrer" variant="primary" className="mt-4">
          IEEE conference templates
          <ExternalLink className="h-4 w-4" aria-hidden />
        </Button>
      </div>
    </Panel>
  );
}

function EthicsPolicy() {
  const items = [
    { title: 'Plagiarism', desc: 'All submissions are checked using plagiarism detection software. Papers with significant overlap will be rejected.' },
    { title: 'Authorship', desc: 'All listed authors must have made a substantial contribution. Ghostwriting and honorary authorship are not permitted.' },
    { title: 'AI-assisted writing', desc: 'Authors must disclose the use of AI writing tools. AI tools may not be listed as authors.' },
    { title: 'Data integrity', desc: 'Authors must preserve research data and provide access upon reasonable request by reviewers.' },
  ];
  return (
    <Panel>
      <Alert>
        <ShieldCheck aria-hidden />
        <AlertTitle>Commitment to integrity</AlertTitle>
        <AlertDescription>
          OAIC 2026 is committed to the highest standards of publication ethics and takes all forms of misconduct seriously, including plagiarism, data fabrication, and improper authorship.
        </AlertDescription>
      </Alert>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="rounded-md border border-gray-200 p-5">
            <h3 className="font-sans text-base font-semibold">{item.title}</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function CameraReady() {
  return (
    <Panel>
      <p className="leading-relaxed text-gray-700 md:text-lg">
        After acceptance, authors must prepare and submit the camera-ready version by{' '}
        <strong className="text-primary-950">25th November 2026</strong>.
      </p>
      <CheckList
        items={[
          'Address all reviewer comments in the final version.',
          'Include author names and affiliations (no longer anonymized).',
          'Add an acknowledgements section if applicable.',
          'Ensure the PDF is IEEE Xplore compliant (use IEEE PDF eXpress).',
          'Submit the signed IEEE Copyright Form.',
          'Upload all materials through the submission system by the deadline.',
        ]}
      />
    </Panel>
  );
}

function EdasGuidelines() {
  const steps = [
    'Manually adjust the page margins (try slightly increasing or decreasing them), even if the values are slightly beyond the EDAS margin threshold.',
    'Ensure that no text, figures, or symbols extend beyond the set margins; EDAS can reject PDFs that violate them.',
    'If the issue persists, repeat the above adjustments until the upload is accepted.',
    'Small variations during PDF creation are normal; keeping margins slightly above the minimum helps avoid rejection.',
    'Check margins on your final PDF, not just the source file.',
  ];
  return (
    <Panel>
      <Alert>
        <Info aria-hidden />
        <AlertTitle>EDAS submission guidelines</AlertTitle>
        <AlertDescription>Please read the following carefully before uploading your camera-ready manuscript on EDAS.</AlertDescription>
      </Alert>

      <div>
        <h3 className="font-sans text-lg font-semibold">Title consistency</h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          Ensure that the <strong>title in your camera-ready manuscript is the same as the title used in your initial submission</strong>. EDAS will not accept the upload if the two titles differ.
        </p>
      </div>

      <div>
        <h3 className="font-sans text-lg font-semibold">Margin error resolution</h3>
        <p className="mt-2 leading-relaxed text-gray-700">
          EDAS may detect a margin error even when your manuscript follows the official template. If this happens:
        </p>
        <ol className="mt-4 list-[lower-alpha] space-y-2.5 pl-6 marker:font-semibold marker:text-primary-900">
          {steps.map((s) => (
            <li key={s} className="pl-1 leading-relaxed text-gray-700">{s}</li>
          ))}
        </ol>
      </div>

      <div>
        <h3 className="mb-3 font-sans text-base font-semibold">US Letter paper (inches)</h3>
        <SpecGrid
          specs={[
            { label: 'Maximum text width', value: '7.26 in' },
            { label: 'Gutter between columns', value: '0.12 in' },
            { label: 'Minimum left/right margins', value: '0.62 in' },
            { label: 'Minimum top margin (first page)', value: '0.75 in' },
            { label: 'Minimum top margin (other pages)', value: '0.75 in' },
            { label: 'Minimum bottom margin', value: '1.0 in' },
          ]}
        />
      </div>

      <div>
        <h3 className="font-sans text-base font-semibold">A4 paper (centimetres)</h3>
        <p className="mb-3 mt-1 text-sm text-gray-500">
          PDF converters sometimes shift content, so EDAS advises keeping margins slightly larger than the template (for example, add 0.1 cm).
        </p>
        <SpecGrid
          specs={[
            { label: 'Minimum left/right margins', value: '1.57 cm' },
            { label: 'Minimum top margin (first page)', value: '0.96 cm' },
            { label: 'Minimum top margin (other pages)', value: '1.9 cm' },
            { label: 'Minimum bottom margin', value: '4.3 cm' },
          ]}
        />
      </div>
    </Panel>
  );
}

const TABS = [
  { value: 'general', label: 'General', component: GeneralGuidelines },
  { value: 'formatting', label: 'Formatting', component: FormattingGuidelines },
  { value: 'ethics', label: 'Ethics Policy', component: EthicsPolicy },
  { value: 'camera-ready', label: 'Camera-Ready', component: CameraReady },
  { value: 'edas', label: 'EDAS', component: EdasGuidelines },
];

export default function SubmissionGuidelinesPage() {
  return (
    <>
      <PageHeader
        title="Submission Guidelines"
        description="Everything you need to know to prepare and submit your paper to OAIC 2026."
        breadcrumbs={[{ label: 'Authors' }, { href: '/authors/submission-guidelines', label: 'Submission Guidelines' }]}
      />
      <Section>
        <div className="container-wide max-w-4xl">
          <Tabs defaultValue="general">
            <TabsList>
              {TABS.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
              ))}
            </TabsList>
            {TABS.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <tab.component />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </Section>
    </>
  );
}
