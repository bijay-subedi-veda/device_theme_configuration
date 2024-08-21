"use client";
import { useEffect, useState } from "react";
import { handleThemeConfiguration } from "./utils/handleTheme";

const useThemeDetector = (): boolean => {
  const getCurrentTheme = (): boolean => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  };

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(getCurrentTheme());

  useEffect(() => {
    if (typeof window !== "undefined") {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

      const mqListener = (e: MediaQueryListEvent): void =>
        setIsDarkTheme(e.matches);
      darkThemeMq.addEventListener("change", mqListener);

      handleThemeConfiguration(isDarkTheme ? "dark" : "light");

      return () => darkThemeMq.removeEventListener("change", mqListener);
    }
  }, [isDarkTheme]);

  return isDarkTheme;
};

const Home: React.FC = () => {
  const isDarkTheme = useThemeDetector();

  return (
    <>
      <div className="text-primary-onContainer bg-primary-container w-[500px] h-[200px] capitalize flex justify-center items-center">
        This is device
        {isDarkTheme ? (
          <b className="font-semibold text-tertiary-brand mx-1">Dark</b>
        ) : (
          <b className="font-semibold text-tertiary-brand mx-1">Light</b>
        )}
        theme.
      </div>
    </>
  );
};

export default Home;
