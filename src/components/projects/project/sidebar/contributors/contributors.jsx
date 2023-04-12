'use client';

import classes from './contributors.module.scss';
import Image from "next/legacy/image";
import { useState } from "react";
import { MdMoreHoriz } from 'react-icons/md';

// interface Props {
//   list: any[]
// }

export function Contributors({ list = [] }) {
  const [isContributorsExpanded, setIsContributorsExpanded] = useState(false);

  return (
    <div className={classes.contributors}>
      <h4>Contributors</h4>
      {
      !list.length ? 'Found 0 contributors.'
      :
      <ul className={classes.avatars}>
        {list?.map((c, i) => {
          return (
            <li
              key={c.login}
              style={{
                display: (i > 9 && !isContributorsExpanded) ? 'none': 'inline-block',
                marginTop: i > 11 ? '4px' : 0,
                zIndex: 0 - i
              }}>
              <a key={c.login} href={c.html_url} target="_blank" rel="noopener noreferrer" title={c.login}>
                <Image src={c.avatar_url} alt="contributor-avatar" width="100" height="100" />
              </a>
            </li>
          )
        })}
        {
          list.length > 10 &&
          <li
            onClick={() => setIsContributorsExpanded(state => !state)}
            style={{
              display: isContributorsExpanded ? 'none' : 'flex',
              zIndex: -51
            }}>
            <MdMoreHoriz fontSize="20px"/>
          </li>
        }
      </ul>
      }
    </div>
  )
}