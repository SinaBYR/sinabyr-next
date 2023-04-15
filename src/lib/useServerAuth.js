import { unsealData } from 'iron-session';
import { cookies } from 'next/headers';
import { ironSessionConfig } from './config';

export async function useServerAuth() {
  const cookie = cookies().get(ironSessionConfig.cookieName);
  if(!cookie) {
    return [false, null]
  }

  const sessionData = await unsealData(cookie.value, {
    password: ironSessionConfig.password
  });

  if(!sessionData.user) {
    return [false, null]
  }

  return [true, sessionData.user];
}