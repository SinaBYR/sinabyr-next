import Link from 'next/link';
import classes from './logo.module.scss';
// Props
// fontSize (optional): used for transitioning. CSS font-size property is associated with transition,
// so transitioning will be smooth. if ommited, a default value of "1.6rem" would be set.
// interface Props {
//   fontSize?: string;
// }

export function Logo({ fontSize = '1.6rem' }) {
  return (
    <Link href="/" legacyBehavior>
      <a className={classes.wrapper} style={{ fontSize: fontSize }}>
        <div>
          <h2>S</h2>
          <span>INA</span>
        </div>
        <div>
          <h2>B</h2>
          <span>EYRAGHDAR</span>
        </div>
      </a>
    </Link>
  )
}