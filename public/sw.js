/*
 * EduForEveryone service worker.
 *
 * Design rules, in priority order:
 *
 * 1. Never serve stale HTML. Navigations are network-first with a cache
 *    fallback, so a Vercel deploy is visible on the next load. A cache-first
 *    HTML strategy would pin users to an old build until the SW updated,
 *    which is the classic PWA regression.
 * 2. Never cache anything authenticated or dynamic: /api/*, /admin/*,
 *    /profile, /leaderboard, and any non-GET request are passed straight
 *    through to the network.
 * 3. Content-hashed build output (/_next/static/*) is cache-first and
 *    effectively immutable, so it costs one network trip ever.
 * 4. Quran PDFs and audio are large and cross-origin. They are cached only
 *    after the user actually opens them, and the runtime cache is trimmed so
 *    a few long reading sessions cannot fill the origin's storage quota.
 *
 * Bump CACHE_VERSION on any change to this file.
 */

const CACHE_VERSION = 'v1';
const PRECACHE = `efe-precache-${CACHE_VERSION}`;
const RUNTIME = `efe-runtime-${CACHE_VERSION}`;
const MEDIA = `efe-media-${CACHE_VERSION}`;

const OFFLINE_URL = '/offline';

// Kept deliberately small. Precaching route HTML would go stale; this is just
// the shell needed to render the offline page.
const PRECACHE_URLS = [OFFLINE_URL, '/icons/icon-192.png', '/Main_Logo.jpg'];

// Paths that must always hit the network.
const NEVER_CACHE = [
  /^\/api\//,
  /^\/admin/,
  /^\/profile/,
  /^\/leaderboard/,
  /^\/__/, // Next internals and dev endpoints
];

// Cross-origin hosts whose large media we are willing to cache on demand.
const MEDIA_HOSTS = ['cdn.islamic.network'];

// Max entries kept in each runtime cache.
const RUNTIME_MAX = 60;
const MEDIA_MAX = 40;

/** Drop the oldest entries once a cache exceeds `max`. */
async function trimCache(cacheName, max) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length <= max) return;
  // Cache.keys() returns insertion order, so the head is the oldest.
  await Promise.all(keys.slice(0, keys.length - max).map((k) => cache.delete(k)));
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(PRECACHE)
      // addAll rejects the whole batch if one URL 404s, which would leave the
      // SW permanently uninstalled. Add individually and tolerate misses.
      .then((cache) =>
        Promise.all(
          PRECACHE_URLS.map((url) => cache.add(url).catch(() => undefined))
        )
      )
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  const keep = new Set([PRECACHE, RUNTIME, MEDIA]);
  event.waitUntil(
    caches
      .keys()
      .then((names) =>
        Promise.all(names.map((n) => (keep.has(n) ? undefined : caches.delete(n))))
      )
      .then(() => self.clients.claim())
  );
});

// Lets the page tell a waiting worker to take over immediately.
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Rule 2: only GET is ever cached.
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const sameOrigin = url.origin === self.location.origin;

  if (sameOrigin && NEVER_CACHE.some((re) => re.test(url.pathname))) return;

  // Range requests (audio seeking) must not be served from the Cache API,
  // which cannot satisfy partial content.
  if (request.headers.has('range')) return;

  // --- HTML navigations: network-first ---------------------------------
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(RUNTIME).then((cache) => {
            cache.put(request, copy);
            trimCache(RUNTIME, RUNTIME_MAX);
          });
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          return cached || (await caches.match(OFFLINE_URL));
        })
    );
    return;
  }

  // --- Immutable build output: cache-first ------------------------------
  if (sameOrigin && url.pathname.startsWith('/_next/static/')) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((response) => {
            const copy = response.clone();
            caches.open(PRECACHE).then((cache) => cache.put(request, copy));
            return response;
          })
      )
    );
    return;
  }

  // --- Quran media and PDFs: cache-first, capped ------------------------
  const isMedia =
    MEDIA_HOSTS.includes(url.hostname) ||
    (sameOrigin && url.pathname.startsWith('/quran-pdfs/'));

  if (isMedia) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request)
            .then((response) => {
              // Opaque responses report size 0 but consume real quota, so
              // only store responses we can actually inspect.
              if (response.ok && response.type !== 'opaque') {
                const copy = response.clone();
                caches.open(MEDIA).then((cache) => {
                  cache.put(request, copy);
                  trimCache(MEDIA, MEDIA_MAX);
                });
              }
              return response;
            })
            .catch(() => cached)
      )
    );
    return;
  }

  // --- Everything else same-origin: stale-while-revalidate --------------
  if (sameOrigin) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const network = fetch(request)
          .then((response) => {
            if (response.ok) {
              const copy = response.clone();
              caches.open(RUNTIME).then((cache) => {
                cache.put(request, copy);
                trimCache(RUNTIME, RUNTIME_MAX);
              });
            }
            return response;
          })
          .catch(() => cached);
        return cached || network;
      })
    );
  }
});
