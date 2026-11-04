import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export const SUPABASE_URL = "https://xttznlhgwlbaipybrwry.supabase.co";

export const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Z1GFa8zhGWr22vMXx33tug_rNGSXV2J";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
