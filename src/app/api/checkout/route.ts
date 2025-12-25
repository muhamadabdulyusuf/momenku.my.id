/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { initMidtrans, getMidtransSnap } from "@/lib/midtrans";
import { resolveFinalPrice } from "@/core/engine/pricing-engine";
import { TransactionQuery } from "@/infra/db/transaction.query";
import { rateLimit } from "@/core/guards/rate-limit.guard";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";

  if (!rateLimit(ip, 10, 60_000)) {
    return NextResponse.json(
      { message: "Too many requests" },
      { status: 429 }
    );
  }

  try {
    const { userId, packageId, sellerId } = await req.json();

    if (!userId || !packageId) {
      throw new Error("userId / packageId wajib");
    }

    initMidtrans();
    const snap = getMidtransSnap();

    const amount = await resolveFinalPrice({ packageId, sellerId });
    const orderId = randomUUID();

    await TransactionQuery.create({
      order_id: orderId,
      user_id: userId,
      package_id: packageId,
      amount,
      status: "pending",
    });

    const payment = await snap.createTransaction({
      transaction_details: {
        order_id: orderId,
        gross_amount: amount,
      },
    });

    return NextResponse.json({
      success: true,
      payment,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 400 }
    );
  }
}
