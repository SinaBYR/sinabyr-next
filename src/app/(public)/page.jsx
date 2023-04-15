import { Landing } from '../../components/landing/landing';
import { Showcase } from '../../components/showcase/showcase';
import { Contact } from '../../components/contact/contact';
import { Skills } from '../../components/skills/skills';
import { getReducedProjects } from './lib';

export const metadata = {
  title: 'Sina Beyraghdar'
};

export default async function Page() {
  const projects = await getReducedProjects(2);

  return (
    <>
      <Landing />
      <Skills />
      <Showcase projects={projects} />
      <Contact />
    </>
  )
}