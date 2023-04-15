import { pool } from "../../lib/database";

// This util function is used to retrieve reduced projects for
// showcase section of index page.
// It is called in getServerSideProps of index page, and then
// projects, and technologies arrays are passed to Showcase component.

// limit: optional => it determines the number of rows (projects)
// that'll be returned.
export async function getReducedProjects(limit) {
  let query = `
    select id, title, description, thumbnail, to_char(created_at, 'yyyymmdd') as created_at
    from project
    order by created_at desc;
  `;

  if(limit > 0) {
    query = `
      select id, title, description, thumbnail, to_char(created_at, 'yyyymmdd') as created_at
      from project
      order by created_at desc
      limit ${limit};
    `;
  }

  const result = await pool.query(query);

  const projects = result.rows;

  if(!result.rowCount) {
    return [];
  }

  const projectIds = projects.map(p => `'${p.id}'`).join(',');

  const techResult = await pool.query(`
    select id, name, p_id, to_char(created_at, 'yyyymmdd') as created_at
    from technology
    where p_id in ($1)
    order by created_at desc
    limit 3;
  `, [projectIds]);

  const technologies = techResult.rows;

  projects.forEach(p => {
    const techList = technologies.filter(t => t.p_id === p.id).map(t => t.name);
    p.techList = techList;
  })

  return projects;
}