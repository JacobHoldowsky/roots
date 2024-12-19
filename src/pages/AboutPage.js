import React, { useState } from "react";
import TrainingBanner from "../components/TrainingBanner.js";
import styles from "./AboutPage.module.css";
import mimiImage from "../assets/logo.png"; // Replace with actual image paths
import mnriLogo from "../assets/logo.png";
import rmtLogo from "../assets/logo.png";
import tomatisLogo from "../assets/logo.png";
import TestimonialsSlider from "../components/TestimonialsSlider.js";

const AboutPage = () => {
  const [showMoreRootsHealth, setShowMoreRootsHealth] = useState(false);
  const [showMoreAboutMimi, setShowMoreAboutMimi] = useState(false);
  const [showMoreTestimonials, setShowMoreTestimonials] = useState({});

  // Handle "see more" toggles
  const toggleSeeMoreRootsHealth = () => {
    setShowMoreRootsHealth(!showMoreRootsHealth);
  };

  const toggleSeeMoreAboutMimi = () => {
    setShowMoreAboutMimi(!showMoreAboutMimi);
  };

  const toggleSeeMoreTestimonial = (id) => {
    setShowMoreTestimonials((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className={styles.aboutPage}>
      {/* About Roots Section */}
      <section className={`${styles.aboutSection} ${styles.aboutRoots}`}>
        <h1>About Roots</h1>
        <p>
          Roots is a therapy practice dedicated to helping women, infants, and
          children through therapeutic interventions and consulting services.
          Roots consists of two divisions:
        </p>
        <div className={styles.aboutRootsContent}>
          <div className={styles.rootsItem}>
            <h2>Roots for Growth and Development</h2>
            <p>
              Focuses on issues related to developmental delays,
              movement/coordination difficulties, sensory dysregulation,
              attention and focusing, visual processing, auditory processing,
              and body-based learning difficulties. Treatment modalities include
              sensory processing, sensory motor integration, reflex integration,
              and therapeutic listening programs.
            </p>
          </div>
          <div className={styles.rootsItem}>
            <h2>Roots for Health and Wellness</h2>
            <p>
              Focuses on issues related to the musculoskeletal system, immune
              system, nervous system, digestive system, as well as hormonal
              imbalances and more. Treatment modalities include a variety of
              bodywork methods and custom herbal formulations and supplements.
            </p>
            {!showMoreRootsHealth && (
              <button
                className={styles.btnToggle}
                onClick={toggleSeeMoreRootsHealth}
              >
                See more
              </button>
            )}
            {showMoreRootsHealth && (
              <p>
                At Roots, we believe in a holistic approach to therapy. This
                means addressing the body, mind, and spirit together for
                complete wellness. By integrating different therapy methods, we
                help clients achieve better overall health outcomes.
              </p>
            )}
            {showMoreRootsHealth && (
              <button
                className={styles.btnToggle}
                onClick={toggleSeeMoreRootsHealth}
              >
                See less
              </button>
            )}
          </div>
        </div>
      </section>

      {/* About Mimi Section */}
      <section className={`${styles.aboutSection} ${styles.aboutMimi}`}>
        <div className={styles.aboutMimi}>
          <div className={styles.aboutMimiContent}>
            <h2>About Mimi</h2>
            <p>
              Since graduating from Downstate Medical Center’s occupational
              therapy program in 2010, Mimi continues to learn techniques to
              broaden her skills within traditional occupational therapy and
              beyond. She seeks to understand the whole person, and get to the
              root of the presenting concerns. Mimi has extensive training in
              sensory motor integration, numerous bodywork modalities, including
              craniosacral therapy and visceral manipulation, MNRI (Level III
              practitioner), and the Tomatis Listening Program (Level III
              practitioner). She has also participated in a 2 year program at
              David Winston’s Center for Herbal Studies.
            </p>
            {!showMoreAboutMimi && (
              <button
                className={styles.btnToggle}
                onClick={toggleSeeMoreAboutMimi}
              >
                See more
              </button>
            )}
            {showMoreAboutMimi && (
              <div>
                <p>
                  Mimi incorporates multiple modalities from her vast training
                  experiences to help her clients maximize their potential. She
                  has a broad range of experience in treating clients with a
                  wide variety of diagnoses and concerns. Mimi’s experience has
                  led her to support clients and caregivers to take
                  responsibility for their therapy process, as she believes that
                  is the key to lasting success. Her role encompasses more than
                  just a practitioner but an educator, consultant, and guide in
                  coaching people in their journey towards success. Carry over
                  home programs of exercises and therapeutic principles are a
                  mandatory and integral part of the process.
                </p>
                <p>
                  The passion Mimi brings to her work is coupled with a genuine
                  desire to help people rise above their challenges. Due to her
                  goal oriented approach, Mimi will help find the necessary
                  therapeutic interventions, whether it is through the wide
                  range of modalities she uses or by helping to find another
                  pracitioner or modality to match one’s needs. Mimi networks
                  and collaberates with other professionals in related fields
                  including doctors and specialists, speech language
                  pathologists, phyiscal therapists, social workers and more in
                  order to ensure that her clients are getting their needs met.
                </p>
                <p>
                  Although Mimi has developed a successful framework and system
                  that has proven results throughtout the year, she treats each
                  client in a unique and individualized way. Taking into account
                  the clients environment, family dynamics, personality, and
                  resources, each client gets their own personalized program.
                </p>
                <button
                  className={styles.btnToggle}
                  onClick={toggleSeeMoreAboutMimi}
                >
                  See less
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <TestimonialsSlider />

      {/* Training and Certifications Slider */}
      <section className={styles.trainingBanner}>
        <h2>Trained by the Experts</h2>
        <TrainingBanner />
      </section>

      {/* Contact Information Section */}
    </div>
  );
};

export default AboutPage;
