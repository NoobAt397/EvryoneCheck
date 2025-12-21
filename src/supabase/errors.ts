'use client';

type SupabaseErrorContext = {
    table: string;
    operation: 'select' | 'insert' | 'update' | 'delete' | 'upsert';
    requestData?: any;
};

interface SupabaseErrorRequest {
    table: string;
    operation: string;
    data?: any;
}

/**
 * Builds the final, formatted error message.
 */
function buildErrorMessage(requestObject: SupabaseErrorRequest): string {
    return `Supabase permission error: The following request was denied:
${JSON.stringify(requestObject, null, 2)}`;
}

/**
 * A custom error class for Supabase permission errors.
 * Designed to be consumed for debugging.
 */
export class SupabasePermissionError extends Error {
    public readonly request: SupabaseErrorRequest;

    constructor(context: SupabaseErrorContext) {
        const requestObject: SupabaseErrorRequest = {
            table: context.table,
            operation: context.operation,
            data: context.requestData,
        };
        super(buildErrorMessage(requestObject));
        this.name = 'SupabaseError';
        this.request = requestObject;
    }
}
