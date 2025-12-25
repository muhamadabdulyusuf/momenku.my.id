/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


type LogLevel = "info" | "warn" | "error";

export const logger = (level: LogLevel, message: string, meta?: any) => {
  const payload = {
    level,
    message,
    meta,
    time: new Date().toISOString(),
  };

  console[level](JSON.stringify(payload));
};
