import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const LangBtn = () => {
  const { loadLanguage } = useLanguage();
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  const toggleLanguage = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    loadLanguage(newLang);
  };

  return (
    <button className="btn" onClick={toggleLanguage}>
      {lang === "ar" ? "en" : "ع"}
    </button>
  );
};

export default LangBtn;
