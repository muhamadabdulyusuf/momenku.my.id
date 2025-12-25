/**
 * MOMENTKU PLATFORM ENGINE
 * OWNERSHIP: PLATFORM ENGINEERING TEAM
 * MATURITY: PRODUCTION / COMPANY-GRADE
 * WARNING: CHANGES REQUIRE ARCHITECT REVIEW
 */


import { supabaseAdmin } from "@/lib/supabase";

export class SupabaseAdapter {
  async query(table: string) {
    const { data, error } = await supabaseAdmin.from(table).select("*");
    if (error) throw error;
    return data;
  }

  async insert(table: string, payload: any) {
    const { error } = await supabaseAdmin.from(table).insert(payload);
    if (error) throw error;
    return true;
  }

  async update(
    table: string,
    payload: any,
    where: Record<string, any>
  ) {
    const query = supabaseAdmin.from(table).update(payload);
    Object.entries(where).forEach(([k, v]) =>
      query.eq(k, v)
    );

    const { error } = await query;
    if (error) throw error;
    return true;
  }
}
