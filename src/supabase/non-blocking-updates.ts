'use client';

import { supabase } from '@/supabaseClient';
import { errorEmitter } from '@/supabase/error-emitter';
import { SupabasePermissionError } from '@/supabase/errors';

/**
 * Non-blocking insert operation.
 * Does NOT await the operation internally.
 */
export function insertNonBlocking(table: string, data: any) {
    supabase
        .from(table)
        .insert(data)
        .then(({ error }) => {
            if (error) {
                errorEmitter.emit(
                    'permission-error',
                    new SupabasePermissionError({
                        table,
                        operation: 'insert',
                        requestData: data,
                    })
                );
            }
        });
}

/**
 * Non-blocking upsert operation.
 * Does NOT await the operation internally.
 */
export function upsertNonBlocking(table: string, data: any, onConflict?: string) {
    supabase
        .from(table)
        .upsert(data, onConflict ? { onConflict } : undefined)
        .then(({ error }) => {
            if (error) {
                errorEmitter.emit(
                    'permission-error',
                    new SupabasePermissionError({
                        table,
                        operation: 'upsert',
                        requestData: data,
                    })
                );
            }
        });
}

/**
 * Non-blocking update operation.
 * Does NOT await the operation internally.
 */
export function updateNonBlocking(table: string, data: any, column: string, value: any) {
    supabase
        .from(table)
        .update(data)
        .eq(column, value)
        .then(({ error }) => {
            if (error) {
                errorEmitter.emit(
                    'permission-error',
                    new SupabasePermissionError({
                        table,
                        operation: 'update',
                        requestData: data,
                    })
                );
            }
        });
}

/**
 * Non-blocking delete operation.
 * Does NOT await the operation internally.
 */
export function deleteNonBlocking(table: string, column: string, value: any) {
    supabase
        .from(table)
        .delete()
        .eq(column, value)
        .then(({ error }) => {
            if (error) {
                errorEmitter.emit(
                    'permission-error',
                    new SupabasePermissionError({
                        table,
                        operation: 'delete',
                    })
                );
            }
        });
}
