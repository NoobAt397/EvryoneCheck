'use client';

import { useState, useEffect, useMemo, DependencyList } from 'react';
import { supabase } from '@/supabaseClient';
import { PostgrestError, RealtimeChannel } from '@supabase/supabase-js';
import { errorEmitter } from '@/supabase/error-emitter';
import { SupabasePermissionError } from '@/supabase/errors';

/** Utility type to ensure data has an 'id' field */
export type WithId<T> = T & { id: string };

/**
 * Interface for the return value of the useTable hook.
 */
export interface UseTableResult<T> {
    data: WithId<T>[] | null;
    isLoading: boolean;
    error: PostgrestError | Error | null;
}

/**
 * React hook to fetch and subscribe to a Supabase table in real-time.
 * 
 * @param table - The table name to query
 * @param options - Optional query modifiers
 * @returns Object with data, isLoading, error
 */
export function useTable<T = any>(
    table: string | null | undefined,
    options?: {
        select?: string;
        filter?: { column: string; value: any };
        orderBy?: { column: string; ascending?: boolean };
    }
): UseTableResult<T> {
    const [data, setData] = useState<WithId<T>[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<PostgrestError | Error | null>(null);

    useEffect(() => {
        if (!table) {
            setData(null);
            setIsLoading(false);
            setError(null);
            return;
        }

        setIsLoading(true);
        setError(null);

        // Build the query
        let query = supabase.from(table).select(options?.select || '*');

        if (options?.filter) {
            query = query.eq(options.filter.column, options.filter.value);
        }

        if (options?.orderBy) {
            query = query.order(options.orderBy.column, {
                ascending: options.orderBy.ascending ?? true
            });
        }

        // Fetch initial data
        query.then(({ data: result, error: queryError }) => {
            if (queryError) {
                const contextualError = new SupabasePermissionError({
                    table,
                    operation: 'select',
                });
                setError(contextualError);
                setData(null);
                setIsLoading(false);
                errorEmitter.emit('permission-error', contextualError);
            } else {
                setData(result as WithId<T>[]);
                setError(null);
                setIsLoading(false);
            }
        });

        // Subscribe to real-time changes
        const channel: RealtimeChannel = supabase
            .channel(`${table}_changes`)
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table },
                (payload) => {
                    // Refetch on any change for simplicity
                    // You could optimize this to handle INSERT/UPDATE/DELETE individually
                    let refetchQuery = supabase.from(table).select(options?.select || '*');

                    if (options?.filter) {
                        refetchQuery = refetchQuery.eq(options.filter.column, options.filter.value);
                    }

                    if (options?.orderBy) {
                        refetchQuery = refetchQuery.order(options.orderBy.column, {
                            ascending: options.orderBy.ascending ?? true
                        });
                    }

                    refetchQuery.then(({ data: result, error: refetchError }) => {
                        if (!refetchError) {
                            setData(result as WithId<T>[]);
                        }
                    });
                }
            )
            .subscribe();

        return () => {
            channel.unsubscribe();
        };
    }, [table, options?.select, options?.filter?.column, options?.filter?.value, options?.orderBy?.column, options?.orderBy?.ascending]);

    return { data, isLoading, error };
}

/**
 * Interface for the return value of the useRow hook.
 */
export interface UseRowResult<T> {
    data: WithId<T> | null;
    isLoading: boolean;
    error: PostgrestError | Error | null;
}

/**
 * React hook to fetch and subscribe to a single row in Supabase.
 * 
 * @param table - The table name
 * @param id - The row ID to fetch
 * @returns Object with data, isLoading, error
 */
export function useRow<T = any>(
    table: string | null | undefined,
    id: string | null | undefined
): UseRowResult<T> {
    const [data, setData] = useState<WithId<T> | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<PostgrestError | Error | null>(null);

    useEffect(() => {
        if (!table || !id) {
            setData(null);
            setIsLoading(false);
            setError(null);
            return;
        }

        setIsLoading(true);
        setError(null);

        // Fetch initial data
        supabase
            .from(table)
            .select('*')
            .eq('id', id)
            .single()
            .then(({ data: result, error: queryError }) => {
                if (queryError) {
                    if (queryError.code === 'PGRST116') {
                        // Row not found - not an error, just no data
                        setData(null);
                        setError(null);
                    } else {
                        const contextualError = new SupabasePermissionError({
                            table,
                            operation: 'select',
                        });
                        setError(contextualError);
                        setData(null);
                        errorEmitter.emit('permission-error', contextualError);
                    }
                    setIsLoading(false);
                } else {
                    setData(result as WithId<T>);
                    setError(null);
                    setIsLoading(false);
                }
            });

        // Subscribe to real-time changes for this specific row
        const channel: RealtimeChannel = supabase
            .channel(`${table}_${id}_changes`)
            .on(
                'postgres_changes',
                {
                    event: '*',
                    schema: 'public',
                    table,
                    filter: `id=eq.${id}`
                },
                (payload) => {
                    if (payload.eventType === 'DELETE') {
                        setData(null);
                    } else {
                        setData(payload.new as WithId<T>);
                    }
                }
            )
            .subscribe();

        return () => {
            channel.unsubscribe();
        };
    }, [table, id]);

    return { data, isLoading, error };
}

/**
 * Helper hook for memoizing table queries (similar to useMemoFirebase)
 */
export function useMemoSupabase<T>(factory: () => T, deps: DependencyList): T {
    return useMemo(factory, deps);
}
