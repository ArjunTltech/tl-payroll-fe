import React from "react";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  const user = {
    name: "Shilpa",
    role: "HR Manager",
    avatar: "https://img.freepik.com/free-photo/portrait-young-beautiful-smiling-hipster-girl-trendy-summer-checkered-shirt-jeans-clothes_158538-3329.jpg?t=st=1737532862~exp=1737536462~hmac=ecf1ad60265831ba07a84ba54af41760c47cfae8633c2e1d50b2e9ed015a6264&w=740",
    // avatar: "https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?t=st=1737532711~exp=1737536311~hmac=f1ac831557318f7f7b03c3eddaf80990a4b9948845cdeb9be3b2ea0a2643adfd&w=740",
  };

  return (
    <div className="h-16 bg-white flex items-center justify-between px-4 w-full sm:px-6 lg:px-16 shadow-md">
      {/* Left Spacer */}
      <div className="flex-1"></div>
      
      {/* Logo Section */}
      {/* <div className="absolute left-1/2 transform -translate-x-1/2 ">
        <img className="text-xl font-bold text-gray-800 lg:w-52"  src="/images/logoMock.png"/>
      </div> */}

      {/* Profile Section */}
      <div className="flex items-center">
        <NavbarItems name={user.name} role={user.role} avatar={user.avatar} />
      </div>
    </div>
  );
};

export default Navbar;
