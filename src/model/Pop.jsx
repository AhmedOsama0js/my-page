import { useEffect, useState } from "react";
import "./Pop.css";
import Slider from "../components/Slider/Slider";
import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import MainBtn from "../components/mainBtn/MainBtn";

const Pop = ({ Data, showPop, handlerShowPop }) => {
  const [, setProject] = useState(Data);
  const [show, setShow] = useState(showPop);

  useEffect(() => {
    setShow(showPop);
    setProject(Data);
  }, [showPop, Data]);

  const closeHandler = () => {
    setShow(false);
    handlerShowPop(false);
    ClosePop()
  };

  const ClosePop = () => {
    return 0
  }
  return (
    <div className="container-pop" style={{ display: show ? "flex" : "none" }}>
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
        <div className="pop-slider">
          <Slider data={Data.img} closePop={ClosePop} />
        </div>
        <button className="btn-pop" onClick={closeHandler}>
          <MdOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default Pop;
