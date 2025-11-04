'use client';

import React, { useState, useEffect } from 'react';
import { useUser, useFirebase } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { signInWithGoogle, updateUserPhone } from '@/lib/auth';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function AuthWidget() {
  const { user, isUserLoading } = useUser();
  const { auth, firestore } = useFirebase();
  const [userData, setUserData] = useState<any>(null);
  const [isLoadingFirestore, setIsLoadingFirestore] = useState(true);
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (user && firestore) {
      const userDocRef = doc(firestore, 'users', user.uid);
      getDoc(userDocRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            setUserData(null); // No custom data yet
          }
          setIsLoadingFirestore(false);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          setIsLoadingFirestore(false);
        });
    } else if (!user) {
      // If there's no user, we're not loading any specific data
      setUserData(null);
      setIsLoadingFirestore(false);
    }
  }, [user, firestore]);


  const handleSavePhone = (e: React.FormEvent) => {
    e.preventDefault();
    if (user && phone) {
      updateUserPhone(firestore, user.uid, phone);
      // Optimistically update UI
      setUserData({ ...userData, phoneNumber: phone });
    }
  };
  
  const isLoading = isUserLoading || (user && isLoadingFirestore);

  return (
    <div className="auth-widget-card w-full max-w-sm p-8">
      {isLoading ? (
        <div>
           <div className="h-6 bg-white/20 rounded w-3/4 animate-pulse mx-auto mb-4"></div>
           <div className="h-10 bg-white/20 rounded-lg w-full animate-pulse"></div>
        </div>
      ) : !user ? (
        <div className='text-center'>
          <h2 className='text-xl font-bold mb-2 text-white'>Join Us</h2>
          <p className='text-white/80 text-sm mb-4'>Sign up with Google to continue.</p>
          <button
            className="hero-button w-full !mt-0"
            onClick={() => signInWithGoogle(auth, firestore)}
          >
            Sign Up with Google
          </button>
        </div>
      ) : !userData?.phoneNumber ? (
        <div>
           <h2 className='text-xl font-bold mb-2 text-white text-center'>Complete Your Profile</h2>
           <p className='text-white/80 text-sm mb-4 text-center'>Please provide your phone number.</p>
          <form onSubmit={handleSavePhone} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className='text-white/90'>Phone Number</Label>
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
            <button type="submit" className="hero-button w-full !mt-0">
              Save Phone Number
            </button>
          </form>
        </div>
      ) : (
        <div className='text-center'>
          <h2 className="text-xl font-bold text-white">Welcome Back!</h2>
          <p className="mt-2 text-lg text-white/90">
            Hello, <span className="font-semibold">{user.displayName}!</span>
          </p>
        </div>
      )}
    </div>
  );
}
