import { pool } from "@/lib/database";

export async function getDashboardMessages() {
  let result = await pool.query(`
    SELECT id, subject, to_char(sent_at, 'yyyymmdd') as sent_at
    FROM message
    ORDER BY sent_at desc
  `);

  return result.rows;
}