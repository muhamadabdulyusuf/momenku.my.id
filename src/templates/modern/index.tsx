/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


type Props = {
  data: any;
  guestName?: string;
};

export default function ModernTemplate({ data, guestName }: Props) {
  return (
    <div className="p-10">
      <h1>{data.slug}</h1>
      {guestName && <p>Untuk: {guestName}</p>}
    </div>
  );
}
