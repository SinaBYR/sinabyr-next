import { withSessionRoute } from "../../../lib/withSession";
import { pool } from "../../../lib/database";

export default withSessionRoute(handler);

async function handler(req, res) {
  if(req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST method allowed' });
  }

  const { fullName, email, subject, message } = req.body;

  if(Object.keys(req.body).length !== 4) {
    return res.status(400).json({ message: 'Missing Parameters' });
  }

  try {
    let result = await pool.query(`
      INSERT INTO message (full_name, email, subject, message)
      VALUES ($1, $2, $3, $4)
    `, [fullName, email, subject, message]);

    if(!result.rowCount) {
      return res.json({ message: 'An error occurred' });
    }

    res.status(201).json(result.rows[0]);
  } catch(err) {
    res.status(500).json({ message: 'Server Error' });
  }
}