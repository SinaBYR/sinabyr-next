"use client";

import classes from './dashboardLayout.module.scss';
import { useState } from 'react';
import { Sidebar } from "../../dashboard/sidebar/sidebar";
import { MobileHeader } from '../../dashboard/mobileHeader/mobileHeader';
import { SidebarLinks } from '../../dashboard/sidebarLinks/sidebarLinks';

export default function DashboardLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function burgerClickHandler() {
    setIsMenuOpen(state => !state);
  }

  return (
    <main className={classes.dashboard}>
      <div className={classes.dashboardWrapper}>
        <MobileHeader isMenuOpen={isMenuOpen} onClickBurger={burgerClickHandler}/>
        <ul className={[classes.menu, isMenuOpen ? classes.open : null].join(' ')}>
          <SidebarLinks />
        </ul>
        <Sidebar />
        <section className={classes.workspace}>{children}</section>
      </div>
    </main>
  )
}