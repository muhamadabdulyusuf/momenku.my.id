/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */



import { supabaseAdmin } from "@/lib/supabase";

export async function runInvitationExpiry() {
  if (!supabaseAdmin) return;

  const now = new Date().toISOString();

  const { error } = await supabaseAdmin
    .from("invitations")
    .update({ status: "expired" })
    .eq("status", "published")
    .lt("expired_at", now);

  if (error) throw error;
}
