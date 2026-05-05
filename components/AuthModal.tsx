"use client";
// components/AuthModal.tsx
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

type Mode = "signin" | "signup" | "reset";

export default function AuthModal({ onClose }: { onClose: () => void }) {
  const { signInGoogle, signInEmail, signUpEmail, resetPassword, error, clearError, loading } = useAuth();
  const [mode,     setMode]     = useState<Mode>("signin");
  const [name,     setName]     = useState("");
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [sent,     setSent]     = useState(false);
  const [busy,     setBusy]     = useState(false);

  const switchMode = (m: Mode) => { setMode(m); clearError(); setSent(false); };

  const handleGoogle = async () => {
    setBusy(true);
    await signInGoogle();
    setBusy(false);
    onClose();
  };

  const handleSubmit = async () => {
    if (!email) return;
    setBusy(true);
    if (mode === "signin")  await signInEmail(email, password);
    if (mode === "signup")  await signUpEmail(email, password, name);
    if (mode === "reset") { await resetPassword(email); if (!error) setSent(true); }
    setBusy(false);
    if (!error && mode !== "reset") onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="flex justify-between items-start mb-5">
          <div>
            <h2 className="text-xl font-black text-gray-900">
              {mode === "signin" ? "Welcome Back 👋" : mode === "signup" ? "Create Account 🌟" : "Reset Password 🔑"}
            </h2>
            <p className="text-gray-500 text-sm mt-0.5">
              {mode === "signin" ? "Sign in to track your progress" : mode === "signup" ? "Join EduForEveryone — free!" : "We'll send a reset link"}
            </p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
        </div>

        {/* Google Button */}
        {mode !== "reset" && (
          <>
            <button onClick={handleGoogle} disabled={busy}
              className="w-full flex items-center justify-center gap-3 border-2 border-gray-200 rounded-xl py-3 font-semibold text-gray-700 hover:border-teal-400 hover:bg-teal-50 transition-all mb-4 disabled:opacity-50">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 font-medium">or</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
          </>
        )}

        {/* Form */}
        {sent ? (
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-center">
            <p className="text-2xl mb-2">📧</p>
            <p className="font-bold text-teal-800">Reset email sent!</p>
            <p className="text-sm text-teal-600 mt-1">Check your inbox and follow the link.</p>
            <button onClick={() => switchMode("signin")} className="mt-3 text-sm text-teal-600 font-semibold hover:underline">
              Back to Sign In
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {mode === "signup" && (
              <input type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
            )}
            <input type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500" />
            {mode !== "reset" && (
              <input type="password" placeholder="Password (min. 6 characters)" value={password} onChange={e => setPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                onKeyDown={e => e.key === "Enter" && handleSubmit()} />
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <button onClick={handleSubmit} disabled={busy || !email}
              className="w-full bg-teal-600 text-white font-bold py-3 rounded-xl hover:bg-teal-700 disabled:opacity-50 transition-all"
              style={{ boxShadow: "0 4px 0 #0F6E56" }}>
              {busy ? "Please wait..." :
               mode === "signin" ? "Sign In" :
               mode === "signup" ? "Create Account" : "Send Reset Email"}
            </button>
          </div>
        )}

        {/* Footer links */}
        <div className="mt-4 text-center text-sm text-gray-500 space-y-1">
          {mode === "signin" && (
            <>
              <p>
                <button onClick={() => switchMode("reset")} className="text-teal-600 hover:underline font-medium">
                  Forgot password?
                </button>
              </p>
              <p>
                Don't have an account?{" "}
                <button onClick={() => switchMode("signup")} className="text-teal-600 hover:underline font-semibold">
                  Sign Up
                </button>
              </p>
            </>
          )}
          {mode === "signup" && (
            <p>
              Already have an account?{" "}
              <button onClick={() => switchMode("signin")} className="text-teal-600 hover:underline font-semibold">
                Sign In
              </button>
            </p>
          )}
          {mode === "reset" && (
            <p>
              <button onClick={() => switchMode("signin")} className="text-teal-600 hover:underline font-medium">
                ← Back to Sign In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}