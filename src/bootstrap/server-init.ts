/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */

import { strict as assert } from "assert";
assert(process.env.NODE_ENV, "NODE_ENV is required");

import { bootstrap } from "@/bootstrap";

let booted = false;

export async function serverInit() {
  if (booted) return;
  booted = true;

  console.log("🔥 SERVER INIT");
  await bootstrap();
}
