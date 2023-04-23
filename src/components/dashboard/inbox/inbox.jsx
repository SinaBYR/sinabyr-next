'use client';

import classes from './inbox.module.scss';
import { useClientAuth } from "@/lib/useClientAuth";
import { Message } from "./message/message";

export function DashboardInbox({ data }) {
  useClientAuth({
    redirectTo: '/login'
  });

  return (
    <>
      <div className={classes.head}>
        <h2>Inbox</h2>
      </div>
      <div className={classes.items}>
        {data.map(m => {
          return <Message
            key={m.id}
            id={m.id}
            subject={m.subject}
            sent_at={m.sent_at}
            />
        })}
      </div>
    </>
  )
}