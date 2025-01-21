import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/sidebar';
// import Navbar from '../components/navbar/navbar';

const DashboardLayout = () => {
  return (
    <div className="w-screen h-screen flex">
      {/* Sidebar */}
      <div className="w-64 h-screen fixed left-0 top-0 ">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col h-screen">
        {/* Navbar */}
        <div className="h-16 bg-blue-600 text-white flex items-center px-4">
          {/* <Navbar /> */}
          navbar
        </div>
        {/* Outlet (Main Page Content) */}
        <div className="flex-1 overflow-auto p-4 bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
