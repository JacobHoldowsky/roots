import React from "react";
import styles from "./WellnessPage.module.css"; // Using CSS module
import cstImage from "../assets/cst.png"; // Replace with actual image paths
import mnriImage from "../assets/mnri.png";
import visceralImage from "../assets/visceral.png";
import raindropImage from "../assets/raindrop.png";
import herbalImage from "../assets/herbal.png";
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
import rmtLogo from "../assets/logo.png";
import cstLogo from "../assets/cstCertificate.png";
import cstLogo2 from "../assets/cstCertificate2.png";
import visceralLogo from "../assets/visceralCertificate.png";
import visceralLogo2 from "../assets/visceralCertificate2.png";

const HealthAndWellnessPage = () => {
  return (
    <div className={styles.healthWellnessPage}>
      {/* WHO Section */}
      <section className={styles.section}>
        <h1>Health & Wellness</h1>
        <h2>Can You Identify with Any of These?</h2>
        <div className={styles.issuesList}>
          {[
            {
              title: "Muscular/Skeletal Problems",
              description:
                "For example: Torticollis, pre/post tongue tie release, back pain, flat feet, scoliosis, postural asymmetry.",
            },
            {
              title: "Poor Immune System",
              description: "For example: Ear infections, eczema.",
            },
            {
              title: "Nervous System Dysregulation",
              description:
                "For example: Stress, decreased attention/focus, sleep issues.",
            },
            {
              title: "Women’s Health Concerns/Hormonal Imbalance",
              description: "For example: PMS, PCOS.",
            },
            {
              title: "Digestive Issues",
              description: "For example: Reflux, constipation.",
            },
            {
              title: "Any Other Physical Concerns",
              description: "For example: Bedwetting.",
            },
          ].map((issue, index) => (
            <div className={styles.issueItem} key={index}>
              <h3>{issue.title}</h3>
              <p>{issue.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT Section */}
      <section className={styles.section}>
        <h2>
          Treating Women, Infants, and Children through Bodywork and Herbs
        </h2>
        <div className={styles.treatmentMethods}>
          {[
            {
              image: cstImage,
              title: "Craniosacral Therapy (CST)",
              description:
                "Craniosacral therapy is a gentle, hands-on approach that works with the craniosacral system...",
              link: "https://www.upledger.com/",
            },
            {
              image: mnriImage,
              title: "MNRI (Reflex Integration)",
              description:
                "MNRI is a therapeutic approach focusing on the integration and remediation of reflex patterns...",
              link: "https://masgutovamethod.com/the-method/the-mnri-method-approach-program",
            },
            {
              image: visceralImage,
              title: "Visceral Manipulation",
              description:
                "Visceral manipulation is a gentle manual therapy technique focused on improving the mobility and function of internal organs...",
              link: "https://www.barralinstitute.com/therapies/",
            },
            {
              image: raindropImage,
              title: "Raindrop Technique",
              description:
                "The Raindrop Technique is an aromatherapy treatment, where essential oils are dripped onto the spine and feet...",
              link: "https://www.youngliving.com/us/en/learn/raindrop-technique",
            },
            {
              image: herbalImage,
              title: "Custom Herbal Formulations and Supplements",
              description:
                "A custom herbal formula is personalized to your specific health needs, considering medical history, symptoms, and individual constitutional tendencies.",
            },
          ].map((method, index) => (
            <div className={styles.methodItem} key={index}>
              <img src={method.image} alt={method.title} />
              <h3>{method.title}</h3>
              <p>
                {method.description}
                {method.link && (
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    (see more)
                  </a>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section className={styles.section}>
        <h2>Our Credentials and Certifications</h2>
        <div className={styles.certificatesBanner}>
          {[
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
            rmtLogo,
            visceralLogo,
            visceralLogo2,
            cstLogo,
            cstLogo2,
          ].map((logo, index) => (
            <img src={logo} alt={`Certification ${index}`} key={index} />
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className={styles.section}>
        <h2>Roots Approved Recommended Resources</h2>
        <p>
          <a
            href="https://www.amazon.com/hz/wishlist/ls/8CKR8NE0FVXF?ref_=wl_share"
            target="_blank"
            rel="noopener noreferrer"
          >
            Roots Recommended Resources - Health and Wellness Books
          </a>
        </p>
      </section>

      {/* HOW Section */}
      <section className={styles.section}>
        <h2>How to Get Started</h2>
        <p>
          Contact Roots to schedule your initial appointment. Please include the
          reason for your visit and specify whether you are interested in
          booking a bodywork session or herbal consultation.
        </p>
      </section>

      {/* Contact Information Section */}
      <section className={styles.contactInfo}>
        <h2>Contact Roots</h2>
        <p>Please reach out through text/email.</p>
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
    </div>
  );
};

export default HealthAndWellnessPage;
