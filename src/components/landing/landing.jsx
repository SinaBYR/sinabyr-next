import classes from './landing.module.scss';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export function Landing() {
  return (
    <section className={classes.landing} >
      <div className={classes.landingWrapper}>
        <h2>
          <span>Let's give</span>
          <br />
          <span>your business</span>
          <br />
          <span>wings to fly.</span>
        </h2>
        <p>
          <span>I’m a Software Engineer who builds reliable, performant</span>
          <br />
          <span>and secure web-based applications.</span>
        </p>
        <div className={classes.socials}>
          <a href="https://b2n.ir/e82982" target="_blank" rel="noopener noreferrer">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/sina-beyraghdar" target="_blank" rel="noopener noreferrer">
            <BsLinkedin />
          </a>
        </div>
      </div>
    </section>
  )
}