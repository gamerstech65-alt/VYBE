import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// VYBE Supabase project
export const SUPABASE_URL = "https://xttznlhgwlbaipybrwry.supabase.co";

// Paste your existing Supabase publishable key below
export const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Z1GFa8zhGWr22vMXx33tug_rNGSXV2J";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  }
);
