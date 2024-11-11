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
              </Link>

              {/* Health and Wellness Service */}
              <Link
                to="/health-and-wellness"
                className={`${styles.homePageService} ${styles.heroLink}`}
                aria-label="Health and Wellness Service"
              >
                <img src={healthLogo} alt="Health and Wellness" />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        {/* Contact Information Section */}
      </main>
    </div>
  );
};

export default HomePage;
