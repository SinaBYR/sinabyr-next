import classes from './skills.module.scss';
import { Skill } from './skill/skill';

export function Skills() {
  const srcPrefix = 'https://sinabyr.storage.iran.liara.space/skills-icons';
  return (
    <div className={classes.skills}>
      <h2>Skills</h2>
      <div className={classes.technologies}>
        <Skill src={srcPrefix + '/html5.png'} alt="html5" title="HTML5"/>
        <Skill src={srcPrefix + '/css3.png'} alt="css" title="CSS3"/>
        <Skill src={srcPrefix + '/sass.png'} alt="sass" title="Sass"/>
        <Skill src={srcPrefix + '/responsive.png'} alt="responsive-design" title="Responsive Design"/>
        <Skill src={srcPrefix + '/js.png'} alt="js" title="Javascript"/>
        <Skill src={srcPrefix + '/ts.png'} alt="ts" title="Typescript"/>
        <Skill src={srcPrefix + '/git.png'} alt="git" title="Git"/>
        <Skill src={srcPrefix + '/react.png'} alt="react" title="React.js"/>
        {/* <Skill src={srcPrefix + /nextjs'-1.png'} alt="next" title="Next.js" style={{ background: 'white', borderRadius: '50px' }}/> */}
        <Skill src={srcPrefix + '/redux.png'} alt="redux" title="Redux"/>
        <Skill src={srcPrefix + '/node.png'} alt="node" title="Node.js"/>
        <Skill src={srcPrefix + '/npm.png'} alt="npm" title="Npm"/>
        <Skill src={srcPrefix + '/linux.png'} alt="linux" title="Linux"/>
        <Skill src={srcPrefix + '/mongodb.png'} alt="mongodb" title="MongoDB"/>
        <Skill src={srcPrefix + '/mysql.png'} alt="mysql" title="My SQL"/>
        <Skill src={srcPrefix + '/webpack.png'} alt="webpack" title="Webpack"/>
        <Skill src={srcPrefix + '/babel.png'} alt="babel" title="Babel"/>
        <Skill src={srcPrefix + '/styled-components.png'} alt="styled-components" title="Styled components"/>
      </div>
    </div>
  )
}