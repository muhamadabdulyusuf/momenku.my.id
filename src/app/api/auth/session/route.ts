/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { NextRequest, NextResponse } from "next/server";
import { authController } from "@/modules/auth/auth.controller";

export async function GET(req: NextRequest) {
  try {
    const userId = req.cookies.get("user_id")?.value;
    if (!userId) throw new Error("No session");

    const user = await authController(userId);

    return NextResponse.json({ user });
  } catch (e: any) {
    return NextResponse.json(
      { message: e.message },
      { status: 401 }
    );
  }
}
