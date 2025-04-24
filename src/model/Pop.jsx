import "./Pop.css";
import Slider from "../components/Slider/Slider";
import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import MainBtn from "../components/mainBtn/MainBtn";
import { useTranslation } from "../contexts/LanguageContext";

const Pop = ({ Data }) => {
  const t = useTranslation();
  return (
    <div className="container-pop">
      <div className="body-pop">
        <div className="header-pop">
          <h3 className="dir">{Data.title}</h3>
          <p className="dir">{Data.description}</p>
          <div className="pop-link">
            <a
              title={t("demo")}
              href={Data.demo}
              target="_blank"
              rel="noreferrer"
            >
              <MainBtn Icon={<FiLink />} name={t("demo")} />
            </a>
            {Data?.git && (
              <a
                title={t("code")}
                href={Data.git}
                target="_blank"
                rel="noreferrer"
              >
                <MainBtn Icon={<FaGithub />} name={t("code")} />
              </a>
            )}
          </div>
        </div>
        {Data?.IdVideo ? (
          <div className="pop-slider">
            <Slider data={Data?.IdVideo} />
          </div>
        ) : (
          <>
            <img width="90%" height="auto" src={Data?.img[0]} alt="img-" />
          </>
        )}
      </div>
    </div>
  );
};

export default Pop;
