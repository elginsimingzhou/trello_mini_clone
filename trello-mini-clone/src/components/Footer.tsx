import React from "react";

const Footer = () => {
  const year: number = new Date().getFullYear();
  const content = <footer className="flex justify-center p-2 font-bold bg-[#5B0888] text-white">Fake trello &copy; {year}</footer>;
  return content;
};

export default Footer;
