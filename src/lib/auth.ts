'use client';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { doc, setDoc, Firestore } from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

/**
 * Initiates Google Sign-In and saves user data to Firestore.
 * @param auth - The Firebase Auth instance.
 * @param firestore - The Firebase Firestore instance.
 */
export async function signInWithGoogle(auth: Auth, firestore: Firestore) {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Save user data to Firestore
    const userRef = doc(firestore, 'users', user.uid);
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };

    // Use non-blocking setDoc with error handling
    setDoc(userRef, userData, { merge: true }).catch((error) => {
      errorEmitter.emit(
        'permission-error',
        new FirestorePermissionError({
          path: userRef.path,
          operation: 'write',
          requestResourceData: userData,
        })
      );
    });
  } catch (error) {
    console.error('Error during Google sign-in:', error);
    // Optionally, handle sign-in errors (e.g., popup closed by user)
  }
}

/**
 * Updates a user's phone number in their Firestore document.
 * @param firestore - The Firebase Firestore instance.
 * @param userId - The ID of the user to update.
 * @param phoneNumber - The new phone number.
 */
export function updateUserPhone(
  firestore: Firestore,
  userId: string,
  phoneNumber: string
) {
  const userRef = doc(firestore, 'users', userId);
  const dataToUpdate = { phoneNumber };

  // Use non-blocking updateDoc with error handling
  setDoc(userRef, dataToUpdate, { merge: true }).catch((error) => {
    errorEmitter.emit(
      'permission-error',
      new FirestorePermissionError({
        path: userRef.path,
        operation: 'update',
        requestResourceData: dataToUpdate,
      })
    );
  });
}

/**
 * Signs the user out.
 * @param auth - The Firebase Auth instance.
 */
export async function handleSignOut(auth: Auth) {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out:', error);
  }
}
