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
    template: '%s | IEEE GLOBECOM 2026',
    default: 'IEEE GLOBECOM 2026 — Macau S.A.R., China',
  },
  description:
    'IEEE GLOBECOM 2026 is a flagship conference of the IEEE Communications Society, gathering top experts to drive innovation in communications technology. Join us in Macau, 7-11 December 2026.',
  keywords: ['IEEE GLOBECOM 2026', 'communications conference', 'telecommunications', 'Macau', 'IEEE', 'ComSoc'],
  authors: [{ name: 'IEEE Communications Society' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://globecom2026.ieee-globecom.org/',
    siteName: 'IEEE GLOBECOM 2026',
    title: 'IEEE GLOBECOM 2026',
    description: 'Flagship conference of the IEEE Communications Society in Macau, China. 7-11 December 2026.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IEEE GLOBECOM 2026',
    description: 'Flagship conference of the IEEE Communications Society in Macau, China. 7-11 December 2026.',
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
              name: 'IEEE GLOBECOM 2026',
              startDate: '2026-12-07',
              endDate: '2026-12-11',
              location: { '@type': 'Place', name: 'The Venetian Macao', address: 'Macau S.A.R., China' },
              organizer: { '@type': 'Organization', name: 'IEEE Communications Society' },
              url: 'https://globecom2026.ieee-globecom.org/',
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
