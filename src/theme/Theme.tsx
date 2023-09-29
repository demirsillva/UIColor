import React, { useState, useCallback, useEffect } from "react";
import { BiSolidSun } from "react-icons/bi";
import { BsMoonStarsFill } from "react-icons/bs";

const ThemeSwitcher: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  );

  const toggleTheme = useCallback(() => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    localStorage.setItem("theme", newIsDarkMode ? "dark" : "light");

    const activeElement = document.activeElement as HTMLElement | null;

    if (activeElement) {
      activeElement.blur();
    }
  }, [isDarkMode]);

  useEffect(() => {
    document.documentElement.classList.remove("loading");
    const root = document.documentElement;
    // root.classList.remove('loading');
    root.classList.toggle("dark", isDarkMode);
    root.classList.toggle("light", !isDarkMode);
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleTheme}
      className="flex focus:outline-none"
      tabIndex={0}
    >
      {isDarkMode ? (
        <BiSolidSun className="w-5 h-5 text-yellow-200" />
      ) : (
        <BsMoonStarsFill className="w-5 h-5 text-indigo-800" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
