import React from "react";
import { Avatar, Typography, Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";

const NavbarItems = ({ name, role, avatar }) => {
  return (
    <Menu>
      <MenuHandler>
        {/* Profile Section */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Avatar size="md" src={avatar} alt={`${name || "User"} avatar`} />
          <div className="hidden sm:block">
            <Typography
              variant="h6"
              className="text-sm sm:text-base truncate max-w-[90px]"
              title={name} // Tooltip showing full name
            >
              {name}
            </Typography>
          </div>
        </div>
      </MenuHandler>
      <MenuList className="p-2">
        {/* Full Name and Role */}
        <MenuItem className="flex flex-col items-start gap-1">
          <Typography variant="h6" className="text-sm">
            {name}
          </Typography>
          <Typography variant="small" color="gray" className="font-normal text-xs">
            {role}
          </Typography>
        </MenuItem>
        <hr className="my-2" />
        {/* Sign Out Button */}
        <MenuItem className="text-red-500 hover:bg-red-100">
          Sign Out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavbarItems;
