import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import AttractionCard from '@/components/sections/AttractionCard';
import { touristAttractions } from '@/data/attractions';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';

export const metadata: Metadata = {
  title: 'Tourist Attractions',
  description:
    "Explore Odisha's magnificent heritage, nature, and culture while attending OAIC 2026.",
};

const cuisine = [
  {
    name: 'Dalma',
    desc: 'The quintessential Odishan comfort dish: lentils slow-cooked with seasonal vegetables.',
  },
  {
    name: 'Pakhala Bhata',
    desc: 'Fermented rice soaked in water, a summer staple served with sides.',
  },
  {
    name: 'Chhena Poda',
    desc: "Odisha's signature dessert, a caramelized cottage cheese cake.",
  },
  {
    name: 'Rasagola',
    desc: 'A classic sweet, with a GI tag for its origin in Odisha.',
  },
];

export default function AttractionsPage() {
  return (
    <>
      <PageHeader
        title="Tourist Attractions"
        description="Bhubaneswar and Odisha offer a treasure trove of history, nature, and culture to explore."
        breadcrumbs={[{ label: 'Travel' }, { href: '/travel/attractions', label: 'Tourist Attractions' }]}
      />

      <Section>
        <div className="container-wide">
          <SectionHeader
            align="left"
            title="Explore Odisha"
            subtitle="World-class heritage sites and natural wonders, all within reach of Bhubaneswar, the Temple City."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {touristAttractions.map((attraction) => (
              <AttractionCard key={attraction.name} attraction={attraction} />
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-gray-200 bg-gray-50">
        <div className="container-wide">
          <SectionHeader
            align="left"
            title="Taste of Odisha"
            subtitle="Signature local dishes that define the region's culinary heritage."
          />
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cuisine.map((dish) => (
              <li key={dish.name} className="surface surface-hover border-t-[3px] border-t-brand-700 p-6">
                <h3 className="text-lg font-semibold">{dish.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{dish.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
