import { unsealData } from 'iron-session';
import { cookies } from 'next/headers';
import { ironSessionConfig } from './config';

export async function useServerAuth() {
  const cookie = cookies().get('sinabyr-session');
  if(!cookie) {
    console.log(1);
    return [false, null]
  }

  const sessionData = await unsealData(cookie.value, {
    password: ironSessionConfig.password
  });

  if(!sessionData.user) {
    console.log(2);
    return [false, null]
  }

  console.log(3);
  return [true, sessionData.user];
}