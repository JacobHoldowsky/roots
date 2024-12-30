import React, { useState } from "react";
import styles from "./WellnessPage.module.css"; // Using CSS module
import craniosacralWork from "../assets/craniosacralWork.webp"; // Replace with actual image paths
import MNRI from "../assets/MNRI.webp";
import visceralManipulation from "../assets/visceralManipulation.webp";
import raindropTechnique from "../assets/raindropTechnique.webp";
import customHerbalFormulations from "../assets/customHerbalFormulations.webp";
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
import cstLogo from "../assets/cstCertificate.png";
import cstLogo2 from "../assets/cstCertificate2.png";
import visceralLogo from "../assets/visceralCertificate.png";
import visceralLogo2 from "../assets/visceralCertificate2.png";
import muscularProblems from "../assets/muscularProblems.webp";
import poorImmuneSystem from "../assets/poorImmuneSystem.webp";
import nervousSystemDysregulation from "../assets/nervousSystemDysregulation.webp";
import womensHealth from "../assets/womensHealth.webp";
import digestiveIssues from "../assets/digestiveIssues.webp";
import otherPhysicalConcerns from "../assets/otherPhysicalConcerns.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CertificateBanner from "../components/CertificateBanner";
import massageTable from "../assets/massageTable.png";
import TomatisLogo from "../assets/tomatis logo.png";
import MnriLogo from "../assets/mnri logo.jpg";
import BarralLogo from "../assets/barralLogo.png";
import UpledgerLogo from "../assets/upledgerLogo.png";

const certificates = [visceralLogo, visceralLogo2, cstLogo, cstLogo2];

const Modal = ({ show, onClose, imgSrc }) => {
  if (!show) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={imgSrc} alt="Enlarged certificate" />
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const HealthAndWellnessPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={styles.healthWellnessPage}>
      {/* WHO Section */}
      <section className={styles.section}>
        <h1 className={styles.header}>Health & Wellness</h1>
        <h2 className={styles.subHeader}>
          Can you identify with any of these?
        </h2>
        <div className={styles.challenges}>
          {[
            {
              image: (
                <i
                  className="fa-solid fa-x-ray text-red-500 fa-2xl"
                  style={{ color: "#0f728a" }}
                ></i>
              ),
              alt: "Muscular/ skeletal problems",
              description: "Muscular/ skeletal problems",
              examples:
                "Torticolsis, back pain, flat feet, scoliosis, postural asymmetry",
            },
            {
              image: (
                <i
                  class="fa-solid fa-viruses fa-2xl"
                  style={{ color: "#0f728a" }}
                ></i>
              ),
              alt: "Poor immune system",
              description: "Poor immune system",
              examples: "Ear infections, eczema",
            },

            {
              image: (
                <i
                  class="fa-solid fa-person-dress fa-2xl"
                  style={{ color: "#0f728a" }}
                ></i>
              ),
              alt: "Women’s health concerns/Hormonal imbalance",
              description: "Women’s health concerns/Hormonal imbalance",
              examples: "PMS, PCOS",
            },
            {
              image: (
                <i
                  class="fa-solid fa-utensils fa-2xl"
                  style={{ color: "#0f728a" }}
                ></i>
              ),
              alt: "Digestive issues",
              description: "Digestive issues",
              examples: "reflux, constipation",
            },
            {
              image: (
                <i
                  class="fa-solid fa-user-doctor fa-2xl"
                  style={{ color: "#0f728a" }}
                ></i>
              ),
              alt: "Other physical concerns",
              description: "Other physical concerns",
              examples: "bedwetting, pre/post tongue tie release",
            },
          ].map((challenge, index) => (
            <div className={styles.challengeItem} key={index}>
              {challenge.image}
              <h3  className={styles.h3} >{challenge.description}</h3>
              <p>{challenge.examples}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT Section */}
      <section className={styles.section}>
        <h1>
          Treating Women, Infants, and Children through Bodywork and Herbs
        </h1>
        <div className={styles.treatmentMethods}>
          {[
            {
              image: (
                <i
                  class="fa-solid fa-brain fa-2xl"
                  style={{ color: "#0f728a" }}
                ></i>
              ),
              title: "Craniosacral Therapy (CST)",
              description:
                "Craniosacral therapy is a gentle, hands-on approach that works with the craniosacral system, which includes the membranes and cerebrospinal fluid that surround the brain and spinal cord. By gently working on the bones of the skull, spine, and pelvis, they can enhance the flow and balance of cerebrospinal fluid, improving the function of the central nervous system. This therapy alleviates pain, reduces tension, and promotes relaxation and overall well-being. It is often used to treat conditions such as  headaches, neck and back pain, stress-related disorders, and developmental issues in children.",
              link: "https://www.upledger.com/",
              logo: UpledgerLogo,
            },
            {
              image: (
                <i
                  class="fa-solid fa-person-walking fa-2xl"
                  style={{ color: "#0f728a" }}
                ></i>
              ),
              title: "MNRI (Reflex Integration)",
              description:
                "MNRI is a therapeutic approach focusing on the integration and remediation of reflex patterns in the nervous system. The therapy aims to address developmental and neurological challenges by working with reflexes that are not properly integrated. This can impact aspects of motor, sensory, emotional, and cognitive functions.",
              link: "https://masgutovamethod.com/the-method/the-mnri-method-approach-program",
              logo: MnriLogo,
            },
            {
              image: (
                <i
                  className="fa-solid fa-hands fa-2xl"
                  style={{ color: "#0f728a" }}
                ></i>
              ),
              title: "Visceral Manipulation",
              description:
                "Visceral manipulation is a gentle manual therapy technique focused on improving the mobility and function of internal organs (viscera) within the abdomen and pelvis.  This therapy alleviates pain and dysfunction by restoring normal organ movement and enhancing overall structural balance.",
              link: "https://www.barralinstitute.com/therapies/",
              logo: BarralLogo,
            },
            {
              image: (
                <i
                  class="fa-solid fa-droplet fa-2xl"
                  style={{ color: "#0f728a" }}
                ></i>
              ),
              title: "Raindrop Technique",
              description:
                "The Raindrop Technique is an aromatherapy treatment, where essential oils are dripped onto the spine and feet, then massaged in. Developed by Gary Young of Young Living Essential Oils, it aims to balance energy, support immune function, aid in relaxation and overall well-being.",
              link: "https://www.youngliving.com/us/en/learn/raindrop-technique",
            },
            {
              image: (
                <i
                  class="fa-solid fa-leaf fa-2xl"
                  style={{ color: "#0f728a" }}
                ></i>
              ),
              title: "Custom Herbal Formulations and Supplements",
              tagline: "Great herbalists treat people, not diseases",
              description:
                "A custom herbal formula is personalized to your specific health needs, considering medical history, symptoms, and individual constitutional tendencies.",
            },
          ].map((method, index) => (
            <div className={styles.methodItem} key={index}>
              {method.image}
              <h3 className={styles.h3}>{method.title}</h3>
              <h4>{method.tagline}</h4>
              <div>
                {method.logo && (
                  <img className={styles.logo} src={method.logo} alt="logo" />
                )}
              </div>
              <p>
                {method.description}
                {method.link && (
                  <p>
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      {method.link}
                    </a>
                  </p>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW Section */}
      <section className={styles.section}>
        <h1>How to Get Started</h1>
        <p>
          Contact <a href="mailto:appointmentsbymimi@gmail.com">Roots</a> to
          schedule your initial appointment. Please include the reason for your
          visit and specify whether you are interested in booking a bodywork
          session or herbal consultation.
        </p>
        <p>
          Looking forward to guiding you on your path towards health and
          wellness
        </p>
      </section>

      {/* Certificates Section */}
      <section className={styles.section}>
        <h1>Banner of Certificates</h1>
        <CertificateBanner certificates={certificates} />
      </section>

      {/* Modal for Enlarged Certificates */}
      <Modal show={isModalOpen} onClose={closeModal} imgSrc={selectedImage} />

      {/* Resources Section */}
      <section className={styles.section}>
        <h1>Recommended Resources</h1>
        <p>
          <a
            href="https://www.amazon.com/hz/wishlist/ls/8CKR8NE0FVXF?ref_=wl_share"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span className={styles.linkText}>Health and Wellness Books</span>
            <span className={styles.linkIcon}>🔗</span>
          </a>
        </p>
      </section>

      {/* Contact Information Section */}
    </div>
  );
};

export default HealthAndWellnessPage;
