"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState, useMemo } from "react";

type Theme =
  | "default"
  | "dark"
  | "theme-vercel"
  | "theme-boring"
  | "theme-colorful"
  | "theme-minimal";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: Record<Theme, string>;
  themeNames: Record<Theme, string>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("default");

  const themes = useMemo<Record<Theme, string>>(
    () => ({
      default: "",
      dark: "dark",
      "theme-vercel": "theme-vercel",
      "theme-boring": "theme-boring",
      "theme-colorful": "theme-colorful",
      "theme-minimal": "theme-minimal",
    }),
    []
  );

  const themeNames = useMemo<Record<Theme, string>>(
    () => ({
      default: "Base theme",
      dark: "Dark theme",
      "theme-vercel": "Vercel Dark",
      "theme-boring": "Boring",
      "theme-colorful": "Colorful",
      "theme-minimal": "Ultra Minimal",
    }),
    []
  );

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;

    // Remove all theme classes
    Object.values(themes).forEach((themeClass) => {
      if (themeClass) root.classList.remove(themeClass);
    });

    // Apply current theme
    if (themes[theme]) {
      root.classList.add(themes[theme]);
    }

    // Save in localStorage
    localStorage.setItem("app-theme", theme);
  }, [theme, themes]);

  // Load theme from localStorage and init
  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme") as Theme;
    if (savedTheme && themes[savedTheme] !== undefined) {
      setTheme(savedTheme);
    }
  }, [themes]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes, themeNames }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
