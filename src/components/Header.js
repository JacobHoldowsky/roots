// src/components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Replace with your actual logo path
import "./Header.css"; // Import the CSS file

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <Link to="/" onClick={closeMobileMenu}>
            <img src={logo} alt="Roots Therapy Logo" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className={`header-nav ${isMobileMenuOpen ? "nav-active" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/growth-development" onClick={closeMobileMenu}>
                Growth & Development
              </Link>
            </li>
            <li>
              <Link to="/health-wellness" onClick={closeMobileMenu}>
                Health & Wellness
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu */}
        <div
          className={`header-hamburger ${
            isMobileMenuOpen ? "hamburger-active" : ""
          }`}
          onClick={toggleMobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
