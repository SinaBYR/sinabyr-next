import { pool } from "../../lib/database";
import { withSessionRoute } from "../../lib/withSession";
import { verifyPassword } from "../../lib/password";

export default withSessionRoute(handler);

async function handler(req, res) {
  const { body } = req;
  console.log(body)

  if(!body || !body.username || !body.passphrase) {
    return res.status(400).send({
      message: 'Missing required credentials.'
    })
  }

  try {
    const { rows } = await pool.query(`
      select id, username, passphrase, created_at
      from user_account
      where username = $1;
    `, [body.username]);

    const user = rows[0] ?? null;

    if(!user) {
      return res.status(401).send({
        message: 'Username or password is incorrect.'
      })
    }

    // const match = await bcrypt.compare(body.passphrase, user.passphrase);
    const match = await verifyPassword(body.passphrase, user.passphrase);

    if(!match) {
      return res.status(401).send({
        message: 'Username or password is incorrect.'
      })
    }

    delete user.passphrase;
    req.session.userId = user.id;
    await req.session.save();
    
    // res.json({
    //   ...user,
    //   isLoggedIn: true
    // });
    res.json(user);
  } catch(err) {
    console.log(err);
    res.status(500).send({err});
  }
}