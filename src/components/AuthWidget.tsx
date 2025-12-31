'use client';

import React, { useState, useEffect } from 'react';
import { useUser } from '@/supabase';
import { supabase } from '@/supabaseClient';
import { signInWithGoogle, updateUserPhone } from '@/supabase/auth';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function AuthWidget() {
  const { user, isUserLoading } = useUser();
  const [userData, setUserData] = useState<any>(null);
  const [isLoadingSupabase, setIsLoadingSupabase] = useState(true);
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (user) {
      // Fetch user data from Supabase
      supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single()
        .then(({ data, error }) => {
          if (data) {
            setUserData(data);
          } else {
            setUserData(null);
          }
          setIsLoadingSupabase(false);
        });
    } else {
      setUserData(null);
      setIsLoadingSupabase(false);
    }
  }, [user]);


  const handleSavePhone = (e: React.FormEvent) => {
    e.preventDefault();
    if (user && phone) {
      updateUserPhone(user.id, phone);
      // Optimistically update UI
      setUserData({ ...userData, phone_number: phone });
    }
  };

  const isLoading = isUserLoading || (user && isLoadingSupabase);

  // Get display name from Supabase user metadata
  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User';

  return (
    <div className="auth-widget-card w-full max-w-sm p-8">
      {isLoading ? (
        <div>
          <div className="h-6 bg-white/20 rounded w-3/4 animate-pulse mx-auto mb-4"></div>
          <div className="h-10 bg-white/20 rounded-lg w-full animate-pulse"></div>
        </div>
      ) : !user ? (
        <div className='text-center'>
          <h2 className='text-xl font-bold mb-2 text-[#0D47A1]'>Join Us</h2>
          <p className='text-[#1565C0] text-sm mb-4'>Sign up with Google to continue.</p>
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-100"
            onClick={() => signInWithGoogle()}
          >
            Sign Up with Google
          </button>
        </div>
      ) : !userData?.phone_number ? (
        <div>
          <h2 className='text-xl font-bold mb-2 text-[#0D47A1] text-center'>Complete Your Profile</h2>
          <p className='text-[#1565C0] text-sm mb-4 text-center'>Please provide your phone number.</p>
          <form onSubmit={handleSavePhone} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className='text-[#0D47A1]'>Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g., +1 555-123-4567"
                required
                className="auth-widget-input"
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-100">
              Save Phone Number
            </button>
          </form>
        </div>
      ) : (
        <div className='text-center'>
          <h2 className="text-xl font-bold text-[#0D47A1]">Welcome Back!</h2>
          <p className="mt-2 text-lg text-[#1565C0]">
            Hello, <span className="font-semibold">{displayName}!</span>
          </p>
        </div>
      )
      }
    </div >
  );
}
