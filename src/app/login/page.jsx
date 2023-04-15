import { redirect } from 'next/navigation';
import { Login } from '../../components/login/login';
import { useServerAuth } from '../../lib/useServerAuth';

export default async function LoginPage() {
  const [isLoggedIn, _user] = await useServerAuth();
  return isLoggedIn ? redirect('/dashboard') : <Login />
}