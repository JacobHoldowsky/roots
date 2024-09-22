import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Example logo
import styles from "./HomePage.module.css"; // Import the CSS module

/**
 * HomePage Component
 * Renders the main landing page with Hero, Services, and Contact sections.
 */
const HomePage = () => {
  return (
    <div className={styles.homePage}>
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className={styles.homePageHero}
          aria-labelledby="hero-heading"
        >
          <div className={styles.heroContent}>
            <h1 id="hero-heading">Live Your Life to the Fullest</h1>
            <p>
              Empowering individuals through holistic therapeutic approaches for
              a balanced, healthy life.
            </p>
            <a href="#services" className={styles.btnPrimary}>
              Explore Our Services
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className={styles.homePageServices}
          aria-labelledby="services-heading"
        >
          <div className={styles.container}>
            <h2 id="services-heading">Our Services</h2>
            <div className={styles.serviceGrid}>
              {/* Growth and Development Service */}
              <Link
                to="/growth-and-development"
                className={styles.homePageService}
                aria-label="Growth and Development Service"
              >
                <div>
                  <h3>Growth and Development</h3>
                  <p>
                    Enhance daily living skills through tailored occupational
                    therapy interventions that address individual needs.
                  </p>
                </div>
              </Link>

              {/* Health and Wellness Service */}
              <Link
                to="/health-and-wellness"
                className={styles.homePageService}
                aria-label="Health and Wellness Service"
              >
                <div>
                  <h3>Health and Wellness</h3>
                  <p>
                    Natural remedies and bodywork therapies designed to promote
                    healing, relaxation, and holistic well-being.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className={styles.homePageContact}
          aria-labelledby="contact-heading"
        >
          <div className={styles.container}>
            <h2 id="contact-heading">Contact Roots</h2>
            <p>Please reach out through text or email.</p>
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
        </section>
      </main>
    </div>
  );
};

export default HomePage;
