import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navigation";

const navlinks = [
  ["Home", "/"],
  ["My collections", "/collections"],
  ["Radio", "/radio"],
  ["Music Videos", "/music-videos"],
];

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <aside>
        <ul>
          {navlinks.map(([title, url], index) => (
            <li key={index}>
              <Link to={url}>
                <span>{title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <main>{children}</main>
      <footer className="textr-center w-full py-4">End of page</footer>
    </div>
  );
}

export default Layout;
