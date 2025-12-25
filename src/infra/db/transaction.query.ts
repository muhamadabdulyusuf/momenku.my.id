/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { supabaseAdmin } from "@/lib/supabase";

export const TransactionQuery = {
  async create(payload: {
    order_id: string;
    user_id: string;
    package_id: string;
    amount: number;
    status: string;
  }) {
    if (!supabaseAdmin) throw new Error("Admin DB unavailable");

    // Mapping payload ke kolom tabel database yang sesuai
    const { error } = await supabaseAdmin.from("orders").insert({
      id: payload.order_id,
      user_id: payload.user_id,
      package_id: payload.package_id,
      price: payload.amount,
      status: payload.status,
    });

    if (error) throw error;
  },

  async updateStatus(orderId: string, status: string) {
    if (!supabaseAdmin) throw new Error("Admin DB unavailable");

    const { error } = await supabaseAdmin
      .from("orders")
      .update({ status })
      .eq("id", orderId);

    if (error) throw error;
  },
};
