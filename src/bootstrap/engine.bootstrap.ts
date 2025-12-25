/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { initPermissionEngine } from "@/core/engine/permission-engine";
import { initPricingEngine } from "@/core/engine/pricing-engine";
import { initWorkflowEngine } from "@/core/engine/workflow-engine";
import { initTemplateEngine } from "@/core/engine/template-engine";
import { initTemplateCache } from "@/infra/cache/template.cache";

export const initEngines = async () => {
  console.log("[BOOTSTRAP] engines");

  initPermissionEngine();
  initPricingEngine();
  initWorkflowEngine();

  await initTemplateEngine();
  initTemplateCache();
};
