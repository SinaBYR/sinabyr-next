import { getReducedProjects } from '../lib';
import { Projects } from '../../../components/projects/projects';

export const dynamic = 'force-dynamic';

export default async function ProjectsPage() {
  const projects = await getReducedProjects();
  return <Projects projects={projects} />
}