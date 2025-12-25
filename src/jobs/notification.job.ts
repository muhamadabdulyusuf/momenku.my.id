/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */



import { adapters } from "@/core/registry/hook.registry";

export const notificationJob = async () => {
  // contoh: kirim notif batch
  await adapters.notification.send(
    "628xxxx",
    "Reminder: Undangan kamu masih aktif"
  );
};
