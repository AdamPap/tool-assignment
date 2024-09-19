import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Layout } from "../Layout";

import attentionIconSrc from "../../assets/attention.svg";
import { AlertDisplay } from "./AlertDisplay";
import { ButtonGroup } from "./ButtonGroup";
import { StepBody } from "./StepBody";

const options = [
  "option1",
  "option2",
  "option3",
  "option4",
  "option5",
  "option6",
];

const SPECIFIC_OPTIONS = ["option1", "option4"];

enum STEPS {
  STEP_0 = 0,
  STEP_1 = 1,
  STEP_2 = 2,
}

const MIN_STEP = 0;
const MAX_STEP = 2;

interface Props {}

export const CholesterolCalculator: React.FC<Props> = ({}) => {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
  const [showAlert, setShowAlert] = React.useState(false);
  const [step, setStep] = React.useState(STEPS.STEP_1);

  const { t } = useTranslation();

  useEffect(() => {
    if (selectedOptions.length > 0 && step === STEPS.STEP_1) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [selectedOptions, step]);

  const handleChoiceChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const onPrevious = () => {
    if (step === MIN_STEP) return;

    setStep((prev) => prev - 1);
  };

  const onNext = () => {
    if (step === MAX_STEP) return;
    setStep((prev) => prev + 1);
  };

  const getStepTitle = (step: number) => {
    return {
      title: t(`steps.step${step}.title`),
      subtitle: t(`steps.step${step}.subtitle`),
    };
  };

  const { title, subtitle } = getStepTitle(step);

  const getAlertContent = () => {
    if (SPECIFIC_OPTIONS.every((option) => selectedOptions.includes(option))) {
      return {
        title: t("alert.specific.title"),
        content: t("alert.specific.content"),
      };
    } else {
      return {
        title: t("alert.general.title"),
        content: t("alert.general.content"),
      };
    }
  };

  const { title: alertTitle, content: alertContent } = getAlertContent();

  return (
    <Layout>
      <AlertDisplay
        showAlert={showAlert}
        title={alertTitle}
        content={alertContent}
        iconSrc={attentionIconSrc}
      />

      <StepBody
        title={title}
        subtitle={subtitle}
        options={options}
        selectedOptions={selectedOptions}
        step={step}
        handleChoiceChange={handleChoiceChange}
      />

      <ButtonGroup
        step={step}
        onNext={onNext}
        onPrevious={onPrevious}
        minStep={MIN_STEP}
        maxStep={MAX_STEP}
      />
    </Layout>
  );
};
