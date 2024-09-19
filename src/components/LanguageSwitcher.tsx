import React from "react";

import grFlag from "../assets/gr-flag.svg";
import ukFlag from "../assets/uk-flag.svg";
import { useTranslation } from "react-i18next";

interface Props {}

export const LanguageSwitcher: React.FC<Props> = ({}) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex">
      <button
        onClick={() => changeLanguage("gr")}
        aria-label="Switch to Greek"
        className={`${
          i18n.language === "gr" ? "opacity-100" : "opacity-20"
        } hover:opacity-100 transition-opacity duration-300`}
      >
        <img
          src={grFlag}
          className="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 mr-2 md:mr-4"
        />
      </button>
      <button
        onClick={() => changeLanguage("en")}
        aria-label="Switch to English"
        className={`${
          i18n.language === "en" ? "opacity-100" : "opacity-20"
        } hover:opacity-100 transition-opacity duration-300`}
      >
        <img
          src={ukFlag}
          className="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12"
        />
      </button>
    </div>
  );
};
