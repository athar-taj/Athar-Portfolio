import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeMode = "light" | "dark" | "auto";
export type ResolvedTheme = "light" | "dark";

interface ThemeContextType {
  mode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "athar_portfolio_theme_mode";

function getInitialMode(): ThemeMode {
  if (typeof window === "undefined") return "dark";
  const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
  if (saved === "light" || saved === "dark" || saved === "auto") {
    return saved;
  }
  return "dark"; // default to dark
}

function calculateAutoTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "dark";
  const hour = new Date().getHours();
  // 07:00 to 19:00 (7 AM to 7 PM) is considered daytime (light)
  if (hour >= 7 && hour < 19) {
    return "light";
  }
  return "dark";
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setModeState] = useState<ThemeMode>(getInitialMode);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => {
    const initial = getInitialMode();
    if (initial === "auto") return calculateAutoTheme();
    return initial;
  });

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    localStorage.setItem(THEME_STORAGE_KEY, newMode);
  };

  const toggleTheme = () => {
    if (mode === "dark") setMode("light");
    else if (mode === "light") setMode("auto");
    else setMode("dark");
  };

  // Keep resolvedTheme up to date based on mode and time
  useEffect(() => {
    const updateTheme = () => {
      let targetTheme: ResolvedTheme = "dark";
      if (mode === "auto") {
        targetTheme = calculateAutoTheme();
      } else {
        targetTheme = mode;
      }
      setResolvedTheme(targetTheme);
      document.documentElement.setAttribute("data-theme", targetTheme);
    };

    updateTheme();

    if (mode === "auto") {
      // Recheck every minute for time changes
      const interval = setInterval(updateTheme, 60000);
      const onFocus = () => updateTheme();
      window.addEventListener("focus", onFocus);
      return () => {
        clearInterval(interval);
        window.removeEventListener("focus", onFocus);
      };
    }
  }, [mode]);

  return (
    <ThemeContext.Provider
      value={{ mode, resolvedTheme, setMode, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
