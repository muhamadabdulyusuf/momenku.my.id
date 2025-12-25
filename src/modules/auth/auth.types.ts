/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


export type UserRole = "admin" | "seller" | "client";

export type AuthUser = {
  id: string;
  email: string;
  role: UserRole;
};
