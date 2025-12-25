/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !anon) {
  throw new Error("❌ SUPABASE PUBLIC ENV KOSONG - CEK .ENV.LOCAL");
}

// Client untuk public/client-side
export const supabase = createClient(url, anon);

// Client Dewa (Admin) - Tidak auto-crash jika service key belum ada
export const supabaseAdmin = service 
  ? createClient(url, service, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
  : null;