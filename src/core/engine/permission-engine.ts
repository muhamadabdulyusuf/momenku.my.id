/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { Role } from "@/constants/roles";

// 👉 INIT FUNCTION UNTUK BOOTSTRAP
export const initPermissionEngine = () => {
  console.log("[ENGINE] Permission Engine Initialized 🛡️");
};

export const canAccess = (userRole: Role, allowed: Role[]) => {
  return allowed.includes(userRole);
};