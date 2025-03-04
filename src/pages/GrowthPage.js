import React, { useState, useEffect } from "react";
import styles from "./GrowthPage.module.css";

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
import siLogo from "../assets/si.png";
import ndtLogo from "../assets/ndt.png";
import adiLogo from "../assets/ndt.png";
import imLogo from "../assets/im.png";
import essentialsOfSi from "../assets/essentialsOfSi.png";
import ndtCertificate from "../assets/ndtCertificate.png";
import CertificateBanner from "../components/CertificateBanner";
import TomatisLogo from "../assets/tomatis logo.png";
import MnriLogo from "../assets/mnri logo.jpg";
import VitalLinksLogo from "../assets/vital links logo.png";
import rmtLogo from "../assets/rmtLogo.png";
import ilsLogo from "../assets/ilsLogo.jpeg";

const imagePaths = [TomatisLogo, MnriLogo];

const preloadImages = (imagePaths) => {
  imagePaths.forEach((path) => {
    const img = new Image();
    img.src = path;
  });
};

const GrowthAndDevelopmentPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

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
    siLogo,
    ndtLogo,
    adiLogo,
    imLogo,
  ];

  const Modal = ({ show, onClose, imgSrc }) => {
    if (!show) return null;

    return (
      <div className={styles.modalOverlay} onClick={onClose}>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <img src={imgSrc} alt="Enlarged certificate" />
          <button className={styles.closeButton} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  };

  const toggleExpanded = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const therapyServices = [
    {
      title: "Sensory Processing and Integration",

      description: `Sensory processing and integration is the brain's ability to receive, organize, and interpret sensory information from the environment and the body.`,
      extendedDescription: `This process allows individuals to make sense of and respond appropriately to sensory inputs such as touch, sound, sight, taste, and movement. Effective sensory integration helps with daily functioning, coordination, and interaction with the world. When sensory processing is disrupted, it can lead to difficulties in behavior, attention, learning and motor skills, impacting one's overall quality of life.`,
      link: "https://www.spdstar.org/basic/sensory-processing-disorder",
    },
    {
      title: "Reflex Integration",
      subtitle: "(Including MNRI,  RMT, and more)  ",
      description: `MNRI Masgutova Neurosensory Motor Reflex Integration is a therapeutic approach focusing on the integration and remediation of reflex patterns in the nervous system. The therapy aims to address developmental and neurological challenges by working with reflexes that aren’t properly integrated. This can impact aspects of motor, sensory, emotional, and cognitive functions.`,
      extendedDescription: `RMT Rhythmic Movement Training is an approach that uses gentle rocking and reflex integration movements that stimulate neural pathways and promote learning, emotional balance and ease of movement. RMTi is an effective way to help with symptoms of ADD/ADHD, learning challenges, autism and behavioral/emotional imbalances without the use of drugs.`,
      link: "https://masgutovamethod.com/the-method",
      additionalLink: "https://rhythmicmovement.org/",
      image: MnriLogo,
      additionalImage: rmtLogo,
    },
    {
      title: "Therapeutic Listening Programs",
      subtitle:
        "(Including Tomatis Listening Program, Integrated Listening Systems, & Quick Shifts)",
      description: `The Tomatis Method offers a revolutionary approach to enhancing auditory processing 
      and communication skills through specialized listening techniques.`,
      extendedDescription: `Through its unique Electronic Ear device, which combines air and bone conduction, 
      the Tomatis Method not only targets speech and language disorders but also addresses auditory processing difficulties 
      and enhances emotional regulation. It can help improve learning abilities, attention, and self-confidence.`,
      extendedDescription2:
        "Integrated Listening Systems (iLS) and Quick Shifts are also used to support sensory integration through specialized sound therapy techniques.",
      image: TomatisLogo,
      additionalImage: VitalLinksLogo,
      link: "https://www.tomatis.com/en",
      additionalLink: "https://integratedlistening.com/",
    },
  ];

  useEffect(() => {
    preloadImages(imagePaths);
  }, []);

  return (
    <div className={styles.growthPage}>
      {/* WHO Section */}
      <section className={styles.section}>
        <h1>Growth & Development</h1>
        <p>Primarily treating infants and children.</p>
        <h3>Does your child have difficulty with:</h3>
        <div className={styles.challenges}>
          {[
            {
              image: (
                <i
                  className="fa-solid fa-tower-broadcast fa-2xl"
                  style={{ color: "#F68D3E" }}
                ></i>
              ),
              alt: "Sensory Regulation",
              description: "Sensory processing and integration",
            },
            {
              image: (
                <i
                  className="fa-solid fa-brain fa-2xl"
                  style={{ color: "#F68D3E" }}
                ></i>
              ),
              alt: "Developmental Delays",
              description: "Developmental delays",
            },
            {
              image: (
                <i
                  className="fa-solid fa-arrows-to-circle fa-2xl"
                  style={{ color: "#F68D3E" }}
                ></i>
              ),
              alt: "Motor planning/coordination",
              description: "Motor planning/coordination",
            },
            {
              image: (
                <i
                  className="fa-solid fa-school fa-2xl"
                  style={{ color: "#F68D3E" }}
                ></i>
              ),
              alt: "Learning Difficulties",
              description: "Learning difficulties (body-based)",
            },
            {
              image: (
                <i
                  className="fa-solid fa-ear-listen fa-2xl"
                  style={{ color: "#F68D3E" }}
                ></i>
              ),
              alt: "Auditory processing",
              description: "Auditory processing",
            },
            {
              image: (
                <i
                  className="fa-solid fa-eye fa-2xl"
                  style={{ color: "#F68D3E" }}
                ></i>
              ),
              alt: "Visual processing",
              description: "Visual processing",
            },
          ].map((challenge, index) => (
            <div className={styles.challengeItem} key={index}>
              <div>{challenge.image}</div>
              <p>{challenge.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT Section */}
      <section className={styles.section}>
        <h2>Roots provides occupational therapy with a focus on:</h2>
        <div className={styles.therapyServices}>
          {therapyServices.map((service, index) => (
            <div className={styles.serviceItem} key={index}>
              <h3>{service.title}</h3>
              <h4>{service.subtitle}</h4>
              <p>{service.description}</p>

              {expandedIndex === index && (
                <>
                  {service.title === "Reflex Integration" && (
                    <div className={styles.logoContainer}>
                      To learn more, please visit:
                      {service.image && (
                        <div>
                          <br />
                          <img
                            className={styles.logo}
                            src={service.image}
                            alt={"logo"}
                          />
                        </div>
                      )}
                      {service.link && (
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.link}
                        >
                          <div className={styles.linkText}>{service.link}</div>
                        </a>
                      )}
                      <br />
                    </div>
                  )}
                  {service.extendedDescription ===
                    "RMT Rhythmic Movement Training is an approach that uses gentle rocking and reflex integration movements that stimulate neural pathways and promote learning, emotional balance and ease of movement. RMTi is an effective way to help with symptoms of ADD/ADHD, learning challenges, autism and behavioral/emotional imbalances without the use of drugs." && (
                    <>
                      <div>~</div>
                      <br />
                    </>
                  )}

                  <p>{service.extendedDescription}</p>
                  {service.extendedDescription ===
                    `Through its unique Electronic Ear device, which combines air and bone conduction, 
      the Tomatis Method not only targets speech and language disorders but also addresses auditory processing difficulties 
      and enhances emotional regulation. It can help improve learning abilities, attention, and self-confidence.` && (
                    <>
                      <div>
                        <img
                          className={styles.logo}
                          src={TomatisLogo}
                          alt={"logo"}
                        />
                      </div>
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                      >
                        <div className={styles.linkText}>{service.link}</div>
                      </a>
                      <br />
                    </>
                  )}

                  {service.extendedDescription2 && (
                    <>
                      <div>~</div>
                      <br />
                    </>
                  )}
                  <p>{service.extendedDescription2}</p>
                  <div className={styles.logoContainer}>
                    To learn more, please visit:
                    {service.extendedDescription2 ===
                      "Integrated Listening Systems (iLS) and Quick Shifts are also used to support sensory integration through specialized sound therapy techniques." && (
                      <div>
                        <br />
                        <img
                          className={styles.logo}
                          src={ilsLogo}
                          alt={"logo"}
                        />
                      </div>
                    )}
                    {/* {service.image &&
                      service.title !== "Reflex Integration" && (
                        <div>
                          <img
                            className={styles.logo}
                            src={service.image}
                            alt={"logo"}
                          />
                        </div>
                      )} */}
                    {/* {service.link && service.title !== "Reflex Integration" && (
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                      >
                        <div className={styles.linkText}>{service.link}</div>
                      </a>
                    )} */}
                    {service.additionalLink ===
                      "https://integratedlistening.com/" ||
                      (service.additionalLink ===
                        "https://rhythmicmovement.org/" && (
                        <div>
                          <br />
                          <img
                            className={styles.vitalLogo}
                            src={service.additionalImage}
                            alt={"logo"}
                          />
                        </div>
                      ))}
                    {service.additionalLink && (
                      <div>
                        <a
                          href={service.additionalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.link}
                        >
                          <div className={styles.linkText}>
                            {service.additionalLink}
                          </div>
                        </a>
                      </div>
                    )}
                  </div>
                </>
              )}
              <button
                onClick={() => toggleExpanded(index)}
                className={styles.seeMoreButton}
              >
                {expandedIndex === index ? "See less" : "See more"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* HOW Section */}
      <section className={styles.section}>
        <h2>How do you get started with the therapy process?</h2>
        <p>
          Contact Roots via{" "}
          <a
            className={styles.inlineLink}
            href="mailto:appointmentsbymimi@gmail.com"
          >
            <span className={styles.linkText}>email</span>
          </a>{" "}
          or{" "}
          <a
            className={styles.inlineLink}
            href="sms:+18454459230?body=Hi, I would like to set up a complimentary 10 minute phone call."
          >
            <span className={styles.linkText}>text</span>
          </a>{" "}
          to set up a complimentary 10 minute phone call. During the call, you
          will have the opportunity to express your concerns, followed by
          guidance on how to proceed.
        </p>
        <h3>Evaluation</h3>
        <p>(60-90 minutes)</p>
        <p>
          The purpose of the evaluation is to gather pertinent background
          information via parent interview, clinical observation, as well as
          formal and informal assessment tools. Included in the evaluation fee
          is a follow up phone call. During this call, the evaluation findings,
          goals, and recommended treatment plan will be reviewed and you will
          have the opportunity to ask questions about the process.
        </p>
        <h3>Treatment</h3>
        <p>
          Each client is looked at individually and an appropriate program is
          recommended based on your unique profile. At roots, a large focus is
          placed on creating a practical carryover program to implement at home.
          Parents are expected to work with their children on activities and
          strategies between sessions. This helps strengthen the skills that are
          being built during therapy sessions.
        </p>
      </section>

      {/* Certificates Section */}
      <section className={styles.section}>
        <h2>Additional Certificates</h2>

        <CertificateBanner certificates={certificates} />
      </section>

      {/* Modal for Enlarged Certificates */}
      <Modal show={isModalOpen} onClose={closeModal} imgSrc={selectedImage} />

      {/* Resources Section */}
      <section className={styles.section}>
        <h2>Recommended Resources</h2>
        {[
          {
            text: "OT Tools",
            link: "https://www.amazon.com/hz/wishlist/ls/TBO2PCNWQVXS?ref_=wl_share",
          },
          {
            text: "OT Books",
            link: "https://www.amazon.com/hz/wishlist/ls/3VB13SV25IIVH?ref_=wl_share",
          },
        ].map((resource, index) => (
          <p key={index}>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span className={styles.linkText}>{resource.text}</span>
              <span className={styles.linkIcon}>🔗</span>
            </a>
          </p>
        ))}
        {[
          {
            text: "Forbrain (Use affiliate code 3A9905119 for 10% off)",
            link: "https://www.forbrain.com/",
          },
          {
            text: "Tomatis Infinite Headphones",
            link: "https://infinite.tomatis.com/product/tomatis-infinite-headphones-and-accessories/",
          },
          {
            text: "Brainbeat",
            link: "https://brainbeat.com/",
          },
        ].map((resource, index) => (
          <p key={index}>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <span className={styles.linkText}>{resource.text}</span>
              <span className={styles.linkIcon}>🔗</span>
            </a>
          </p>
        ))}
      </section>

      {/* Contact Information Section */}
    </div>
  );
};

export default GrowthAndDevelopmentPage;
