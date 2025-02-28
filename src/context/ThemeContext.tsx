"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  // Initialiser le thème depuis localStorage ou préférence système
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    } else if (prefersDark) {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
