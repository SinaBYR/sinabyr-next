import { pool } from '../../../../lib/database';
import { s3 } from '../../../../aws/aws';
import { fetchJson } from '../../../../lib/fetchJson';

// Get meta data of a project. used to generate project page's title
export async function getProjectMetaData(id) {
  const result = await pool.query(`
    select title
    from project
    where id = $1;
`, [id]);

  return result.rows[0];
}

// This util function retrieves a single project data
// It's used in app/(public)/projects/[id].tsx component to
// fetch individual project.
// id: required => used to fetch a single matching project data.
export async function getProject(id) {
  const projectResult = await pool.query(`
    select id, title, description, demo_url, repo, to_char(created_at, 'yyyymmdd') as created_at
    from project
    where id = $1;
  `, [id]);

  const project = projectResult.rows[0];

  const techResult = await pool.query(`
    select id, name, p_id, to_char(created_at, 'yyyymmdd') as created_at
    from technology
    where p_id = $1;
  `, [project.id]);

  const technologies = techResult.rows;

  const contributors = await fetchJson(`https://api.github.com/repos/sinabyr/${project.repo}/contributors`);

  const bucketParams = {
    Bucket: 'sinabyr',
    Prefix: 'screenshots/' + project.title
  };

  const { Contents } = await s3.listObjects(bucketParams).promise();
  // The root directory (root object) is also returned alongside actual objects.
  // Each s3 object contains a 'Size' property.
  // The object which contains root directory has a 0 Size value.
  // To remove that, I only pass objects whose Size property are non-zero value.
  const screenshots = Contents?.filter(obj => obj.Size).map(photo => {
    const href = 'https://sinabyr.storage.iran.liara.space/';
    const photoUrl = href + photo.Key;
    return photoUrl;
  });
  
  project.techList = technologies;
  project.contributors = contributors;
  project.screenshots = screenshots;

  return project;
}