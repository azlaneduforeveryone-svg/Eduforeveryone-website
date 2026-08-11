'use client';

import { useEffect } from 'react';

/**
 * Registers /sw.js in production only.
 *
 * Renders nothing. Kept out of the service worker file itself so registration
 * failures (unsupported browser, blocked storage, private mode) stay silent
 * rather than breaking the page.
 */
export default function ServiceWorkerRegistrar() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;
    if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) return;

    let cancelled = false;

    const register = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/',
        });
        if (cancelled) return;

        // If a new worker is already waiting, activate it rather than leaving
        // the user on the previous build until every tab closes.
        if (registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }

        registration.addEventListener('updatefound', () => {
          const installing = registration.installing;
          if (!installing) return;
          installing.addEventListener('statechange', () => {
            if (installing.state === 'installed' && navigator.serviceWorker.controller) {
              installing.postMessage({ type: 'SKIP_WAITING' });
            }
          });
        });
      } catch {
        // Registration is best-effort; the site works fine without it.
      }
    };

    // Defer past load so registration never competes with first paint.
    if (document.readyState === 'complete') {
      register();
    } else {
      window.addEventListener('load', register, { once: true });
    }

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
