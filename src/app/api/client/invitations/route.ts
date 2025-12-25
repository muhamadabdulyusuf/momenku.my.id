/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { NextRequest, NextResponse } from "next/server";
import { clientInvitationsController } from "@/modules/invitation/invitation.controller";

export async function GET(req: NextRequest) {
  const userId = req.cookies.get("user_id")?.value;
  if (!userId)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const data = await clientInvitationsController(userId);
  return NextResponse.json(data);
}
