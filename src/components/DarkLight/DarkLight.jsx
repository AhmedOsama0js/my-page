import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";

const ThemeToggler = () => {
  const THEMES = {
    LIGHT: "light",
    DARK: "dark",
  };

  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") || "dark"
  );

  useEffect(() => {
    document.body.classList.value = theme;
  }, [theme]);

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setTheme((prevTheme) =>
            prevTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
          );
          localStorage.setItem(
            "currentMode",
            theme === "light" ? "dark" : "light"
          );
        }}
      >
        {theme === THEMES.DARK ? (
          <MdLightMode style={{ color: "orange" }} />
          ) : (
            <IoIosMoon/>
        )}
      </button>
    </div>
  );
};

export default ThemeToggler;
