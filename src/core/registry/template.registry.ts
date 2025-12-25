/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


export type TemplateEntry = {
  id: string;
  name: string;
  active: boolean;
  componentPath: string;
};

export class TemplateRegistry {
  private static templates = new Map<string, TemplateEntry>();

  static reset() {
    this.templates.clear();
  }

  static register(entry: TemplateEntry) {
    this.templates.set(entry.id, entry);
  }

  static get(id: string) {
    return this.templates.get(id);
  }

  static all() {
    return Array.from(this.templates.values());
  }

  static count() {
    return this.templates.size;
  }
}
