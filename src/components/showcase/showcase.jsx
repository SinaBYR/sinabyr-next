import classes from './showcase.module.scss';
import { CustomError, Link } from '../utilities';
import { ReducedProject } from './reducedProject/reducedProject';
import { BsFiles } from 'react-icons/bs';

export function Showcase({ projects }) {
  return (
    <main className={classes.showcase}>
      <div className={classes.wrapper}>
        <h2>Latest Projects</h2>
        {
          !projects.length ?
          <CustomError
            style={{ color: 'gray', paddingTop: '2rem' }}
            title="Sorry, no result was found."
            icon={<BsFiles style={{
              width: "80px",
              height: "80px",
            }}/>}
            />
          :
          <>
            <div className={classes.projects}>
              {projects.map(p => {
                return (
                  <ReducedProject 
                    id={p.id}
                    title={p.title}
                    description={p.description}
                    thumbnail={p.thumbnail}
                    key={p.id}
                    techList={p.techList}/>
                )
              })}
            </div>
            <div className={classes.linkWrapper}>
              <Link href="/projects">See more projects</Link>
            </div>
          </>
        }
      </div>
    </main>
  )
}