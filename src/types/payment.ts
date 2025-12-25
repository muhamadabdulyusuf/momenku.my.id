/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { PackageCode } from "@/constants/pricing";

export type PriceSnapshot = {
  packageCode: PackageCode;
  basePrice: number;
  sellPrice: number;
  sellerCommission: number;
};
