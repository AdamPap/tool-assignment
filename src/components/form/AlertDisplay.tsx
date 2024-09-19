import React from "react";
import { Alert } from "../Alert";

interface Props {
  showAlert: boolean;
  title: string;
  content: string;
  iconSrc: string;
}

export const AlertDisplay: React.FC<Props> = ({
  showAlert,
  title,
  content,
  iconSrc,
}) => {
  return (
    <div className="overflow-hidden">
      <div
        className={`transition-all duration-300 ${
          showAlert ? "opacity-100 scale-100 h-auto" : "opacity-0 scale-95 h-0"
        }`}
      >
        <Alert
          title={title}
          content={content}
          iconSrc={iconSrc}
        />
      </div>
    </div>
  );
};
