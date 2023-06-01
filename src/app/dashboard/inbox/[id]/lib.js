import { pool } from '../../../../lib/database';

// Get meta data for a message. used to generate project page's title
export async function getMessageMetaData(id) {
  const result = await pool.query(`
    SELECT full_name
    FROM message
    WHERE id = $1;
`, [id]);

  return result.rows[0];
}

export async function getFullMessage(id) {
  let result = await pool.query(`
    SELECT *
    FROM message
    WHERE id = $1
  `, [id]);

  return result.rows[0];
}
