import { pool } from "@/lib/database";
import { withSessionRoute } from "@/lib/withSession";

export default withSessionRoute(handler);

async function handler(req, res) {
  if(!req.session.user) {
    return res.status(401).json({
      message: 'Unauthenticated access blocked.'
    });
  }

  try {
    let result = await pool.query(`
      SELECT id, subject, sent_at
      FROM message
      ORDER BY sent_at
    `);

    res.json(result.rows);
  } catch(err) {
    res.status(500).send(err.message);
  }
}