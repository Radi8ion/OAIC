import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import Section from '@/components/layout/Section';
import CommitteesClient from '@/components/sections/CommitteesClient';
import {
  patrons,
  advisoryBoard,
  generalChairs,
  viceGeneralChairs,
  financeChairs,
  programCoChairs,
  technicalProgramChairs,
  technicalProgramCommittee,
  publicationsCommittee,
  mediaTeam,
  publicityChairs,
  workshopChairs,
  exhibitionChairs,
  posterChairs,
  startupInnovationChairs,
  hackathonCommittee,
  organizingChairs,
  registrationChairs,
  sponsorshipChairs,
} from '@/data/committees';

export const metadata: Metadata = {
  title: 'Committees',
  description: 'Meet the organizing committee, advisory board, and chairs of OAIC 2026.',
};

export default function CommitteesPage() {
  const sections = [
    { id: 'patron', title: 'Patron', members: patrons },
    { id: 'advisory', title: 'Advisory Board', members: advisoryBoard },
    { id: 'general', title: 'General Chairs', members: generalChairs },
    { id: 'vice-general', title: 'Vice General Chairs', members: viceGeneralChairs },
    { id: 'organizing', title: 'Organizing Chairs', members: organizingChairs },
    { id: 'finance', title: 'Finance Chair', members: financeChairs },
    { id: 'program-co', title: 'Program Co-Chairs', members: programCoChairs },
    { id: 'tpc-chairs', title: 'Technical Program Chairs', members: technicalProgramChairs },
    { id: 'sponsorship', title: 'Sponsorship Chairs', members: sponsorshipChairs },
    { id: 'registration', title: 'Registration Chairs', members: registrationChairs },
    { id: 'tpc', title: 'Technical Program Committee', members: technicalProgramCommittee },
    { id: 'publications', title: 'Publications Committee', members: publicationsCommittee },
    { id: 'publicity', title: 'Publicity Chairs', members: publicityChairs },
    { id: 'workshop', title: 'Workshop Chairs', members: workshopChairs },
    { id: 'exhibition', title: 'Exhibition Chairs', members: exhibitionChairs },
    { id: 'poster', title: 'Poster Chairs', members: posterChairs },
    { id: 'startup', title: 'Startup & Innovation Chairs', members: startupInnovationChairs },
    { id: 'hackathon', title: 'Hackathon Committee', members: hackathonCommittee },
    { id: 'media', title: 'Media Team', members: mediaTeam },
  ];

  return (
    <>
      <PageHeader
        title="Committees"
        description="The dedicated teams, chairs, and advisors working to make OAIC 2026 a successful conference."
        breadcrumbs={[
          { href: '/committees', label: 'Committees' },
        ]}
      />
      
      <Section className="py-12 md:py-20 bg-gray-50/40">
        <div className="container-wide px-4 md:px-8">
          <CommitteesClient sections={sections} />
        </div>
      </Section>
    </>
  );
}
