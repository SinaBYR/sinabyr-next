import { pool } from "../../../lib/database";

export async function getDashboardProjects() {
  const query = `
    select id, title, created_at, last_edited_at
    from project
    order by created_at desc;
  `;

  const { rows } = await pool.query(query);
  return rows;
}