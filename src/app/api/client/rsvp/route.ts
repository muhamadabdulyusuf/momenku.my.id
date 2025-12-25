/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const { invitation_id, name, status } = await req.json();

  if (!invitation_id || !name || !status) {
    return NextResponse.json(
      { message: "Invalid payload" },
      { status: 400 }
    );
  }

  await supabaseAdmin.from("rsvps").insert({
    invitation_id,
    name,
    status,
  });

  return NextResponse.json({ success: true });
}
