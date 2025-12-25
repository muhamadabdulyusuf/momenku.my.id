/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


export const ROLES = {
  ADMIN: "admin",
  SELLER: "seller",
  CLIENT: "client",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];
