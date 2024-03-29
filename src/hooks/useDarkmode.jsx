import { useState } from "react";

export function useDarkmode({ initial = "dark" }) {
  const [darkMode, setDarkMode] = useState(initial);

  function toggleDarkmode() {
    setDarkMode((prev) => (prev === "dark" ? "light" : "dark"));

    darkMode == "dark"
      ? (document.querySelector("body").style.backgroundColor = "#E5E7EB")
      : (document.querySelector("body").style.backgroundColor = "#242424");
  }

  return [darkMode, toggleDarkmode];
}
