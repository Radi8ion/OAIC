import type { NavItem } from '@/types';

export const navConfig: NavItem[] = [
  {
    label: 'Authors',
    children: [
      { label: 'Important Dates', href: '/authors/important-dates' },
      { label: 'Call for Papers', href: '/authors/call-for-papers' },
      { label: 'Call for Industry Workshop Proposals', href: '/authors/call-for-workshop-proposals' },
      { label: 'Call for Poster Presentations', href: '/authors/call-for-posters' },
      { label: 'Submission Guidelines', href: '/authors/submission-guidelines' },
    ],
  },
  {
    label: 'Committees',
    href: '/committees',
  },
  {
    label: 'Program',
    href: '/program/at-a-glance',
    children: [
      { label: 'At a Glance', href: '/program/at-a-glance' },
    ],
  },
  {
    label: 'Hackathons',
    href: '/program/hackathons',
  },
  {
    label: 'Registration',
    children: [
      { label: 'Registration Fees & Info', href: '/registration/fees' },
      { label: 'Author Registration Form', href: 'https://forms.gle/kZwmSwZPBAjvqpr17' },
      { label: 'Participation, Delegate & Speaker Registration', href: 'https://forms.gle/NoXF3Yb7wSLvuTL88' },
    ],
  },
  {
    label: 'Travel',
    children: [
      { label: 'Visa Information', href: '/travel/visa' },
      { label: 'Tourist Attractions', href: '/travel/attractions' },
    ],
  },
  {
    label: 'Patrons & Sponsors',
    href: '/patrons-exhibitors',
  },
  {
    label: 'About',
    children: [
      { label: 'About Us', href: '/about/about-us' },
      { label: 'Contact Us', href: '/about/contact' },
    ],
  },
];
