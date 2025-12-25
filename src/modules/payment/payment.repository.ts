/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { supabaseAdmin } from "@/lib/supabase";

export const getPendingPayments = async () => {
  const { data } = await supabaseAdmin
    .from("transactions")
    .select("*")
    .eq("status", "pending");

  return data ?? [];
};
