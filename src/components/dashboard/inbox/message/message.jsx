import classes from './message.module.scss';
import { Link } from '../../../utilities';
import { AiFillCalendar } from 'react-icons/ai';
import moment from 'moment';

export function Message({ id, subject, sent_at }) {
  return (
    <div className={classes.message}>
      <div className={classes.info}>
        <h4>{subject}</h4>
        <div className={classes.infoSubGroup}>
          <div>
            <span>From:&nbsp;</span>
            <span>Sina Beyraghdar</span>
          </div>
          <div>
            <AiFillCalendar style={{color: '#282828', fontSize: '14px', marginRight: '8px'}}/>
            <span>{moment(sent_at).format('MMM DD YYYY')}</span>
          </div>
        </div>
      </div>
      <div className={classes.controls}>
        <Link href={"/dashboard/inbox/" + id} title="archive">View</Link>
      </div>
    </div>
  )
}