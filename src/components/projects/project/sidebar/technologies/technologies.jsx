import classes from './technologies.module.scss';
// import { Technology } from '../../../../../types/types';

// interface Props {
//   list: Technology[]
// }

export function Technologies({ list }) {
  return (
    <div className={classes.technologies}>
      <h4>Technologies</h4>
      <div className={classes.techList}>
        {list.map(t => <span key={t.id}>{t.name}</span>)}
      </div>
    </div>
  )
}