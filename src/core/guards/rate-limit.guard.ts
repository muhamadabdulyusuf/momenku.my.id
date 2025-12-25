/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */



const memory = new Map<string, { count: number; time: number }>();

export const rateLimit = (
  key: string,
  limit = 30,
  windowMs = 60_000
) => {
  const now = Date.now();
  const entry = memory.get(key);

  if (!entry || now - entry.time > windowMs) {
    memory.set(key, { count: 1, time: now });
    return true;
  }

  if (entry.count >= limit) return false;

  entry.count++;
  return true;
};
