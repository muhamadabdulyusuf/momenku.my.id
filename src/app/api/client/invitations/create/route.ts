/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { NextRequest, NextResponse } from "next/server";
import { invitationWizardController } from "@/modules/invitation/invitation.controller";

export async function POST(req: NextRequest) {
  const userId = req.cookies.get("user_id")?.value;
  if (!userId)
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const invitation = await invitationWizardController(userId);
  return NextResponse.json(invitation);
}
