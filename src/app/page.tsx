"use client";
import { getBrowserInfo } from "./utils/browserInfo";
import { useEffect } from "react";
import { handleThemeConfiguration } from "./utils/handleTheme";

export default function Home() {
  const browserInfo = getBrowserInfo();

  useEffect(() => {
    handleThemeConfiguration(browserInfo?.isDarkTheme ? "dark" : "light");
  }, [browserInfo]);

  return (
    <div className="flex flex-col gap-20">
      <div className="text-primary-onContainer flex flex-col gap-4 bg-primary-container w-[500px] h-[200px] justify-center items-center">
        {browserInfo ? (
          <div>
            <p>{`Browser Name: ${browserInfo.name} ${browserInfo.version}`}</p>
            <p>{`Browser Version: ${browserInfo.version}`}</p>
            <p>{`OS: ${browserInfo.os}`}</p>
            <p>{`Platform: ${browserInfo.platform}`}</p>
            <p>{`Theme Mode: ${browserInfo.isDarkTheme ? "Dark" : "Light"}`}</p>
          </div>
        ) : (
          <p>Loading browser info...</p>
        )}
      </div>
    </div>
  );
}
