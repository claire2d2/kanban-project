import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="Layout flex flex-col max-h-screen">
      <NavBar />
      <div style={{ height: "calc(100vh - 120px)" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
