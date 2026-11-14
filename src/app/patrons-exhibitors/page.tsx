import type { Metadata } from 'next';
import Image from 'next/image';
import PageHeader from '@/components/layout/PageHeader';
import Section from '@/components/layout/Section';
import { Gem, Crown, Award, Check, Mail, ArrowRight, Globe, Building2 } from 'lucide-react';
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
    gradient: 'from-[#00c6ff] via-[#0072ff] to-[#0d52ab]',
    borderColor: 'border-[#00c6ff]',
    textColor: 'text-primary-850',
    bgColor: 'bg-gradient-to-br from-cyan-50/60 to-blue-50/30',
    bulletColor: 'text-[#0072ff]',
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
    gradient: 'from-[#f2c94c] via-[#f2994a] to-[#d68338]',
    borderColor: 'border-[#f2c94c]',
    textColor: 'text-amber-800',
    bgColor: 'bg-gradient-to-br from-amber-50/50 to-orange-50/20',
    bulletColor: 'text-amber-600',
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
    gradient: 'from-[#bdc3c7] via-[#95a5a6] to-[#7f8c8d]',
    borderColor: 'border-[#bdc3c7]',
    textColor: 'text-slate-700',
    bgColor: 'bg-gradient-to-br from-slate-50/80 to-zinc-50/40',
    bulletColor: 'text-slate-500',
    features: [
      'Logo placement on the conference website and promotional emails.',
      '1 complimentary delegate pass.',
      'Logo listing inside the conference booklet.',
      'Group acknowledgment during the closing ceremony.',
    ],
  },
];

export default function PatronsExhibitorsPage() {
  return (
    <>
      <PageHeader
        title="Patrons & Sponsors"
        description="Partner with OAIC 2026 and connect with India's leading AI and Computer Science research community."
        breadcrumbs={[
          { href: '/patrons-exhibitors', label: 'Patrons & Sponsors' },
        ]}
      />

      {/* ── Host Institute + Partners ── */}
      <Section className="py-12 md:py-20 bg-white">
        <div className="container-wide max-w-[1800px] px-4 md:px-8 2xl:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-8 items-stretch">
          {/* Left: Host Institute (primary) */}
          <div className="xl:col-span-8 relative rounded-3xl border border-primary-100 bg-gradient-to-br from-primary-50/70 via-white to-white shadow-lg overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-900 via-primary-600 to-[#e67e22]" />

            <div className="p-6 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-900 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-100">
                  <Building2 className="w-3.5 h-3.5" />
                  Host Institute
                </span>
                <div className="h-px flex-1 bg-primary-100" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                {/* Image + badges */}
                <div className="lg:col-span-5 flex flex-col gap-5">
                  <div className="overflow-hidden rounded-xl shadow-md">
                    <Image
                      src="/images/siksha-o-anusandhan-bhubaneswar-featured.jpg"
                      alt="Siksha 'O' Anusandhan Campus"
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                      width={800}
                      height={450}
                      priority
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'NAAC Accreditation', value: 'A++ Grade (3rd Cycle)' },
                      { label: 'NIRF 2025 Rankings', value: '15th in University' },
                      { label: 'UGC Autonomy', value: 'Category-I Graded' },
                      { label: 'Swachh Campus', value: '3rd Nationally' },
                    ].map((badge) => (
                      <div key={badge.label} className="bg-white border border-primary-100 border-l-4 border-l-primary-600 rounded-lg p-3 flex flex-col justify-center shadow-sm">
                        <span className="text-[10px] sm:text-xs text-primary-700 font-semibold uppercase tracking-wider">{badge.label}</span>
                        <span className="text-sm sm:text-base font-bold text-primary-900">{badge.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Text */}
                <div className="lg:col-span-7">
                  <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-2 font-serif">About Host Institute</h2>
                  <p className="text-base md:text-lg text-primary-800 mb-5 font-semibold">
                    <span className="text-lg md:text-xl">Siksha &apos;O&apos; Anusandhan</span>, Bhubaneswar, Odisha, India
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed mb-6">
                    Siksha &apos;O&apos; Anusandhan (SOA), Bhubaneswar, declared under Section 3 of the UGC Act, 1956, is a leading university in India offering professional programmes in disciplines such as Science, Engineering, Medicine, Dental Sciences, Nursing, Pharmaceutical Sciences, Biotechnology, Management, Law, Hotel Management, and Agricultural Sciences. The university provides a vibrant environment for teaching, research, and development through its undergraduate and postgraduate programmes.
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        icon: Globe,
                        title: 'Recognition',
                        text: "SOA is accredited with the prestigious NAAC 'A++' grade (3rd Cycle) and ranked Internationally by QS and THE World University Rankings.",
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
                    ].map(({ icon: Icon, title, text }) => (
                      <div key={title} className="rounded-xl bg-white border border-primary-100 p-4 shadow-sm">
                        <div className="bg-primary-100 p-2 rounded-lg text-primary-800 w-fit mb-3">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-gray-900 text-base mb-1">{title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                      </div>
                    ))}
              </div>
            </div>
          </div>

          {/* Right: Partners (equal cards) */}
          <aside className="xl:col-span-4 flex flex-col rounded-3xl border border-primary-100 bg-white shadow-lg overflow-hidden">
            <div className="bg-primary-900 px-6 py-4 text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary-100">Our Partners</span>
            </div>

            <div className="flex-1 grid grid-cols-2 xl:grid-cols-1 auto-rows-fr gap-4 p-4 md:p-5 bg-primary-50/40">
              {[
                { name: 'HCLTech', logo: '/images/sponsors/hcltech.png', w: 240, h: 90, wide: true },
                { name: 'STPI', logo: '/images/sponsors/stpi.png', w: 240, h: 90, wide: true },
                { name: 'Govt. of Odisha', logo: '/images/sponsors/odisha-govt.png', w: 150, h: 150, wide: false },
                { name: 'NRDC', logo: '/images/sponsors/nrdc.png', w: 150, h: 150, wide: false },
              ].map((p) => (
                <div
                  key={p.name}
                  className="group flex flex-col items-center justify-between gap-3 rounded-2xl border border-primary-100 bg-white p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-primary-300 transition-all duration-300"
                >
                  <div className="flex-1 flex items-center justify-center w-full min-h-24">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={p.w}
                      height={p.h}
                      className={`${p.wide ? 'w-full max-h-20' : 'max-h-28 w-auto'} object-contain group-hover:scale-105 transition-transform duration-300`}
                    />
                  </div>
                  <span className="w-full border-t border-primary-100 pt-3 text-center text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          </aside>
          </div>

          {/* Bottom: Supported by / affiliations (small logos) */}
          <div className="mt-8 rounded-2xl border border-primary-100 bg-white px-4 py-5 md:px-8 shadow-sm">
            <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
              In Association With
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:gap-x-10">
              {[
                { name: 'Odisha Society of UK', logo: '/images/sponsors/odisha-society-uk.png' },
                { name: 'OSA', logo: '/images/sponsors/osa-logo.png' },
                { name: 'MSCB University', logo: '/images/sponsors/mscb-university.png' },
                { name: 'AIC-SOA Foundation', logo: '/images/sponsors/aiclogo.png' },
                { name: 'IEEE Future Networks', logo: '/images/sponsors/future_networks.png' },
                { name: 'IEEE 5G/6G Innovation Testbed', logo: '/images/sponsors/ieee-5g6g-testbed-color.png' },
                { name: 'IEEE Bhubaneswar Section', logo: '/images/sponsors/ieee-bhubaneswar-color.png' },
                { name: 'IEEE Computer Society Bhubaneswar Section Chapter', logo: '/images/sponsors/ieee-cs-bhubaneswar-color.png' },
                { name: 'IEEE', logo: '/images/sponsors/ieee.png' },
              ].map((l) => (
                <Image
                  key={l.name}
                  src={l.logo}
                  alt={l.name}
                  title={l.name}
                  width={160}
                  height={64}
                  className="h-12 md:h-14 w-auto object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Sponsorship Opportunities ── */}
      <Section className="py-12 md:py-20 bg-gray-50/50">
        <div className="container-wide">
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-serif">Sponsorship Opportunities</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We invite industries, research organizations, and academic institutions to join us as sponsors of OAIC 2026. This is a unique opportunity to build brand awareness, discover top talent, and interact with leading minds in AI.
            </p>
          </div>

          {/* Tiers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {sponsorshipTiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.name}
                  className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div className={`h-4 bg-gradient-to-r ${tier.gradient}`} />

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-6 flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-primary-950 mb-1 group-hover:text-primary-600 transition-colors">
                          {tier.name}
                        </h3>
                        <p className="text-sm text-gray-500 font-medium">{tier.description}</p>
                      </div>
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${tier.gradient} text-white shadow-md`}>
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <div className={`mb-8 p-4 rounded-xl ${tier.bgColor} border border-gray-100/50`}>
                      <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block mb-1">
                        Sponsorship Amount
                      </span>
                      <span className="text-2xl font-black text-primary-900">
                        {tier.amount}
                      </span>
                    </div>

                    <ul className="space-y-4 mb-8 flex-1">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className={`h-5 w-5 ${tier.bulletColor} mr-3 shrink-0 mt-0.5 stroke-[3]`} />
                          <span className="text-sm font-medium text-gray-600 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Callout */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-950 to-primary-900 text-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(41,153,223,0.15),transparent_60%)] pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 font-serif">Interested in Partnering?</h3>
                <p className="text-primary-100 max-w-xl text-base md:text-lg leading-relaxed">
                  For sponsorship inquiries, custom packages, or exhibition space booking, please reach out to our organizing committee.
                </p>
              </div>
              <div className="shrink-0 w-full md:w-auto">
                <Button
                  as="a"
                  href="mailto:im.aic@soa.ac.in"
                  className="w-full md:w-auto bg-white text-primary-950 hover:bg-primary-50 px-8 py-6 text-lg font-bold shadow-md rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 border-none"
                >
                  <Mail className="h-5 w-5 text-primary-600" />
                  Contact Committee
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
