import classes from './mobileHeader.module.scss';
import { MouseEventHandler } from 'react';
import { Burger, Link } from '../../utilities';

interface Props {
  isMenuOpen: boolean;
  onClickBurger: MouseEventHandler<HTMLDivElement>
}

export function MobileHeader({ isMenuOpen, onClickBurger }: Props) {
  return (
    <header className={classes.header}>
      <h3>Welcome back, Boss.</h3>
      <Burger click={onClickBurger} open={isMenuOpen} />
    </header>
  )
}