import { Clock, MapPin } from 'lucide-react';
import type { Workshop } from '@/types';

export default function WorkshopCard({ workshop }: Readonly<{ workshop: Workshop }>) {
  return (
    <article className="surface flex flex-col">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-gray-200 px-5 py-3 text-sm text-gray-600">
        <span className="font-medium text-brand-700">Workshop</span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-4 w-4 shrink-0 text-gray-400" aria-hidden /> Day {workshop.day} · {workshop.time}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-4 w-4 shrink-0 text-gray-400" aria-hidden /> {workshop.room}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold">Details to be announced</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          Workshop topics and detailed descriptions will be published here soon.
        </p>
      </div>
    </article>
  );
}
