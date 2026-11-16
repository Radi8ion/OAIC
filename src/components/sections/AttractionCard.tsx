import Image from 'next/image';
import { MapPin } from 'lucide-react';
import type { TouristAttraction } from '@/types';

export default function AttractionCard({ attraction }: { attraction: TouristAttraction }) {
  const category = attraction.category.charAt(0).toUpperCase() + attraction.category.slice(1);
  return (
    <article className="surface flex flex-col overflow-hidden">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={attraction.photoUrl}
          alt={attraction.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-medium uppercase tracking-wider text-brand-700">{category}</span>
        <h3 className="mt-1 text-lg font-semibold">{attraction.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{attraction.description}</p>
        <p className="mt-4 flex items-center gap-1.5 text-sm text-gray-500">
          <MapPin className="h-4 w-4 shrink-0" aria-hidden />
          {attraction.distanceFromVenue} from venue
        </p>
      </div>
    </article>
  );
}
