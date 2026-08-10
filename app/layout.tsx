import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display, Amiri } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';
import JsonLd from '@/components/JsonLd';
import { AuthProvider } from '@/contexts/AuthContext';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' });
const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-arabic',
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
      className={`${dmSans.variable} ${playfair.variable} ${amiri.variable}`}
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

          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />

        </AuthProvider>
      </body>
    </html>
  );
}