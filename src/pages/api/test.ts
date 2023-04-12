import { db } from "../../lib/database";

export default async function handler(req, res) {
  const client = await db.connect();

  let query = `
    select id, title, description, thumbnail, created_at
    from project
    order by created_at desc;
  `;

  const result = await client.query(query);
  client.release();

  res.send(result);
}