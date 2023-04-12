import classes from './links.module.scss';
import { Link } from '../../../../utilities';
import { BiLinkExternal } from 'react-icons/bi';

// interface Props {
//   demo_url: string;
//   repo: string;
// }

export function Links({ repo, demo_url }) {
  return (
    <div className={classes.links}>
      <Link
        href={demo_url}
        target="_blank"
        rel="noopener noreferrer">Demo <BiLinkExternal /></Link>
      <Link
        href={"https://github.com/SinaBYR/" + repo}
        target="_blank"
        rel="noopener noreferrer">Code <BiLinkExternal /></Link>
    </div>
  )
}