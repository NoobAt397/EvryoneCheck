'use client';

// This file has been migrated to Supabase.
// All auth functions are now in @/supabase/auth.ts
// This file re-exports them for backwards compatibility.

export {
  signInWithGoogle,
  handleSignOut,
  updateUserPhone,
  saveUserToDatabase
} from '@/supabase/auth';
