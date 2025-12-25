/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import crypto from "crypto";

export const verifyMidtransSignature = (
  payload: any,
  serverKey: string
) => {
  const hash = crypto
    .createHash("sha512")
    .update(
      payload.order_id +
        payload.status_code +
        payload.gross_amount +
        serverKey
    )
    .digest("hex");

  return hash === payload.signature_key;
};
