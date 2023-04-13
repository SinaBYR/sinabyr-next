'use client';

import classes from './login.module.scss';
import { useFormik } from 'formik';
import { Button } from '../utilities';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchJson } from '../../lib/fetchJson';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../lib/useAuth';

export function Login() {
  const [state, dispatch] = useAuth();
  const router = useRouter();

  const { values, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      username: '',
      passphrase: ''
    },
    onSubmit: (values, _helpers) => {
      loginHandler(values);
    }
  })

  async function loginHandler(values) {
    if(!values.username || !values.passphrase) {
      return toast('Both fields are required.')
    }

    try {
      // const userObject = await fetchJson('/api/login', {
      //   body: JSON.stringify(values),
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   method: 'POST'
      // });
      const headers = new Headers();
      headers.set('Content-Type', 'application/json');
      const response = await fetch('/api/auth/login', {
        body: JSON.stringify(values),
        headers,
        method: 'POST'
      });

      if(!response.ok) {
        if(response.status === 401) {
          return toast.error('Username or passphrase is incorrect.');
        }

        return toast.error('An unexpected error occured.');
      }

      const userObject = await response.json();

      dispatch({ type: 'LOGIN', payload: userObject});
      router.push('/dashboard');
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if(state.isLoggedIn) router.push('/dashboard');
  }, []);

  return (
    <div className={classes.login}>
      <h2>Login Page</h2>
      <button onClick={async () => {
        const result = await fetchJson('/api/logout', {method: 'POST'});
      }}>out</button>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="passphrase"
            id="passphrase"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.passphrase}
            />
        </div>
        <div className={classes.loginButton}>
          <Button type="submit">Sign in</Button>
        </div>
      </form>
      <ToastContainer
        hideProgressBar
        position="top-center"
        theme="dark"
        toastStyle={{fontSize: '15px', textAlign: 'center', border: '1px solid red'}}/>
    </div>
  )
}