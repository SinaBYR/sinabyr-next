import classes from './links.module.scss';
import { Link } from '../../utilities';

export function Links() {
  return (
    <>
      <li className={classes.listItem}>
        <Link variant="simple" href="/">Skills</Link>
      </li>
      <li className={classes.listItem}>
        <Link variant="simple" href="/">Showcase</Link>
      </li>
      <li className={classes.listItem}>
        <Link variant="simple" href="/">Contact</Link>
      </li>
    </>
  )
}