"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center rounded-lg p-2 text-blue-700 transition-colors bg-zinc-200 hover:bg-blue-700 hover:text-zinc-100 dark:bg-blue-700 dark:text-zinc-200 dark:hover:text-blue-700 dark:hover:bg-zinc-100"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeButton;
