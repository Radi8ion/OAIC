'use client';

import { useState } from 'react';
import {
  Award,
  Clock,
  Coffee,
  FlaskConical,
  Handshake,
  Landmark,
  MapPin,
  MessageSquare,
  Mic2,
  PartyPopper,
  Presentation,
  UserCheck,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/cn';
import { programDays, type ProgramSession, type SessionKind, type TrackAccent } from '@/data/schedule';

const kindMeta: Record<SessionKind, { label: string; icon: LucideIcon; dot: string; chip: string }> = {
  registration: { label: 'Registration', icon: UserCheck, dot: 'bg-gray-400', chip: 'bg-gray-100 text-gray-600' },
  break: { label: 'Break', icon: Coffee, dot: 'bg-gray-300', chip: 'bg-gray-100 text-gray-600' },
  ceremony: { label: 'Ceremony', icon: Landmark, dot: 'bg-primary-600', chip: 'bg-primary-100 text-primary-800' },
  keynote: { label: 'Keynote', icon: Mic2, dot: 'bg-[#e67e22]', chip: 'bg-orange-100 text-orange-800' },
  panel: { label: 'Panel', icon: MessageSquare, dot: 'bg-emerald-500', chip: 'bg-emerald-100 text-emerald-800' },
  talk: { label: 'Invited Talk', icon: Presentation, dot: 'bg-sky-500', chip: 'bg-sky-100 text-sky-800' },
  track: { label: 'Technical', icon: FlaskConical, dot: 'bg-indigo-500', chip: 'bg-indigo-100 text-indigo-800' },
  workshop: { label: 'Workshop', icon: Handshake, dot: 'bg-primary-600', chip: 'bg-primary-100 text-primary-800' },
  social: { label: 'Cultural', icon: PartyPopper, dot: 'bg-rose-500', chip: 'bg-rose-100 text-rose-800' },
};

const accentMeta: Record<TrackAccent, { label: string; bar: string; chip: string; bg: string }> = {
  student: { label: 'Students', bar: 'bg-primary-500', chip: 'bg-primary-100 text-primary-800', bg: 'bg-primary-50/60' },
  faculty: { label: 'Faculty', bar: 'bg-amber-500', chip: 'bg-amber-100 text-amber-800', bg: 'bg-amber-50/60' },
  quantum: { label: 'Quantum', bar: 'bg-violet-500', chip: 'bg-violet-100 text-violet-800', bg: 'bg-violet-50/60' },
};

function SessionBody({ session }: { session: ProgramSession }) {
  return (
    <>
      <h4 className="text-base md:text-lg font-bold leading-snug text-primary-950">{session.title}</h4>
      {session.subtitle && <p className="mt-0.5 text-sm font-medium text-gray-500">{session.subtitle}</p>}
      {session.people && (
        <ul className="mt-2 space-y-1">
          {session.people.map((p) => (
            <li key={p} className="text-sm md:text-[15px] text-gray-700 leading-snug">
              {p}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function SingleSession({ session }: { session: ProgramSession }) {
  const meta = kindMeta[session.kind];
  const Icon = meta.icon;

  if (session.kind === 'break' || session.kind === 'registration') {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-dashed border-gray-200 bg-gray-50/70 px-4 py-3">
        <Icon className="h-4 w-4 text-gray-400 shrink-0" />
        <span className="text-sm font-semibold text-gray-600">{session.title}</span>
      </div>
    );
  }

  if (session.kind === 'keynote') {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 p-5 md:p-6 text-white shadow-md">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#e67e22]/20 blur-2xl" />
        <div className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e67e22] px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-white">
            <Icon className="h-3 w-3" /> {meta.label}
          </span>
          <h4 className="mt-3 text-xl md:text-2xl font-bold font-serif">{session.title}</h4>
          {session.people?.map((p) => (
            <p key={p} className="mt-1 text-primary-100 text-sm md:text-base">
              {p}
            </p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow">
      <span className={cn('mb-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-black uppercase tracking-wider', meta.chip)}>
        <Icon className="h-3 w-3" /> {meta.label}
      </span>
      <SessionBody session={session} />
    </div>
  );
}

function ParallelSessions({ sessions }: { sessions: ProgramSession[] }) {
  return (
    <div>
      <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-gray-400">
        {sessions.length} parallel sessions
      </p>
      <div className={cn('grid gap-3 grid-cols-1', sessions.length === 3 ? 'lg:grid-cols-3' : 'md:grid-cols-2')}>
        {sessions.map((s) => {
          const accent = s.accent ? accentMeta[s.accent] : null;
          const meta = kindMeta[s.kind];
          return (
            <div
              key={s.title + (s.people?.[0] ?? '')}
              className={cn(
                'relative overflow-hidden rounded-2xl border border-gray-100 p-4 md:p-5 pt-5 shadow-sm',
                accent ? accent.bg : 'bg-white',
              )}
            >
              <div className={cn('absolute inset-x-0 top-0 h-1.5', accent ? accent.bar : meta.dot)} />
              <span className={cn('mb-2 inline-flex rounded-full px-2.5 py-1 text-[11px] font-black uppercase tracking-wider', accent ? accent.chip : meta.chip)}>
                {accent ? accent.label : meta.label}
              </span>
              <SessionBody session={s} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ProgramSchedule() {
  const [activeId, setActiveId] = useState(programDays[0].id);
  const day = programDays.find((d) => d.id === activeId) ?? programDays[0];

  return (
    <div>
      {/* Day selector */}
      <div role="tablist" aria-label="Program days" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {programDays.map((d) => {
          const active = d.id === activeId;
          return (
            <button
              key={d.id}
              role="tab"
              aria-selected={active}
              aria-controls={`panel-${d.id}`}
              id={`tab-${d.id}`}
              onClick={() => setActiveId(d.id)}
              className={cn(
                'group relative overflow-hidden rounded-2xl border-2 p-5 text-left transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300',
                active
                  ? 'border-primary-700 bg-gradient-to-br from-primary-900 to-primary-700 text-white shadow-xl -translate-y-1'
                  : 'border-gray-100 bg-white hover:border-primary-300 hover:shadow-lg hover:-translate-y-0.5',
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span
                    className={cn(
                      'inline-block rounded-full px-2.5 py-1 text-[11px] font-black uppercase tracking-wider',
                      active ? 'bg-white/15 text-white' : 'bg-primary-50 text-primary-800',
                    )}
                  >
                    {d.tag}
                  </span>
                  <h3 className={cn('mt-3 text-lg font-bold leading-snug', active ? 'text-white' : 'text-primary-950')}>
                    {d.title}
                  </h3>
                  <p className={cn('mt-1 text-sm', active ? 'text-primary-100' : 'text-gray-500')}>{d.weekday}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className={cn('text-5xl font-black leading-none font-serif', active ? 'text-white' : 'text-primary-800')}>
                    {d.day}
                  </div>
                  <div className={cn('mt-1 text-xs font-bold uppercase tracking-wider', active ? 'text-primary-200' : 'text-gray-500')}>
                    {d.month}
                  </div>
                </div>
              </div>
              {active && <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-[#e67e22] to-[#f2c94c]" />}
            </button>
          );
        })}
      </div>

      {/* Day panel */}
      <div
        role="tabpanel"
        id={`panel-${day.id}`}
        aria-labelledby={`tab-${day.id}`}
        className="mt-8 rounded-3xl border border-primary-100 bg-gradient-to-b from-primary-50/50 to-white p-5 md:p-8 shadow-sm"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-primary-100 pb-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#e67e22]">{day.tag}</p>
            <h3 className="mt-1 text-2xl md:text-3xl font-bold text-primary-950 font-serif">
              {day.weekday}, {day.day} {day.month}
            </h3>
            <p className="mt-2 max-w-2xl text-gray-600">{day.summary}</p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            {day.venue && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-primary-100 px-3 py-1.5 text-sm font-semibold text-primary-800 shadow-sm">
                <MapPin className="h-4 w-4" /> {day.venue}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-primary-100 px-3 py-1.5 text-sm font-semibold text-primary-800 shadow-sm">
              <Award className="h-4 w-4" /> Tentative programme
            </span>
          </div>
        </div>

        <ol className="mt-8 space-y-5">
          {day.slots.map((slot, i) => {
            const first = slot.sessions[0];
            const dot = kindMeta[first.kind].dot;
            return (
              <li key={slot.time + i} className="relative grid md:grid-cols-[11rem_1fr] gap-2 md:gap-6">
                <div className="md:text-right md:pt-3">
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-900">
                    <Clock className="h-3.5 w-3.5 text-primary-500 md:hidden" />
                    {slot.time}
                  </span>
                  {slot.note && <p className="mt-0.5 text-xs text-gray-500 md:ml-auto md:max-w-[10rem]">{slot.note}</p>}
                </div>
                <div className="relative md:pl-8">
                  <span className="hidden md:block absolute left-0 top-0 bottom-[-1.25rem] w-px bg-primary-200" />
                  <span className={cn('hidden md:block absolute -left-[5px] top-4 h-[11px] w-[11px] rounded-full ring-4 ring-white', dot)} />
                  {slot.sessions.length > 1 ? (
                    <ParallelSessions sessions={slot.sessions} />
                  ) : (
                    <SingleSession session={first} />
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
