import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  const [translations, setTranslations] = useState({});

  const loadLanguage = async (lng) => {
    const res = await import(`../locales/${lng}.json`);
    setTranslations(res.default);
    setLang(lng);
    localStorage.setItem("lang", lng);
    lng === "ar"
      ? document.body.classList.add("ar")
      : document.body.classList.remove("ar");
  };

  useEffect(() => {
    loadLanguage(lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, translations, loadLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const { translations } = useContext(LanguageContext);
  return (key) => translations[key] || key;
};

export const useLanguage = () => useContext(LanguageContext);
