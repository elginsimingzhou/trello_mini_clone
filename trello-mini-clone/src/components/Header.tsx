import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  const content = (
    <header className="bg-[#5B0888]">
      <div className="flex flex-row ">
        <Navbar />
      </div>
    </header>
  );

  return content;
};

export default Header;
