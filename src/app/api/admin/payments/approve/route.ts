/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { NextRequest, NextResponse } from "next/server";
import { getSessionUser } from "@/core/guards/auth.guard";
import { assertRole } from "@/core/guards/role.guard";
import { ROLES } from "@/constants/roles";
import { approvePaymentController } from "@/modules/payment/payment.controller";

export async function POST(req: NextRequest) {
  try {
    const user = await getSessionUser();
    await assertRole(user.id, [ROLES.ADMIN]);

    const { orderId } = await req.json();
    if (!orderId) throw new Error("orderId required");

    await approvePaymentController(orderId);

    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json(
      { success: false, message: e.message },
      { status: 403 }
    );
  }
}
