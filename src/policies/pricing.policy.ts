/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { PackageCode } from "@/constants/pricing";

export const assertPricingPolicy = (
  packageCode: PackageCode,
  sellPrice?: number
) => {
  if (!packageCode) throw new Error("Package wajib ada");

  if (sellPrice !== undefined && sellPrice <= 0) {
    throw new Error("Harga jual tidak valid");
  }
};
