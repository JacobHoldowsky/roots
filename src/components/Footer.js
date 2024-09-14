// src/components/Footer.js
import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <p>
            © {new Date().getFullYear()} Roots Therapy. All rights reserved.
          </p>
          <p>
            Email:{" "}
            <a href="mailto:appointmentsbymimi@gmail.com">
              appointmentsbymimi@gmail.com
            </a>
          </p>
          <p>
            Text: <a href="tel:+18454459230">(845) 445-9230</a>
          </p>
        </div>
        <div className="footer-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;