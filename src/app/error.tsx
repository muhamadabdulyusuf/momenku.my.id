/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


"use client";

import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error }) {
  useEffect(() => {
    fetch("/api/monitoring/error", {
      method: "POST",
      body: JSON.stringify({
        message: error.message,
        stack: error.stack,
      }),
    });
  }, [error]);

  return (
    <html>
      <body>
        <h2>Terjadi kesalahan</h2>
        <p>Tim kami sudah menerima laporan.</p>
      </body>
    </html>
  );
}
