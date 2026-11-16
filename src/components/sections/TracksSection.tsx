'use client';

import { useState } from 'react';
import { Atom, Brain, Cpu, HeartPulse, Layers, Zap } from 'lucide-react';
import { tracksData } from '@/data/tracksData';
import { cn } from '@/lib/cn';

const iconMap = { Brain, Cpu, HeartPulse, Atom, Layers, Zap };

export default function TracksSection() {
  const [active, setActive] = useState(0);
  const track = tracksData[active];

  return (
    <div>
      <div role="tablist" aria-label="Conference tracks" className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {tracksData.map((t, i) => {
          const Icon = iconMap[t.iconName];
          const selected = i === active;
          return (
            <button
              key={t.id}
              role="tab"
              id={`track-tab-${t.id}`}
              aria-selected={selected}
              aria-controls={`track-panel-${t.id}`}
              onClick={() => setActive(i)}
              className={cn(
                'flex items-center gap-3 rounded-md border px-4 py-3 text-left transition-colors',
                selected
                  ? 'border-primary-950 bg-primary-950 text-white'
                  : 'border-gray-200 bg-white text-gray-800 hover:border-gray-400',
              )}
            >
              <Icon className={cn('h-5 w-5 shrink-0', selected ? 'text-white/80' : 'text-primary-800')} aria-hidden />
              <span className="min-w-0">
                <span className={cn('block text-[11px] font-medium uppercase tracking-wider', selected ? 'text-white/70' : 'text-gray-500')}>
                  {t.number}
                </span>
                <span className="block text-sm font-semibold leading-snug">{t.title}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div role="tabpanel" id={`track-panel-${track.id}`} aria-labelledby={`track-tab-${track.id}`} className="mt-8">
        <div className="mb-5">
          <span className="eyebrow">{track.number}</span>
          <h3 className="mt-1 text-xl font-semibold md:text-2xl">{track.title}</h3>
        </div>

        <div className="space-y-4">
          {track.subtracks.map((sub) => (
            <div key={sub.letter} className="surface p-5 md:p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                Sub-track {track.id}{sub.letter}
              </p>
              <h4 className="mt-1 text-base font-semibold md:text-lg">{sub.title}</h4>
              <ul className="mt-4 flex flex-wrap gap-2">
                {sub.topics.map((topic) => (
                  <li key={topic} className="rounded border border-gray-200 bg-gray-50 px-2.5 py-1 text-sm text-gray-700">
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
