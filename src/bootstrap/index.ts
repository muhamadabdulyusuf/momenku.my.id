/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { initRegistries } from "./registry.bootstrap";
import { initEngines } from "./engine.bootstrap";
import { initAdapters } from "./adapter.bootstrap";

let bootstrapped = false;

export const bootstrap = async () => {
  if (bootstrapped) return;
  bootstrapped = true;

  console.log("🚀 BOOT SYSTEM");
  await initRegistries();
  await initEngines();
  await initAdapters();
  console.log("✅ SYSTEM READY");
};
