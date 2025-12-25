/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { calculatePrice } from "@/core/engine/pricing-engine";
import { assertPricingPolicy } from "@/policies/pricing.policy";
import { PackageCode } from "@/constants/pricing";
import { PriceSnapshot } from "@/types/payment";

export const buildPriceSnapshot = (
  packageCode: PackageCode,
  sellPrice?: number
): PriceSnapshot => {
  assertPricingPolicy(packageCode, sellPrice);

  const result = calculatePrice(packageCode, sellPrice);

  return {
    packageCode: result.packageCode,
    basePrice: result.basePrice,
    sellPrice: result.sellPrice,
    sellerCommission: result.sellerCommission,
  };
};
