import { getReducedProjects } from '../lib';
import { Projects } from '../../../components/projects/projects';

export default async function ProjectsPage() {
  const projects = await getReducedProjects();
  return <Projects projects={projects} />
}