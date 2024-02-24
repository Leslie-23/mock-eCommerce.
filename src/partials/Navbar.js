import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={isOpen ? "dash open" : "dash"}></div>
        <div className={isOpen ? "dash open" : "dash"}></div>
        <div className={isOpen ? "dash open" : "dash"}></div>
      </div>
      <ul className={isOpen ? "open" : ""}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        {/*  <li>
          <a className="darkMode">Dark Mode</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
