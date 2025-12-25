/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */



import { runInvitationExpiry } from "./invitation-expiry.job";
import { runSellerPayout } from "./seller-payout.job";

export async function runAllJobs() {
  await runInvitationExpiry();
  await runSellerPayout();
}
