import { redirect } from 'next/navigation';
import { Login } from '../../components/login/login';
import { useServerUser } from '../../lib/useServerUser';

export default async function LoginPage() {
  const [isLoggedIn, _user] = await useServerUser();
  return isLoggedIn ? redirect('/dashboard') : <Login />
}