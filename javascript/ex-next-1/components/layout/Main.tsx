import React from "react";

const Main = ({ children }: { children: React.ReactNode }) => {
  return <main className="flex-grow ">{children}</main>;
};

export default Main;
