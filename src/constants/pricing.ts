/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


export type PackageCode = "silver" | "gold" | "platinum";

export const PRICING_TABLE: Record<
  PackageCode,
  { name: string; basePrice: number }
> = {
  silver: {
    name: "Silver",
    basePrice: 199_000,
  },
  gold: {
    name: "Gold",
    basePrice: 299_000,
  },
  platinum: {
    name: "Platinum",
    basePrice: 499_000,
  },
};
