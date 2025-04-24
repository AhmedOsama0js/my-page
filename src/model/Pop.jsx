import "./Pop.css";
import Slider from "../components/Slider/Slider";
import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import MainBtn from "../components/mainBtn/MainBtn";

const Pop = ({ Data }) => {
  return (
    <div className="container-pop">
      <div className="body-pop">
        <div className="header-pop">
          <h3>{Data.title}</h3>
          <p>{Data.description}</p>
          <div className="pop-link">
            <a title="Demo" href={Data.demo} target="_blank" rel="noreferrer">
              <MainBtn Icon={<FiLink />} name="Demo" />
            </a>
            <a title="Git" href={Data.git} target="_blank" rel="noreferrer">
              <MainBtn Icon={<FaGithub />} name="Git" />
            </a>
          </div>
        </div>
        {Data?.IdVideo && (
          <div className="pop-slider">
            <Slider data={Data?.IdVideo} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Pop;
