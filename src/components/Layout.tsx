import React from "react";
import { Footer } from "./Footer";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="mx-auto px-6 min-h-svh max-w-[1200px] flex flex-col">
      {children}
      <Footer />
    </div>
  );
};
