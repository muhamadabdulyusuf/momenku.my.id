/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { NextRequest, NextResponse } from "next/server";
import { getSessionUser } from "@/core/guards/auth.guard";
import { invitationEditorController } from "@/modules/invitation/invitation.controller";

export async function POST(req: NextRequest) {
  try {
    const user = await getSessionUser();
    const { invitationId, data } = await req.json();

    if (!invitationId) {
      throw new Error("invitationId required");
    }

    await invitationEditorController(invitationId, data, user.id);

    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json(
      { success: false, message: e.message },
      { status: 401 }
    );
  }
}
