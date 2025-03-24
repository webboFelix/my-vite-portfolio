import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const userPref = window.localStorage.getItem("theme");

  // Set initial state based on localStorage or media query
  const initialMode =
    userPref || (window.matchMedia(preferDarkQuery).matches ? "dark" : "light");
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);

    const handleChange = () => {
      if (!userPref) {
        const newMode = mediaQuery.matches ? "dark" : "light";
        setMode(newMode);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [userPref]);

  useEffect(() => {
    // Update localStorage and document class based on mode
    window.localStorage.setItem("theme", mode);
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
