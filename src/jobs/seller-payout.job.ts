/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */



import { supabaseAdmin } from "@/lib/supabase";

export async function runSellerPayout() {
  if (!supabaseAdmin) return;

  const { data: orders } = await supabaseAdmin
    .from("orders")
    .select("id, seller_id, price")
    .eq("status", "paid")
    .is("payout_processed", false);

  if (!orders) return;

  for (const order of orders) {
    const commission = Math.floor(order.price * 0.2);

    const { error: ledgerError } = await supabaseAdmin
      .from("orders")
      .update({ payout_processed: true })
      .eq("id", order.id);

    if (ledgerError) continue; // already paid → idempotent

    await supabaseAdmin.rpc("increment_wallet", {
      sid: order.seller_id,
      amount: commission,
    });
  }
}
