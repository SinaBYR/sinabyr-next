"use client";

import classes from './dashboardLayout.module.scss';
import { useState, useEffect, useReducer } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from "../../dashboard/sidebar/sidebar";
import { MobileHeader } from '../../dashboard/mobileHeader/mobileHeader';
import { SidebarLinks } from '../../dashboard/sidebarLinks/sidebarLinks';
import { useAuth } from '../../../lib/useAuth';

export default function DashboardLayout({ children, ...rest }) {
  console.log(rest);
  const [_state, dispatch] = useAuth();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  async function fetchUser() {
    let response = await fetch('/api/auth/user');
    let result = await response.json();
    if(response.status === 401) {
      return router.push('/login');
    }

    dispatch({ type: 'SET_USER', payload: result })
  }

  useEffect(() => {
    fetchUser();
  }, []);

  function burgerClickHandler() {
    setIsMenuOpen(state => !state);
  }

  return (
    <main className={classes.dashboard}>
      <div className={classes.dashboardWrapper}>
        {/* <MobileHeader isMenuOpen={isMenuOpen} onClickBurger={burgerClickHandler}/>
        <ul className={[classes.menu, isMenuOpen ? classes.open : null].join(' ')}>
          <SidebarLinks />
        </ul>
        <Sidebar /> */}
        <section className={classes.workspace}>{children}</section>
      </div>
    </main>
  )
}