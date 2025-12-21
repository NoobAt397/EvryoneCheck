'use client';

import React, { createContext, useContext, ReactNode, useState, useEffect, useMemo } from 'react';
import { supabase } from '@/supabaseClient';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { SupabaseErrorListener } from '@/components/SupabaseErrorListener';

// User authentication state
interface UserAuthState {
    user: User | null;
    session: Session | null;
    isUserLoading: boolean;
    userError: AuthError | null;
}

// Combined state for the Supabase context
export interface SupabaseContextState {
    user: User | null;
    session: Session | null;
    isUserLoading: boolean;
    userError: AuthError | null;
}

// Return type for useSupabase()
export interface SupabaseServicesAndUser {
    user: User | null;
    session: Session | null;
    isUserLoading: boolean;
    userError: AuthError | null;
}

// Return type for useUser()
export interface UserHookResult {
    user: User | null;
    isUserLoading: boolean;
    userError: AuthError | null;
}

// React Context
export const SupabaseContext = createContext<SupabaseContextState | undefined>(undefined);

interface SupabaseProviderProps {
    children: ReactNode;
}

/**
 * SupabaseProvider manages and provides Supabase auth state.
 */
export const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
    const [userAuthState, setUserAuthState] = useState<UserAuthState>({
        user: null,
        session: null,
        isUserLoading: true,
        userError: null,
    });

    useEffect(() => {
        // Get initial session
        supabase.auth.getSession().then(({ data: { session }, error }) => {
            if (error) {
                setUserAuthState({
                    user: null,
                    session: null,
                    isUserLoading: false,
                    userError: error,
                });
            } else {
                setUserAuthState({
                    user: session?.user ?? null,
                    session: session,
                    isUserLoading: false,
                    userError: null,
                });
            }
        });

        // Listen for auth state changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (event, session) => {
                setUserAuthState({
                    user: session?.user ?? null,
                    session: session,
                    isUserLoading: false,
                    userError: null,
                });
            }
        );

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const contextValue = useMemo((): SupabaseContextState => {
        return {
            user: userAuthState.user,
            session: userAuthState.session,
            isUserLoading: userAuthState.isUserLoading,
            userError: userAuthState.userError,
        };
    }, [userAuthState]);

    return (
        <SupabaseContext.Provider value={contextValue}>
            <SupabaseErrorListener />
            {children}
        </SupabaseContext.Provider>
    );
};

/**
 * Hook to access Supabase services and user authentication state.
 */
export const useSupabase = (): SupabaseServicesAndUser => {
    const context = useContext(SupabaseContext);

    if (context === undefined) {
        throw new Error('useSupabase must be used within a SupabaseProvider.');
    }

    return {
        user: context.user,
        session: context.session,
        isUserLoading: context.isUserLoading,
        userError: context.userError,
    };
};

/**
 * Hook specifically for accessing the authenticated user's state.
 */
export const useUser = (): UserHookResult => {
    const { user, isUserLoading, userError } = useSupabase();
    return { user, isUserLoading, userError };
};
