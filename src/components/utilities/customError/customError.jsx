import classes from './customError.module.scss';

// interface Props {
//   title?: string;
//   message?: string;
//   icon?: React.ReactNode | undefined;
//   style?: React.CSSProperties
// }

export function CustomError({
  title,
  message,
  icon,
  style
}) {
  return (
    <div className={classes.customError} style={style}>
      {icon ? <div>{icon}</div> : null}
      {title ? <h3>{title}</h3> : null}
      {message ? <p>{message}</p> : null}
    </div>
  )
}