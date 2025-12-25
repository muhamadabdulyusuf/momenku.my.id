/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */



let ready = false;

export const initWorkflowEngine = () => {
  if (ready) return;
  ready = true;
  console.log("[ENGINE] workflow");
};
