import React, { useState, useEffect } from 'react';
import { ThemeContext } from "../context/ThemeContext";
import sunIcon from "../assets/light_mode.png"; // import Light mode icon
import moonIcon from "../assets/dark_mode.png"; // import Dark mode icon
import "../styles/DarkModeToggle.css"; // ✅ Import CSS

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
      return localStorage.getItem("theme") === "dark";
    });
  
    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      }
    }, [darkMode]);
  
    return (
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        <img src={darkMode ? sunIcon : moonIcon} alt="Toggle Theme" />
      </button>
    );
  };
  
  export default DarkModeToggle;


  