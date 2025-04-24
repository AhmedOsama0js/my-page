import React, { useState } from "react";
import CardProject from "../../components/ProjectCmp/CardProject/CardProject";
import "./Projects.css";
import { useTranslation } from "../../contexts/LanguageContext";

const Projects = () => {
  const t = useTranslation();
  const [filter, setFilter] = useState("all");
  const handleButtonClick = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <>
      <div className="projects-container">
        <h2 className="dir">{t("MyProject")}</h2>
        <div className="project-info">
          <div className="filter">
            <button
              onClick={() => handleButtonClick("all")}
              className={filter === "all" ? "active" : ""}
            >
              All Projects
            </button>
            <button
              onClick={() => handleButtonClick("html&css")}
              className={filter === "html&css" ? "active" : ""}
            >
              HTML && CSS
            </button>
            <button
              onClick={() => handleButtonClick("js")}
              className={filter === "js" ? "active" : ""}
            >
              Javascript
            </button>
            <button
              onClick={() => handleButtonClick("react")}
              className={filter === "react" ? "active" : ""}
            >
              React
            </button>
          </div>
          <div className="projects">
            <CardProject filter={filter} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
