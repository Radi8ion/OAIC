import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';

export const metadata: Metadata = {
  title: 'About OAIC',
  description:
    'Learn about the Odisha AI Congress (OAIC), a premier event for AI research and innovation in India.',
};

export default function AboutUsPage() {
  return (
    <>
      <PageHeader
        title="About The Conference"
        description="Learn more about the Odisha AI Congress (OAIC), a premier event dedicated to advancing Artificial Intelligence."
        breadcrumbs={[{ href: '/about/about-us', label: 'About Us' }]}
      />

      <Section>
        <div className="max-w-4xl">
          <SectionHeader
            subtitle="Fostering Innovation"
            title="The Odisha AI Congress (OAIC)"
          />
          <div className="prose prose-lg mt-6">
            <p>
              The Odisha AI Congress (OAIC) is the region&apos;s leading conference
              for artificial intelligence and machine learning. Our mission is to
              bring together researchers, practitioners, and industry leaders to
              share knowledge, foster collaboration, and drive innovation in AI.
            </p>
            <p>
              Hosted in the vibrant city of Bhubaneswar, OAIC provides a dynamic
              platform for presenting cutting-edge research, discussing the
              latest trends, and exploring the future of AI. The congress
              features keynote speeches from world-renowned experts, technical
              sessions, workshops, and tutorials covering a wide spectrum of AI
              topics.
            </p>
            <p>
              Join us to be a part of a growing community dedicated to shaping
              the future of technology and unlocking the transformative
              potential of Artificial Intelligence in India and beyond.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

