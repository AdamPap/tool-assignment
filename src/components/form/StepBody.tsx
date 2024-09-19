import React from "react";
import { FormStepTitle } from "./FormStepTitle";
import { ChoiceCard } from "./ChoiceCard";
import { useTranslation } from "react-i18next";

interface Props {
  title: string;
  subtitle: string;
  options: string[];
  selectedOptions: string[];
  step: number;
  handleChoiceChange: (option: string) => void;
}

export const StepBody: React.FC<Props> = ({
  title,
  subtitle,
  options,
  selectedOptions,
  step,
  handleChoiceChange,
}) => {
  const { t } = useTranslation();

  return (
    <div className={`flex justify-center mt-0 md:mt-4 lg:mt-10`}>
      <div className="max-w-[600px] w-full">
        <FormStepTitle
          title={title}
          subtitle={subtitle}
        />

        {step === 1 && (
          <div className="flex flex-col gap-2">
            {options.map((key) => (
              <ChoiceCard
                key={key}
                optionKey={key}
                optionText={t(`options.${key}`)}
                selectedOptions={selectedOptions}
                handleChoiceChange={handleChoiceChange}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
