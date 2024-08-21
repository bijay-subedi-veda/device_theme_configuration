import Bowser from "bowser";

interface BrowserInfo {
  name: string;
  version: string;
  isDarkTheme: boolean | null;
  os: string;
  platform: string;
}

export const getBrowserInfo = (): BrowserInfo => {
  if (typeof window !== "undefined") {
    const browser = Bowser.getParser(window.navigator.userAgent);

    const browserName = browser.getBrowserName(); // e.g., "Chrome", "Firefox", "Safari", etc.
    const browserVersion = browser.getBrowserVersion(); // e.g., "91.0.4472.124"
    const os = browser.getOSName(); // e.g., "Windows", "macOS", "Linux"
    const platform = browser.getPlatformType(); // e.g., "desktop", "mobile", "tablet"

    const isDarkTheme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    return {
      name: browserName.toLowerCase(),
      version: browserVersion,
      isDarkTheme: isDarkTheme,
      os: os.toLowerCase(),
      platform: platform.toLowerCase(),
    };
  }

  return {
    name: "",
    version: "",
    isDarkTheme: null,
    os: "",
    platform: "",
  };
};
