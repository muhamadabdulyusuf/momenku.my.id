/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { supabaseAdmin } from "@/lib/supabase";
import { AuthUser } from "./auth.types";

export const findUserById = async (
  userId: string
): Promise<AuthUser | null> => {
  const { data, error } = await supabaseAdmin
    .from("users")
    .select("id,email,role")
    .eq("id", userId)
    .single();

  if (error || !data) return null;

  return data as AuthUser;
};
