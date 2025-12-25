/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { verifySession } from "./auth.service";

export const authController = async (userId: string) => {
  const user = await verifySession(userId);
  if (!user) throw new Error("Session invalid");
  return user;
};
