import classes from './sidebar.module.scss';
import { Link } from "../../utilities";
import { SidebarLinks } from '../sidebarLinks/sidebarLinks';

export function Sidebar() {
  return (
    <aside className={classes.sidebar}>
      <div className={classes.greeting}>
        <h3>Welcome back, Boss.</h3>
      </div>
      <ul className={classes.links}>
        <SidebarLinks />
      </ul>
    </aside>
  )
}