import Link from 'next/link';
import Image from 'next/image';

const columns = [
  {
    title: 'Authors',
    links: [
      { label: 'Call for Papers', href: '/authors/call-for-papers' },
      { label: 'Important Dates', href: '/authors/important-dates' },
      { label: 'Submission Guidelines', href: '/authors/submission-guidelines' },
      { label: 'Call for Posters', href: '/authors/call-for-posters' },
    ],
  },
  {
    title: 'Program',
    links: [
      { label: 'Program at a Glance', href: '/program/at-a-glance' },
      { label: 'Hackathon', href: '/program/hackathons' },
      { label: 'Committees', href: '/committees' },
      { label: 'Registration', href: '/registration/fees' },
    ],
  },
  {
    title: 'Conference',
    links: [
      { label: 'About OAIC', href: '/about/about-us' },
      { label: 'Patrons & Sponsors', href: '/patrons-exhibitors' },
      { label: 'Visa Information', href: '/travel/visa' },
      { label: 'Contact Us', href: '/about/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-gray-300">
      <div className="container-wide grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 md:py-16 lg:grid-cols-5 lg:gap-8">
        <div className="sm:col-span-2">
          <Link href="/" className="inline-flex items-center gap-4" aria-label="OAIC 2026 home">
            <span className="rounded-md bg-white p-2">
              <Image src="/images/logo.png" alt="Odisha AI" width={163} height={200} className="h-16 w-auto" />
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-xl font-semibold text-white">OAIC 2026</span>
              <span className="block text-sm text-gray-400">1st Odisha AI Conference</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400">
            19–20 December 2026
            <br />
            Siksha &apos;O&apos; Anusandhan, Bhubaneswar, Odisha, India
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-wider text-white">{col.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col gap-2 py-5 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Siksha &apos;O&apos; Anusandhan &amp; OAIC. All rights reserved.</p>
          <p>Proceedings to be submitted to IEEE Xplore</p>
        </div>
      </div>
    </footer>
  );
}
