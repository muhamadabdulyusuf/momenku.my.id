/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { supabaseAdmin } from "@/lib/supabase";

export const getInvitationsByUser = async (userId: string) => {
  const { data } = await supabaseAdmin
    .from("invitations")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  return data ?? [];
};

export const createInvitationDraft = async (userId: string) => {
  const { data, error } = await supabaseAdmin
    .from("invitations")
    .insert({
      user_id: userId,
      status: "draft",
      template_id: "modern",
    })
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateInvitationData = async (
  invitationId: string,
  payload: any
) => {
  await supabaseAdmin
    .from("invitations")
    .update({ data: payload })
    .eq("id", invitationId);

  return true;
};
