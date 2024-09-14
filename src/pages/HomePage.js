// src/pages/HomePage.js
import React from "react";
import logo from "../assets/logo.png"; // Example logo
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Header with Navigation */}
      <header className="home-page-header">
        <div className="header-logo">
          <img src={logo} alt="Roots Logo" />
        </div>
        <nav className="header-nav">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/growth">Growth & Development</a></li>
            <li><a href="/health">Health & Wellness</a></li>
          </ul>
        </nav>
      </header>

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
        <section id="about" className="home-page-about">
          <div className="container">
            <h2>About Us</h2>
            <p>
              {/* Add a description about your company or services here */}
              We are dedicated to providing exceptional care to help you achieve your fullest potential.
            </p>
          </div>
        </section>

        {/* Growth & Development Section */}
        <section id="growth" className="home-page-growth">
          <div className="container">
            <h2>Growth & Development</h2>
            <p>
              {/* Add details about growth and development services */}
              Our programs are designed to support your personal and professional growth.
            </p>
          </div>
        </section>

        {/* Health & Wellness Section */}
        <section id="health" className="home-page-health">
          <div className="container">
            <h2>Health & Wellness</h2>
            <p>
              {/* Add information about health and wellness offerings */}
              We offer a holistic approach to health and wellness to improve your overall well-being.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="home-page-services">
          <div className="home-page-service">
            <h2>Occupational Therapy</h2>
            {/* Add an icon or image here if desired */}
            <p>Professional occupational therapy services to enhance your daily living skills.</p>
          </div>
          <div className="home-page-service">
            <h2>Bodywork and Herbs</h2>
            {/* Add an icon or image here if desired */}
            <p>Natural remedies and therapies to promote healing and relaxation.</p>
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
