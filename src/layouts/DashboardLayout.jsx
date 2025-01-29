import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div className="w-screen h-screen flex">
      {/* Sidebar */}
      <div className="w-64 h-screen fixed left-0 top-0 hidden lg:block">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 lg:ml-64 flex flex-col h-screen ">
        {/* Navbar */}
        <Navbar />
        {/* Outlet (Main Page Content) */}
        <div className="flex-1 overflow-auto p-4 bg-[#f4f6f8]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
