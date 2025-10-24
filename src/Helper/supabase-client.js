import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  // eslint-disable-next-line no-undef
  (typeof process !== "undefined" ? process.env.SUPABASE_URL : "");
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_KEY ||
  // eslint-disable-next-line no-undef
  (typeof process !== "undefined" ? process.env.SUPABASE_KEY : "");

if (typeof process === "undefined") {
  globalThis.process = { env: {} };
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
