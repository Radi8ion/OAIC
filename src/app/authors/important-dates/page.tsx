import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { importantDates } from '@/data/dates';
import { Badge } from '@/components/ui/Badge';
import { Calendar, AlertTriangle } from 'lucide-react';
import Section from '@/components/layout/Section';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: 'Important Dates',
  description:
    'Key deadlines for paper submission, notification, camera-ready, and registration for OAIC 2026.',
};


export default function ImportantDatesPage() {
  return (
    <>
      <PageHeader
        title="Important Dates"
        description="Plan ahead - these deadlines are firm. Mark them in your calendar."
        breadcrumbs={[
          { href: '/authors/important-dates', label: 'Important Dates' },
        ]}
      />
      <Section>
        <div className="mx-auto max-w-4xl py-6">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-primary-900 mb-2">Key Deadlines</h2>
            <p className="text-lg text-gray-600">
              All deadlines are at <span className="font-semibold text-primary-800">11:59 PM AoE</span> (Anywhere on Earth).
            </p>
          </div>

          <div className="relative border-l-4 border-primary-100 ml-6 md:ml-8 space-y-8 py-2">
            {importantDates.map((date, i) => (
              <div key={i} className="relative pl-8 md:pl-12 group">
                {/* Timeline Dot/Icon */}
                <div className={cn(
                  "absolute -left-[26px] top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-md ring-4 transition-colors duration-300 group-hover:scale-110 z-10",
                  date.status === 'extended'
                    ? "bg-amber-500 ring-amber-200 group-hover:bg-amber-600"
                    : "bg-primary-900 ring-white group-hover:bg-primary-600"
                )}>
                  <Calendar className="h-5 w-5" />
                </div>

                {/* Content Card */}
                <div className={cn(
                  "bg-white rounded-lg shadow-sm border p-5 md:p-6 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1",
                  date.status === 'extended'
                    ? "border-amber-300 group-hover:border-amber-400 bg-amber-50/20"
                    : "border-gray-100 group-hover:border-primary-300"
                )}>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-primary-900 mb-1 flex flex-wrap items-center gap-2">
                        {date.event}
                        {date.status === 'extended' && (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-100 border border-amber-300 rounded-md px-2 py-0.5">
                            <span className="animate-star-flash">🌟</span> Date Extended
                          </span>
                        )}
                      </h3>
                      <p className="text-sm font-medium text-gray-500 sm:hidden">
                        {date.date}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="hidden sm:block text-right">
                        <time
                          dateTime={date.date}
                          className={cn(
                            "text-lg font-bold",
                            date.status === 'extended' ? "text-amber-700" : "text-gray-800"
                          )}
                        >
                          {date.date}
                        </time>
                      </div>
                      <Badge
                        className={
                          date.status === 'past'
                            ? "bg-gray-100 text-gray-500 border-none hover:bg-gray-200"
                            : date.status === 'extended'
                            ? "bg-amber-500 text-white border-none hover:bg-amber-600 shadow-sm px-3 py-1 font-bold flex items-center gap-1.5"
                            : "bg-primary-400 text-white border-none hover:bg-primary-500 shadow-sm px-3 py-1"
                        }
                      >
                        {date.status === 'extended' && <span className="animate-star-flash">🌟</span>}
                        {date.status.charAt(0).toUpperCase() + date.status.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Alert className="mt-12 bg-primary-50 border-none border-l-4 border-l-primary-600 rounded-r-lg shadow-sm text-primary-950">
            <AlertTriangle className="h-5 w-5 text-primary-600" />
            <AlertTitle className="font-bold text-lg text-primary-900">Note on Deadlines</AlertTitle>
            <AlertDescription className="text-base mt-2 leading-relaxed">
              All deadlines are at{' '}
              <strong className="font-bold text-primary-900">
                11:59 PM AoE (Anywhere on Earth)
              </strong>
              . Extensions, if any, will be announced on this page and via
              email to registered authors. We strongly encourage early
              submissions.
            </AlertDescription>
          </Alert>
        </div>
      </Section>
    </>
  );
}
