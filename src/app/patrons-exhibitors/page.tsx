import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/layout/PageHeader';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import { Award, Building2, Check, Crown, Gem, Globe, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Patrons & Sponsors',
  description:
    'Partner with OAIC 2026 - patronship and sponsorship opportunities.',
};

const sponsorshipTiers = [
  {
    name: 'Diamond Partner',
    amount: '₹5,00,000 (5 Lakhs)',
    description: 'Our most prestigious tier, offering maximum exposure.',
    icon: Gem,
    features: [
      'Prime logo placement on all banners, backdrops, and websites.',
      '4 complimentary full-access delegate passes.',
      '1 dedicated standard exhibition booth/stall in a prime location.',
      'Full-page color advertisement in the conference booklet.',
      'Acknowledge as "Diamond Sponsor" in all press releases and opening/closing ceremonies.',
    ],
  },
  {
    name: 'Gold Partner',
    amount: '₹3,00,000 (3 Lakhs)',
    description: 'High impact sponsorship offering excellent visibility across all media platforms and stall space.',
    icon: Crown,
    features: [
      'High-visibility logo placement on stage backdrops and conference website.',
      '2 complimentary full-access delegate passes.',
      '1 standard exhibition booth/stall.',
      'Half-page color advertisement inside the conference booklet.',
      'Acknowledged as "Gold Sponsor" during ceremonies and events.',
    ],
  },
  {
    name: 'Silver Partner',
    amount: 'Up to ₹1,00,000 (1 Lakh)',
    description: 'Affordable entry tier ideal for startups and institutions looking to showcase their branding.',
    icon: Award,
    features: [
      'Logo placement on the conference website and promotional emails.',
      '1 complimentary delegate pass.',
      'Logo listing inside the conference booklet.',
      'Group acknowledgment during the closing ceremony.',
    ],
  },
];

const badges = [
  { label: 'NAAC Accreditation', value: 'A++ Grade (3rd Cycle)' },
  { label: 'NIRF 2025 Rankings', value: '15th in University' },
  { label: 'UGC Autonomy', value: 'Category-I Graded' },
  { label: 'Swachh Campus', value: '3rd Nationally' },
];

const highlights = [
  {
    icon: Globe,
    title: 'Recognition',
    text: "SOA is accredited with the prestigious NAAC 'A++' grade (3rd Cycle) and ranked internationally by QS and THE World University Rankings.",
  },
  {
    icon: Award,
    title: 'Rankings',
    text: 'Secured 15th position in the University category, along with strong rankings in Engineering, Medical, Dental, Law, Research, and Management.',
  },
  {
    icon: Building2,
    title: 'Excellence',
    text: 'Granted UGC Category-I Graded Autonomy and ranked 3rd nationally in the Swachh Campus rankings, reflecting its commitment to excellence in education, research, and innovation.',
  },
];

const partners = [
  { name: 'HCLTech', logo: '/images/sponsors/hcltech.png', w: 240, h: 90 },
  { name: 'STPI', logo: '/images/sponsors/stpi.png', w: 240, h: 90 },
  { name: 'Govt. of Odisha', logo: '/images/sponsors/odisha-govt.png', w: 150, h: 150 },
  { name: 'NRDC', logo: '/images/sponsors/nrdc.png', w: 150, h: 150 },
];

const associations = [
  { name: 'Odisha Society of UK', logo: '/images/sponsors/odisha-society-uk.png' },
  { name: 'OSA', logo: '/images/sponsors/osa-logo.png' },
  { name: 'MSCB University', logo: '/images/sponsors/mscb-university.png' },
  { name: 'AIC-SOA Foundation', logo: '/images/sponsors/aiclogo.png' },
  { name: 'IEEE Future Networks', logo: '/images/sponsors/future_networks.png' },
  { name: 'IEEE 5G/6G Innovation Testbed', logo: '/images/sponsors/ieee-5g6g-testbed-color.png' },
  { name: 'IEEE Bhubaneswar Section', logo: '/images/sponsors/ieee-bhubaneswar-color.png' },
  { name: 'IEEE Computer Society Bhubaneswar Section Chapter', logo: '/images/sponsors/ieee-cs-bhubaneswar-color.png' },
  { name: 'IEEE', logo: '/images/sponsors/ieee.png' },
];

export default function PatronsExhibitorsPage() {
  return (
    <>
      <PageHeader
        title="Patrons & Sponsors"
        description="Partner with OAIC 2026 and connect with India's leading AI and Computer Science research community."
        breadcrumbs={[{ href: '/patrons-exhibitors', label: 'Patrons & Sponsors' }]}
      />

      {/* Host institute */}
      <Section>
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <Image
                src="/images/siksha-o-anusandhan-bhubaneswar-featured.jpg"
                alt="Siksha 'O' Anusandhan campus"
                width={800}
                height={450}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-auto w-full rounded-lg object-cover"
                priority
              />
              <dl className="mt-4 grid grid-cols-2 gap-3">
                {badges.map((b) => (
                  <div key={b.label} className="surface p-3">
                    <dt className="text-xs text-gray-500">{b.label}</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-primary-950">{b.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-7">
              <span className="eyebrow">Host institute</span>
              <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Siksha &apos;O&apos; Anusandhan</h2>
              <p className="mt-1 text-gray-500">Bhubaneswar, Odisha, India</p>
              <p className="mt-5 leading-relaxed text-gray-700">
                Siksha &apos;O&apos; Anusandhan (SOA), Bhubaneswar, declared under Section 3 of the UGC Act, 1956, is a leading university in India offering professional programmes in disciplines such as Science, Engineering, Medicine, Dental Sciences, Nursing, Pharmaceutical Sciences, Biotechnology, Management, Law, Hotel Management, and Agricultural Sciences. The university provides a vibrant environment for teaching, research, and development through its undergraduate and postgraduate programmes.
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {highlights.map(({ icon: Icon, title, text }) => (
                  <li key={title}>
                    <Icon className="h-5 w-5 text-primary-800" aria-hidden />
                    <h3 className="mt-2 font-sans text-base font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Partners */}
      <Section className="border-t border-gray-200">
        <div className="container-wide">
          <SectionHeader eyebrow="Supported by" title="Our Partners" />
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {partners.map((p) => (
              <li key={p.name} className="surface flex flex-col items-center gap-3 p-5">
                <div className="flex h-24 w-full items-center justify-center">
                  <Image src={p.logo} alt={p.name} width={p.w} height={p.h} className="max-h-24 w-auto max-w-full object-contain" />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-gray-500">{p.name}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-gray-500">In association with</p>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-12">
              {associations.map((l) => (
                <li key={l.name}>
                  <Image src={l.logo} alt={l.name} title={l.name} width={160} height={64} className="h-10 w-auto object-contain md:h-14" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Sponsorship */}
      <Section className="border-t border-gray-200 bg-gray-50">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Sponsorship"
            title="Sponsorship Opportunities"
            subtitle="We invite industries, research organizations, and academic institutions to join us as sponsors of OAIC 2026. This is a unique opportunity to build brand awareness, discover top talent, and interact with leading minds in AI."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {sponsorshipTiers.map((tier, i) => {
              const Icon = tier.icon;
              return (
                <div key={tier.name} className={`surface flex flex-col p-6 md:p-8 ${i === 0 ? 'border-t-[3px] border-t-brand-700' : ''}`}>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold md:text-2xl">{tier.name}</h3>
                    <Icon className="h-6 w-6 shrink-0 text-primary-800" aria-hidden />
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{tier.description}</p>
                  <p className="mt-6 border-y border-gray-200 py-4">
                    <span className="block text-xs uppercase tracking-wider text-gray-500">Sponsorship amount</span>
                    <span className="mt-1 block font-serif text-2xl font-semibold text-primary-950">{tier.amount}</span>
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" aria-hidden />
                        <span className="text-sm leading-relaxed text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col gap-6 rounded-lg bg-primary-950 p-6 text-white md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <h3 className="text-2xl font-semibold text-white">Interested in partnering?</h3>
              <p className="mt-2 max-w-xl text-white/80">
                For sponsorship inquiries, custom packages, or exhibition space booking, please reach out to our organizing committee.
              </p>
            </div>
            <Button as="a" href="mailto:im.aic@soa.ac.in" variant="inverse" size="lg" className="shrink-0">
              <Mail className="h-4 w-4" aria-hidden />
              Contact the committee
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
