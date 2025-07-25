import { Rabbit } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center">
      <Rabbit className="mr-2" />
      <h1 className="text-2xl font-bold">MyNextNotes</h1>
    </header>
  );
};

export default Header;
