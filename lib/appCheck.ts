// lib/appCheck.ts
import app from "@/lib/firebase";
import {
  initializeAppCheck,
  ReCaptchaV3Provider,
  getToken,
  type AppCheck,
} from "firebase/app-check";

let appCheckInstance: AppCheck | null = null;

export function initAppCheck(): void {
  if (typeof window === "undefined" || appCheckInstance) return;
  const key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!key) return;
  appCheckInstance = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(key),
    isTokenAutoRefreshEnabled: true,
  });
}

export async function getAppCheckHeader(): Promise<Record<string, string>> {
  if (!appCheckInstance) return {};
  try {
    const res = await getToken(appCheckInstance, false);
    return res.token ? { "X-Firebase-AppCheck": res.token } : {};
  } catch {
    return {};
  }
}
