/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { getInvitationBySlug } from "@/infra/db/invitation.query";

export async function generateMetadata({ params }: any) {
  const inv = await getInvitationBySlug(params.slug);
  if (!inv) return {};

  return {
    title: `${inv.groom} & ${inv.bride}`,
    description: "Undangan Pernikahan Digital",
    openGraph: {
      title: `${inv.groom} & ${inv.bride}`,
      images: inv.cover_image ? [inv.cover_image] : [],
    },
  };
}
