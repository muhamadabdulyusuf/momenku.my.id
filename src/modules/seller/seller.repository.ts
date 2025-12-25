/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { supabaseAdmin } from "@/lib/supabase";

export const getSellerByUserId = async (userId: string) => {
  const { data } = await supabaseAdmin
    .from("sellers")
    .select("*")
    .eq("user_id", userId)
    .single();

  return data;
};

export const getSellerBalance = async (sellerId: string) => {
  const { data } = await supabaseAdmin
    .from("seller_wallets")
    .select("pending,available,withdrawn")
    .eq("seller_id", sellerId)
    .single();

  return data;
};
