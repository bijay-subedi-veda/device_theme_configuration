"use client";

import { useEffect, useState } from "react";

const useThemeDetector = (): boolean => {
  const getCurrentTheme = (): boolean =>
    typeof window !== undefined &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(getCurrentTheme());

  useEffect(() => {
    const darkThemeMq =
      typeof window !== undefined &&
      window.matchMedia("(prefers-color-scheme: dark)");

    const mqListener = (e: MediaQueryListEvent): void => {
      setIsDarkTheme(e.matches);
    };

    darkThemeMq && darkThemeMq?.addEventListener("change", mqListener);

    return () => {
      darkThemeMq && darkThemeMq?.removeEventListener("change", mqListener);
    };
  }, []);

  return isDarkTheme;
};

export default function Home(): JSX.Element {
  const isDarkTheme = useThemeDetector();
  return (
    <>
      <p className="capitalize">
        {isDarkTheme
          ? "this is device dark theme"
          : "this is device light theme"}
      </p>
    </>
  );
}
