// src/pages/HomePage.js
import React from "react";
import logo from "../assets/logo.png"; // Example logo
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Header with Navigation */}

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="hero" className="home-page-hero">
          <div className="hero-content">
            <h1>Live your life to the fullest</h1>
            <a href="#services" className="btn-primary">
              Explore Our Services
            </a>
          </div>
        </section>

        {/* About Section */}

        {/* Services Section */}
        <section id="services" className="home-page-services">
          <div className="home-page-service">
            <h2>Occupational Therapy</h2>
            {/* Add an icon or image here if desired */}
            <p>
              Professional occupational therapy services to enhance your daily
              living skills.
            </p>
          </div>
          <div className="home-page-service">
            <h2>Bodywork and Herbs</h2>
            {/* Add an icon or image here if desired */}
            <p>
              Natural remedies and therapies to promote healing and relaxation.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="home-page-contact">
          <h2>Contact Us</h2>
          <p>
            Email:{" "}
            <a href="mailto:appointmentsbymimi@gmail.com">
              appointmentsbymimi@gmail.com
            </a>
          </p>
          <p>
            Text: <a href="tel:+18454459230">(845) 445-9230</a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="home-page-footer">
        <p>&copy; {new Date().getFullYear()} Roots. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
