/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { z } from "zod";

export const CheckoutSchema = z.object({
  packageId: z.string().uuid(),
  price: z.number().positive(),
});
