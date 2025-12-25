/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { WhatsAppAdapter } from "@/adapters/whatsapp";
import { SupabaseAdapter } from "@/adapters/supabase";

export const adapters = {
  notification: new WhatsAppAdapter(),
  db: new SupabaseAdapter(),
};
