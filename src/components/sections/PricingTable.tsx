import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function PricingTable() {
  const rows = [
    {
      category: 'Author: Students',
      indiaIEEE: 'INR 7,200',
      indiaNonIEEE: 'INR 8,500',
      abroadIEEE: 'USD 230',
      abroadNonIEEE: 'USD 280',
    },
    {
      category: 'Author: Academia',
      indiaIEEE: 'INR 9,000',
      indiaNonIEEE: 'INR 10,500',
      abroadIEEE: 'USD 300',
      abroadNonIEEE: 'USD 350',
    },
    {
      category: 'Author: Industry',
      indiaIEEE: 'INR 10,500',
      indiaNonIEEE: 'INR 12,000',
      abroadIEEE: 'USD 350',
      abroadNonIEEE: 'USD 400',
    },
    {
      category: 'Attendee (Students) * (No Banquet Ticket Included)',
      indiaIEEE: 'INR 1,000',
      indiaNonIEEE: 'INR 1,500',
      abroadIEEE: 'USD 100',
      abroadNonIEEE: 'USD 150',
    },
    {
      category: 'Attendee (Academia & Industry)',
      indiaIEEE: 'INR 2,500',
      indiaNonIEEE: 'INR 3,000',
      abroadIEEE: 'USD 150',
      abroadNonIEEE: 'USD 200',
    },
  ];

  return (
    <div className="w-full">
      <Card className="overflow-hidden border border-gray-100 shadow-md rounded-2xl">
        <CardHeader className="bg-primary-950 text-white p-5 md:p-6">
          <CardTitle className="text-lg md:text-xl font-bold tracking-wide">
            Registration Fees Details
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm text-gray-500 min-w-[700px]">
              <thead className="bg-primary-50 text-xs uppercase text-primary-900 font-bold">
                <tr>
                  <th rowSpan={2} className="px-6 py-5 border-b border-r border-gray-200 font-black text-sm md:text-base align-middle text-primary-950">
                    Category
                  </th>
                  <th colSpan={2} className="px-6 py-3 border-b border-r border-gray-200 text-center font-black text-sm md:text-base text-primary-950 bg-primary-100/40">
                    Participants from India
                  </th>
                  <th colSpan={2} className="px-6 py-3 border-b border-gray-200 text-center font-black text-sm md:text-base text-primary-950 bg-blue-50/55">
                    Participants from abroad
                  </th>
                </tr>
                <tr>
                  <th className="px-6 py-3 border-b border-r border-gray-200 text-center font-bold text-xs md:text-sm bg-primary-50/50">
                    IEEE
                  </th>
                  <th className="px-6 py-3 border-b border-r border-gray-200 text-center font-bold text-xs md:text-sm bg-primary-50/50">
                    Non-IEEE
                  </th>
                  <th className="px-6 py-3 border-b border-r border-gray-200 text-center font-bold text-xs md:text-sm bg-gray-50">
                    IEEE
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 text-center font-bold text-xs md:text-sm bg-gray-50">
                    Non-IEEE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {rows.map((row, i) => (
                  <tr key={row.category} className="hover:bg-gray-50/40 transition-colors">
                    <td className="px-6 py-4 border-r border-gray-100 font-extrabold text-primary-950 text-sm md:text-base bg-gray-50/10">
                      {row.category}
                    </td>
                    <td className="px-6 py-4 border-r border-gray-100 text-center font-bold text-gray-900 text-sm md:text-base bg-primary-50/15">
                      {row.indiaIEEE}
                    </td>
                    <td className="px-6 py-4 border-r border-gray-100 text-center font-medium text-gray-700 text-sm md:text-base">
                      {row.indiaNonIEEE}
                    </td>
                    <td className="px-6 py-4 border-r border-gray-100 text-center font-bold text-gray-900 text-sm md:text-base bg-blue-50/10">
                      {row.abroadIEEE}
                    </td>
                    <td className="px-6 py-4 text-center font-medium text-gray-700 text-sm md:text-base">
                      {row.abroadNonIEEE}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-8 text-center">
        <Button className="bg-primary-600 hover:bg-primary-500 text-white font-bold px-8 py-5 text-lg rounded-lg shadow-md transition-transform hover:-translate-y-0.5 border-none">
          Register Now
        </Button>
      </div>
    </div>
  );
}
