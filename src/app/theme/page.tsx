"use client";
import { useEffect, useState } from "react";

const useThemeDetector = (): boolean => {
  const getCurrentTheme = (): boolean => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false; // Default to light theme if window is not available
  };

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(getCurrentTheme());

  useEffect(() => {
    if (typeof window !== "undefined") {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

      const mqListener = (e: MediaQueryListEvent): void =>
        setIsDarkTheme(e.matches);
      darkThemeMq.addEventListener("change", mqListener);

      return () => darkThemeMq.removeEventListener("change", mqListener);
    }
  }, []);

  return isDarkTheme;
};

const Home: React.FC = () => {
  const isDarkTheme = useThemeDetector();

  return (
    <>
      <p className="capitalize">
        This is device
        {isDarkTheme ? (
          <b className="font-semibold">Dark</b>
        ) : (
          <b className="font-semibold">Light</b>
        )}
        theme.
      </p>
    </>
  );
};

export default Home;
