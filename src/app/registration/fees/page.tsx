import type { Metadata } from 'next';
import { Check, Info } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import Section from '@/components/layout/Section';
import PricingTable from '@/components/sections/PricingTable';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { registrationIncludes } from '@/data/registration';

export const metadata: Metadata = {
  title: 'Registration Fees',
  description: 'View OAIC 2026 registration fees for students, academics, industry, and international attendees.',
};

const notes = [
  'Payment accepted via NEFT/RTGS, credit/debit card, and UPI.',
  'Each accepted paper requires at least one full registration.',
];

export default function RegistrationFeesPage() {
  return (
    <>
      <PageHeader
        title="Registration Fees"
        description="Register early for the best rates. Early Bird closes September 15, 2026."
        breadcrumbs={[{ label: 'Registration' }, { href: '/registration/fees', label: 'Registration Fees' }]}
      />
      <Section>
        <div className="container-wide max-w-5xl">
          <PricingTable />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="surface p-6">
              <h2 className="font-sans text-lg font-semibold">Registration includes</h2>
              <ul className="mt-4 space-y-2.5">
                {registrationIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" aria-hidden />
                    <span className="text-[15px] text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Alert>
              <Info aria-hidden />
              <AlertTitle>Important notes</AlertTitle>
              <AlertDescription>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </Section>
    </>
  );
}
