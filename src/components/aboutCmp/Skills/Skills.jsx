
import Css from "../../../dist/img/css.webP";
import html from "../../../dist/img/html.webP";
import js from "../../../dist/img/JS.webP";
import bootstrap from "../../../dist/img/bootstrap.webP";
import typescript from "../../../dist/img/typescript.webP";
import git from "../../../dist/img/Git.webP";
import react from "../../../dist/img/react.webP";
import CircleProgres from "../cireclProgress/CircleProgres";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-progress-container">
        <CircleProgres Img={html} V="90" color="#e75226" />
        <CircleProgres Img={Css} V="90" color="#2062af" />
        <CircleProgres Img={js} V="80" color="#e8c82e" />
        <CircleProgres Img={git} V="70" color="#f05033" />
        <CircleProgres Img={bootstrap} V="70" color="#543c7b" />
        <CircleProgres Img={typescript} V="70" color="#3178c6" />
        <CircleProgres Img={react} V="80" color="#068ca5" />
      </div>
    </div>
  );
};

export default Skills;
