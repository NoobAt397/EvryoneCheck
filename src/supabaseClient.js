import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eqinmedtfghnoikaqjfk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxaW5tZWR0Zmdobm9pa2FxamZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzMTAxMjUsImV4cCI6MjA4MTg4NjEyNX0.nsNxcrGAnNQPPKSnL9e4VzNerIFzWFCxMvSmiOTM9-k';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
