'use client';
import classes from './navbar.module.scss';
import { useEffect, useState } from 'react';
import { Links } from './links/links';
import { Burger, Link, Logo } from '../utilities';
import { Menu } from './menu/menu';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // isShrunk is used to shrink or unshrink the navbar. It also determines <Logo /> component's fontSize prop.
  const [isShrunk, setIsShrunk] = useState(false);

  function menuClickHandler() {
    setIsMenuOpen(state => !state);

    if(document.body.style.overflow === 'hidden') {
      return document.body.style.overflow = 'auto';
    }

    document.body.style.overflow = 'hidden';
  }

  function onScrollHandler() {
    setIsShrunk((isShrunk) => {
      if(
        !isShrunk &&
        (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40)
      ) {
        return true;
      }

      if(
        isShrunk &&
        (document.body.scrollTop < 5 && document.documentElement.scrollTop < 5)
      ) {
        return false;
      }

      return isShrunk;
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler);
    return () => window.removeEventListener('scroll', onScrollHandler);
  }, [])

  return (
    <header className={[classes.header, isShrunk ? classes.shrunk : null].join(' ')}>
      <nav className={classes.navbar}>
        <Menu open={isMenuOpen}/>
        <div className={classes.logoWrapper}>
          <Logo fontSize={isShrunk ? '1.2rem' : '1.6rem'}/>
        </div>
        <ul className={classes.linksWrapper}>
          <Links />
        </ul>
        <Burger open={isMenuOpen} click={menuClickHandler}/>
        {/* <Link
          mode="secondary"
          href="https://drive.google.com/file/d/1HJoJi-s_4c22NDENLhX4bPYliS7D6GJL/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer">Resume</Link> */}
      </nav>
    </header>
  )
}