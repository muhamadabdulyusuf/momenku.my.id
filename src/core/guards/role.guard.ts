/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { supabaseAdmin } from "@/lib/supabase";
import { Role } from "@/constants/roles";

export async function assertRole(
  userId: string,
  allowedRoles: Role[]
) {
  if (!supabaseAdmin) throw new Error("SUPABASE ADMIN NOT READY");

  const { data, error } = await supabaseAdmin
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .single();

  if (error || !data || !allowedRoles.includes(data.role as Role)) {
    throw new Error("FORBIDDEN");
  }
}
