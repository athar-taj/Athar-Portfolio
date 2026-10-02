import { useState, useRef, useEffect } from "react";
import { useTheme, ThemeMode } from "../context/ThemeContext";
import { LuSun, LuMoon, LuClock } from "react-icons/lu";
import "./styles/ThemeToggle.css";

const ThemeToggle = () => {
  const { mode, resolvedTheme, setMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectMode = (selectedMode: ThemeMode) => {
    setMode(selectedMode);
    setIsOpen(false);
  };

  const getModeLabel = () => {
    if (mode === "auto") {
      return `Auto (${resolvedTheme === "light" ? "Day" : "Night"})`;
    }
    return mode === "light" ? "Light" : "Dark";
  };

  const renderIcon = () => {
    if (mode === "auto") {
      return <LuClock className="theme-toggle-icon theme-icon-clock" />;
    }
    if (resolvedTheme === "light") {
      return <LuSun className="theme-toggle-icon theme-icon-sun" />;
    }
    return <LuMoon className="theme-toggle-icon theme-icon-moon" />;
  };

  return (
    <div className="theme-toggle-container" ref={dropdownRef}>
      <button
        type="button"
        className={`theme-toggle-btn ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={`Toggle theme (Current: ${mode})`}
        title={`Current mode: ${getModeLabel()}`}
        data-cursor="disable"
      >
        <span className="theme-toggle-icon-wrap">{renderIcon()}</span>
        <span className="theme-toggle-label">{mode}</span>
      </button>

      {isOpen && (
        <div className="theme-dropdown-menu" role="menu">
          <button
            type="button"
            className={`theme-option-btn ${mode === "dark" ? "selected" : ""}`}
            onClick={() => handleSelectMode("dark")}
            role="menuitem"
            data-cursor="disable"
          >
            <LuMoon className="theme-menu-icon" />
            <span>Dark</span>
            {mode === "dark" && <span className="theme-check-dot" />}
          </button>

          <button
            type="button"
            className={`theme-option-btn ${mode === "light" ? "selected" : ""}`}
            onClick={() => handleSelectMode("light")}
            role="menuitem"
            data-cursor="disable"
          >
            <LuSun className="theme-menu-icon" />
            <span>Light</span>
            {mode === "light" && <span className="theme-check-dot" />}
          </button>

          <button
            type="button"
            className={`theme-option-btn ${mode === "auto" ? "selected" : ""}`}
            onClick={() => handleSelectMode("auto")}
            role="menuitem"
            data-cursor="disable"
          >
            <LuClock className="theme-menu-icon" />
            <div className="theme-auto-details">
              <span>Auto (Time-based)</span>
              <small className="theme-auto-subtitle">
                7 AM–7 PM Light, 7 PM–7 AM Dark
              </small>
            </div>
            {mode === "auto" && <span className="theme-check-dot" />}
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
