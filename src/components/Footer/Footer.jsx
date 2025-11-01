// components/Footer/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="brand">
          <h3>JeffTech</h3>
          <p className="muted">Building clean, responsive experiences.</p>
        </div>

        <div className="links">
          <a href="#skills">Skills</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="copy">© {year} Adeyemo Oluwaferanmi</div>
      </div>
    </footer>
  );
};

export default Footer;
