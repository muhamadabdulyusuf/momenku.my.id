/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { supabaseAdmin } from "@/lib/supabase";

export const SellerQuery = {
  async addBalance(sellerId: string, amount: number) {
    const { error } = await supabaseAdmin.rpc(
      "increment_seller_balance",
      { seller_id: sellerId, amount }
    );

    if (error) throw error;
    return true;
  },
};
