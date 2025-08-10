import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://play.2.thinkmay.net:445';
const SUPABASE_ANON_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE';

/**
 * Create and return a Supabase client instance
 * This utility function provides a centralized way to create Supabase clients
 * with consistent configuration across the application.
 */
export const createSupabaseClient = () => {
    return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
};

/**
 * Singleton instance of Supabase client
 * Use this for most cases where you need a Supabase client
 */
export const supabase = createSupabaseClient();
