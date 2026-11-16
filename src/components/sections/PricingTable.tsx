import { ExternalLink } from 'lucide-react';
import { buttonClasses } from '@/components/ui/Button';

const registrationLinks = [
  {
    title: 'Author Registration',
    description: 'For authors of accepted papers and posters.',
    cta: 'Register as author',
    href: 'https://forms.gle/kZwmSwZPBAjvqpr17',
  },
  {
    title: 'Participation, Delegate & Speaker Registration',
    description: 'For attendees, delegates and invited speakers.',
    cta: 'Register to participate',
    href: 'https://forms.gle/NoXF3Yb7wSLvuTL88',
  },
];

const rows = [
  { category: 'Author: Students', indiaIEEE: 'INR 7,200', indiaNonIEEE: 'INR 8,500', abroadIEEE: 'USD 230', abroadNonIEEE: 'USD 280' },
  { category: 'Author: Academia', indiaIEEE: 'INR 9,000', indiaNonIEEE: 'INR 10,500', abroadIEEE: 'USD 300', abroadNonIEEE: 'USD 350' },
  { category: 'Author: Industry', indiaIEEE: 'INR 10,500', indiaNonIEEE: 'INR 12,000', abroadIEEE: 'USD 350', abroadNonIEEE: 'USD 400' },
  { category: 'Attendee: Students', note: 'Banquet ticket not included', indiaIEEE: 'INR 1,000', indiaNonIEEE: 'INR 1,500', abroadIEEE: 'USD 100', abroadNonIEEE: 'USD 150' },
  { category: 'Attendee: Academia & Industry', indiaIEEE: 'INR 2,500', indiaNonIEEE: 'INR 3,000', abroadIEEE: 'USD 150', abroadNonIEEE: 'USD 200' },
];

export default function PricingTable() {
  return (
    <div>
      {/* Desktop / tablet table */}
      <div className="surface hidden overflow-x-auto md:block">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="sr-only">Registration fees</caption>
          <thead className="bg-gray-50 text-primary-950">
            <tr>
              <th rowSpan={2} scope="col" className="border-b border-r border-gray-200 px-5 py-3 align-bottom font-semibold">Category</th>
              <th colSpan={2} scope="colgroup" className="border-b border-r border-gray-200 px-5 py-3 text-center font-semibold">Participants from India</th>
              <th colSpan={2} scope="colgroup" className="border-b border-gray-200 px-5 py-3 text-center font-semibold">Participants from abroad</th>
            </tr>
            <tr className="text-xs uppercase tracking-wider text-gray-500">
              <th scope="col" className="border-b border-r border-gray-200 px-5 py-2.5 text-center font-medium">IEEE</th>
              <th scope="col" className="border-b border-r border-gray-200 px-5 py-2.5 text-center font-medium">Non-IEEE</th>
              <th scope="col" className="border-b border-r border-gray-200 px-5 py-2.5 text-center font-medium">IEEE</th>
              <th scope="col" className="border-b border-gray-200 px-5 py-2.5 text-center font-medium">Non-IEEE</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rows.map((r) => (
              <tr key={r.category}>
                <th scope="row" className="border-r border-gray-200 px-5 py-4 font-medium text-gray-900">
                  {r.category}
                  {r.note && <span className="mt-0.5 block text-xs font-normal text-gray-500">{r.note}</span>}
                </th>
                <td className="border-r border-gray-200 px-5 py-4 text-center tabular-nums text-gray-800">{r.indiaIEEE}</td>
                <td className="border-r border-gray-200 px-5 py-4 text-center tabular-nums text-gray-800">{r.indiaNonIEEE}</td>
                <td className="border-r border-gray-200 px-5 py-4 text-center tabular-nums text-gray-800">{r.abroadIEEE}</td>
                <td className="px-5 py-4 text-center tabular-nums text-gray-800">{r.abroadNonIEEE}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <ul className="space-y-3 md:hidden">
        {rows.map((r) => (
          <li key={r.category} className="surface p-4">
            <p className="font-semibold text-primary-950">{r.category}</p>
            {r.note && <p className="text-xs text-gray-500">{r.note}</p>}
            <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              {[
                ['India · IEEE', r.indiaIEEE],
                ['India · Non-IEEE', r.indiaNonIEEE],
                ['Abroad · IEEE', r.abroadIEEE],
                ['Abroad · Non-IEEE', r.abroadNonIEEE],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs text-gray-500">{label}</dt>
                  <dd className="font-medium tabular-nums text-gray-900">{value}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {registrationLinks.map((link) => (
          <div key={link.title} className="surface flex flex-col justify-between gap-5 p-6">
            <div>
              <h3 className="font-sans text-lg font-semibold">{link.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{link.description}</p>
            </div>
            <a href={link.href} target="_blank" rel="noopener noreferrer" className={buttonClasses('accent', 'md', 'w-full sm:w-fit')}>
              {link.cta}
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
