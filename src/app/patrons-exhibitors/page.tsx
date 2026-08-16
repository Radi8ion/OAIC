import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import Section from '@/components/layout/Section';
import { Gem, Crown, Award, Check, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Sponsors & Exhibitors',
  description:
    'Partner with OAIC 2026 - sponsorship and exhibition opportunities.',
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
        title="Sponsors & Exhibitors"
        description="Partner with OAIC 2026 and connect with India's leading AI and Computer Science research community."
        breadcrumbs={[
          { href: '/patrons-exhibitors', label: 'Sponsors & Exhibitors' },
        ]}
      />

      <Section className="py-12 md:py-20 bg-gray-50/50">
        <div className="container-wide">
          {/* Intro Section */}
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
                  {/* Top Color Band / Gradient */}
                  <div className={`h-4 bg-gradient-to-r ${tier.gradient}`} />
                  
                  <div className="p-8 flex-1 flex flex-col">
                    {/* Header */}
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

                    {/* Price / Amount */}
                    <div className={`mb-8 p-4 rounded-xl ${tier.bgColor} border border-gray-100/50`}>
                      <span className="text-xs uppercase tracking-wider text-gray-500 font-bold block mb-1">
                        Sponsorship Amount
                      </span>
                      <span className="text-2xl font-black text-primary-900">
                        {tier.amount}
                      </span>
                    </div>

                    {/* Bullet Features */}
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

          {/* Contact and Inquiry Callout */}
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
