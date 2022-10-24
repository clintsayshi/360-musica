import React, { useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { HiOutlineMenuAlt4, HiOutlineSearch, HiOutlineX } from "react-icons/hi";

import logo from "../../images/Logo.png";
import "./style.css";

function Navbar() {
  const searchRef = useRef();
  const [searchOn, setSearchOn] = useState(false);

  const openSearch = () => {
    setSearchOn(true);
    //searchRef.current.focus();
  };

  const closeSearch = () => {
    setSearchOn(false);
  };

  return (
    <nav className="border z-40">
      {/* Mobile */}
      <div className="xs-navigation container">
        <div className={`xs-logo-and-menu`}>
          <button className=" p-1 border">
            <HiOutlineMenuAlt4 className="text-3xl text-light" />
          </button>
          <div className=" aspect-square">
            <img className="h-10 text-black" src={logo} alt="" />
          </div>
        </div>

        <button onClick={openSearch} className={`p-1 border`}>
          <HiOutlineSearch className="text-3xl text-gray-400" />
        </button>

        <div className="hidden">
          <input
            ref={searchRef}
            className={` ${searchOn ? "search-input" : "search-input-hidden"}`}
            type="text"
            placeholder="Search artists"
          />
        </div>
      </div>

      {/* Table to Desktop */}
      <div className="sm-navigation flex space-x-6">
        <div className=" aspect-square">
          <img className="h-8 border" src={logo} alt="" />
        </div>

        <div className="flex w-1/2 items-center">
          <button onClick={openSearch} className={``}>
            <HiOutlineSearch className="text-gray-400" />
          </button>
          <input
            ref={searchRef}
            className="px-2 w-1/2 search-input"
            type="text"
            placeholder="Search artists"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
