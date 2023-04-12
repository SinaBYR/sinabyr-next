import Router from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';
import { User } from '../types/types';
import { fetchJson } from './fetchJson';

export function useUser({
  redirectTo = "",
  redirectIfFound = false,
} = {}) {
  const { data: user, mutate: mutateUser, error } = useSWR<User>('/api/user', fetchJson, {
    refreshInterval: 900000
  });

  useEffect(() => {
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet.
    if(!user || !redirectTo) return;

    // 1st condition: redirect user if not logged in. !redirectIfFound is
    // needed because !user?.isLoggedIn condition is always checked
    // where user was logged in before. (e.g. Dashboard.tsx)
    // 2nd condition: redirectIfFound is used whenever user was not
    // logged in before as opposed to 1st condition. (e.g. Login.tsx)
    // and now is trying to sign in. So, if user is found, then redirect.
    if(
      (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
      (user?.isLoggedIn && redirectIfFound)
    ) {
      Router.push(redirectTo);
    }
  }, [user, redirectTo]);

  return {
    user,
    mutateUser,
    error
  }
}