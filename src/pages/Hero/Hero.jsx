import React from "react";
import img from "../../dist/img/main.png";
import "./Hero.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import MainBtn from "../../components/mainBtn/MainBtn";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="info-hero">
        <h2>Hay I'm Ahmed Osama</h2>
        <h4> Frontend Developer</h4>
        <p>
          Beginner Frontend Developer, passionate about improving my web
          development skills. I love transforming ideas into captivating user
          experiences and continuously seek to learn the latest technologies and
          tools in this field.
        </p>
        <Link to="/about">
          <MainBtn Icon={<FaArrowRight />} name=" Go to More" />
        </Link>
      </div>
      <div className="img-hero">
        <img src={img} alt="main-img" />
      </div>
    </div>
  );
};

export default Hero;
