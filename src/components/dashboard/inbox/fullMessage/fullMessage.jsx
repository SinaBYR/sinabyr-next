import classes from './fullMessage.module.scss';
import { Link } from '../../../utilities';
import moment from 'moment';

export function FullMessage({ data }) {
  return (
    <div className={classes.fullMessage}>
      <h2>{data.subject}</h2>
      <div className={classes.header}>
        <div>
          <span>From:&nbsp;&nbsp;</span>
          <span>{data.full_name}</span>
        </div>
        <div>
          <span>Email:&nbsp;&nbsp;</span>
          <span>{data.email}</span>
        </div>
        <div>
          <span>Date:&nbsp;&nbsp;&nbsp;</span>
          <span>{moment(data.sent_at).format('MMM DD YYYY')}</span>
        </div>
      </div>
      <div className={classes.messageText}>
        <p>{data.message}</p>
      </div>
      {/* <div className={classes.controls}>
        <Link href={"/dashboard/messages/"} title="archive">Reply</Link>
      </div> */}
    </div>
  )
}