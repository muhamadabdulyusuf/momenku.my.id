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

export async function GET() {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({}, { status: 401 });

  await assertRole(user.id, [ROLES.ADMIN]);

  return NextResponse.json({ ok: true });
}
