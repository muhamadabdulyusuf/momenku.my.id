/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


"use client";

import { useEffect, useState } from "react";

export default function SellerDashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/seller/dashboard")
      .then((r) => r.json())
      .then(setData);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>Seller Dashboard</h1>

      <p>Referral Code: {data.seller.referral_code}</p>

      <h2>Saldo</h2>
      <ul>
        <li>Pending: Rp{data.balance?.pending ?? 0}</li>
        <li>Available: Rp{data.balance?.available ?? 0}</li>
        <li>Withdrawn: Rp{data.balance?.withdrawn ?? 0}</li>
      </ul>
    </div>
  );
}
