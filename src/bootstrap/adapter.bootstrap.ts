/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { initMidtrans } from "@/lib/midtrans";

export const initAdapters = async () => {
  console.log("[BOOTSTRAP] adapters");
  initMidtrans();
};
