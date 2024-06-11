import React from "react";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      {/* left  */}
      <div className="navbar-logo-container">
        <p>LOGO</p>
      </div>
      {/* right  */}
      <div className="navbar-options-container">
        <p>Hi, Name!</p>
        <p>Home</p>
        <p>Logout</p>
      </div>
    </div>
  );
}
export default Navbar;
