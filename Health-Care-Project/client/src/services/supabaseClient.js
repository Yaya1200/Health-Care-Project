import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;



const isConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = createClient(
  isConfigured
    ? supabaseUrl
    : "https://mwjbddlhfamrhiyruvjc.supabase.co",
  isConfigured
    ? supabaseAnonKey
    : "sb_publishable_QAuLiI_SonkoT1MdEsSCVQ_9ci3h8ji",
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  }
);

export const isSupabaseConfigured = isConfigured;