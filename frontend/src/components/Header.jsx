import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import { MdClose, MdMenu } from 'react-icons/md';
import { FaOpencart } from 'react-icons/fa';
import { ShopContext } from '../Context/ShopContext';
// Import images
import logo from "../assets/logo.png";
import logout from "../assets/logout.svg";
import user from "../assets/user.svg";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  // Toggle menu function
  const toggleMenu = () => setMenuOpened(!menuOpened);
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-slate-900/5 z-10">
      <div className="mx-4 flexBetween my-3 max-xs:px-2">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              height={200}
              width={170}
            
            />
          </Link>
        </div>

        {/* Navbar Desktop */}
        <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"} />

        {/* Navbar Mobile */}
        <Navbar
          containerStyles={`${
            menuOpened
              ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
              : "flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
          }`}
        />

        {/* Buttons */}
        <div className="flexBetween gap-x-1 sm:gap-x-2 bold-16">
          {!menuOpened ? (
            <MdMenu
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-secondary"
              onClick={toggleMenu} 
            />
          )}

          <div className="flexBetween sm:gap-x-6 cursor-pointer hover:text-secondary">
            <NavLink to={"cart-page"} className={"flex"}>
              <FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full" />
              <span className="relative flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14 -top-2">{getTotalCartItems()}</span>
            </NavLink>
            <NavLink
              to={"logout"}
              className={`md:flex block btn_secondary_rounded flexCenter gap-x-2 medium-16`}
            >
              <img src={logout} alt="Logout" height={19} width={19} />
              Logout
            </NavLink>
            <NavLink
              to={"login"}
              className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}
            >
              <img src={user} alt="Login" height={19} width={19} />
              Login
            </NavLink>
          </div>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Header;
