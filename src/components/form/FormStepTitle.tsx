import React from "react";

interface Props {
  title: string;
  subtitle: string;
}

export const FormStepTitle: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="pt-6 pb-4 flex flex-col gap-[10px]">
      <h2 className="font-black text-2xl leading-7 tracking-halfPercent">
        {title}
      </h2>
      <div className="text-lightGray tracking-onePercent">{subtitle}</div>
    </div>
  );
};
