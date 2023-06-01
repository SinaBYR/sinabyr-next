import classes from './reducedProject.module.scss';
import Image from "next/legacy/image";
import { Link } from '../../utilities';

export function ReducedProject({ id, title, description, thumbnail, techList }) {
  return (
    <div className={classes.wrapper} key={id}>
      <div className={classes.preview}>
        <Image
          src={thumbnail || 'https://sinabyr.storage.iran.liara.space/skills-icons/project_preview_fallback.png'}
          alt="project-preview-screenshot"
          layout="fill"/>
      </div>
      <div className={classes.content}>
        <div className={classes.tech}>
          {techList.map(val => <span key={val}>{val}</span>)}
        </div>
        <h3 className={classes.title}>{title}</h3>
        <Link variant="secondary" href={"/projects/" + id}>Read more</Link>
      </div>
    </div>
  )
}