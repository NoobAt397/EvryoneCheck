'use client';

import React, { useState, useEffect } from 'react';
import { useUser, useFirebase } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { signInWithGoogle, updateUserPhone } from '@/lib/auth';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

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
          console.error("Error fetching user data:", error);
          setIsLoadingFirestore(false);
        });
    } else {
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
  
  const isLoading = isUserLoading || isLoadingFirestore;

  if (isLoading) {
    return (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <div className="h-6 bg-muted rounded w-3/4 animate-pulse"></div>
        </CardHeader>
        <CardContent>
          <div className="h-10 bg-muted rounded w-full animate-pulse"></div>
        </CardContent>
      </Card>
    );
  }

  if (!user) {
    return (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Join Us</CardTitle>
          <CardDescription>Sign up with Google to continue.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            className="w-full bg-[#22D3EE] text-[#111827] hover:bg-[#22D3EE]/90"
            onClick={() => signInWithGoogle(auth, firestore)}
          >
            Sign Up with Google
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!userData?.phoneNumber) {
    return (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Complete Your Profile</CardTitle>
          <CardDescription>Please provide your phone number.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSavePhone} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g., +1 555-123-4567"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Save Phone Number
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Welcome Back!</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-lg">
          Hello, <span className="font-semibold">{user.displayName}!</span>
        </p>
      </CardContent>
    </Card>
  );
}
