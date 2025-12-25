/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { getSellerByUserId, getSellerBalance } from "./seller.repository";

export const fetchSellerDashboard = async (userId: string) => {
  const seller = await getSellerByUserId(userId);
  if (!seller) throw new Error("Seller tidak ditemukan");

  const balance = await getSellerBalance(seller.id);

  return {
    seller,
    balance,
  };
};
