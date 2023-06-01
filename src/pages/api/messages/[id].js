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
      SELECT *
      FROM message
      WHERE id = $1
    `, [req.params.id]);

    if(!result.rowCount) {
      return res.status(404).json({ message: 'Message not found' })
    }

    res.json(result.rows[0]);
  } catch(err) {
    res.status(500).send(err.message);
  }
}