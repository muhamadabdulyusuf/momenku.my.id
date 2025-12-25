/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { TemplateRegistry } from "@/core/registry/template.registry";

export const initRegistries = async () => {
  console.log("[BOOTSTRAP] registry");

  TemplateRegistry.reset();

  if (TemplateRegistry.count() !== 0) {
    throw new Error("TemplateRegistry reset gagal");
  }
};
