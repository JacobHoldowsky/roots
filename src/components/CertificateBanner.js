import React, { useState } from "react";
import Slider from "react-slick"; // Ensure to install react-slick and slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rmtLogo from "../assets/logo.png";
import tomatisLogo from "../assets/logo.png";
// Import other logos and styles
import styles from "./CertificateBanner.module.css";

const CertificateBanner = (props) => {
  const { certificates } = props;
  const [modalImage, setModalImage] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 10000, // Faster scroll speed
    slidesToShow: 1, // Show only one at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true,
    autoplaySpeed: 0, // No pauses, continuous scrolling
    cssEase: "linear", // Continuous linear scrolling
    arrows: false,
    pauseOnHover: false,
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section className={styles.trainingTickerContainer}>
      {/* Reflex Integration Ticker */}
      <div className={`${styles.tickerSection} ${styles.reflexIntegration}`}>
        <Slider {...settings} className={styles.bannerSlider}>
          {certificates.map((logo, index) => (
            <div className={styles.sliderItem} key={index}>
              <img
                src={logo}
                alt={`Certification ${index}`}
                className={styles.clickableImage}
                onClick={() => openModal(logo)}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal */}
      {modalImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={styles.closeButton} onClick={closeModal}>
              &times;
            </span>
            <img src={modalImage} alt="Modal" className={styles.modalImage} />
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificateBanner;
