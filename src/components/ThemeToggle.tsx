"use client";

import { Moon, Sun } from "lucide-react";

/**
 * Light / dark switch. The chosen theme lives on <html class="dark"> and is
 * persisted in localStorage; layout.tsx applies it before paint so there is no
 * flash. Both icons are rendered and CSS decides which one shows, so the
 * markup is identical on the server and after hydration.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    root.style.colorScheme = next;
    try {
      localStorage.setItem("molar-theme", next);
    } catch {
      /* storage can be blocked; the toggle still works for this visit */
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Switch between light and dark theme"
      title="Switch theme"
      className={`inline-flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200 cursor-pointer hover:scale-105 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2675D8] ${className}`}
    >
      <Moon className="w-4 h-4 dark:hidden" />
      <Sun className="w-4 h-4 hidden dark:block" />
    </button>
  );
}
