import { Login } from '../../components/login/login';
import { redirect } from 'next/navigation';
import { useServerAuth } from '../../lib/useServerAuth';

export const dynamic = 'force-dynamic';

export default async function LoginPage() {
  const [isLoggedIn, _user] = await useServerAuth();
  return isLoggedIn ? redirect('/dashboard') : <Login />
}