'use client';

import { useState } from 'react';
import { Brain, Cpu, HeartPulse, Atom } from 'lucide-react';
import { tracksData } from '@/data/tracksData';
import { cn } from '@/lib/cn';

const iconMap = {
  Brain: Brain,
  Cpu: Cpu,
  HeartPulse: HeartPulse,
  Atom: Atom,
};

export default function TracksSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      {/* Tab Selectors */}
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 border-b border-gray-200 pb-4">
        {tracksData.map((track, index) => {
          const Icon = iconMap[track.iconName];
          const isActive = activeTab === index;
          return (
            <button
              key={track.id}
              onClick={() => setActiveTab(index)}
              className={cn(
                "flex items-center gap-3 px-5 py-3 md:py-4 rounded-xl border text-left transition-all duration-300 w-full md:w-auto flex-1 font-semibold group",
                isActive
                  ? "bg-primary-900 border-primary-900 text-white shadow-md shadow-primary-900/20"
                  : "bg-white border-gray-200 text-gray-700 hover:border-primary-600 hover:bg-primary-50/30"
              )}
            >
              <div
                className={cn(
                  "p-2 rounded-lg transition-colors duration-300",
                  isActive
                    ? "bg-white/10 text-white"
                    : "bg-gray-100 text-gray-500 group-hover:bg-primary-100 group-hover:text-primary-800"
                )}
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="min-w-0">
                <span className={cn("block text-[10px] md:text-[11px] uppercase tracking-wider", isActive ? "text-primary-200" : "text-gray-400 font-bold")}>
                  {track.number}
                </span>
                <span className="text-xs md:text-sm font-bold block mt-0.5 leading-tight">
                  {track.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Track Panels */}
      <div className="relative overflow-hidden">
        {tracksData.map((track, index) => {
          if (activeTab !== index) return null;
          return (
            <div
              key={track.id}
              className="animate-fade-in space-y-6 md:space-y-8"
              role="tabpanel"
              aria-label={track.title}
            >
              <div className="flex items-center gap-4 border-l-4 border-[#e67e22] pl-4 mb-2 md:mb-4">
                <div>
                  <span className="text-xs md:text-sm font-bold uppercase text-[#e67e22] tracking-widest">{track.number} Focus</span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-primary-950 mt-0.5">{track.title}</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {track.subtracks.map((sub) => (
                  <div
                    key={sub.letter}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-200 transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
                  >
                    <div className="bg-primary-900/5 md:w-48 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 flex-shrink-0 text-center">
                      <div className="w-12 h-12 rounded-full bg-primary-900 text-white flex items-center justify-center font-black text-xl mb-2">
                        {sub.letter}
                      </div>
                      <span className="text-xs uppercase tracking-widest text-primary-700 font-extrabold">Sub-Track {track.id}{sub.letter}</span>
                    </div>

                    <div className="p-6 flex-1">
                      <h4 className="text-base md:text-lg font-extrabold text-primary-950 mb-4">{sub.title}</h4>
                      
                      <div className="flex flex-wrap gap-2">
                        {sub.topics.map((topic, i) => (
                          <div
                            key={i}
                            className="bg-gray-50 border border-gray-200/60 rounded-lg px-3.5 py-1.5 text-xs md:text-sm text-gray-700 font-medium hover:bg-primary-50/50 hover:border-primary-300 transition-colors duration-200 flex items-center gap-1.5"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#e67e22]" />
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
