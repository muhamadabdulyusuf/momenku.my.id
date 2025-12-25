/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { NextResponse } from "next/server";
import { logger } from "@/lib/logger";

export async function POST(req: Request) {
  const body = await req.json();
  logger("error", "FRONTEND_ERROR", body);
  return NextResponse.json({ ok: true });
}
