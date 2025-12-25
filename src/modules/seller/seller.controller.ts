/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { fetchSellerDashboard } from "./seller.service";

export const sellerDashboardController = async (userId: string) => {
  return await fetchSellerDashboard(userId);
};
