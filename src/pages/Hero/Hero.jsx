import React from "react";
import img from "../../dist/img/main.png";
import "./Hero.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import MainBtn from "../../components/mainBtn/MainBtn";
import { useTranslation } from "../../contexts/LanguageContext";

const Hero = () => {
  const t = useTranslation();
  return (
    <div className="hero-container">
      <div className="info-hero">
        <h2 className="dir">{t("name")}</h2>
        <h4 className="dir"> {t("title")}</h4>
        <p className="dir">{t("description")}</p>
        <Link to="/about">
          <MainBtn Icon={<FaArrowRight />} name={t("goMore")} />
        </Link>
      </div>
      <div className="img-hero">
        <img src={img} alt="main-img" />
      </div>
    </div>
  );
};

export default Hero;
