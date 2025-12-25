/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import Midtrans from "midtrans-client";

let snapInstance: Midtrans.Snap | null = null;

export function initMidtrans() {
  if (snapInstance) return snapInstance;

  if (!process.env.MIDTRANS_SERVER_KEY) {
    throw new Error("MIDTRANS_SERVER_KEY belum diset");
  }

  snapInstance = new Midtrans.Snap({
    isProduction: process.env.NODE_ENV === "production",
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY,
  });

  console.log("[MIDTRANS] initialized");
  return snapInstance;
}

export function getMidtransSnap() {
  if (!snapInstance) {
    throw new Error("Midtrans belum di-init. Panggil initMidtrans() dulu.");
  }
  return snapInstance;
}

// ✅ INI YANG HILANG SEBELUMNYA
export async function createSnapTransaction(params: {
  orderId: string;
  amount: number;
}) {
  const snap = getMidtransSnap();

  return snap.createTransaction({
    transaction_details: {
      order_id: params.orderId,
      gross_amount: params.amount,
    },
  });
}
