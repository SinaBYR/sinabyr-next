import classes from './projects.module.scss';
import { ReducedProject } from '../showcase/reducedProject/reducedProject';
// import type { ReducedProjectType } from '../../types/types';
// : {
//   projects: ReducedProjectType[]
// }

export function Projects({
  projects
}) {
  return (
    <section className={classes.projects}>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <h2>Projects</h2>
        </div>
        <div className={classes.content}>
          {projects.map(p => {
            return (
              <ReducedProject
                key={p.id}
                id={p.id}
                title={p.title}
                description={p.description}
                thumbnail={p.thumbnail}
                techList={p.techList}/>
            )
          })}
        </div>
      </div>
    </section>
  )
}