"use client";
import { useEffect, useState } from "react";
import "./toggle.css";  

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="switch-container" onClick={toggleTheme} style={{ position: 'fixed', top: 20, right: 20 }}>
      <div className={`switch ${theme === "light" ? 'off' : 'on'}`}>
        <div className="switch-lever" />
      </div>
      <div className="status-text">{theme === "light" ? "Light" : "Dark"}</div>
    </div>
  );
}
