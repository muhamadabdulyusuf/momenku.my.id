/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import dynamic from "next/dynamic";
import { TemplateRegistry } from "@/core/registry/template.registry";
import type { ComponentType } from "react";

export type TemplateProps = {
  data: any;
  guestName?: string;
};

export function resolveTemplate(
  templateId: string
): ComponentType<TemplateProps> {
  const entry = TemplateRegistry.get(templateId);

  if (!entry || !entry.active) {
    throw new Error("Template tidak tersedia");
  }

  return dynamic(() => import(entry.componentPath), {
    ssr: true,
  }) as ComponentType<TemplateProps>;
}
