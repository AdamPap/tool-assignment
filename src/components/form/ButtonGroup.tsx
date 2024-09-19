import React from "react";
import { Button } from "../Button";
import { useTranslation } from "react-i18next";

interface Props {
  step: number;
  onNext: () => void;
  onPrevious: () => void;
  minStep: number;
  maxStep: number;
}

export const ButtonGroup: React.FC<Props> = ({
  step,
  onNext,
  onPrevious,
  minStep,
  maxStep,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={`flex gap-2 mt-auto ${
        step === minStep ? "justify-center" : "justify-between"
      }`}
    >
      {step !== minStep && (
        <div className="w-1/2 flex mt-7">
          <Button
            variant="outline"
            onClick={onPrevious}
          >
            {t("previous")}
          </Button>
        </div>
      )}
      <div className="w-1/2 flex mt-7">
        <Button
          variant="solid"
          onClick={onNext}
        >
          {step === maxStep ? t("submit") : t("next")}
        </Button>
      </div>
    </div>
  );
};
