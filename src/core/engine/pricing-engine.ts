/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { supabaseAdmin } from "@/lib/supabase";

type ResolvePriceInput = {
  packageId: string;
  sellerId?: string | null;
};

let ready = false;

export const initPricingEngine = () => {
  if (ready) return;
  ready = true;
  console.log("[ENGINE] Pricing Engine Initialized");
};

export async function resolveFinalPrice({
  packageId,
  sellerId,
}: ResolvePriceInput) {
  if (!supabaseAdmin) {
    throw new Error("ADMIN DB NOT READY");
  }

  const { data, error } = await supabaseAdmin
    .from("invitation_packages")
    .select("base_price")
    .eq("id", packageId)
    .eq("active", true)
    .single();

  if (error || !data) {
    throw new Error("Package not found");
  }

  return data.base_price;
}
