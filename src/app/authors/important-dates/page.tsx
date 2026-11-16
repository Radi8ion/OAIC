import type { Metadata } from 'next';
import { Info } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import Section from '@/components/layout/Section';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { importantDates } from '@/data/dates';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'Important Dates',
  description: 'Key deadlines for paper submission, notification, camera-ready, and registration for OAIC 2026.',
};

const statusLabel = { open: 'Open', closed: 'Closed', past: 'Passed', upcoming: 'Upcoming', extended: 'Extended' } as const;

export default function ImportantDatesPage() {
  return (
    <>
      <PageHeader
        title="Important Dates"
        description="Plan ahead. These deadlines are firm; mark them in your calendar."
        breadcrumbs={[{ label: 'Authors' }, { href: '/authors/important-dates', label: 'Important Dates' }]}
      />
      <Section>
        <div className="container-wide max-w-4xl">
          <h2 className="text-2xl font-semibold md:text-3xl">Key deadlines</h2>
          <p className="mt-2 text-gray-600">
            All deadlines are at <strong className="font-semibold text-gray-800">11:59 PM AoE</strong> (Anywhere on Earth).
          </p>

          <ol className="surface mt-8 divide-y divide-gray-200">
            {importantDates.map((d) => (
              <li key={d.event} className="grid grid-cols-1 gap-2 px-5 py-5 sm:grid-cols-[11rem_1fr_auto] sm:items-center sm:gap-6 md:px-6">
                <time className="text-sm font-semibold text-brand-700 md:text-base">{d.date}</time>
                <span className="text-[15px] font-medium text-gray-900 md:text-base">{d.event}</span>
                <span
                  className={cn(
                    'w-fit rounded px-2 py-0.5 text-xs font-medium',
                    d.status === 'extended' && 'bg-brand-50 text-brand-700',
                    d.status === 'upcoming' && 'bg-primary-50 text-primary-900',
                    (d.status === 'past' || d.status === 'closed') && 'bg-gray-100 text-gray-500',
                    d.status === 'open' && 'bg-primary-50 text-primary-900',
                  )}
                >
                  {statusLabel[d.status]}
                </span>
              </li>
            ))}
          </ol>

          <Alert className="mt-10">
            <Info aria-hidden />
            <AlertTitle>Note on deadlines</AlertTitle>
            <AlertDescription>
              Extensions, if any, will be announced on this page and by email to registered authors. We strongly encourage early submission.
            </AlertDescription>
          </Alert>
        </div>
      </Section>
    </>
  );
}
