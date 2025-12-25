/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


"use client";

import { useEffect, useState } from "react";

export default function ClientDashboard() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/client/invitations")
      .then((r) => r.json())
      .then(setItems);
  }, []);

  return (
    <div>
      <h1>Undangan Saya</h1>

      <button
        onClick={async () => {
          const res = await fetch(
            "/api/client/invitations/create",
            { method: "POST" }
          );
          const data = await res.json();
          location.href = `/dashboard/client/editor?id=${data.id}`;
        }}
      >
        Buat Undangan Baru
      </button>

      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.slug ?? "draft"} — {i.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
