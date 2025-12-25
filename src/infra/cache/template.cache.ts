/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { TemplateRegistry } from "@/core/registry/template.registry";

let cached = false;

export const initTemplateCache = () => {
  if (cached) return;
  cached = true;

  if (TemplateRegistry.count() === 0) {
    console.warn("[TEMPLATE CACHE] registry kosong");
  }
};
