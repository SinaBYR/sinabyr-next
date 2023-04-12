import classes from './skills.module.scss';
import { Skill } from './skill/skill';

export function Skills() {
  return (
    <div className={classes.skills}>
      <h2>Skills</h2>
      <div className={classes.technologies}>
        <Skill src="/img/html5.png" alt="html5" title="HTML5"/>
        <Skill src="/img/css3.png" alt="css" title="CSS3"/>
        <Skill src="/img/sass.png" alt="sass" title="Sass"/>
        <Skill src="/img/responsive.png" alt="responsive-design" title="Responsive Design"/>
        <Skill src="/img/js.png" alt="js" title="Javascript"/>
        <Skill src="/img/ts.png" alt="ts" title="Typescript"/>
        <Skill src="/img/git.png" alt="git" title="Git"/>
        <Skill src="/img/react.png" alt="react" title="React.js"/>
        {/* <Skill src="/img/nextjs-1.png" alt="next" title="Next.js" style={{ background: 'white', borderRadius: '50px' }}/> */}
        <Skill src="/img/redux.png" alt="redux" title="Redux"/>
        <Skill src="/img/node.png" alt="node" title="Node.js"/>
        <Skill src="/img/npm.png" alt="npm" title="Npm"/>
        <Skill src="/img/linux.png" alt="linux" title="Linux"/>
        <Skill src="/img/mongodb.png" alt="mongodb" title="MongoDB"/>
        <Skill src="/img/mysql.png" alt="mysql" title="My SQL"/>
        <Skill src="/img/webpack.png" alt="webpack" title="Webpack"/>
        <Skill src="/img/babel.png" alt="babel" title="Babel"/>
        <Skill src="/img/styled-components.png" alt="styled-components" title="Styled components"/>
      </div>
    </div>
  )
}