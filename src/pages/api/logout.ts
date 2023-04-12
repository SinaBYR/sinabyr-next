import { withIronSessionApiRoute } from "iron-session/next";
import type { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "../../lib/withSession";

export default withIronSessionApiRoute(handler, sessionOptions);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  req.session.destroy();
  res.json({
    id: '',
    username: '',
    created_at: '',
    last_sign_in: '',
    isLoggedIn: false
  });
}