import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo2 from "../assets/logo2.png"; // Replace with your actual logo2 path
import logo4 from "../assets/logo4.png"; // Replace with your actual logo2 path
import styles from "./Header.module.css"; // Import the CSS module

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const renderNavLinks = () => (
    <>
      <li>
        <NavLink
          to="/"
          onClick={closeMobileMenu}
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
          exact="true"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          onClick={closeMobileMenu}
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/growth-and-development"
          onClick={closeMobileMenu}
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
        >
          Growth & Development
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/health-and-wellness"
          onClick={closeMobileMenu}
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
        >
          Health & Wellness
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to="/contact"
          onClick={closeMobileMenu}
          className={({ isActive }) => (isActive ? styles.activeLink : "")}
        >
          Contact
        </NavLink>
      </li> */}
    </>
  );

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* logo2 */}
        <div className={styles.headerLogo}>
          <Link to="/" onClick={closeMobileMenu}>
            <img src={logo4} alt="Roots Therapy logo2" />
          </Link>
        </div>

        {/* Navigation */}
        <nav
          className={`${styles.headerNav} ${
            isMobileMenuOpen ? styles.navActive : ""
          }`}
          aria-label="Main Navigation"
        >
          <ul>{renderNavLinks()}</ul>
        </nav>

        {/* Hamburger Menu */}
        <button
          className={`${styles.headerHamburger} ${
            isMobileMenuOpen ? styles.hamburgerActive : ""
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
