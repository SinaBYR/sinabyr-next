import { Project } from '../../../../components/projects/project/project';
import { getProject, getProjectMetaData } from "./lib";

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const metaData = await getProjectMetaData(params.id);

  return {
    title: metaData.title
  };
}

export default async function FullProjectPage({ params }) {
  const project = await getProject(params.id);
  return <Project project={project}/>
}