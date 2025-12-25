/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { NextRequest, NextResponse } from "next/server";
import { TransactionQuery } from "@/infra/db/transaction.query";
import { verifyMidtransSignature } from "@/lib/midtrans-webhook";

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (
    !verifyMidtransSignature(
      body,
      process.env.MIDTRANS_SERVER_KEY!
    )
  ) {
    return NextResponse.json(
      { message: "Invalid signature" },
      { status: 403 }
    );
  }

  const { order_id, transaction_status } = body;

  if (["settlement", "capture"].includes(transaction_status)) {
    await TransactionQuery.updateStatus(order_id, "paid");
  }

  if (["expire", "cancel", "deny"].includes(transaction_status)) {
    await TransactionQuery.updateStatus(order_id, "cancelled");
  }

  return NextResponse.json({ ok: true });
}
