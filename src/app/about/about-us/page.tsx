import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';
import Section from '@/components/layout/Section';
import {
  Eye,
  Target,
  Globe2,
  GraduationCap,
  FlaskConical,
  HeartHandshake,
  Handshake,
  Users,
  Calendar,
  MapPin,
  Sparkles,
  ArrowRight,
  Building2,
  CheckCircle2,
} from 'lucide-react';

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
        breadcrumbs={[{ href: '/about/about-us', label: 'About Us' }]}
      />

      {/* ── Section 1: The Conference Overview (OAIC 2026) ── */}
      <Section className="py-12 md:py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left: Main Editorial Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-800 text-xs font-bold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-primary-600" />
                  Inaugural Edition · OAIC 2026
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-primary-950 tracking-tight leading-tight mb-6">
                  The Premier Stage for AI Innovation in Eastern India
                </h2>

                <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed mb-5">
                  The <span className="text-primary-800 font-semibold">2026 1st Odisha AI Conference (OAIC)</span> serves as an international forum for exchanging ideas, presenting pioneering research findings, and forging partnerships that tackle real-world challenges through AI-driven breakthroughs.
                </p>

                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  OAIC bridges foundational theoretical computer science and high-impact applied systems. From explainable generative intelligence to edge AI deployment, the conference emphasizes technological rigor, cross-border academic excellence, and ethical accountability.
                </p>

                {/* Focus Areas Pills */}
                <div className="pt-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Key Focus Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {focusPillars.map((pillar) => (
                      <span
                        key={pillar}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700 hover:border-primary-400 hover:text-primary-800 transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary-600" />
                        {pillar}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Key Details & Host Institution Card (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              
              {/* Event Quick Snapshot Card */}
              <div className="bg-gradient-to-br from-primary-950 via-primary-900 to-[#0c3954] text-white rounded-2xl p-6 sm:p-7 shadow-md relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-400/10 rounded-full blur-2xl pointer-events-none" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-300 block mb-4">
                  Conference Snapshot
                </span>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-white/10 text-primary-200 shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-primary-200 font-semibold">Dates</p>
                      <p className="text-base font-bold text-white">December 19–20, 2026</p>
                      <p className="text-xs text-primary-100/70">Pre-conference Workshops: Dec 18, 2026</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-white/10 text-primary-200 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-primary-200 font-semibold">Location</p>
                      <p className="text-base font-bold text-white">Bhubaneswar, Odisha, India</p>
                      <p className="text-xs text-primary-100/70">In-person &amp; Hybrid Virtual Tracks</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Host Institution Spotlight Card */}
              <div className="bg-gray-50 border-2 border-gray-100 rounded-2xl p-6 sm:p-7 flex-1 flex flex-col justify-between hover:border-primary-300 transition-all duration-300 group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e67e22]">
                      Host Institution
                    </span>
                    <Building2 className="w-5 h-5 text-gray-400 group-hover:text-primary-700 transition-colors" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-primary-950 mb-2">
                    Siksha &apos;O&apos; Anusandhan
                  </h3>
                  <p className="text-xs font-medium text-gray-500 mb-4">
                    Deemed to be University · Bhubaneswar, Odisha
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-5">
                    <div className="bg-white border border-gray-200 rounded-lg p-2.5">
                      <span className="block text-[10px] uppercase font-bold text-gray-400">NAAC</span>
                      <span className="text-xs font-bold text-primary-900">A++ Grade (3rd Cycle)</span>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-2.5">
                      <span className="block text-[10px] uppercase font-bold text-gray-400">NIRF 2025</span>
                      <span className="text-xs font-bold text-primary-900">15th in University</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/patrons-exhibitors"
                  className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white border border-primary-200 text-primary-900 font-bold text-sm hover:bg-primary-50 transition-all group-hover:border-primary-400"
                >
                  <span>About Host &amp; Partners</span>
                  <ArrowRight className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </Section>

      {/* ── Section 2: The Initiative Behind OAIC (Odisha AI) ── */}
      <Section className="py-14 md:py-20 bg-gray-50 border-t border-gray-200">
        <div className="container-wide">

          {/* Centered Brand Header with Big Official Odisha AI Logo */}
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-[#e67e22] mb-4">
              <span className="h-px w-8 bg-[#e67e22]" />
              The Movement Behind OAIC
              <span className="h-px w-8 bg-[#e67e22]" />
            </span>

            {/* Official Odisha AI Logo Display */}
            <div className="relative mb-5 p-4 rounded-3xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <Image
                src="/images/logo.png"
                alt="Odisha AI Logo"
                width={160}
                height={196}
                className="w-28 h-auto sm:w-36 md:w-40 object-contain mx-auto"
                priority
              />
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-primary-950 tracking-tight mb-4">
              Odisha AI
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
              A transformative global initiative dedicated to connecting Odia technocrats, researchers, academicians, and entrepreneurs across continents to position Odisha as a global powerhouse in Artificial Intelligence.
            </p>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16">
            
            {/* Vision Card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-950 via-primary-900 to-[#08283c] p-7 md:p-10 text-white shadow-xl flex flex-col justify-between">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#e67e22]/20 blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#f2c94c] border border-white/10 mb-6">
                  <Eye className="h-3.5 w-3.5" /> Our Vision
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold font-serif leading-snug mb-6 text-white">
                  &ldquo;To make Odisha the Intellectual AI Capital of the World.&rdquo;
                </h3>

                <div className="space-y-4 text-primary-100 text-sm sm:text-base leading-relaxed">
                  <p>
                    Odisha AI envisions Odisha emerging as a globally recognised centre of Artificial Intelligence, where knowledge, research, innovation, entrepreneurship and responsible technology converge to create opportunities and solve pressing challenges for humanity.
                  </p>
                  <p>
                    We seek to construct a resilient ecosystem that nurtures indigenous talent, empowers young researchers, accelerates scientific discoveries, and firmly positions Odisha at the cutting-edge of next-generation computational intelligence.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="relative overflow-hidden rounded-3xl border-2 border-primary-100 bg-white p-7 md:p-10 shadow-xl flex flex-col justify-between">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#e67e22] via-[#f2c94c] to-[#e67e22]" />

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3.5 py-1 text-xs font-black uppercase tracking-[0.2em] text-primary-800 border border-primary-200 mb-6">
                  <Target className="h-3.5 w-3.5 text-primary-700" /> Our Mission
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold font-serif leading-snug text-primary-950 mb-6">
                  &ldquo;To give back to our motherland by building a globally connected AI ecosystem that transforms lives.&rdquo;
                </h3>

                <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Supported by the Odisha Society of the Americas (OSA) and global mentors, Odisha AI convenes leading professionals, researchers, industry innovators, and students worldwide.
                  </p>
                  <p>
                    By pooling collective wisdom, resources, and mentorship, the initiative actively upgrades regional infrastructure, champions ethical AI policies, and opens global career and research pipelines for the youth of Odisha.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* ── Key Objectives Grid (6 Core Pillars) ── */}
          <div className="mt-8">
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e67e22] block mb-2">
                Action Plan &amp; Roadmap
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold font-serif text-primary-950">
                Key Strategic Objectives
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Six foundational pillars driving tangible outcomes across the state and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {objectives.map((obj) => {
                const Icon = obj.icon;
                return (
                  <div
                    key={obj.title}
                    className="group relative rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary-400 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Row: Icon & Watermark Number */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-900 group-hover:text-white shadow-xs">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="text-3xl font-black font-serif text-gray-200 group-hover:text-primary-200 transition-colors">
                          {obj.number}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-primary-950 mb-3 group-hover:text-primary-700 transition-colors">
                        {obj.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {obj.text}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-primary-700 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Learn more in tracks</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Manifesto Callout Banner */}
          <div className="mt-14 md:mt-20 max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-primary-950 via-primary-900 to-primary-950 text-white p-8 md:p-12 shadow-xl text-center relative overflow-hidden border border-primary-800">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(41,153,223,0.15),transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <span className="text-3xl md:text-5xl text-[#f2c94c] font-serif leading-none block mb-2">&ldquo;</span>
              <p className="text-lg md:text-2xl font-serif font-medium italic leading-relaxed text-primary-50 mb-6">
                Odisha AI aspires not merely to accelerate the adoption of Artificial Intelligence, but to build the knowledge, capabilities and innovation ecosystem necessary to shape its future.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
                <Link
                  href="/program/at-a-glance"
                  className="px-6 py-3 rounded-xl bg-white text-primary-950 font-bold text-sm hover:bg-primary-50 shadow-md transition-all hover:scale-105"
                >
                  Explore Program
                </Link>
                <Link
                  href="/patrons-exhibitors"
                  className="px-6 py-3 rounded-xl bg-primary-800/80 border border-primary-400/40 text-white font-bold text-sm hover:bg-primary-800 transition-all"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>

        </div>
      </Section>

      {/* Conference Core Values Strip */}
      <div className="bg-white border-y border-gray-200 py-6 overflow-hidden">
        <div className="container-wide flex flex-wrap justify-center items-center gap-6 sm:gap-12 opacity-40">
          <span className="text-xs sm:text-sm font-bold tracking-[0.35em] uppercase text-primary-950">Intelligence</span>
          <div className="w-1.5 h-1.5 rounded-full bg-primary-400"></div>
          <span className="text-xs sm:text-sm font-bold tracking-[0.35em] uppercase text-primary-950">Innovation</span>
          <div className="w-1.5 h-1.5 rounded-full bg-primary-400"></div>
          <span className="text-xs sm:text-sm font-bold tracking-[0.35em] uppercase text-primary-950">Transformation</span>
          <div className="w-1.5 h-1.5 rounded-full bg-primary-400"></div>
          <span className="text-xs sm:text-sm font-bold tracking-[0.35em] uppercase text-primary-950">Collaboration</span>
        </div>
      </div>
    </>
  );
}
