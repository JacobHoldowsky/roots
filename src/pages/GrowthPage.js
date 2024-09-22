import React, { useState } from "react";
import styles from "./GrowthPage.module.css";
import reflexIntegrationImage from "../assets/logo.png";
import sensoryRegulation from "../assets/sensoryRegulation.webp";
import developmentalDelays from "../assets/developmentalDelays.webp";
import motorPlanning from "../assets/motorPlanning.webp";
import auditoryProcessing from "../assets/auditoryProcessing.webp";
import learningDifficulties from "../assets/learningDifficulties.webp";
import visualProcessing from "../assets/visualProcessing.webp";
import tomatisLogo from "../assets/logo.png";
import mnriLogo from "../assets/logo.png";
import rmtLogo from "../assets/logo.png";

const GrowthAndDevelopmentPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpanded = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const therapyServices = [
    {
      title: "Sensory Processing and Integration",
      description: `Sensory processing and integration is the brain's ability to receive, organize, 
      and interpret sensory information from the environment and the body. This process allows individuals 
      to make sense of and respond appropriately to sensory inputs like touch, sound, sight, taste, and movement. 
      Challenges in sensory processing can lead to difficulties in daily functioning, behavior, and social participation.`,
      extendedDescription: `Effective sensory integration helps with daily functioning, coordination, and interaction with the world. 
      When sensory processing is disrupted, it can lead to difficulties in behavior, attention, learning, and motor skills, 
      impacting one's overall quality of life.`,
      link: "https://www.spdstar.org/basic/sensory-processing-disorder",
    },
    {
      title: "Reflex Integration",
      description: `MNRI Masgutova Neurosensory Motor Reflex Integration is a therapeutic approach 
      focusing on the integration and remediation of reflex patterns in the nervous system. 
      It addresses developmental and neurological challenges by working with reflexes that aren’t 
      properly integrated.`,
      extendedDescription: `This therapy can impact aspects of motor, sensory, emotional, and cognitive functions. 
      RMT (Rhythmic Movement Training) is also used to stimulate neural pathways through gentle movements, promoting 
      learning, emotional balance, and ease of movement. These methods are effective for issues like ADD/ADHD, autism, 
      learning challenges, and emotional imbalances.`,
      link: "https://masgutovamethod.com/the-method/the-mnri-method-approach-program",
      additionalLink: "https://rhythmicmovement.org/",
    },
    {
      title: "Therapeutic Listening Programs",
      description: `The Tomatis Method offers a revolutionary approach to enhancing auditory processing 
      and communication skills through specialized listening techniques.`,
      extendedDescription: `Through its unique Electronic Ear device, which combines air and bone conduction, 
      the Tomatis Method not only targets speech and language disorders but also addresses auditory processing difficulties 
      and enhances emotional regulation. It can help improve learning abilities, attention, and self-confidence. 
      Integrated Listening Systems (iLS) and Quick Shifts are also used to support sensory integration through specialized 
      sound therapy techniques.`,
      link: "https://www.tomatis.com/en",
      additionalLink: "https://vitalsounds.com/",
    },
  ];

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
              image: sensoryRegulation,
              alt: "Sensory Regulation",
              description:
                "Sensory regulation, sensory defensive/sensory seeking",
            },
            {
              image: developmentalDelays,
              alt: "Developmental Delays",
              description: "Developmental delays",
            },
            {
              image: motorPlanning,
              alt: "Motor planning/coordination",
              description: "Motor planning/coordination",
            },
            {
              image: learningDifficulties,
              alt: "Learning Difficulties",
              description: "Learning difficulties (body-based)",
            },
            {
              image: auditoryProcessing,
              alt: "Auditory processing",
              description: "Auditory processing",
            },
            {
              image: visualProcessing,
              alt: "Visual processing",
              description: "Visual processing",
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
        <h2>Roots provides occupational therapy with a focus on:</h2>
        <div className={styles.therapyServices}>
          {therapyServices.map((service, index) => (
            <div className={styles.serviceItem} key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {expandedIndex === index && (
                <>
                  <p>{service.extendedDescription}</p>
                  {service.additionalLink && (
                    <a
                      href={service.additionalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.additionalLink}
                    >
                      Learn more about {service.title}
                    </a>
                  )}
                </>
              )}
              <button
                onClick={() => toggleExpanded(index)}
                className={styles.seeMoreButton}
              >
                {expandedIndex === index ? "See less" : "See more"}
              </button>
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.seeMoreLink}
              >
                Visit the official page
              </a>
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
