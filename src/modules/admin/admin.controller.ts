/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { getSessionUser } from "@/core/guards/auth.guard";
import { assertRole } from "@/core/guards/role.guard";
import { ROLES } from "@/constants/roles";

export const adminController = async () => {
  const user = await getSessionUser();
  await assertRole(user.id, [ROLES.ADMIN]);

  return { ok: true };
};
