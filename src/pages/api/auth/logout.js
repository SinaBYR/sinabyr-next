import { withSessionRoute } from "../../../lib/withSession";

export default withSessionRoute(handler);

function handler(req, res) {
  req.session.destroy();
  res.status(200).end();
}