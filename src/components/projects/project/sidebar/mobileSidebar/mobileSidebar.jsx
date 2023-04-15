import classes from './mobileSidebar.module.scss';
// import { Technology } from '../../../../../types/types';
import { Contributors } from '../contributors/contributors';
import { Links } from '../links/links';
import { Technologies } from '../technologies/technologies';
import moment from 'moment';

// interface Props {
//   demo_url: string;
//   tech: Technology[];
//   created_at: string;
//   repo: string;
//   contributors: any[];
// }

export function MobileSidebar({ demo_url, created_at, tech, repo, contributors }) {
  return (
    <div className={classes.mobileSidebar}>
      <Links repo={repo} demo_url={demo_url}/>
      <div className={classes.createdAt}>
        <h4>Created at</h4>
        <div>{moment(created_at).format('MMM DD YYYY')}</div>
      </div>
      <Technologies list={tech}/>
      <Contributors list={contributors}/>
    </div>
  )
}