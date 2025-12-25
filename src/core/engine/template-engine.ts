/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import fs from "fs";
import path from "path";
import { TemplateRegistry } from "@/core/registry/template.registry";
import { validateTemplateConfig } from "@/templates/_validator";

const TEMPLATE_DIR = path.join(process.cwd(), "src/templates");

export const initTemplateEngine = async () => {
  console.log("[TEMPLATE ENGINE] load");

  const dirs = fs.readdirSync(TEMPLATE_DIR).filter(
    (d) =>
      !d.startsWith("_") &&
      fs.statSync(path.join(TEMPLATE_DIR, d)).isDirectory()
  );

  for (const dir of dirs) {
    const configPath = path.join(TEMPLATE_DIR, dir, "config.json");

    if (!fs.existsSync(configPath)) {
      console.warn(`[TEMPLATE] skip (no config): ${dir}`);
      continue;
    }

    const rawText = fs.readFileSync(configPath, "utf-8").trim();
    if (!rawText) {
      throw new Error(`[TEMPLATE] config kosong: ${configPath}`);
    }

    let raw;
    try {
      raw = JSON.parse(rawText);
    } catch {
      throw new Error(`[TEMPLATE] INVALID JSON: ${configPath}`);
    }

    const config = validateTemplateConfig(raw);

    TemplateRegistry.register({
      id: config.id,
      name: config.name,
      active: config.active !== false,
      componentPath: `@/templates/${dir}/index`,
    });
  }

  console.log(`[TEMPLATE ENGINE] loaded: ${TemplateRegistry.count()}`);
};
