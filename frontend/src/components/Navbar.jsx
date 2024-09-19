import React from "react";
import { NavLink } from "react-router-dom";
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from "react-icons/md";
const Navbar = ({ containerStyles }) => {
  return (
    <nav className={containerStyles}>
      <NavLink to={"/"} className={({isActive}) => isActive ? 'active_link' : ""}>
        <div className="flexCenter gap-x-1">
          <MdHomeFilled />
          Home
        </div>
      </NavLink>
      <NavLink to={"/mens"} className={({isActive}) => isActive ? 'active_link' : ""}>
        <div className="flexCenter gap-x-1">
          <MdCategory />
          Men
        </div>
      </NavLink>
      <NavLink to={"/womens"} className={({isActive}) => isActive ? 'active_link' : ""}>
        <div className="flexCenter gap-x-1">
          <MdShop2 />
          Women
        </div>
      </NavLink>
      <NavLink to={"/kids"} className={({isActive}) => isActive ? 'active_link' : ""}>
        <div className="flexCenter gap-x-1">
          <MdContacts />
          Kids
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
