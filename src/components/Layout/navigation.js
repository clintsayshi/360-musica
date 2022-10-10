import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button className="sm:hidden">Menu</button>
          <div>Logo</div>
        </div>

        <div>
          <button>Search</button>
          <input className="hidden" type="text" placeholder="Search artists" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
