import { pool } from "../../../lib/database";
import { withSessionRoute } from "../../../lib/withSession";

export default withSessionRoute(handler);

async function handler(req, res) {
  const user = req.session.user;

  if(!user) {
    return res.status(401).json({
      message: 'Unauthenticated access blocked.'
    });
  }

  try {
  //   const result = await pool.query(`
  //     select id, username, created_at, last_sign_in
  //     from user_account
  //     where id = $1;
  // `, [user.id]);

  //   const user = result.rows[0];

    // res.json({
    //   ...user,
    //   isLoggedIn: true
    // });
    res.json(user);
  } catch(err) {
    res.status(500).send(err);
  }
}