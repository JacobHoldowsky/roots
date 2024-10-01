import React from "react";
import { Link } from "react-router-dom";
import healthLogo from "../assets/healthLogo.png";
import logo from "../assets/logo.png";
import styles from "./HomePage.module.css";

/**
 * HomePage Component
 * Renders the main landing page with Hero and Contact sections.
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
            <div className={styles.heroLinks}>
              {/* Growth and Development Service */}
              <Link
                to="/growth-and-development"
                className={`${styles.homePageService} ${styles.heroLink}`}
                aria-label="Growth and Development Service"
              >
                <img src={logo} alt="Growth and Development" />
                <h3>Growth and Development</h3>
              </Link>

              {/* Health and Wellness Service */}
              <Link
                to="/health-and-wellness"
                className={`${styles.homePageService} ${styles.heroLink}`}
                aria-label="Health and Wellness Service"
              >
                <img src={healthLogo} alt="Health and Wellness" />
                <h3>Health and Wellness</h3>
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
