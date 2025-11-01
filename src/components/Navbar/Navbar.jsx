// components/Navbar/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="portfolio-txt">
        <h2>JeffTech</h2>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks">
        <li><a className="links" href="#home" onClick={closeMenu}>Home</a></li>
        <li><a className="links" href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a className="links" href="#project" onClick={closeMenu}>Projects</a></li>
        <li><a className="links" href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      <div className="menu-icon" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="36px"
          viewBox="0 -960 960 960"
          width="36px"
          fill="#facc15"
        >
          <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
