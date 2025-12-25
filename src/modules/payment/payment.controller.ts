/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { approvePayment } from "./payment.service";

export const approvePaymentController = async (orderId: string) => {
  return approvePayment(orderId);
};
