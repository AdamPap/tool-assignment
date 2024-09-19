import React from "react";

interface Props {
  title: string;
  content: string;
  iconSrc: string;
}

export const Alert: React.FC<Props> = ({ title, content, iconSrc }) => {
  return (
    <div className="bg-alertRed rounded-2xl p-4 flex items-center">
      <img
        src={iconSrc}
        alt="alert"
        className="w-6 h-6 mr-4"
      />
      <div className="flex flex-col gap-1">
        <h2 className="font-bold leading-5">{title}</h2>
        <p className="text-alertLightGray">{content}</p>
      </div>
    </div>
  );
};
