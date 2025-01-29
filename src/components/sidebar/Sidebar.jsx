import React from 'react';
import { Card, List, Typography } from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    CurrencyDollarIcon
  } from "@heroicons/react/24/solid";
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <Card className=" h-[100vh] w-full max-w-[20rem] p-[1rem] " style={{boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)"}}>
      <div className=" mt-[1rem] p-[1rem]">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List >
        <SidebarItem icon={PresentationChartBarIcon} text="Dashboard"  to="/"/>
        <SidebarItem icon={ShoppingBagIcon} text="Employees" to="/employees" />
        <SidebarItem icon={CurrencyDollarIcon} text="Payment History" to="" />
        {/* <SidebarItem icon={InboxIcon} text="Inbox" badge="14" to="" /> */}
        {/* <SidebarItem icon={UserCircleIcon} text="Profile" to="" /> */}
        <SidebarItem icon={Cog6ToothIcon} text="Settings"  to=""/>
        <SidebarItem icon={PowerIcon} text="Log Out" to="" />
      </List>
    </Card>
  );
}

export default Sidebar;