import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets.js";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";
import Profile from "./Profile.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");

    localStorage.removeItem("token");
    setToken("");
    console.log("token after logout", token);

    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* logo */}
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-36" />
      </Link>
      {/* links */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-0">
          <p>HOME</p>
          {/* to display line under home link */}
          <hr className="w-3/4 border-none hidden h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-0">
          <p>COLLECTION</p>
          <hr className="w-3/4 border-none hidden h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-0">
          <p>ABOUT</p>
          <hr className="w-3/4 border-none hidden h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-0">
          <p>CONTACT</p>
          <hr className="w-3/4 border-none hidden h-[1.5px] bg-gray-700" />
        </NavLink>
      </ul>

      {/* search and profile */}
      <div className="flex items-center gap-6">
        {/* search icon */}
        {window.location.pathname === "/collection" && (
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            alt="search"
            className="w-5 cursor-pointer"
          />
        )}
        {/* profile icon */}
        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt="profile"
          />

          {/* profile dropdown visible on hover on profile icon */}
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p
                  className="cursor-pointer hover:text-black"
                  onClick={() => setShowProfile(true)}
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        {/* cart icon */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4  bg-black  text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        {/* hamburger icon for small screens */}

        <img
          onClick={() => setOpen(!open)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {/* sidebar menu for small screens */}

      {open && (
        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all w-full`}
        >
          <div className="flex flex-col text-gray-600">
            {/* close menu */}
            <div
              onClick={() => setOpen(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <img
                className="h-4 rotate-180"
                src={assets.dropdown_icon}
                alt=""
              />
              <p>Back</p>
            </div>
            {/* links */}
            <NavLink
              onClick={() => setOpen(false)}
              className="py-2 pl-6 border-b border-t"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              className="py-2 pl-6 border-b"
              to="/collection"
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              className="py-2 pl-6 border-b "
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              className="py-2 pl-6 "
              to="/contact"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      )}
      {showProfile && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white w-[90%] max-w-md p-6 rounded-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setShowProfile(false)}
              className="absolute top-2 right-3 text-gray-600 text-xl"
            >
              ✕
            </button>

            <Profile />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
