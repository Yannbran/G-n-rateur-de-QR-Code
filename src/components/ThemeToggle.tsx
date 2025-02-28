"use client";

import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={
        theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"
      }
    >
      <div className="toggle-icons">
        <FaSun className="sun-icon" />
        <FaMoon className="moon-icon" />
      </div>
      <div className={`toggle-thumb ${theme}`}></div>
    </button>
  );
};

export default ThemeToggle;
