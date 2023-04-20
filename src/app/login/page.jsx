import { Login } from '../../components/login/login';
import { redirect } from 'next/navigation';
import { useServerAuth } from '../../lib/useServerAuth';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Login Dashboard',
}

export default async function LoginPage() {
  const [isLoggedIn, _user] = await useServerAuth();
  return isLoggedIn ? redirect('/dashboard') : <Login />
}