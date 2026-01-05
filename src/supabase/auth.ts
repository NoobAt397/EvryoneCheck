'use client';

import { supabase } from '@/supabaseClient';
import { errorEmitter } from '@/supabase/error-emitter';
import { SupabasePermissionError } from '@/supabase/errors';

/**
 * Signs in with Google OAuth via Supabase.
 */
export async function signInWithGoogle() {
    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: typeof window !== 'undefined' ? window.location.origin : undefined,
            },
        });

        if (error) {
            if (process.env.NODE_ENV === 'development') console.error('Error during Google sign-in:', error);
            throw error;
        }

        return data;
    } catch (error) {
        if (process.env.NODE_ENV === 'development') console.error('Error during Google sign-in:', error);
        throw error;
    }
}

/**
 * Saves user data to the users table after sign-in.
 * Call this after successful authentication.
 */
export async function saveUserToDatabase(user: {
    id: string;
    email: string | undefined;
    user_metadata?: {
        full_name?: string;
        avatar_url?: string;
    };
}) {
    const userData = {
        id: user.id,
        email: user.email,
        display_name: user.user_metadata?.full_name || null,
        photo_url: user.user_metadata?.avatar_url || null,
        updated_at: new Date().toISOString(),
    };

    const { error } = await supabase
        .from('users')
        .upsert(userData, { onConflict: 'id' });

    if (error) {
        errorEmitter.emit(
            'permission-error',
            new SupabasePermissionError({
                table: 'users',
                operation: 'upsert',
                requestData: userData,
            })
        );
    }
}

/**
 * Updates a user's phone number in the users table.
 */
export async function updateUserPhone(userId: string, phoneNumber: string) {
    const dataToUpdate = {
        phone_number: phoneNumber,
        updated_at: new Date().toISOString(),
    };

    const { error } = await supabase
        .from('users')
        .update(dataToUpdate)
        .eq('id', userId);

    if (error) {
        errorEmitter.emit(
            'permission-error',
            new SupabasePermissionError({
                table: 'users',
                operation: 'update',
                requestData: dataToUpdate,
            })
        );
    }
}

/**
 * Signs the user out.
 */
export async function handleSignOut() {
    try {
        const { error } = await supabase.auth.signOut();
        if (error) {
            if (process.env.NODE_ENV === 'development') console.error('Error signing out:', error);
        }
    } catch (error) {
        if (process.env.NODE_ENV === 'development') console.error('Error signing out:', error);
    }
}
