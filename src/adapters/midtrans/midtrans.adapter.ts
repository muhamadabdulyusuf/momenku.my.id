/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


// import midtransClient from "midtrans-client";
// import { PaymentAdapter } from "@/adapters/contracts/payment.adapter";
// import { verifyMidtransSignature } from "@/lib/midtrans-webhook";

// export class MidtransAdapter implements PaymentAdapter {
//   private snap: midtransClient.Snap;

//   constructor() {
//     if (!process.env.MIDTRANS_SERVER_KEY) {
//       throw new Error("MIDTRANS_SERVER_KEY kosong");
//     }

//     this.snap = new midtransClient.Snap({
//       isProduction: process.env.NODE_ENV === "production",
//       serverKey: process.env.MIDTRANS_SERVER_KEY,
//     });
//   }

//   async createTransaction(data: any) {
//     try {
//       return await this.snap.createTransaction(data);
//     } catch (err) {
//       throw new Error("Midtrans createTransaction gagal");
//     }
//   }

//   verifyWebhook(_: string, body: any): boolean {
//     return verifyMidtransSignature(
//       body,
//       process.env.MIDTRANS_SERVER_KEY!
//     );
//   }

//   async getPaymentStatus(orderId: string): Promise<string> {
//     // OPTIONAL jika pakai Core API
//     return "unknown";
//   }
// }
