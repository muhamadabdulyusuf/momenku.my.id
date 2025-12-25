/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


"use client";

import { useState } from "react";

export default function InvitationEditor() {
  const [data, setData] = useState<any>({
    groom: "",
    bride: "",
  });

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <div>
        <input
          placeholder="Nama Pria"
          onChange={(e) =>
            setData({ ...data, groom: e.target.value })
          }
        />
        <input
          placeholder="Nama Wanita"
          onChange={(e) =>
            setData({ ...data, bride: e.target.value })
          }
        />

        <button
          onClick={async () => {
            await fetch("/api/client/invitations/update", {
              method: "POST",
              body: JSON.stringify({
                invitationId:
                  new URLSearchParams(
                    window.location.search
                  ).get("id"),
                data,
              }),
            });
            alert("Tersimpan");
          }}
        >
          Simpan
        </button>
      </div>

      <div>
        <h3>Preview</h3>
        <p>{data.groom} & {data.bride}</p>
      </div>
    </div>
  );
}
