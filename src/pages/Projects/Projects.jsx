import React, { useState } from "react";
import CardProject from "../../components/ProjectCmp/CardProject/CardProject";
import "./Projects.css";
import Pop from "../../model/Pop.jsx";

const Projects = () => {

  const [filter, setFilter] = useState("all");
  const handleButtonClick = (selectedFilter) => {
    setFilter(selectedFilter);
  };
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});

const handleShowPopTrue = (boolean, data) => {
  setShow(boolean);
  setData(data);
};

const handleShowPopFalse = (data) => {
  setShow(data);
};
  return (
    <>
      <Pop Data={data} showPop={show} handlerShowPop={handleShowPopFalse} />
      <div className="projects-container">
        <h2>My Projects</h2>
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
            <CardProject filter={filter} HandlerShowPop={handleShowPopTrue} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
