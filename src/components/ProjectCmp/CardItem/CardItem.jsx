import { useState } from "react";
import "./CardItme.css";
import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { MdReadMore } from "react-icons/md";
import { MainModal } from "react-modals-kit";
import Pop from "../../../model/Pop";
import { useTranslation } from "../../../contexts/LanguageContext";

const CardItem = ({ project }) => {
  const t = useTranslation();
  const [openModel, setOpenModel] = useState();
  const description =
    project.p && project.p.split(" ").length > 10
      ? `${project.p.split(" ").slice(0, 9).join(" ")} ...`
      : project.p || "No description available";

  const handlerClick = () => {
    setOpenModel(true);
  };

  return (
    <div className="card" key={project.id}>
      <div className="box-img">
        <img
          style={{ width: "99%" }}
          src={project.img[0]}
          alt={project.title}
        />
      </div>
      <div className="Info-card">
        <h4>{project.title}</h4>
        <p>{description}</p>
        <div className="link">
          <div className="out-link">
            <a
              title="Demo"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLink />
            </a>
            <a
              title="Git"
              href={project.git}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <div className="more" onClick={handlerClick}>
            {t("more")}
            <MdReadMore style={{ fontSize: "25px" }} />
          </div>
        </div>
      </div>
      {openModel && (
        <MainModal
          setModel={setOpenModel}
          content={<Pop Data={project} />}
          bodyColor="var(--seconder)"
        />
      )}
    </div>
  );
};

export default CardItem;
