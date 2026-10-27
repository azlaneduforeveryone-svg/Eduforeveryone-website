// lib/analytics.ts
// GA4 Feature Event Tracking & User Identity

export const GA_MEASUREMENT_ID = 'G-F7MCW76675';

export type AnalyticsEventMap = {
  ielts_test_start: {
    section: 'reading' | 'listening' | 'writing' | 'speaking' | 'mock';
  };
  ielts_test_complete: {
    section: 'reading' | 'listening' | 'writing' | 'speaking' | 'mock';
    score: number;
  };
  ai_feedback_submit: {
    task: 'task1' | 'task2';
  };
  gmat_practice_start: {
    section: 'quant' | 'verbal' | 'data_insights' | 'mock';
  };
  gmat_practice_complete: {
    section: 'quant' | 'verbal' | 'data_insights' | 'mock';
    score: number;
  };
  recon_file_upload: {
    type: 'bank' | 'supplier' | 'customer' | 'intercompany';
  };
  recon_run_complete: {
    type: 'bank' | 'supplier' | 'customer' | 'intercompany';
  };
  calculator_use: {
    calculator: 'cfa' | 'scientific' | 'simple';
  };
  quran_pdf_open: {
    mushaf: '13_line' | '15_line';
  };
  game_start: {
    game: 'word_puzzle' | 'math_puzzle' | 'quiz_battle' | 'word_meanings' | 'phrase_upgrade' | 'word_upgrade';
  };
  sign_up: {
    method: 'google' | 'email';
  };
  login: {
    method: 'google' | 'email';
  };
};

export type AnalyticsEventName = keyof AnalyticsEventMap;

/**
 * Returns true only on Vercel preview environments (never on production or localhost).
 */
export const isVercelPreview = (): boolean => {
  if (typeof window === 'undefined') return false;
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') return true;
  const host = window.location.hostname;
  return host.endsWith('.vercel.app') && !host.includes('eduforeveryone.com');
};

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

/**
 * Dispatches a typed GA4 event.
 * Fails silently if gtag is missing (SSR, ad blockers, offline, etc.).
 */
export function track<K extends AnalyticsEventName>(
  name: K,
  params: AnalyticsEventMap[K]
): void {
  if (typeof window === 'undefined') return;

  const gtag = window.gtag;
  if (typeof gtag !== 'function') return;

  try {
    const payload = isVercelPreview()
      ? { ...params, debug_mode: true }
      : { ...params };
    gtag('event', name, payload);
  } catch {
    // Fail silently
  }
}

/**
 * Sets GA4 user_id to the Firebase UID on login, or clears it on logout.
 * Never pass email, name or other PII.
 */
export function setAnalyticsUser(uid: string | null): void {
  if (typeof window === 'undefined') return;

  const gtag = window.gtag;
  if (typeof gtag !== 'function') return;

  try {
    if (uid) {
      gtag('set', { user_id: uid });
      gtag('config', GA_MEASUREMENT_ID, { user_id: uid });
    } else {
      gtag('set', { user_id: null });
      gtag('config', GA_MEASUREMENT_ID, { user_id: null });
    }
  } catch {
    // Fail silently
  }
}
