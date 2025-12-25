/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


export type TemplateRawConfig = {
  id?: string;
  name?: string;
  active?: boolean;
};

export const validateTemplateConfig = (
  config: unknown
): { id: string; name: string; active: boolean } => {
  if (!config || typeof config !== "object") {
    throw new Error("Template config harus object");
  }

  const c = config as TemplateRawConfig;

  if (!c.id && !c.name) {
    throw new Error("Template wajib punya id atau name");
  }

  return {
    id: c.id ?? c.name!,
    name: c.name ?? c.id!,
    active: c.active !== false,
  };
};
