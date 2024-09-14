// src/pages/Growth.js
import React from "react";
import "./GrowthPage.css";
import sensoryImage from "../assets/logo.png";
import motorPlanningImage from "../assets/logo.png";
import reflexIntegrationImage from "../assets/logo.png";
import tomatisLogo from "../assets/logo.png";
import mnriLogo from "../assets/logo.png";
import rmtLogo from "../assets/logo.png";

const GrowthAndDevelopmentPage = () => {
  return (
    <div className="growth-development-page">
      {/* WHO Section */}
      <section className="who-section">
        <h1>Who We Serve</h1>
        <p>Primarily serving infants and children.</p>
        <h2>Does your child have difficulty with any of these?</h2>
        <div className="challenges">
          <div className="challenge-item">
            <img src={sensoryImage} alt="Sensory Regulation" />
            <p>Sensory regulation, sensory defensive/sensory seeking</p>
          </div>
          <div className="challenge-item">
            <img src={motorPlanningImage} alt="Developmental Delays" />
            <p>Developmental delays, motor planning/coordination</p>
          </div>
          <div className="challenge-item">
            <img src={reflexIntegrationImage} alt="Learning Difficulties" />
            <p>
              Learning difficulties (body-based), auditory processing, visual
              processing
            </p>
          </div>
        </div>
        <p>Or perhaps another sensory-motor based difficulty?</p>
      </section>

      {/* WHAT Section */}
      <section className="what-section">
        <h1>What We Provide</h1>
        <div className="therapy-services">
          <div className="service-item">
            <h2>Sensory Processing and Integration</h2>
            <p>
              Sensory processing and integration is the brain's ability to
              receive, organize, and interpret sensory information from the
              environment and the body. This process allows individuals to make
              sense of and respond appropriately to sensory inputs like touch,
              sound, sight, taste, and movement...
              <a href="#read-more-sensory"> (see more)</a>
            </p>
          </div>
          <div className="service-item">
            <h2>Reflex Integration</h2>
            <p>
              Reflex integration focuses on the integration and remediation of
              reflex patterns in the nervous system. The therapy aims to address
              developmental and neurological challenges by working with reflexes
              that aren’t properly integrated...
              <a href="#read-more-reflex"> (see more)</a>
            </p>
          </div>
          <div className="service-item">
            <h2>Therapeutic Listening Programs</h2>
            <p>
              The Tomatis Method offers a revolutionary approach to enhancing
              auditory processing and communication skills through specialized
              listening techniques. It not only targets speech and language
              disorders but also addresses auditory processing difficulties...
              <a href="#read-more-therapeutic"> (see more)</a>
            </p>
          </div>
        </div>
      </section>

      {/* HOW Section */}
      <section className="how-section">
        <h1>How to Get Started</h1>
        <p>
          Contact Roots to set up a complimentary phone call (10 minutes).
          During the call, you will have the opportunity to express your
          concerns, followed by guidance on how to proceed.
        </p>
        <h2>Evaluation</h2>
        <p>
          The purpose of the evaluation is to gather pertinent background
          information via parent interview, clinical observation, as well as
          informal and formal assessment tools. A post-evaluation follow-up call
          is included.
        </p>
        <h2>Treatment</h2>
        <p>
          Based on your individualized needs, an appropriate program is
          recommended. At Roots, a large focus is placed on creating a practical
          carryover program to implement at home. Parents are expected to work
          with their children on activities and strategies between sessions.
        </p>
      </section>

      {/* Banner of OT Certificates */}
      <section className="certificates-section">
        <h1>Helping Parents Help Their Children</h1>
        <div className="certificates-banner">
          <img src={mnriLogo} alt="MNRI Certification" />
          <img src={rmtLogo} alt="RMT Certification" />
          <img src={tomatisLogo} alt="Tomatis Certification" />
          {/* Add more logos as needed */}
        </div>
      </section>

      {/* Recommended Resources Section */}
      <section className="resources-section">
        <h2>Roots Approved Recommended Resources</h2>
        <p>
          <a
            href="https://www.amazon.com/hz/wishlist/ls/TBO2PCNWQVXS?ref_=wl_share"
            target="_blank"
            rel="noopener noreferrer"
          >
            Roots Recommended Resources - OT Tools
          </a>
        </p>
        <p>
          <a
            href="https://www.amazon.com/hz/wishlist/ls/3VB13SV25IIVH?ref_=wl_share"
            target="_blank"
            rel="noopener noreferrer"
          >
            Roots Recommended Resources - OT Books
          </a>
        </p>
        <p>
          <a
            href="https://www.forbrain.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Forbrain (Use affiliate code 3A9905119 for 10% off)
          </a>
        </p>
        <p>
          <a
            href="https://infinite.tomatis.com/product/tomatis-infinite-headphones-and-accessories/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tomatis Infinite Headphones and Accessories
          </a>
        </p>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info">
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

export default GrowthAndDevelopmentPage;
