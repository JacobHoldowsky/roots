import React from "react";
import styles from "./GrowthPage.module.css";
import sensoryImage from "../assets/logo.png"; // Replace with actual images
import motorPlanningImage from "../assets/logo.png";
import reflexIntegrationImage from "../assets/logo.png";
import tomatisLogo from "../assets/logo.png";
import mnriLogo from "../assets/logo.png";
import rmtLogo from "../assets/logo.png";

const GrowthAndDevelopmentPage = () => {
  return (
    <div className={styles.growthPage}>
      {/* WHO Section */}
      <section className={styles.section}>
        <h1>Growth & Development</h1>
        <h2>Who We Serve</h2>
        <p>Primarily serving infants and children.</p>
        <h3>Does your child have difficulty with any of these?</h3>
        <div className={styles.challenges}>
          {[
            {
              image: sensoryImage,
              alt: "Sensory Regulation",
              description:
                "Sensory regulation, sensory defensive/sensory seeking",
            },
            {
              image: motorPlanningImage,
              alt: "Developmental Delays",
              description: "Developmental delays, motor planning/coordination",
            },
            {
              image: reflexIntegrationImage,
              alt: "Learning Difficulties",
              description:
                "Learning difficulties (body-based), auditory processing, visual processing",
            },
          ].map((challenge, index) => (
            <div className={styles.challengeItem} key={index}>
              <img src={challenge.image} alt={challenge.alt} />
              <p>{challenge.description}</p>
            </div>
          ))}
        </div>
        <p>Or perhaps another sensory-motor based difficulty?</p>
      </section>

      {/* WHAT Section */}
      <section className={styles.section}>
        <h2>What We Provide</h2>
        <div className={styles.therapyServices}>
          {[
            {
              title: "Sensory Processing and Integration",
              description:
                "Sensory processing and integration is the brain's ability to receive, organize, and interpret sensory information from the environment and the body. This process allows individuals to make sense of and respond appropriately to sensory inputs like touch, sound, sight, taste, and movement. Challenges in sensory processing can lead to difficulties in daily functioning, behavior, and social participation. Our approach includes customized sensory diets, therapeutic activities, and environmental modifications to support sensory integration.",
            },
            {
              title: "Reflex Integration",
              description:
                "Reflex integration focuses on the integration and remediation of reflex patterns in the nervous system. The therapy aims to address developmental and neurological challenges by working with reflexes that aren’t properly integrated. By helping the body to mature these reflexes, we can promote better motor control, balance, and coordination.",
            },
            {
              title: "Therapeutic Listening Programs",
              description:
                "The Tomatis Method offers a revolutionary approach to enhancing auditory processing and communication skills through specialized listening techniques. It not only targets speech and language disorders but also addresses auditory processing difficulties.",
            },
          ].map((service, index) => (
            <div className={styles.serviceItem} key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW Section */}
      <section className={styles.section}>
        <h2>How to Get Started</h2>
        <p>
          Contact Roots to set up a complimentary phone call (10 minutes).
          During the call, you will have the opportunity to express your
          concerns, followed by guidance on how to proceed.
        </p>
        <h3>Evaluation</h3>
        <p>
          The purpose of the evaluation is to gather pertinent background
          information via parent interview, clinical observation, as well as
          informal and formal assessment tools. A post-evaluation follow-up call
          is included.
        </p>
        <h3>Treatment</h3>
        <p>
          Based on your individualized needs, an appropriate program is
          recommended. At Roots, a large focus is placed on creating a practical
          carryover program to implement at home. Parents are expected to work
          with their children on activities and strategies between sessions.
        </p>
      </section>

      {/* Certificates Section */}
      <section className={styles.certificatesSection}>
        <h2>Helping Parents Help Their Children</h2>
        <div className={styles.certificatesBanner}>
          {[mnriLogo, rmtLogo, tomatisLogo].map((logo, index) => (
            <img src={logo} alt="Certification Logo" key={index} />
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className={styles.resourcesSection}>
        <h2>Roots Approved Recommended Resources</h2>
        {[
          {
            text: "Roots Recommended Resources - OT Tools",
            link: "https://www.amazon.com/hz/wishlist/ls/TBO2PCNWQVXS?ref_=wl_share",
          },
          {
            text: "Roots Recommended Resources - OT Books",
            link: "https://www.amazon.com/hz/wishlist/ls/3VB13SV25IIVH?ref_=wl_share",
          },
          {
            text: "Forbrain (Use affiliate code 3A9905119 for 10% off)",
            link: "https://www.forbrain.com/",
          },
          {
            text: "Tomatis Infinite Headphones and Accessories",
            link: "https://infinite.tomatis.com/product/tomatis-infinite-headphones-and-accessories/",
          },
        ].map((resource, index) => (
          <p key={index}>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              {resource.text}
            </a>
          </p>
        ))}
      </section>

      {/* Contact Information Section */}
      <section className={styles.contactInfo}>
        <h2>Contact Roots</h2>
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
      </section>
    </div>
  );
};

export default GrowthAndDevelopmentPage;
