'use client';

import { useState } from 'react';
import {
  Clock,
  Coffee,
  FlaskConical,
  Handshake,
  Info,
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

const kindMeta: Record<SessionKind, { label: string; icon: LucideIcon }> = {
  registration: { label: 'Registration', icon: UserCheck },
  break: { label: 'Break', icon: Coffee },
  ceremony: { label: 'Ceremony', icon: Landmark },
  keynote: { label: 'Keynote', icon: Mic2 },
  panel: { label: 'Panel', icon: MessageSquare },
  talk: { label: 'Invited Talk', icon: Presentation },
  track: { label: 'Technical', icon: FlaskConical },
  workshop: { label: 'Workshop', icon: Handshake },
  social: { label: 'Cultural', icon: PartyPopper },
};

const accentMeta: Record<TrackAccent, { label: string; bar: string }> = {
  student: { label: 'Students', bar: 'border-t-primary-800' },
  faculty: { label: 'Faculty', bar: 'border-t-brand-700' },
  quantum: { label: 'Quantum', bar: 'border-t-gray-500' },
};

function KindLabel({ kind, label }: { kind: SessionKind; label?: string }) {
  const meta = kindMeta[kind];
  const Icon = meta.icon;
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-gray-500">
      <Icon className="h-3.5 w-3.5" aria-hidden /> {label ?? meta.label}
    </span>
  );
}

function SessionBody({ session }: { session: ProgramSession }) {
  return (
    <>
      <h4 className="mt-2 text-base font-semibold leading-snug md:text-lg">{session.title}</h4>
      {session.subtitle && <p className="mt-0.5 text-sm text-gray-500">{session.subtitle}</p>}
      {session.people && (
        <ul className="mt-2 space-y-1">
          {session.people.map((p) => (
            <li key={p} className="text-sm leading-snug text-gray-700 md:text-[15px]">
              {p}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

function SingleSession({ session }: { session: ProgramSession }) {
  const Icon = kindMeta[session.kind].icon;

  if (session.kind === 'break' || session.kind === 'registration') {
    return (
      <div className="flex items-center gap-3 rounded-md bg-gray-100 px-4 py-3">
        <Icon className="h-4 w-4 shrink-0 text-gray-500" aria-hidden />
        <span className="text-sm font-medium text-gray-700">{session.title}</span>
      </div>
    );
  }

  const emphasis = session.kind === 'keynote';
  return (
    <div className={cn('surface p-4 md:p-5', emphasis && 'border-l-[3px] border-l-brand-700')}>
      <KindLabel kind={session.kind} />
      <SessionBody session={session} />
    </div>
  );
}

function ParallelSessions({ sessions }: { sessions: ProgramSession[] }) {
  return (
    <div>
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">{sessions.length} parallel sessions</p>
      <div className={cn('grid grid-cols-1 gap-3', sessions.length === 3 ? 'lg:grid-cols-3' : 'md:grid-cols-2')}>
        {sessions.map((s) => {
          const accent = s.accent ? accentMeta[s.accent] : null;
          return (
            <div key={s.title + (s.people?.[0] ?? '')} className={cn('surface p-4 md:p-5', accent && cn('border-t-[3px]', accent.bar))}>
              <KindLabel kind={s.kind} label={accent?.label} />
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
      <div role="tablist" aria-label="Program days" className="grid grid-cols-1 gap-3 md:grid-cols-3">
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
                'flex items-center justify-between gap-4 rounded-md border p-4 text-left transition-colors md:p-5',
                active ? 'border-primary-950 bg-primary-950 text-white' : 'border-gray-200 bg-white hover:border-gray-400',
              )}
            >
              <span className="min-w-0">
                <span className={cn('block text-xs font-medium uppercase tracking-wider', active ? 'text-white/70' : 'text-brand-700')}>
                  {d.tag}
                </span>
                <span className={cn('mt-1 block font-semibold leading-snug', active ? 'text-white' : 'text-primary-950')}>{d.title}</span>
                <span className={cn('mt-0.5 block text-sm', active ? 'text-white/70' : 'text-gray-500')}>{d.weekday}</span>
              </span>
              <span className="shrink-0 text-right">
                <span className={cn('block font-serif text-4xl font-semibold leading-none', active ? 'text-white' : 'text-primary-950')}>
                  {d.day}
                </span>
                <span className={cn('mt-1 block text-xs font-medium uppercase tracking-wider', active ? 'text-white/70' : 'text-gray-500')}>
                  {d.month}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div role="tabpanel" id={`panel-${day.id}`} aria-labelledby={`tab-${day.id}`} className="mt-8">
        <div className="flex flex-col gap-4 border-b border-gray-200 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">{day.tag}</span>
            <h3 className="mt-1 text-2xl font-semibold md:text-3xl">
              {day.weekday}, {day.day} {day.month}
            </h3>
            <p className="mt-2 max-w-2xl text-gray-600">{day.summary}</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600">
            {day.venue && (
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-gray-400" aria-hidden /> {day.venue}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <Info className="h-4 w-4 text-gray-400" aria-hidden /> Tentative programme
            </span>
          </div>
        </div>

        <ol className="mt-8 space-y-5">
          {day.slots.map((slot, i) => {
            const first = slot.sessions[0];
            return (
              <li key={slot.time + i} className="grid gap-2 md:grid-cols-[10rem_1fr] md:gap-6">
                <div className="md:pt-4 md:text-right">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold tabular-nums text-primary-950">
                    <Clock className="h-3.5 w-3.5 text-gray-400 md:hidden" aria-hidden />
                    {slot.time}
                  </span>
                  {slot.note && <p className="mt-0.5 text-xs text-gray-500 md:ml-auto md:max-w-[10rem]">{slot.note}</p>}
                </div>
                <div className="min-w-0">
                  {slot.sessions.length > 1 ? <ParallelSessions sessions={slot.sessions} /> : <SingleSession session={first} />}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
