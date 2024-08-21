import { useState, useEffect } from "react";
import Bowser from "bowser";

interface BrowserInfo {
  name: string;
  version: string;
  isDarkTheme: boolean | null;
  os: string;
  platform: string;
}

export const useBrowserInfo = (): BrowserInfo => {
  const [browserInfo, setBrowserInfo] = useState<BrowserInfo>({
    name: "",
    version: "",
    isDarkTheme: null,
    os: "",
    platform: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const browser = Bowser.getParser(window.navigator.userAgent);

      const browserName = browser.getBrowserName(); // e.g., "Chrome", "Firefox", "Safari", etc.
      const browserVersion = browser.getBrowserVersion(); // e.g., "91.0.4472.124"
      const os = browser.getOSName(); // e.g., "Windows", "macOS", "Linux"
      const platform = browser.getPlatformType(); // e.g., "desktop", "mobile", "tablet"

      const getIsDarkTheme = () =>
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      const updateBrowserInfo = () => {
        setBrowserInfo({
          name: browserName.toLowerCase(),
          version: browserVersion,
          isDarkTheme: getIsDarkTheme(),
          os: os.toLowerCase(),
          platform: platform.toLowerCase(),
        });
      };

      updateBrowserInfo();

      const darkThemeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

      // Trigger update on mode change
      darkThemeMediaQuery.addEventListener("change", updateBrowserInfo);

      // Cleanup listener on unmount
      return () => {
        darkThemeMediaQuery.removeEventListener("change", updateBrowserInfo);
      };
    }
  }, []);

  return browserInfo;
};
