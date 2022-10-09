import React, { useState } from "react";

function Navbar() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <nav className="navbar">
      <a href="/" rel="noreferrer noopener" className="navbar__logo">
        RWN
      </a>
      <div
        className={`navbar__toggle ${active ? "active" : ""}`}
        id="mobile-menu"
        onClick={handleClick}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={`navbar__menu ${active ? "active" : ""}`}>
        <a href="/" rel="noreferrer noopener" className="navbar__link">
          Home
        </a>
        <a href="/" rel="noreferrer noopener" className="navbar__link">
          Service
        </a>
        <a href="/" rel="noreferrer noopener" className="navbar__link">
          Plans
        </a>
        <a href="/" rel="noreferrer noopener" className="navbar__link">
          Contact us
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
