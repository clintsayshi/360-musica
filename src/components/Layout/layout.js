import React from "react";
import { Link } from "react-router-dom";
import NowPlaying from "../NowPlaying";
import Navbar from "./navigation";
import SideNavigation from "./side-navigation";

const navlinks = [
  ["Home", "/"],
  ["My collections", "/collections"],
  ["Radio", "/radio"],
  ["Music Videos", "/music-videos"],
];

function Layout({ children }) {
  return (
    <div className="relative">
      <Navbar />

      <div className="border px-4 sm:flex z-50">
        <SideNavigation />
        <main className="border sm:flex-1 ">{children}</main>
      </div>

      <NowPlaying />
    </div>
  );
}

export default Layout;
