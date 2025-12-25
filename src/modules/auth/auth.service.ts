/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { findUserById } from "./auth.repository";

export const verifySession = async (userId: string) => {
  if (!userId) return null;
  return await findUserById(userId);
};
