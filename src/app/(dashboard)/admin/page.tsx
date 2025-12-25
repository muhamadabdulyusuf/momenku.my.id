/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    fetch("/api/stats")
      .then((r) => r.json())
      .then(setStats);
  }, []);

  if (!stats) return <p>Loading...</p>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Total Users: {stats.totalUsers}</p>
      <p>Total Invitations: {stats.totalInvitations}</p>
    </div>
  );
}
