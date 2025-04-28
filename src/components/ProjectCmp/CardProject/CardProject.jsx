import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./CardProjects.css";
import data from "../../../dist/data/data.en.json";
import CardItem from "../CardItem/CardItem";
import { useLanguage } from "../../../contexts/LanguageContext";

const CardProject = ({ filter }) => {
  const { lang } = useLanguage();
  const reversedData = useMemo(() => data.data.slice().reverse(), []);
  const [projects, setProjects] = useState([]);
  const [allData, setAllData] = useState([]);

  const loadData = useCallback(async () => {
    try {
      const res = await import(`../../../dist/data/data.${lang}.json`);
      const reversed = res.default.data.slice().reverse();
      setAllData(reversed);
      if (filter === "all") {
        setProjects(reversed);
      } else {
        const filtered = reversed.filter(
          (project) => project.target && project.target[1] === filter
        );
        setProjects(filtered);
      }
    } catch (err) {
      console.error("Error loading data file:", err);
    }
  }, [lang, filter]);

  useEffect(() => {
    loadData();
  }, [lang, filter, loadData]);

  return (
    <div className="card-products">
      {projects.map((project) => (
        <CardItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default CardProject;
