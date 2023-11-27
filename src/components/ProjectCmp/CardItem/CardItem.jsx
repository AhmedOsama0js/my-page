import "./CardItme.css"
import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { MdReadMore } from "react-icons/md";

const CardItem = ({ project, onClick }) => {
  const description =
    project.p && project.p.split(" ").length > 10
      ? `${project.p.split(" ").slice(0, 9).join(" ")} ...`
      : project.p || "No description available";
  
  const handlerClick = () => {
    onClick(project)
  }

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
            <a title="Demo" href={project.demo} target="_blank" rel="noopener noreferrer">
              <FiLink />
            </a>
            <a title="Git" href={project.git} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
          <div className="more" onClick={handlerClick}>
            more
            <MdReadMore  style={{fontSize:"25px"}}/>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CardItem;