import React from 'react';
import { ListItem, ListItemPrefix, ListItemSuffix, Chip } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const SidebarItem = ({ icon: Icon, text, badge,to }) => {
  return (
    <Link to={to}>
    <ListItem className="hover:bg-[#ECF2FF] hover:text-[#]">
      <ListItemPrefix>
        <Icon className="h-5 w-5" />
      </ListItemPrefix>
      {text}
      {badge && (
        <ListItemSuffix>
          <Chip value={badge} size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
        </ListItemSuffix>
      )}
    </ListItem>
    </Link>

  );
}

export default SidebarItem;