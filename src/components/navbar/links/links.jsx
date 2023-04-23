import classes from './links.module.scss';
import { Link } from '../../utilities';

export function Links() {
  return (
    <>
      <li className={classes.listItem}>
        <Link variant="simple" href="/projects">Projects</Link>
      </li>
    </>
  )
}