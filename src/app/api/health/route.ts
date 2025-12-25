/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function GET() {
  const start = Date.now();

  try {
    const { error } = await supabase
      .from("profiles")
      .select("id")
      .limit(1);

    if (error) throw error;

    return NextResponse.json(
      {
        status: "healthy",
        database: "connected",
        latency: `${Date.now() - start}ms`,
        timestamp: new Date().toISOString(),
        env: process.env.NODE_ENV,
      },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        status: "unhealthy",
        database: "disconnected",
        error: err.message,
        timestamp: new Date().toISOString(),
      },
      { status: 503 }
    );
  }
}
