import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { AlertTriangle, ExternalLink } from 'lucide-react';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { Button } from '@/components/ui/Button';
import { contactInfo } from '@/data/contact';

export const metadata: Metadata = {
  title: 'Visa Information',
  description:
    'Visa requirements and application guide for attending OAIC 2026 in Bhubaneswar, India.',
};

const visaCategories = [
  {
    country: 'USA, UK, EU, Canada, Australia',
    type: 'e-Visa',
    notes:
      'Apply online at indianvisaonline.gov.in. Typically granted in 3–5 business days.',
  },
  {
    country: 'SAARC Countries',
    type: 'Varies',
    notes:
      'Check country-specific requirements. Nepal/Bhutan citizens generally exempt.',
  },
  {
    country: 'China, Japan, South Korea',
    type: 'e-Visa',
    notes: 'e-Visa available. Apply at least 4 days in advance.',
  },
  {
    country: 'All other countries',
    type: 'Regular Visa',
    notes:
      'Apply at your nearest Indian embassy/consulate. Allow 2–4 weeks processing time.',
  },
];

const applicationSteps = [
  'Visit the official Indian e-Visa portal.',
  'Select "e-Visa" and choose your nationality.',
  'Fill in personal details, travel dates, and purpose (Conference/Business).',
  'Upload required documents: passport copy, photo, and invitation letter.',
  'Pay the visa fee online.',
  'Receive e-Visa approval via email (usually within 3–5 business days).',
  'Print your e-Visa and carry it with your passport.',
];

export default function VisaPage() {
  return (
    <>
      <PageHeader
        title="Visa Information"
        description="Planning your travel to OAIC 2026 in Bhubaneswar, India."
        breadcrumbs={[{ label: 'Travel' }, { href: '/travel/visa', label: 'Visa Information' }]}
      />
      <Section>
        <div className="container-wide max-w-5xl">
          <Alert>
            <AlertTriangle aria-hidden />
            <AlertTitle>Disclaimer</AlertTitle>
            <AlertDescription>
              Visa regulations are subject to change. Please verify all information with your local Indian embassy or the official government portal.
            </AlertDescription>
          </Alert>

          <div className="mt-12">
            <SectionHeader
              align="left"
              title="Visa requirements"
              subtitle="Most international visitors require a visa. The Indian government offers e-Visas for 165+ countries. We recommend applying at least 4 weeks before your scheduled travel."
            />

            <div className="surface hidden overflow-x-auto md:block">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
                  <tr>
                    <th scope="col" className="px-5 py-3 font-medium">Country / region</th>
                    <th scope="col" className="px-5 py-3 font-medium">Visa type</th>
                    <th scope="col" className="px-5 py-3 font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {visaCategories.map((row) => (
                    <tr key={row.country}>
                      <th scope="row" className="px-5 py-4 font-medium text-gray-900">{row.country}</th>
                      <td className="whitespace-nowrap px-5 py-4 text-gray-800">{row.type}</td>
                      <td className="px-5 py-4 leading-relaxed text-gray-600">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ul className="space-y-3 md:hidden">
              {visaCategories.map((row) => (
                <li key={row.country} className="surface p-4">
                  <p className="font-semibold text-gray-900">{row.country}</p>
                  <p className="mt-0.5 text-sm font-medium text-brand-700">{row.type}</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{row.notes}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <SectionHeader
              align="left"
              title="Application guide"
              subtitle="A step-by-step procedure to help your visa application go smoothly."
            />
            <ol className="grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
              {applicationSteps.map((step, i) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-300 text-sm font-semibold text-primary-950">
                    {i + 1}
                  </span>
                  <p className="pt-0.5 leading-relaxed text-gray-700">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-10 sm:flex-row">
            <Button as="a" href="https://indianvisaonline.gov.in" target="_blank" rel="noopener noreferrer" variant="primary">
              Indian e-Visa portal
              <ExternalLink className="h-4 w-4" aria-hidden />
            </Button>
            <Button
              as="a"
              href={`mailto:${contactInfo.generalEmail}?subject=${encodeURIComponent('OAIC 2026 visa invitation letter request')}`}
              variant="outline"
            >
              Request an invitation letter
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
