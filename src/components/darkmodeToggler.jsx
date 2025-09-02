import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-orange-500 text-white text-sm sm:text-base shadow-md hover:bg-orange-600 transition"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? "☀" : "🌙"}
    </button>
  );
}
