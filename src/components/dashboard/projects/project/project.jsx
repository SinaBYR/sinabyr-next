import classes from './project.module.scss';
import { Link } from '../../../utilities';
import { MdCreate, MdUpdate, MdEdit, MdArchive } from 'react-icons/md';
import moment from 'moment';

// interface Props {
//   id: string;
//   title: string;
//   created_at: string;
//   last_edited_at: string;
// }

export function Project({ id, title, created_at, last_edited_at }) {
  return (
    <div className={classes.project}>
      <div className={classes.info}>
        <h4>{title}</h4>
        <div className={classes.dates}>
          <div>
            <MdCreate style={{color: '#282828', fontSize: '14px', marginRight: '8px'}}/>
            <span>{moment(created_at).format('MMM DD YYYY')}</span>
          </div>
          {
            new Date(created_at).getTime() === new Date(last_edited_at).getTime()
            ? null
            :
            <div>
              <MdUpdate style={{color: '#282828', fontSize: '14px', marginRight: '8px'}}/>
              <span>{moment(last_edited_at).format('MMM DD YYYY')}</span>
            </div>
          }
        </div>
      </div>
      <div className={classes.controls}>
        <Link href={"/dashboard/projects/" + id} title="archive"><MdArchive /></Link>
        <Link href={"/dashboard/projects/" + id} title="edit"><MdEdit /></Link>
      </div>
    </div>
  )
}