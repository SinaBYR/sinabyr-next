import classes from './burger.module.scss';

// type Props = {
//   open: boolean;
//   click: React.MouseEventHandler<HTMLDivElement>
// }

function Burger({ open, click }) {
  const classNames = [classes.burger, open ? classes.open : null].join(' ');

  return (
    <div className={classNames} onClick={click}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export { Burger }