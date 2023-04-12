import classes from './skill.module.scss'
import Image from "next/legacy/image";

export function Skill({ src, alt, title, ...rest }) {
  return (
    <div className={classes.skill}>
      <Image
        src={src}
        alt={alt}
        width={50}
        height={50}
        {...rest}/>
      <div className={classes.title}>{title}</div>
    </div>
  )
}