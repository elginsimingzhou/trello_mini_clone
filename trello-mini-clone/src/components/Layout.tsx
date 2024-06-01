import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col bg-[#E5CFF7] min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
