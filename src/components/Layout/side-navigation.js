import React from "react";
import { Link } from "react-router-dom";
import { HiHome, HiFilm } from "react-icons/hi";
import { IoLogOut } from "react-icons/io5";
import { BsPersonFill } from "react-icons/bs";
import { TbRadio } from "react-icons/tb";
import { MdMusicVideo } from "react-icons/md";

const SideNavigation = () => {
  return (
    <aside className="aside-navigation">
      <ul className=" sm:px-3 py-6 sm:bg-dark-alt space-y-6 sm:rounded-full">
        <li>
          <Link className="flex  items-center gap-6 group" to="/">
            <HiHome className="text-2xl text-light opacity-50 group-hover:opacity-100 group-hover:text-secondary sm:text-2xl" />
            <span className="sm:hidden text-lg font-medium text-light opacity-50 group-hover:opacity-100 group-hover:text-white focus-within:text-white">
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-6 group" to="/">
            <MdMusicVideo className="text-2xl text-light opacity-50 group-hover:opacity-100 group-hover:text-secondary sm:text-2xl" />
            <span className="sm:hidden text-lg font-medium text-light opacity-50 group-hover:opacity-100 group-hover:text-white focus-within:text-white">
              My Collections
            </span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-6 group" to="/">
            <TbRadio className="text-2xl text-light opacity-50 group-hover:opacity-100 group-hover:text-secondary sm:text-2xl" />
            <span className="sm:hidden text-lg font-medium text-light opacity-50 group-hover:opacity-100 group-hover:text-white focus-within:text-white">
              Radio
            </span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-6 group" to="/">
            <HiFilm className="text-2xl text-light opacity-50 group-hover:opacity-100 group-hover:text-secondary sm:text-2xl" />
            <span className="sm:hidden text-lg font-medium text-light opacity-50 group-hover:opacity-100 group-hover:text-white focus-within:text-white">
              Music Videos
            </span>
          </Link>
        </li>
      </ul>

      <ul className=" sm:px-3 py-6 sm:bg-dark-alt space-y-6 sm:rounded-full">
        <li>
          <Link className="flex items-center gap-6 group" to="/">
            <BsPersonFill className="text-2xl text-light opacity-50 group-hover:opacity-100 group-hover:text-secondary sm:text-2xl" />
            <span className="sm:hidden text-lg font-medium text-light opacity-50 group-hover:opacity-100 group-hover:text-white focus-within:text-white">
              Account
            </span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-6 group" to="/">
            <IoLogOut className="text-2xl text-light opacity-50 group-hover:opacity-100 group-hover:text-secondary sm:text-2xl" />
            <span className="sm:hidden text-lg font-medium text-light opacity-50 group-hover:opacity-100 group-hover:text-white focus-within:text-white">
              Logout
            </span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideNavigation;
