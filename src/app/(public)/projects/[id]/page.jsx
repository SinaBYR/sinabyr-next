import { Project } from '../../../../components/projects/project/project';
import { getProject } from "../../../../lib/projects";

export default async function FullProjectPage({ params }) {
  const project = await getProject(params.id);
  return <Project project={project}/>
}