import { pool } from "../../../lib/database";
import { withSessionRoute } from "../../../lib/withSession";
import formidable from 'formidable';
import { IncomingMessage } from "http";
import * as fs from 'fs';
import { s3 } from "../../../aws/aws";

// disable default req.body parser to parse FormData with formidable package.
export const config = {
  api: {
    bodyParser: false
  }
}

export default withSessionRoute(handler);

// interface Project {
//   id: string;
//   title: string;
//   created_at: string;
//   last_edited_at: string;
// }

// interface FormDataInterface {
//   title: string;
//   description: string;
//   repo: string;
//   demo_url: string;
//   thumbnail: string;
//   technologies: string[];
//   screenshots: formidable.File[];
// }

async function handler(req, res) {
  if(!req.session.user) {
    return res.status(401).send({
      message: 'Unauthorized access to resources.'
    });
  }

  if(req.method === 'POST') {
    try {
      const {
        title,
        repo,
        demo_url,
        description,
        thumbnail,
        technologies,
        screenshots
      } = await getFormData(req);
  
      if(!title || !repo || !technologies.length) {
        return res.status(502).send({ message: 'Missing parameters' });
      }
  
      let thumbnailUrl;
  
      if(screenshots.length) {
        // upload screenshots in parallel
        const screenshotsArray = await Promise.all(getS3UploadPromises(title, screenshots));
        // grab the selected screenshot used as thumbnail
        thumbnailUrl = screenshotsArray.filter(({Key}) => Key.substring(Key.lastIndexOf('/') + 1) === thumbnail)[0]?.Location;
  
        if(!thumbnailUrl) {
          // even tho screenshots are provided, thumbnail value doesn't correspond
          // to the name of one of them..
          return res.status(502).send({ message: 'Selected screenshot image as thumbnail is invalid.' });
        }
      }
  
      const projectTableQuery = `
        insert into project (title, repo, demo_url, description, thumbnail)
        values ($1, $2, $3, $4, $5) returning id, title, created_at, last_edited_at;
      `;
  
      const { rows } = await pool.query(projectTableQuery, [
        title,
        repo,
        demo_url ?? null,
        description ?? null,
        thumbnailUrl ?? null
      ]);

      const newProject = rows[0];

      const technologyTableQuery = `
        insert into technology (p_id, name)
        values ($1, $2);
      `;

      const technologiesPromises = technologies.map(t => {
        return pool.query(technologyTableQuery, [newProject.id, t])
      });

      await Promise.all(technologiesPromises);
  
      return res.json(newProject);
    } catch(err) {
      return res.status(500).send(err);
    }
  }

  const query = `
    select id, title, created_at, last_edited_at
    from project
    order by created_at desc;
  `;

  try {
    const result = await pool.query(query);

    const projects = result.rows;

    res.json(projects);
  } catch(err) {
    res.status(500).send(err);
  }
}

// If only one screenshot is provided, then an object will be returned, otherwise an array of objects will be returned.
// To fix that, I'll check if returned value is of type array or object.
function getFormData(req) {
  const form = formidable({
    multiples: true
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if(err) {
        reject(err);
      }

      if(Array.isArray(files['screenshots[]'])) {
        resolve({
          ...fields,
          screenshots: [...files['screenshots[]']]
        });
      }

      resolve({
        ...fields,
        screenshots: Object.keys(files).length ? [files['screenshots[]']] : []
      });
    })
  });
}

// Returns an array of promises of uploading each screenshot file to S3 bucket.
function getS3UploadPromises(subDirectory, screenshots) {
  const promises = screenshots.map(ss => {
    return s3.upload({
      Bucket: 'sinabyr',
      Key: 'screenshots/' + subDirectory + '/' + ss.originalFilename,
      Body: fs.readFileSync(ss.filepath)
    }).promise();
  })

  return promises;
}