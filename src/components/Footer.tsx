import React from "react";

interface Props {}

export const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className="text-lightGray font-normal mt-7 mb-4 flex flex-col gap-4">
      <hr className="border-hrGray border-1" />
      <div className="flex flex-col items-center text-center tracking-onePercent">
        <div>Outpatient Clinic - Department of Cardiology</div>
        <div>General Hospital of South Carolina</div>
      </div>
    </footer>
  );
};
