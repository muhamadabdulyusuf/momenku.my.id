/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { NextResponse } from "next/server";
import { getSessionUser } from "@/core/guards/auth.guard";
import { assertRole } from "@/core/guards/role.guard";
import { ROLES } from "@/constants/roles";
import { sellerDashboardController } from "@/modules/seller/seller.controller";

export async function GET() {
  try {
    const user = await getSessionUser();
    await assertRole(user.id, [ROLES.SELLER]);

    const data = await sellerDashboardController(user.id);
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { message: "FORBIDDEN" },
      { status: 403 }
    );
  }
}
