import type { MetadataRoute } from 'next';

/**
 * PWA manifest, served by Next at /manifest.webmanifest.
 *
 * Kept as a metadata route rather than a static public/manifest.json so the
 * start_url and shortcuts stay in sync with the App Router route table.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'EduForEveryone — Free Education for All',
    short_name: 'EduForEveryone',
    description:
      'Free IELTS and GMAT prep, Quran reading, Islamic studies, and study tools. No fees. No barriers.',

    // start_url carries a source tag so installed-app traffic is separable in
    // Google Analytics from ordinary web traffic.
    start_url: '/?source=pwa',
    scope: '/',
    id: '/',

    display: 'standalone',
    orientation: 'portrait',

    background_color: '#f9fafb', // matches body bg-gray-50
    theme_color: '#0f766e', // brand-700

    lang: 'en',
    dir: 'ltr',
    categories: ['education', 'books', 'productivity'],

    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      // Separate maskable entries. A single icon declared "any maskable" gets
      // cropped on Android and padded nowhere else, which clips the logo.
      {
        src: '/icons/maskable-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],

    shortcuts: [
      {
        name: 'IELTS Practice',
        short_name: 'IELTS',
        url: '/ielts?source=pwa_shortcut',
        icons: [{ src: '/icons/icon-192.png', sizes: '192x192' }],
      },
      {
        name: 'GMAT Practice',
        short_name: 'GMAT',
        url: '/gmat?source=pwa_shortcut',
        icons: [{ src: '/icons/icon-192.png', sizes: '192x192' }],
      },
      {
        name: 'Read Quran',
        short_name: 'Quran',
        url: '/quran?source=pwa_shortcut',
        icons: [{ src: '/icons/icon-192.png', sizes: '192x192' }],
      },
    ],
  };
}
