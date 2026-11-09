"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useAuth } from "@/contexts/AuthContext";
import { skipSaveProgressPromptFor7Days } from "@/lib/courses/accountingProgress";

type Mode = "signup" | "signin" | "reset";

interface SaveProgressPromptProps {
  onClose: () => void;
}

export default function SaveProgressPrompt({ onClose }: SaveProgressPromptProps) {
  const { signInGoogle, signInEmail, signUpEmail, resetPassword, error, clearError } = useAuth();
  const [mode, setMode] = useState<Mode>("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    clearError();
  }, [clearError]);

  const switchMode = (m: Mode) => {
    setMode(m);
    clearError();
    setSent(false);
  };

  const handleSkip = () => {
    skipSaveProgressPromptFor7Days();
    onClose();
  };

  const handleGoogle = async () => {
    setBusy(true);
    await signInGoogle();
    setBusy(false);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setBusy(true);
    if (mode === "signin") await signInEmail(email, password);
    if (mode === "signup") await signUpEmail(email, password, name);
    if (mode === "reset") {
      await resetPassword(email);
      if (!error) setSent(true);
    }
    setBusy(false);
    if (!error && mode !== "reset") onClose();
  };

  if (!mounted) return null;

  const modal = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="save-progress-title"
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/55 backdrop-blur-sm"
      onClick={handleSkip}
    >
      <div
        className="efe-card w-full max-w-md p-6 relative max-h-[90vh] overflow-y-auto shadow-2xl bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-efe-accent-soft text-efe-accent-ink mb-2">
              Free Account
            </span>
            <h2 id="save-progress-title" className="text-xl font-bold font-display text-efe-fg">
              Save your progress on every device
            </h2>
            <p className="text-efe-muted text-sm mt-1">
              {mode === "signup"
                ? "Create a free account so your studied topics and quiz scores stay synced everywhere."
                : mode === "signin"
                ? "Sign in to sync your O Level Accounting progress."
                : "Enter your email and we will send a password reset link."}
            </p>
          </div>
          <button
            type="button"
            onClick={handleSkip}
            aria-label="Close modal"
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none ml-3 p-1"
          >
            ×
          </button>
        </div>

        {/* Google Auth */}
        {mode !== "reset" && (
          <>
            <button
              type="button"
              onClick={handleGoogle}
              disabled={busy}
              className="w-full flex items-center justify-center gap-3 border-2 border-efe-line rounded-xl py-3 font-semibold text-efe-fg hover:border-efe-accent hover:bg-efe-accent-soft/50 transition-all mb-4 disabled:opacity-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-efe-line" />
              <span className="text-xs text-efe-muted font-medium">or with email</span>
              <div className="flex-1 h-px bg-efe-line" />
            </div>
          </>
        )}

        {/* Email Form */}
        {sent ? (
          <div className="bg-efe-accent-soft border border-efe-line rounded-xl p-4 text-center">
            <p className="font-bold text-efe-accent-ink">Reset email sent!</p>
            <p className="text-sm text-efe-muted mt-1">Check your inbox and follow the link.</p>
            <button
              type="button"
              onClick={() => switchMode("signin")}
              className="mt-3 text-sm text-efe-accent-ink font-semibold hover:underline"
            >
              Back to Sign In
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            {mode === "signup" && (
              <div>
                <label htmlFor="save-progress-name" className="sr-only">Your name</label>
                <input
                  id="save-progress-name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-efe-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-efe-accent"
                />
              </div>
            )}
            <div>
              <label htmlFor="save-progress-email" className="sr-only">Email address</label>
              <input
                id="save-progress-email"
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-efe-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-efe-accent"
              />
            </div>
            {mode !== "reset" && (
              <div>
                <label htmlFor="save-progress-password" className="sr-only">Password</label>
                <input
                  id="save-progress-password"
                  type="password"
                  required
                  placeholder="Password (min. 6 characters)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-efe-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-efe-accent"
                />
              </div>
            )}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={busy || !email}
              className="w-full efe-btn efe-btn-primary py-3 disabled:opacity-50"
            >
              {busy
                ? "Please wait..."
                : mode === "signup"
                ? "Create Free Account"
                : mode === "signin"
                ? "Sign In"
                : "Send Reset Email"}
            </button>
          </form>
        )}

        {/* Mode switcher + Skip for now */}
        <div className="mt-4 text-center text-sm text-efe-muted space-y-2">
          {mode === "signup" && (
            <p>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => switchMode("signin")}
                className="text-efe-accent-ink hover:underline font-semibold"
              >
                Sign In
              </button>
            </p>
          )}
          {mode === "signin" && (
            <>
              <p>
                <button
                  type="button"
                  onClick={() => switchMode("reset")}
                  className="text-efe-accent-ink hover:underline font-medium"
                >
                  Forgot password?
                </button>
              </p>
              <p>
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  onClick={() => switchMode("signup")}
                  className="text-efe-accent-ink hover:underline font-semibold"
                >
                  Sign Up
                </button>
              </p>
            </>
          )}
          {mode === "reset" && (
            <p>
              <button
                type="button"
                onClick={() => switchMode("signin")}
                className="text-efe-accent-ink hover:underline font-medium"
              >
                ← Back to Sign In
              </button>
            </p>
          )}

          <div className="pt-2 border-t border-efe-line">
            <button
              type="button"
              onClick={handleSkip}
              className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-efe-muted hover:text-efe-fg hover:bg-efe-bg transition-colors"
            >
              Skip for now
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

