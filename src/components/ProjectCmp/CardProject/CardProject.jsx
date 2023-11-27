import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./CardProjects.css";
import data from "../../../dist/data/data.json";
import CardItem from "../CardItem/CardItem";




const CardProject = ({ filter, HandlerShowPop }) => {
  const reversedData = useMemo(() => data.data.slice().reverse(), []);
  const [projects, setProjects] = useState(reversedData);

  const filterProjects = useCallback(() => {
    if (filter === "all") {
      setProjects(reversedData);
    } else {
      const filteredProjects = reversedData.filter(
        (project) => project.target && project.target[1] === filter
      );
      setProjects(filteredProjects);
    }
  }, [filter, reversedData]);

  useEffect(() => {
    filterProjects();
  }, [filter, filterProjects]);

  const handlerClick = (data) => {
    HandlerShowPop(true , data)
  };

  return (
    <div className="card-products">
      {projects.map((project) => (
        <CardItem key={project.id} project={project} onClick={handlerClick} />
      ))}
    </div>
  );
};

export default CardProject;
