import { useState } from "react";

export function useDarkmode({ initial = "light" }) {
  const [darkMode, setDarkMode] = useState(initial);

  function toggleDarkmode() {
    setDarkMode((prev) => (prev === "dark" ? "light" : "dark"));

    darkMode == "dark"
      ? (document.body.style.backgroundColor = "#242424")
      : (document.body.style.backgroundColor = "#E5E7EB");
  }

  return [darkMode, toggleDarkmode];
}
