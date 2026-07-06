import { createClient } from "@supabase/supabase-js";

// Safe environment variable resolution for both dev (import.meta.env) and prod (process.env)
const resolveEnv = (key: string) => {
  if (typeof process !== "undefined" && process.env[key]) {
    return process.env[key];
  }
  if (typeof import.meta !== "undefined" && import.meta.env && import.meta.env[key]) {
    return import.meta.env[key];
  }
  return "";
};

const supabaseUrl = resolveEnv("VITE_SUPABASE_URL");
const supabaseAnonKey = resolveEnv("VITE_SUPABASE_ANON_KEY");

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase URL or Anon Key is missing. Check your environment variables.");
}

// Server-only Supabase client
export const supabaseServer = createClient(
  supabaseUrl || "https://nlrcidbatvqpyojhfmxr.supabase.co",
  supabaseAnonKey || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5scmNpZGJhdHZxcHlvamhmbXhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzMjYzMTIsImV4cCI6MjA5ODkwMjMxMn0.iaNswLLqVTsv-vACISmdVsEW1M_tRCtPDdt-fHCorsM",
  {
    auth: {
      persistSession: false, // Server-side operations shouldn't persist sessions locally
    },
  }
);
