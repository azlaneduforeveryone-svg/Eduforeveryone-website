'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import {
  onAuthStateChanged, signInWithPopup, GoogleAuthProvider,
  signInWithEmailAndPassword, createUserWithEmailAndPassword,
  sendPasswordResetEmail, updateProfile, signOut, User,
} from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { createOrUpdateUser } from '@/lib/firebaseDB';

type AuthContextType = {
  user: User | null;
  loading: boolean;
  error: string | null;
  signInGoogle: () => Promise<void>;
  signInEmail: (email: string, password: string) => Promise<void>;
  signUpEmail: (email: string, password: string, name: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        try {
          await createOrUpdateUser({
            uid: u.uid, displayName: u.displayName,
            email: u.email, photoURL: u.photoURL,
          });
        } catch (e) { console.error('createOrUpdateUser failed', e); }
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const signInGoogle = async () => {
    try { setError(null); await signInWithPopup(auth, new GoogleAuthProvider()); }
    catch (err: any) { setError(err?.message ?? 'Google sign-in failed'); }
  };

  const signInEmail = async (email: string, password: string) => {
    try { setError(null); await signInWithEmailAndPassword(auth, email, password); }
    catch (err: any) { setError(err?.message ?? 'Sign-in failed'); }
  };

  const signUpEmail = async (email: string, password: string, name: string) => {
    try {
      setError(null);
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      if (name) await updateProfile(cred.user, { displayName: name });
      // ensure the profile doc uses the entered name
      await createOrUpdateUser({
        uid: cred.user.uid, displayName: name || cred.user.displayName,
        email: cred.user.email, photoURL: cred.user.photoURL,
      });
    } catch (err: any) { setError(err?.message ?? 'Sign-up failed'); }
  };

  const resetPassword = async (email: string) => {
    try { setError(null); await sendPasswordResetEmail(auth, email); }
    catch (err: any) { setError(err?.message ?? 'Reset failed'); }
  };

  const logout = async () => {
    try { await signOut(auth); }
    catch (err: any) { setError(err?.message ?? 'Sign-out failed'); }
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider value={{
      user, loading, error,
      signInGoogle, signInEmail, signUpEmail, resetPassword, logout, clearError,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
}