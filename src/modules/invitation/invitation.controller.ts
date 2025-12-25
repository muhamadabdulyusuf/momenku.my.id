/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import {
  fetchClientInvitations,
  startInvitationWizard,
  saveInvitationEditor,
} from "./invitation.service";

export const clientInvitationsController = async (userId: string) => {
  return await fetchClientInvitations(userId);
};

export const invitationWizardController = async (userId: string) => {
  return await startInvitationWizard(userId);
};

export const invitationEditorController = async (
invitationId: string, data: any, id?: string) => {
  return await saveInvitationEditor(invitationId, data);
};
