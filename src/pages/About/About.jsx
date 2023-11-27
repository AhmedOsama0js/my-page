import MyInfo from "../../components/aboutCmp/MyInfo/MyInfo"
import Skills from "../../components/aboutCmp/Skills/Skills"
import MainBtn from "../../components/mainBtn/MainBtn"
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import "./About.css"


const About = () => {
  return (
    <div className="about-container">
      <MyInfo />
      <hr />
      <Skills />
      <hr />
      <div className="btn-about">
        <Link to="/projects">
          <MainBtn Icon={<FaArrowRight />} name=" Go to Projects" />
        </Link>
      </div>
    </div>
  );
}

export default About
