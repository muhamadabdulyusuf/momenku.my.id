/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { InvitationQuery } from "@/infra/db/invitation.query";

export const getInvitationBySlug = async (slug: string) => {
  return InvitationQuery.findBySlug(slug);
};
