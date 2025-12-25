/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { notFound } from "next/navigation";
import { resolveTemplate } from "@/core/engine/template-resolver";
import { getInvitationBySlug } from "@/infra/db/invitation.query";

type Props = {
  params: { slug: string };
  searchParams: { to?: string };
};

export const revalidate = 60;

export default async function InvitationPage({
  params,
  searchParams,
}: Props) {
  const invitation = await getInvitationBySlug(params.slug);

  if (!invitation) notFound();
if (invitation.status !== "published") notFound();


  const Template = resolveTemplate(invitation.templateId);

  return (
    <Template
      data={invitation}
      guestName={searchParams.to}
    />
  );
}
