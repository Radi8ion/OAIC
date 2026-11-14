export type SessionKind =
  | 'registration'
  | 'break'
  | 'ceremony'
  | 'keynote'
  | 'panel'
  | 'talk'
  | 'track'
  | 'workshop'
  | 'social';

export type TrackAccent = 'student' | 'faculty' | 'quantum';

export interface ProgramSession {
  title: string;
  kind: SessionKind;
  subtitle?: string;
  people?: string[];
  accent?: TrackAccent;
}

export interface ProgramSlot {
  time: string;
  note?: string;
  sessions: ProgramSession[];
}

export interface ProgramDay {
  id: string;
  tag: string;
  day: string;
  month: string;
  weekday: string;
  title: string;
  summary: string;
  venue?: string;
  slots: ProgramSlot[];
}

export const programDays: ProgramDay[] = [
  {
    id: 'dec-18',
    tag: 'Pre-Conference',
    day: '18',
    month: 'Dec 2026',
    weekday: 'Friday',
    title: 'Workshops & Tutorials',
    summary: 'AI/ML workshops for students, AI tutorials for faculty and a Quantum Science & Computing workshop.',
    slots: [
      { time: '8:30 – 9:30 AM', sessions: [{ title: 'Registration', kind: 'registration' }] },
      {
        time: '9:30 – 10:00 AM',
        sessions: [{ title: 'Workshop Inaugural Address, Highlight OAIC Missions', kind: 'ceremony' }],
      },
      { time: '10:00 – 10:30 AM', sessions: [{ title: 'Networking Tea', kind: 'break' }] },
      {
        time: '10:30 AM – 1:00 PM',
        note: 'Two sessions: 10:30 AM – 12:00 PM and 12:00 – 1:00 PM',
        sessions: [
          {
            title: 'AI/ML Workshop for Students',
            kind: 'workshop',
            accent: 'student',
            subtitle: 'Resource person',
            people: ['Google'],
          },
          {
            title: 'AI Tutorial for Faculty',
            kind: 'workshop',
            accent: 'faculty',
            subtitle: 'Resource person',
            people: ['Sarvam AI / Mayukh Pal / DPIC'],
          },
          {
            title: 'Quantum Workshop',
            kind: 'workshop',
            accent: 'quantum',
            people: [
              'Ritajit Majumder, IBM',
              'Prasant Panigrahi, Gyanaranjan Sahoo, CQST SOA',
              'Biswajit Mohanty, IIIT Bhubaneswar',
            ],
          },
        ],
      },
      { time: '1:00 – 2:00 PM', sessions: [{ title: 'Lunch Break', kind: 'break' }] },
      {
        time: '2:30 – 4:30 PM',
        sessions: [
          {
            title: 'AI/ML Workshop for Students',
            kind: 'workshop',
            accent: 'student',
            subtitle: 'Resource person',
            people: ['HCL Tech'],
          },
          {
            title: 'AI Tutorial for Faculty',
            kind: 'workshop',
            accent: 'faculty',
            people: ['Dr. Abhishek Appaji, CEO, A-Collective, SMIEEE'],
          },
          {
            title: 'Quantum Workshop',
            kind: 'workshop',
            accent: 'quantum',
            subtitle: 'Post-Quantum Cryptography',
            people: [
              'Prof. Swagata Mandal, Jalpaiguri Government Engineering College',
              'Dr. Suman Sau, ITER, SOA University',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'dec-19',
    tag: 'Conference Day 1',
    day: '19',
    month: 'Dec 2026',
    weekday: 'Saturday',
    title: 'Keynotes, Panels & Cultural Evening',
    summary: 'Plenary keynote, panels on AI and Quantum, technical tracks, posters and the inaugural cultural evening.',
    venue: 'SOA Campus-II',
    slots: [
      { time: '9:00 – 10:00 AM', sessions: [{ title: 'Registration & Networking Tea', kind: 'registration' }] },
      {
        time: '10:00 – 10:45 AM',
        sessions: [
          {
            title: 'Plenary Keynote',
            kind: 'keynote',
            people: ['B. Ravindran, Robert Bosch Centre for Data Science and AI, IIT Madras'],
          },
        ],
      },
      {
        time: '10:45 – 11:45 AM',
        sessions: [
          {
            title: 'Panel: AI and Quantum in Odisha: Current Scenario and Future Direction',
            kind: 'panel',
            people: ['Prof. Ajaya Mohanty'],
          },
        ],
      },
      {
        time: '11:45 AM – 1:15 PM',
        sessions: [
          {
            title: 'Technical Tracks 1 – 6',
            kind: 'track',
            subtitle: 'Onsite: 2 · Virtual: 4',
          },
          { title: 'Poster Presentation', kind: 'track' },
        ],
      },
      {
        time: '2:30 – 3:15 PM',
        sessions: [
          {
            title: 'Keynote 2',
            kind: 'keynote',
            people: ['Dr. J.B.V. Reddy, Mission Director, National Quantum Mission'],
          },
        ],
      },
      {
        time: '3:15 – 4:15 PM',
        sessions: [
          {
            title: 'Panel: AI Research in Academia, Opportunities and Challenges in AI Research',
            kind: 'panel',
            subtitle: 'Focused panel for PhD scholars and students',
          },
        ],
      },
      {
        time: '4:15 – 5:00 PM',
        sessions: [
          {
            title: 'Invited Talks',
            kind: 'talk',
            subtitle: 'Up to 2 talks',
            people: ['Rear Admiral Subasish Gantayet', 'Dr. Ashwini Kumar Rath, Founder and CEO, Batoi'],
          },
        ],
      },
      { time: '5:15 – 6:15 PM', sessions: [{ title: 'Inaugural and Cultural Evening', kind: 'social' }] },
    ],
  },
  {
    id: 'dec-20',
    tag: 'Conference Day 2',
    day: '20',
    month: 'Dec 2026',
    weekday: 'Sunday',
    title: 'Startups, Hackathon & Valedictory',
    summary: 'Keynotes, AI & Cybersecurity and AI for Startup panels, hackathon finals, startup exhibition and valedictory.',
    venue: 'SOA Campus-II',
    slots: [
      { time: '9:00 – 9:30 AM', sessions: [{ title: 'Registration', kind: 'registration' }] },
      {
        time: '9:30 – 10:15 AM',
        sessions: [
          {
            title: 'Keynote 3',
            kind: 'keynote',
            people: ['Sanghamitra Bandyopadhyay, Professor and Former Director, Indian Statistical Institute, West Bengal'],
          },
        ],
      },
      {
        time: '10:15 – 11:00 AM',
        sessions: [
          {
            title: 'Panel: AI and Cybersecurity',
            kind: 'panel',
            people: ['Dr. Debabrata Nayak, PwC'],
          },
        ],
      },
      {
        time: '11:00 AM – 12:00 PM',
        sessions: [{ title: 'Inauguration of Hackathon Finalists and AI Startup Exhibition', kind: 'ceremony' }],
      },
      {
        time: '12:00 – 1:00 PM',
        sessions: [{ title: 'Invited Talks 3, 4, 5', kind: 'talk', subtitle: 'Speakers to be announced' }],
      },
      { time: 'Lunch', sessions: [{ title: 'Lunch Break', kind: 'break' }] },
      {
        time: '2:00 – 2:45 PM',
        sessions: [
          {
            title: 'Keynote 4',
            kind: 'keynote',
            people: ['Ms. Debjani Ghosh, NITI Aayog'],
          },
        ],
      },
      {
        time: '2:45 – 3:30 PM',
        sessions: [{ title: 'Panel: AI for Startups: Challenges and Way Forward', kind: 'panel' }],
      },
      {
        time: '3:30 – 5:00 PM',
        sessions: [
          { title: 'Technical Tracks 7 – 12', kind: 'track' },
          { title: 'Hackathon and Startup Evaluation', kind: 'track' },
        ],
      },
      { time: '5:15 PM', sessions: [{ title: 'Valedictory Ceremony', kind: 'ceremony' }] },
    ],
  },
];
