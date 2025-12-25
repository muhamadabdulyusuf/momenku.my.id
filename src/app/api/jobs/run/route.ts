/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { NextResponse } from "next/server";
import { runAllJobs } from "@/jobs";
import { acquireLock, releaseLock } from "@/jobs/job-lock";

export async function POST(req: Request) {
  const secret = req.headers.get("x-job-secret");
  if (secret !== process.env.JOBS_SECRET) {
    return NextResponse.json({ error: "FORBIDDEN" }, { status: 403 });
  }

  const locked = await acquireLock("jobs:global");
  if (!locked) {
    return NextResponse.json({ status: "SKIPPED" });
  }

  try {
    await runAllJobs();
    return NextResponse.json({ status: "OK" });
  } catch (e) {
    return NextResponse.json({ status: "ERROR" }, { status: 500 });
  } finally {
    await releaseLock("jobs:global");
  }
}
