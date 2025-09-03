import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import healthLogo from "../assets/healthbtn3.png";
import logo from "../assets/growthbtn2.png";
import styles from "./HomePage.module.css";
import PromoModal from "../components/PromoModal";
import bookCover from "../assets/bookCover.jpg";

/**
 * HomePage Component
 * Renders the main landing page with Hero and Contact sections.
 */
const HomePage = () => {
  const [isPromoOpen, setIsPromoOpen] = useState(false);

  useEffect(() => {
    // Show promo once per session
    const seen = sessionStorage.getItem("seenPromoModal");
    if (!seen) {
      setIsPromoOpen(true);
      sessionStorage.setItem("seenPromoModal", "true");
    }
  }, []);

  return (
    <div className={styles.homePage}>
      <PromoModal
        isOpen={isPromoOpen}
        onClose={() => setIsPromoOpen(false)}
        imageSrc={bookCover}
      />
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className={styles.homePageHero}
          aria-labelledby="hero-heading"
        >
          <div className={styles.heroContent}>
            <div>
              <h1>Roots occupational therapy</h1>
              <h2>Mimi Birnbaum, OTR/L</h2>
            </div>
            <div className={styles.heroLinks}>
              {/* Growth and Development Service */}
              <Link
                to="/growth-and-development"
                className={styles.heroLink}
                aria-label="Growth and Development Service"
              >
                <img src={logo} alt="Growth and Development" />
              </Link>

              {/* Health and Wellness Service */}
              <Link
                to="/health-and-wellness"
                className={styles.heroLink}
                aria-label="Health and Wellness Service"
              >
                <img src={healthLogo} alt="Health and Wellness" />
              </Link>
            </div>
            <div className={styles.blast}>LIVE YOUR LIFE TO THE FULLEST</div>
          </div>
        </section>

        {/* Contact Section */}
        {/* Contact Information Section */}
      </main>
    </div>
  );
};

export default HomePage;
