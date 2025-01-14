import React from "react";
import "./Footer.css"; // Import the updated CSS file

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
            Text: <a href="sms:+18454459230">(845) 445-9230</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
