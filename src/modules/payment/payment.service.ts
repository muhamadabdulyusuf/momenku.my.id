/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { TransactionQuery } from "@/infra/db/transaction.query";

export const approvePayment = async (orderId: string) => {
  if (!orderId) throw new Error("orderId kosong");

  await TransactionQuery.updateStatus(orderId, "paid");
  return true;
};
