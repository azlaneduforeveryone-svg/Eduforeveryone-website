import type { Metadata, Viewport } from 'next';
import { DM_Sans, Playfair_Display, Amiri, Lateef, Scheherazade_New, Noto_Naskh_Arabic } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import JsonLd from '@/components/JsonLd';
import { AuthProvider } from '@/contexts/AuthContext';
import ServiceWorkerRegistrar from '@/components/pwa/ServiceWorkerRegistrar';
import MobileTabBar from '@/components/pwa/MobileTabBar';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' });
const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-arabic',
});
const notoNaskh = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  weight: ['400', '600', '700'],
  variable: '--font-indopak',
});
const lateef = Lateef({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-maghribi',
});
const scheherazade = Scheherazade_New({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-uthmani',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://eduforeveryone.com'),
  title: 'EduForEveryone — Free Education for All',
  description: 'Free, high-quality courses, notes, and quizzes for every student. No fees. No barriers.',
  alternates: { canonical: './' },
  openGraph: {
    siteName: 'EduForEveryone',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/Main_Logo.jpg', width: 800, height: 800, alt: 'EduForEveryone' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: '/Main_Logo.jpg', width: 800, height: 800, alt: 'EduForEveryone' }],
  },
  // PWA install metadata. The manifest itself lives in app/manifest.ts.
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
  },
  appleWebApp: {
    capable: true,
    title: 'EduForEveryone',
    // 'default' keeps the iOS status bar legible against the light gray body.
    statusBarStyle: 'default',
  },
};

export const viewport: Viewport = {
  themeColor: '#0f766e',
  width: 'device-width',
  initialScale: 1,
  // Required for env(safe-area-inset-*) so the bottom tab bar clears the
  // iPhone home indicator.
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} ${amiri.variable} ${notoNaskh.variable} ${lateef.variable} ${scheherazade.variable}`}
    >
      <body className="font-body bg-gray-50 min-h-screen flex flex-col text-gray-900 antialiased">
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "EduForEveryone",
          url: "https://eduforeveryone.com",
          logo: "https://eduforeveryone.com/Main_Logo.jpg",
          sameAs: ["https://facebook.com/eduforeveryone"],
        }} />
        <AuthProvider>

          {isProduction && (
            <>
              <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-F7MCW76675"
                strategy="afterInteractive"
              />

              <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-F7MCW76675', { page_path: window.location.pathname });
                `}
              </Script>
            </>
          )}

          <ServiceWorkerRegistrar />

          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />

          {/*
            Bottom tab bar is fixed, so the footer needs clearance underneath
            it on mobile. Spacer rather than body padding so it disappears
            cleanly at lg, where the tab bar is hidden.
          */}
          <div
            aria-hidden="true"
            className="lg:hidden h-14 pb-[env(safe-area-inset-bottom)]"
          />
          <MobileTabBar />

        </AuthProvider>
      </body>
    </html>
  );
}