import classes from './skills.module.scss';
import { Skill } from './skill/skill';

export function Skills() {
  return (
    <div className={classes.skills}>
      <h2>Skills</h2>
      <div className={classes.technologies}>
        <Skill src="/static/img/html5.png" alt="html5" title="HTML5"/>
        <Skill src="/static/img/css3.png" alt="css" title="CSS3"/>
        <Skill src="/static/img/sass.png" alt="sass" title="Sass"/>
        <Skill src="/static/img/responsive.png" alt="responsive-design" title="Responsive Design"/>
        <Skill src="/static/img/js.png" alt="js" title="Javascript"/>
        <Skill src="/static/img/ts.png" alt="ts" title="Typescript"/>
        <Skill src="/static/img/git.png" alt="git" title="Git"/>
        <Skill src="/static/img/react.png" alt="react" title="React.js"/>
        {/* <Skill src="/static/img/nextjs-1.png" alt="next" title="Next.js" style={{ background: 'white', borderRadius: '50px' }}/> */}
        <Skill src="/static/img/redux.png" alt="redux" title="Redux"/>
        <Skill src="/static/img/node.png" alt="node" title="Node.js"/>
        <Skill src="/static/img/npm.png" alt="npm" title="Npm"/>
        <Skill src="/static/img/linux.png" alt="linux" title="Linux"/>
        <Skill src="/static/img/mongodb.png" alt="mongodb" title="MongoDB"/>
        <Skill src="/static/img/mysql.png" alt="mysql" title="My SQL"/>
        <Skill src="/static/img/webpack.png" alt="webpack" title="Webpack"/>
        <Skill src="/static/img/babel.png" alt="babel" title="Babel"/>
        <Skill src="/static/img/styled-components.png" alt="styled-components" title="Styled components"/>
      </div>
    </div>
  )
}