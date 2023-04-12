import classes from './menu.module.scss';
import { Links } from '../links/links';
import { Logo } from '../../utilities';

// type Props = {
//   open: boolean
// }

export function Menu({ open }) {
  const classNames = [
    classes.menu,
    open ? classes.open : null
  ].join(' ');
  return (
    <div className={classNames}>
      <div className={classes.container}>
        <div className={classes.logoWrapper}>
          <Logo />
        </div>
        <ul className={classes.linksWrapper}>
          <Links />
        </ul>
      </div>
    </div>
  )
}