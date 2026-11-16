import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';
import Section from '@/components/layout/Section';
import {
  ArrowRight,
  Calendar,
  Eye,
  FlaskConical,
  Globe2,
  GraduationCap,
  Handshake,
  HeartHandshake,
  MapPin,
  Target,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

const objectives = [
  {
    icon: Globe2,
    number: '01',
    title: 'Build a Global Knowledge Network',
    text: 'Connect the global Odia diaspora and international AI leaders with premier academic institutions, startups, and emerging talent across Odisha.',
  },
  {
    icon: GraduationCap,
    number: '02',
    title: 'Nurture Next-Gen Talent',
    text: 'Empower students, scholars, and early-career researchers through structured learning pathways, masterclasses, mentorship, and international exposure.',
  },
  {
    icon: FlaskConical,
    number: '03',
    title: 'Promote Research & Innovation',
    text: 'Catalyze cutting-edge AI breakthroughs, cross-disciplinary patents, deep-tech entrepreneurship, and indigenous solutions to complex societal challenges.',
  },
  {
    icon: HeartHandshake,
    number: '04',
    title: 'Enable Societal Transformation',
    text: 'Drive ethical, human-centric deployment of AI across healthcare, agriculture, climate resilience, public governance, and education.',
  },
  {
    icon: Handshake,
    number: '05',
    title: 'Forge Global Partnerships',
    text: 'Establish strategic collaborative bridges between top global universities, industry pioneers, research labs, and state innovation bodies.',
  },
  {
    icon: Users,
    number: '06',
    title: 'Inspire Collective Contribution',
    text: "Provide an inclusive platform for individuals and organisations passionate about Odisha's digital renaissance to actively contribute to its journey.",
  },
];

const focusPillars = [
  'Foundational & Explainable AI',
  'Next-Gen Causal Reasoning',
  'Climate & Sustainable AI',
  'Quantum & 6G Convergence',
  'Healthcare & Life Sciences',
  'Ethical & Trustworthy Systems',
];

export const metadata: Metadata = {
  title: 'About OAIC 2026 & Odisha AI',
  description:
    'Discover the vision behind the 2026 1st Odisha AI Conference (OAIC) and the Odisha AI initiative driving global innovation in Bhubaneswar, India.',
};

export default function AboutUsPage() {
  return (
    <>
      <PageHeader
        title="About OAIC"
        description="Learn more about the 2026 1st Odisha AI Conference and the vision driving Odisha AI."
        breadcrumbs={[{ label: 'About' }, { href: '/about/about-us', label: 'About Us' }]}
      />

      {/* Conference overview */}
      <Section>
        <div className="container-wide grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <span className="eyebrow">Inaugural edition · OAIC 2026</span>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">The Premier Stage for AI Innovation in Eastern India</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-800">
              The <strong className="font-semibold">2026 1st Odisha AI Conference (OAIC)</strong> serves as an international forum for exchanging ideas, presenting pioneering research findings, and forging partnerships that tackle real-world challenges through AI-driven breakthroughs.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              OAIC bridges foundational theoretical computer science and high-impact applied systems. From explainable generative intelligence to edge AI deployment, the conference emphasizes technological rigor, cross-border academic excellence, and ethical accountability.
            </p>

            <h3 className="mt-8 font-sans text-xs font-semibold uppercase tracking-wider text-gray-500">Key focus areas</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {focusPillars.map((pillar) => (
                <li key={pillar} className="rounded border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm text-gray-700">
                  {pillar}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5 lg:col-span-5">
            <dl className="surface divide-y divide-gray-200">
              <div className="flex items-start gap-3 p-5">
                <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-primary-800" aria-hidden />
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-gray-500">Dates</dt>
                  <dd className="mt-0.5 font-semibold text-gray-900">December 19–20, 2026</dd>
                  <dd className="text-sm text-gray-500">Pre-conference workshops: December 18, 2026</dd>
                </div>
              </div>
              <div className="flex items-start gap-3 p-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-800" aria-hidden />
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-gray-500">Location</dt>
                  <dd className="mt-0.5 font-semibold text-gray-900">Bhubaneswar, Odisha, India</dd>
                  <dd className="text-sm text-gray-500">In-person and hybrid virtual tracks</dd>
                </div>
              </div>
            </dl>

            <div className="surface p-5 md:p-6">
              <span className="eyebrow">Host institution</span>
              <h3 className="mt-2 text-xl font-semibold">Siksha &apos;O&apos; Anusandhan</h3>
              <p className="mt-1 text-sm text-gray-500">Deemed to be University · Bhubaneswar, Odisha</p>
              <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-xs text-gray-500">NAAC</dt>
                  <dd className="font-medium text-gray-900">A++ Grade (3rd Cycle)</dd>
                </div>
                <div>
                  <dt className="text-xs text-gray-500">NIRF 2025</dt>
                  <dd className="font-medium text-gray-900">15th in University</dd>
                </div>
              </dl>
              <Link href="/patrons-exhibitors" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold">
                About host and partners
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Odisha AI initiative */}
      <Section className="border-t border-gray-200 bg-gray-50">
        <div className="container-wide">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="eyebrow">The movement behind OAIC</span>
            <div className="mt-6 rounded-lg border border-gray-200 bg-white p-4">
              <Image src="/images/logo.png" alt="Odisha AI logo" width={163} height={200} className="h-auto w-28 sm:w-32" />
            </div>
            <h2 className="mt-6 text-3xl font-semibold md:text-4xl">Odisha AI</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              A transformative global initiative dedicated to connecting Odia technocrats, researchers, academicians, and entrepreneurs across continents to position Odisha as a global powerhouse in Artificial Intelligence.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-lg bg-primary-950 p-6 text-white md:p-10">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/70">
                <Eye className="h-4 w-4" aria-hidden /> Our vision
              </span>
              <p className="mt-4 font-serif text-2xl font-semibold leading-snug text-white md:text-[1.75rem]">
                &ldquo;To make Odisha the Intellectual AI Capital of the World.&rdquo;
              </p>
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-white/80">
                <p>
                  Odisha AI envisions Odisha emerging as a globally recognised centre of Artificial Intelligence, where knowledge, research, innovation, entrepreneurship and responsible technology converge to create opportunities and solve pressing challenges for humanity.
                </p>
                <p>
                  We seek to construct a resilient ecosystem that nurtures indigenous talent, empowers young researchers, accelerates scientific discoveries, and firmly positions Odisha at the cutting-edge of next-generation computational intelligence.
                </p>
              </div>
            </div>

            <div className="surface p-6 md:p-10">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-700">
                <Target className="h-4 w-4" aria-hidden /> Our mission
              </span>
              <p className="mt-4 font-serif text-2xl font-semibold leading-snug text-primary-950 md:text-[1.75rem]">
                &ldquo;To give back to our motherland by building a globally connected AI ecosystem that transforms lives.&rdquo;
              </p>
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-gray-600">
                <p>
                  Supported by the Odisha Society of the Americas (OSA) and global mentors, Odisha AI convenes leading professionals, researchers, industry innovators, and students worldwide.
                </p>
                <p>
                  By pooling collective wisdom, resources, and mentorship, the initiative actively upgrades regional infrastructure, champions ethical AI policies, and opens global career and research pipelines for the youth of Odisha.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-20">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <span className="eyebrow">Action plan</span>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Key Strategic Objectives</h2>
              <p className="mt-3 text-gray-600">Six foundational pillars driving tangible outcomes across the state and beyond.</p>
            </div>

            <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {objectives.map(({ icon: Icon, number, title, text }) => (
                <li key={title} className="surface p-6">
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-primary-800" aria-hidden />
                    <span className="font-serif text-lg font-semibold text-gray-300">{number}</span>
                  </div>
                  <h3 className="mt-4 font-sans text-base font-semibold">{title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{text}</p>
                </li>
              ))}
            </ol>
          </div>

          <figure className="mx-auto mt-16 max-w-3xl border-l-[3px] border-brand-700 pl-6 md:mt-20 md:pl-8">
            <blockquote className="font-serif text-xl leading-relaxed text-primary-950 md:text-2xl">
              Odisha AI aspires not merely to accelerate the adoption of Artificial Intelligence, but to build the knowledge, capabilities and innovation ecosystem necessary to shape its future.
            </blockquote>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button as={Link} href="/program/at-a-glance" variant="primary">
                Explore the program
              </Button>
              <Button as={Link} href="/patrons-exhibitors" variant="outline">
                Partner with us
              </Button>
            </div>
          </figure>
        </div>
      </Section>
    </>
  );
}
