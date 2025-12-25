/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */



import { supabaseAdmin } from "@/lib/supabase";

export async function acquireLock(key: string) {
  if (!supabaseAdmin) throw new Error("Supabase admin not ready");

  const hash = key.split("").reduce((a, c) => a + c.charCodeAt(0), 0);

  const { data } = await supabaseAdmin
    .rpc("pg_try_advisory_lock", { key: hash });

  return data === true;
}

export async function releaseLock(key: string) {
  if (!supabaseAdmin) return;

  const hash = key.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  await supabaseAdmin.rpc("pg_advisory_unlock", { key: hash });
}
