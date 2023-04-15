'use client';

import classes from './projects.module.scss';
import { Project } from './project/project';
import { Link } from '../../utilities';
import { useClientAuth } from '../../../lib/useClientAuth';

export function Projects({ data }) {
  useClientAuth({
    redirectTo: '/login'
  });

  return (
    <>
      <div className={classes.head}>
        <h2>Projects</h2>
        <Link href="/dashboard/projects/new" variant="secondary">New Project</Link>
      </div>
      <div className={classes.items}>
        {data.map(p => {
          return <Project
            key={p.id}
            id={p.id}
            title={p.title}
            created_at={p.created_at}
            last_edited_at={p.last_edited_at}
            />
        })}
      </div>
    </>
  )
}