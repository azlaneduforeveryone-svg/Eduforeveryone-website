"use client";
// contexts/AuthContext.tsx
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import {
  User, GoogleAuthProvider, signInWithPopup,
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, onAuthStateChanged, updateProfile, sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { createOrUpdateUser } from "@/lib/firebaseDB";

interface AuthContextType {
  user:            User | null;
  loading:         boolean;
  signInGoogle:    () => Promise<void>;
  signInEmail:     (email: string, password: string) => Promise<void>;
  signUpEmail:     (email: string, password: string, name: string) => Promise<void>;
  resetPassword:   (email: string) => Promise<void>;
  logout:          () => Promise<void>;
  error:           string | null;
  clearError:      () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user,    setUser]    = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      setLoading(false);
      if (u) {
        try {
          await createOrUpdateUser({
            uid: u.uid, displayName: u.displayName,
            email: u.email, photoURL: u.photoURL,
          });
        } catch {}
      }
    });
    return unsub;
  }, []);

  const signInGoogle = async () => {
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Google sign-in failed");
    }
  };

  const signInEmail = async (email: string, password: string) => {
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e: unknown) {
      setError(e instanceof Error ? "Invalid email or password" : "Sign in failed");
    }
  };

  const signUpEmail = async (email: string, password: string, name: string) => {
    setError(null);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(cred.user, { displayName: name });
      await createOrUpdateUser({
        uid: cred.user.uid, displayName: name,
        email: cred.user.email, photoURL: null,
      });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "";
      if (msg.includes("email-already-in-use")) setError("Email already registered. Please sign in.");
      else if (msg.includes("weak-password")) setError("Password must be at least 6 characters.");
      else setError("Sign up failed. Please try again.");
    }
  };

  const resetPassword = async (email: string) => {
    setError(null);
    try { await sendPasswordResetEmail(auth, email); }
    catch { setError("Could not send reset email. Check the address."); }
  };

  const logout = async () => { await signOut(auth); };
  const clearError = () => setError(null);

  return (
    <AuthContext.Provider value={{ user, loading, signInGoogle, signInEmail, signUpEmail, resetPassword, logout, error, clearError }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}