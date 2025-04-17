import { useTranslation } from "../../../contexts/LanguageContext";
import Css from "../../../dist/img/css.webP";
import html from "../../../dist/img/html.webP";
import js from "../../../dist/img/JS.webP";
import bootstrap from "../../../dist/img/bootstrap.webP";
import typescript from "../../../dist/img/typescript.webP";
import git from "../../../dist/img/Git.webP";
import react from "../../../dist/img/react.webP";
import node from "../../../dist/img/nodejs.png";
import mongoDB from "../../../dist/img/mangoDB.png";
import express from "../../../dist/img/express.png";
import postgreSQL from "../../../dist/img/postgreSQL.png";
import redux from "../../../dist/img/redux.png";
import ReduxToolkit from "../../../dist/img/ReduxToolkit.png";
import ContextAPI from "../../../dist/img/ContextAPI.png";
import gitHub from "../../../dist/img/gitHub.png";
import WebSocket from "../../../dist/img/WebSocket.png";
import REST_APIs from "../../../dist/img/REST_APIs.png";
import JWT from "../../../dist/img/JWT.png";
import Postman from "../../../dist/img/Postman.png";
import CircleProgres from "../cireclProgress/CircleProgres";
import "./Skills.css";

const Skills = () => {
  const t = useTranslation();
  return (
    <div className="skills-container">
      <div>
        <h3>{t("frontEnd")}</h3>
        <div className="skills-progress-container">
          <CircleProgres Img={html} V="HTML" color="#e75226" />
          <CircleProgres Img={Css} V="CSS" color="#2062af" />
          <CircleProgres Img={js} V="Javascript" color="#e8c82e" />
          <CircleProgres Img={typescript} V="Typescript" color="#3178c6" />
          <CircleProgres Img={react} V="React.js" color="#00d8ff" />
          <CircleProgres Img={bootstrap} V="Bootstrap" color="#543c7b" />
        </div>
      </div>
      <div>
        <h3>{t("backEnd")}</h3>
        <div className="skills-progress-container">
          <CircleProgres Img={node} V="Node" color="#90c53f" />
          <CircleProgres Img={express} V="Express.js" color="#000000" />
          <CircleProgres Img={mongoDB} V="MongoDB" color="#449337" />
          <CircleProgres Img={postgreSQL} V="PostgreSQL" color="#31668f" />
        </div>
      </div>
      <div>
        <h3>{t("stateManagement")}</h3>
        <div className="skills-progress-container">
          <CircleProgres Img={redux} V="Redux" color="#7f57c1" />
          <CircleProgres Img={ReduxToolkit} V="ReduxToolkit" color="#9968f1" />
          <CircleProgres Img={ContextAPI} V="ContextAPI " color="#62d9fb" />
        </div>
      </div>
      <div>
        <h3>{t("Tools_Others")} </h3>
        <div className="skills-progress-container">
          <CircleProgres Img={git} V="Git" color="#f05033" />
          <CircleProgres Img={gitHub} V="GitHub" color="#010101" />
          <CircleProgres Img={WebSocket} V="WebSocket" color="#ee5616" />
          <CircleProgres Img={REST_APIs} V="REST APIs" color="#0281c3" />
          <CircleProgres Img={JWT} V="JWT" color="#ec48a5" />
          <CircleProgres Img={Postman} V="Postman" color="#fc3e18" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
