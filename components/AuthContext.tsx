'use client';

import { createContext, useContext, useState } from 'react';

type AuthContextType = {
  user: any;
  loading: boolean;
  error: string | null;
  signInGoogle: () => Promise<void>;
  signInEmail: (email: string, password: string) => Promise<void>;
  signUpEmail: (email: string, password: string, name: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  clearError: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signInGoogle = async () => {
    try {
      // TODO: connect Firebase or auth provider
      console.log('Google sign in');
    } catch (err: any) {
      setError(err.message);
    }
  };

  const signInEmail = async (email: string, password: string) => {
    try {
      console.log('Email sign in', email);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const signUpEmail = async (email: string, password: string, name: string) => {
    try {
      console.log('Sign up', email, name);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      console.log('Reset password', email);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        signInGoogle,
        signInEmail,
        signUpEmail,
        resetPassword,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
}