import React from "react";
import checkIcon from "../../assets/check.svg";

interface ChoiceCardProps {
  optionKey: string;
  optionText: string;
  selectedOptions: string[];
  handleChoiceChange: (option: string) => void;
}

export const ChoiceCard: React.FC<ChoiceCardProps> = ({
  optionKey,
  optionText,
  selectedOptions,
  handleChoiceChange,
}) => {
  const isSelected = selectedOptions.includes(optionKey);

  return (
    <button
      className={`rounded-xl flex justify-between items-center p-3 md:p-4 lg:p-6 border text-left relative cursor-pointer leading-5 transition-colors duration-200 lg:hover:bg-lightBlue ${
        isSelected
          ? "bg-lightBlue border-lightBlue"
          : "bg-white border-borderGray"
      }`}
      onClick={() => handleChoiceChange(optionKey)}
    >
      <span className="w-[95%]">{optionText}</span>

      <img
        src={checkIcon}
        alt="check"
        className={`w-3 h-3 transition-opacity duration-200 ${
          isSelected ? "opacity-100" : "opacity-0"
        }`}
      />
    </button>
  );
};
