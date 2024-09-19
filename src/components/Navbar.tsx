import React from "react";
import logo from "../assets/logo.svg";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

interface Props {}

export const Navbar: React.FC<Props> = ({}) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between items-center py-6 px-6 lg:px-12">
      <img
        src={logo}
        className="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12"
      />
      <div className="font-extrabold text-[14px] md:text-xl leading-tight md:leading-normal lg:text-2xl text-center w-[50%] md:w-auto">
        {t("navbarTitle")}
      </div>

      <LanguageSwitcher />
    </div>
  );
};
