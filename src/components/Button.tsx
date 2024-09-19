import React from "react";

interface Props {
  children: string;
  variant?: "outline" | "solid";
  onClick: () => void;
}

export const Button: React.FC<Props> = ({ children, variant, onClick }) => {
  return (
    <button
      className={`border-[1.5px] border-blue font-semibold rounded-xl py-3 px-4 leading-5 flex-grow transition-colors duration-200 ${
        variant === "outline" &&
        " text-blue hover:text-blueHover hover:border-blueHover bg-white"
      } ${variant === "solid" && "bg-blue hover:bg-blueHover text-white"}
    }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
