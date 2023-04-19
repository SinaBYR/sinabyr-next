import { redirect } from 'next/navigation';
import { Login } from '../../components/login/login';
import { useServerAuth } from '../../lib/useServerAuth';
import { Suspense } from 'react';

export default async function LoginPage() {
  const [isLoggedIn, _user] = await useServerAuth();
  return isLoggedIn ? redirect('/dashboard') : <Suspense fallback={<h1>Loading...</h1>}><Login /></Suspense>
}