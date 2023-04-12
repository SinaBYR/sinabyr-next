import classes from './projects.module.scss';
import useSWR from 'swr';
import { fetchJson } from '../../../lib/fetchJson';
import { Project } from './project/project';
import { Link } from '../../utilities';

interface ProjectType {
  id: string;
  title: string;
  created_at: string;
  last_edited_at: string;
}

export function Projects() {
  const { data, mutate, error } = useSWR<ProjectType[]>('/api/projects', fetchJson);
 
  if(!data) return <h1>Loading...</h1>

  if(error) return <h1>{error.message}</h1>

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