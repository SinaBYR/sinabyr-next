import { pool } from "../../../lib/database";

export async function getDashboardProjects() {
  const query = `
    select id, title, to_char(created_at, 'yyyymmdd') as created_at, to_char(last_edited_at, 'yyyymmdd') as last_edited_at
    from project
    order by created_at desc;
  `;

  const { rows } = await pool.query(query);
  return rows;
}