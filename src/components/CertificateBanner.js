import React from "react";
import Slider from "react-slick"; // Ensure to install react-slick and slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rmtLogo from "../assets/logo.png";
import tomatisLogo from "../assets/logo.png";
// Import other logos and styles
import styles from "./CertificateBanner.module.css";

import mnriLogo from "../assets/MNRI1.png";
import mnriLogo2 from "../assets/MNRI2.png";
import mnriLogo3 from "../assets/MNRI3.png";
import mnriLogo4 from "../assets/MNRI4.png";
import mnriLogo5 from "../assets/MNRI5.png";
import mnriLogo6 from "../assets/MNRI6.png";
import mnriLogo7 from "../assets/MNRI7.png";
import mnriLogo8 from "../assets/MNRI8.png";
import mnriLogo9 from "../assets/MNRI9.png";
import mnriLogo10 from "../assets/MNRI10.png";
import mnriLogo11 from "../assets/MNRI11.png";
import mnriLogo12 from "../assets/MNRI12.png";
import mnriLogo13 from "../assets/MNRI13.png";
import mnriLogo14 from "../assets/MNRI14.png";
import mnriLogo15 from "../assets/MNRI15.png";
import mnriLogo16 from "../assets/MNRI16.png";
import mnriLogo17 from "../assets/MNRI17.png";
import mnriLogo18 from "../assets/MNRI18.png";
import mnriLogo19 from "../assets/MNRI19.png";
import mnriLogo20 from "../assets/MNRI20.png";
import mnriLogo21 from "../assets/MNRI21.png";
import essentialsOfSi from "../assets/essentialsOfSi.png";
import ndtCertificate from "../assets/ndtCertificate.png";

const CertificateBanner = () => {
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

  const certificates = [
    mnriLogo,
    mnriLogo2,
    mnriLogo3,
    mnriLogo4,
    mnriLogo5,
    mnriLogo6,
    mnriLogo7,
    mnriLogo8,
    mnriLogo9,
    mnriLogo10,
    mnriLogo11,
    mnriLogo12,
    mnriLogo13,
    mnriLogo14,
    mnriLogo15,
    mnriLogo16,
    mnriLogo17,
    mnriLogo18,
    mnriLogo19,
    mnriLogo20,
    mnriLogo21,
    essentialsOfSi,
    ndtCertificate,
  ];

  return (
    <section className={styles.trainingTickerContainer}>
      {/* Reflex Integration Ticker */}
      <div className={`${styles.tickerSection} ${styles.reflexIntegration}`}>
        <Slider {...settings} className={styles.bannerSlider}>
          {certificates.map((logo, index) => (
            <div className={styles.sliderItem}>
              <img
                src={logo}
                alt={`Certification ${index}`}
                key={index}
                className={styles.clickableImage} // Add a cursor style for clarity
              />
            </div>
          ))}

         
        </Slider>
      </div>
    </section>
  );
};

export default CertificateBanner;
