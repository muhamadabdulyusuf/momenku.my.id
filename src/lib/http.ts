/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { logger } from "./logger";

export const withTiming = async <T>(
  name: string,
  fn: () => Promise<T>
): Promise<T> => {
  const start = Date.now();
  try {
    return await fn();
  } finally {
    logger("info", `TIMING:${name}`, {
      ms: Date.now() - start,
    });
  }
};
