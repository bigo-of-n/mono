import React from 'react';

const Main = ({ children }: { children: React.ReactNode }) => {
  return <main className="flex-grow p-4">{children}</main>;
};

export default Main;
