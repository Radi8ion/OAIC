import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { contactInfo } from '@/data/contact';
import { MapPin, Mail } from 'lucide-react';
import Section from '@/components/layout/Section';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact the OAIC 2026 organizing committee for general inquiries, papers, sponsorship, and media.',
};

const contactCategories = [
  {
    label: 'General Inquiries',
    email: contactInfo.generalEmail,
    desc: 'For any general questions about the conference.',
  },
  {
    label: 'Paper Submissions',
    email: contactInfo.papersEmail,
    desc: 'Questions about submission, review process, or acceptance.',
  },
  {
    label: 'Sponsorship',
    email: contactInfo.sponsorshipEmail,
    desc: 'Partnership and exhibition opportunities.',
  },
  {
    label: 'Media & Press',
    email: contactInfo.mediaEmail,
    desc: 'Press passes, media kits, and coverage arrangements.',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Reach out with any questions about OAIC 2026."
        breadcrumbs={[{ label: 'About' }, { href: '/about/contact', label: 'Contact Us' }]}
      />

      <Section>
        <div className="container-wide grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-semibold md:text-3xl">Get in touch</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contactCategories.map((cat) => (
                <div key={cat.label} className="surface surface-hover border-t-[3px] border-t-primary-800 p-5">
                  <h3 className="font-sans text-base font-semibold">{cat.label}</h3>
                  <p className="mt-1 text-sm text-gray-600">{cat.desc}</p>
                  <a href={`mailto:${cat.email}`} className="mt-3 inline-flex items-center gap-2 break-all text-sm font-medium">
                    <Mail className="h-4 w-4 shrink-0 text-gray-400" aria-hidden />
                    {cat.email}
                  </a>
                </div>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-semibold md:text-3xl">Venue</h2>
            <div className="surface mt-6 flex items-start gap-4 p-5 md:p-6">
              <span className="icon-badge"><MapPin className="h-5 w-5" aria-hidden /></span>
              <address className="not-italic leading-relaxed text-gray-700">
                <span className="block font-semibold text-gray-900">Siksha &apos;O&apos; Anusandhan</span>
                <span className="block">{contactInfo.address.line1}</span>
                <span className="block">{contactInfo.address.line2}</span>
                <span className="block">{contactInfo.address.country}</span>
              </address>
            </div>
          </div>

          <div className="surface p-6 md:p-8 lg:col-span-5">
            <h2 className="text-xl font-semibold md:text-2xl">Send a message</h2>
            <p className="mb-6 mt-1 text-sm text-gray-600">Your message will go to our general inquiries inbox.</p>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
