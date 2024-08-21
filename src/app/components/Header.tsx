"use client";

import React, { useEffect, useState } from "react";
import { useBrowserInfo } from "../utils/browserInfo";
import { handleThemeConfiguration, ThemeMode } from "../utils/handleTheme";

const Header = () => {
  const browserInfo = useBrowserInfo();

  const [userTheme, setUserTheme] = useState<ThemeMode>(
    browserInfo?.isDarkTheme ? "dark" : "light"
  );

  useEffect(() => {
    handleThemeConfiguration(userTheme);
  }, [userTheme]);
  return (
    <>
      <div className="fixed w-full h-14 bg-gray-surfaceVariantBrighter capitalize text-gray-onSurfaceVariantBrighter flex gap-10 justify-end px-20 items-center">
        Browser theme :
        <button className="bg-tertiary-brand capitalize cursor-default text-tertiary-brandContainer rounded-md  px-4 py-2 flex justify-center items-center">
          {userTheme}
        </button>
        <button
          className="bg-gray-onSurfaceVariantBrighter capitalize text-gray-surfaceVariantBrighter rounded-md  px-4 py-2 flex justify-center items-center"
          onClick={() => {
            setUserTheme((prev) => (prev === "dark" ? "light" : "dark"));
          }}
        >
          Change Theme: {userTheme}
        </button>
      </div>
    </>
  );
};

export default Header;
