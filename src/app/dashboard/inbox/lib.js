import { pool } from "@/lib/database";

export async function getDashboardMessages() {
  let result = await pool.query(`
    SELECT id, subject, sent_at
    FROM message
    ORDER BY sent_at desc
  `);

  return result.rows;
}