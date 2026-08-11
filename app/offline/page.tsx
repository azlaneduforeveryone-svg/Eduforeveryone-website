import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Offline — EduForEveryone',
  description: 'You are currently offline.',
  // This page exists only as a service worker fallback. Keeping it out of the
  // index avoids a thin-content page competing with real routes.
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <div className="max-w-md mx-auto px-6 py-20 text-center">
      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-brand-50 flex items-center justify-center">
        <svg
          className="w-8 h-8 text-brand-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M18.364 5.636a9 9 0 010 12.728M5.636 18.364a9 9 0 010-12.728M3 3l18 18"
          />
        </svg>
      </div>

      <h1 className="font-display text-2xl font-bold text-gray-900">
        You&rsquo;re offline
      </h1>

      <p className="mt-3 text-gray-600 leading-relaxed">
        This page hasn&rsquo;t been saved to your device yet. Pages you&rsquo;ve
        already opened stay available without a connection.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-800 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
