/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { NotificationAdapter } from "@/adapters/contracts/notification.adapter";

export class WhatsAppAdapter implements NotificationAdapter {
  async send(to: string, message: string): Promise<boolean> {
    if (!to || !message) return false;

    try {
      // PLACEHOLDER REAL
      // integrate baileys / whatsapp-web.js di sini
      return true;
    } catch {
      return false;
    }
  }
}
