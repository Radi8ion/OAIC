import type { Metadata } from 'next';
import { Inter, Source_Serif_4, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-source-serif',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | OAIC 2026',
    default: '1st Odisha AI Conference (OAIC) 2026 — Bhubaneswar, India',
  },
  description:
    'OAIC 2026 is the inaugural Odisha AI Conference, gathering top experts to drive innovation in Artificial Intelligence. Join us in Bhubaneswar, 15-17 October 2026.',
  keywords: ['OAIC 2026', 'AI conference', 'Odisha AI', 'Bhubaneswar', 'Artificial Intelligence', 'Machine Learning'],
  authors: [{ name: 'OAIC Organizing Committee' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://oaic2026.org/',
    siteName: 'OAIC 2026',
    title: 'OAIC 2026',
    description: 'Inaugural Odisha AI Conference in Bhubaneswar, India. 15-17 October 2026.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OAIC 2026',
    description: 'Inaugural Odisha AI Conference in Bhubaneswar, India. 15-17 October 2026.',
    images: ['/images/og-image.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} ${robotoMono.variable}`}
    >
      <head>
        {/* Schema.org for Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: '1st Odisha AI Conference (OAIC) 2026',
              startDate: '2026-10-15',
              endDate: '2026-10-17',
              location: { '@type': 'Place', name: 'Bhubaneswar', address: 'Odisha, India' },
              organizer: { '@type': 'Organization', name: 'OAIC Organizing Committee' },
              url: 'https://oaic2026.org/',
            }),
          }}
        />
      </head>
      <body className="bg-gray-50 text-gray-800 font-sans antialiased">
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
