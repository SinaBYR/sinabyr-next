import { Project } from '../../../../components/projects/project/project';
import { getProject } from "./lib";

export const dynamic = 'force-dynamic';

export default async function FullProjectPage({ params }) {
  const project = await getProject(params.id);
  return <Project project={project}/>
}