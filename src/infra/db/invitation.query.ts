/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { supabaseAdmin } from "@/lib/supabase";

export async function getInvitationBySlug(slug: string) {
  if (!supabaseAdmin) return null;

  const { data } = await supabaseAdmin
    .from("invitations")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  return data;
}
