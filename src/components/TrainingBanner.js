import React from "react";
import Slider from "react-slick"; // Ensure to install react-slick and slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mnriLogo from "../assets/logo.png";
import rmtLogo from "../assets/logo.png";
import tomatisLogo from "../assets/logo.png";
// Import other logos and styles
import styles from "./TrainingBanner.module.css";

const TrainingBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 12000, // Faster scroll speed
    slidesToShow: 2, // Show one at a time to mimic continuous scrolling
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // No pauses, continuous scrolling
    cssEase: "linear", // Continuous linear scrolling
    arrows: false, // Remove navigation arrows
    pauseOnHover: false, // Keep it moving even when hovered
  };

  return (
    <section className={styles.trainingTickerContainer}>
      {/* Reflex Integration Ticker */}
      <div className={`${styles.tickerSection} ${styles.reflexIntegration}`}>
        <h3>Reflex Integration</h3>
        <Slider {...settings} className={styles.bannerSlider}>
          <div className={styles.sliderItem}>
            <p>
              MNRI Masgutova Neuro Sensory Motor Reflex Integration (Level 3 CIT
              Specialist)
            </p>
          </div>
          <div className={styles.sliderItem}>
            <p>RMT Rhythmic Movement Training (Reflex Integration)</p>
          </div>
        </Slider>
      </div>

      {/* Neurodevelopmental Techniques Ticker */}
      <div className={`${styles.tickerSection} ${styles.neurodevelopmental}`}>
        <h3>Neurodevelopmental Techniques</h3>
        <Slider {...settings} className={styles.bannerSlider}>
          <div className={styles.sliderItem}>
            <p>NDT (Neuro Developmental Technique) Facilitation Course</p>
          </div>
          <div className={styles.sliderItem}>
            <p>TheraSuit Method</p>
          </div>
          <div className={styles.sliderItem}>
            <p>KinesioTaping Fundamentals and Advanced (KT1/KT2)</p>
          </div>
          <div className={styles.sliderItem}>
            <p>S’Cool Moves</p>
          </div>
          <div className={styles.sliderItem}>
            <p>Handle Level 1 & 2</p>
          </div>
          <div className={styles.sliderItem}>
            <p>Functional E-stim and Whole Body Vibration</p>
          </div>
          <div className={styles.sliderItem}>
            <p>HWT Handwriting Without Tears</p>
          </div>
          <div className={styles.sliderItem}>
            <p>
              Astronaut Training (A Sound Activated Vestibular-Visual Protocol)
            </p>
          </div>
          <div className={styles.sliderItem}>
            <p>Aquatic Therapy Methods</p>
          </div>
          <div className={styles.sliderItem}>
            <p>Good Vibrations</p>
          </div>
          <div className={styles.sliderItem}>
            <p>RGM Ronnie Gardiner Method</p>
          </div>
          <div className={styles.sliderItem}>
            <p>LAMP Language Acquistion Through Motor Planning</p>
          </div>
        </Slider>
      </div>

      {/* Therapeutic Listening Programs Ticker */}
      <div className={`${styles.tickerSection} ${styles.therapeuticListening}`}>
        <h3>Therapeutic Listening Programs</h3>
        <Slider {...settings} className={styles.bannerSlider}>
          <div className={styles.sliderItem}>
            <p>
              Unyte iLs Integrated Listening Systems: Focus System and Safe and
              Sound Protocol
            </p>
          </div>
          <div className={styles.sliderItem}>
            <p>Tomatis Method (Level 1, 2 & 3)</p>
          </div>
          <div className={styles.sliderItem}>
            <p>
              Quickshifts: Revolutionizing the Use of Sound in Sensorimotor
              Integrative Treatment
            </p>
          </div>
        </Slider>
      </div>

      {/* Sensory Integration Ticker */}
      <div className={`${styles.tickerSection} ${styles.sensoryIntegration}`}>
        <h3>Sensory Integration</h3>
        <Slider {...settings} className={styles.bannerSlider}>
          <div className={styles.sliderItem}>
            <p>Building Blocks for Sensory Integration</p>
          </div>
          <div className={styles.sliderItem}>
            <p>Sensory Motor Assessment and Intervention</p>
          </div>
          <div className={styles.sliderItem}>
            <p>Essentials of Sensory Integration Theory</p>
          </div>
          <div className={styles.sliderItem}>
            <p>Practical Sense in Sensory Integration</p>
          </div>
          <div className={styles.sliderItem}>
            <p>Sensory Signals: Navigating the Neural Pathways to Success</p>
          </div>
          <div className={styles.sliderItem}>
            <p>Interoception- The Eighth Sensory System</p>
          </div>
        </Slider>
      </div>

      {/* Bodywork Ticker */}
      <div className={`${styles.tickerSection} ${styles.bodywork}`}>
        <h3>Bodywork</h3>
        <Slider {...settings} className={styles.bannerSlider}>
          <div className={styles.sliderItem}>
            <p>Craniosacral Therapy 1 & 2, Upledger Institute</p>
          </div>
          <div className={styles.sliderItem}>
            <p>Brain 1, Chikley Health Institute</p>
          </div>
          <div className={styles.sliderItem}>
            <p>https://chiklyinstitute.com/Class/Brain/B1</p>
          </div>
          <div className={styles.sliderItem}>
            <p>
              {" "}
              Identifying & Correcting Anatomical, Digestive, & Breastfeeding
              Pathologies in Infants with CST and Focused Connective Tissue Work
            </p>
          </div>
          <div className={styles.sliderItem}>
            <p>Raindrop Technique</p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default TrainingBanner;
