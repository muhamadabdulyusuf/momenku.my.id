/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { serverInit } from "@/bootstrap/server-init";

export default async function MarketingPage() {
  await serverInit();

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Momenku</h1>
      <p className="mt-4">Landing page siap. 🚀</p>
    </main>
  );
}
