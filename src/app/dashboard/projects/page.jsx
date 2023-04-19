import { redirect } from 'next/navigation';
import { Projects } from '../../../components/dashboard/projects/projects';
import { getDashboardProjects } from './lib';
import { useServerAuth } from '../../../lib/useServerAuth';

export const dynamic = 'force-dynamic';

export default async function DashboardProjectsPage() {
  const [isLoggedIn, _user] = await useServerAuth();

  if(!isLoggedIn) {
    return redirect('/login');
  }

  const data = await getDashboardProjects();
  return <Projects data={data}/>
}