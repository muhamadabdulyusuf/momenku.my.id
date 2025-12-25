/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { supabaseAdmin } from "@/lib/supabase";

export const getAdminStats = async () => {
  const [{ count: users }, { count: invitations }] = await Promise.all([
    supabaseAdmin.from("users").select("*", { count: "exact", head: true }),
    supabaseAdmin
      .from("invitations")
      .select("*", { count: "exact", head: true }),
  ]);

  return {
    totalUsers: users ?? 0,
    totalInvitations: invitations ?? 0,
  };
};
