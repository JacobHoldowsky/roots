// src/pages/Page.js
import React from "react";
import "./WellnessPage.css";
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
    <div className="health-wellness-page">
      {/* WHO Section */}
      <section className="who-section">
        <h1>Can You Identify with Any of These?</h1>
        <div className="issues-list">
          <div className="issue-item">
            <h2>Muscular/Skeletal Problems</h2>
            <p>
              For example: Torticollis, pre/post tongue tie release, back pain,
              flat feet, scoliosis, postural asymmetry.
            </p>
          </div>
          <div className="issue-item">
            <h2>Poor Immune System</h2>
            <p>For example: Ear infections, eczema.</p>
          </div>
          <div className="issue-item">
            <h2>Nervous System Dysregulation</h2>
            <p>For example: Stress, decreased attention/focus, sleep issues.</p>
          </div>
          <div className="issue-item">
            <h2>Women’s Health Concerns/Hormonal Imbalance</h2>
            <p>For example: PMS, PCOS.</p>
          </div>
          <div className="issue-item">
            <h2>Digestive Issues</h2>
            <p>For example: Reflux, constipation.</p>
          </div>
          <div className="issue-item">
            <h2>Any Other Physical Concerns</h2>
            <p>For example: Bedwetting.</p>
          </div>
        </div>
      </section>

      {/* WHAT Section */}
      <section className="what-section">
        <h1>
          Treating Women, Infants, and Children through Bodywork and Herbs
        </h1>
        <div className="treatment-methods">
          <div className="method-item">
            <img src={cstImage} alt="Craniosacral Therapy" />
            <h2>Craniosacral Therapy (CST)</h2>
            <p>
              Craniosacral therapy is a gentle, hands-on approach that works
              with the craniosacral system, which includes the membranes and
              cerebrospinal fluid that surround the brain and spinal cord...
              <a
                href="https://www.upledger.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                (see more)
              </a>
            </p>
          </div>
          <div className="method-item">
            <img src={mnriImage} alt="MNRI (Reflex Integration)" />
            <h2>MNRI (Reflex Integration)</h2>
            <p>
              MNRI is a therapeutic approach focusing on the integration and
              remediation of reflex patterns in the nervous system...
              <a
                href="https://masgutovamethod.com/the-method/the-mnri-method-approach-program"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                (see more)
              </a>
            </p>
          </div>
          <div className="method-item">
            <img src={visceralImage} alt="Visceral Manipulation" />
            <h2>Visceral Manipulation</h2>
            <p>
              Visceral manipulation is a gentle manual therapy technique focused
              on improving the mobility and function of internal organs...
              <a
                href="https://www.barralinstitute.com/therapies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                (see more)
              </a>
            </p>
          </div>
          <div className="method-item">
            <img src={raindropImage} alt="Raindrop Technique" />
            <h2>Raindrop Technique</h2>
            <p>
              The Raindrop Technique is an aromatherapy treatment, where
              essential oils are dripped onto the spine and feet, then massaged
              in...
              <a
                href="https://www.youngliving.com/us/en/learn/raindrop-technique"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                (see more)
              </a>
            </p>
          </div>
          <div className="method-item">
            <img src={herbalImage} alt="Custom Herbal Formulations" />
            <h2>Custom Herbal Formulations and Supplements</h2>
            <p>
              A custom herbal formula is personalized to your specific health
              needs, considering factors like medical history, current symptoms,
              as well as your individual constitutional tendencies.
            </p>
          </div>
        </div>
      </section>

      {/* Banner of Certificates */}
      <section className="certificates-section">
        <h1>Our Credentials and Certifications</h1>
        <div className="certificates-banner">
          <img src={mnriLogo} alt="MNRI Certification" />
          <img src={mnriLogo2} alt="MNRI Certification 2" />
          <img src={mnriLogo3} alt="MNRI Certification 3" />
          <img src={mnriLogo4} alt="MNRI Certification 4" />
          <img src={mnriLogo5} alt="MNRI Certification 5" />
          <img src={mnriLogo6} alt="MNRI Certification 6" />
          <img src={mnriLogo7} alt="MNRI Certification 7" />
          <img src={mnriLogo8} alt="MNRI Certification 8" />
          <img src={mnriLogo9} alt="MNRI Certification 9" />
          <img src={mnriLogo10} alt="MNRI Certification 10" />
          <img src={mnriLogo11} alt="MNRI Certification 11" />
          <img src={mnriLogo12} alt="MNRI Certification 12" />
          <img src={mnriLogo13} alt="MNRI Certification 13" />
          <img src={mnriLogo14} alt="MNRI Certification 14" />
          <img src={mnriLogo15} alt="MNRI Certification 15" />
          <img src={mnriLogo16} alt="MNRI Certification 16" />
          <img src={mnriLogo17} alt="MNRI Certification 17" />
          <img src={mnriLogo18} alt="MNRI Certification 18" />
          <img src={mnriLogo19} alt="MNRI Certification 19" />
          <img src={mnriLogo20} alt="MNRI Certification 20" />
          <img src={mnriLogo21} alt="MNRI Certification 21" />
          <img src={rmtLogo} alt="RMT Certification" />
          <img src={visceralLogo} alt="Visceral Certification" />
          <img src={visceralLogo2} alt="Visceral Certification 2" />
          <img src={cstLogo} alt="CST Certification" />
          <img src={cstLogo2} alt="CST Certification 2" />
          {/* Add more logos as needed */}
        </div>
      </section>

      {/* Recommended Resources Section */}
      <section className="resources-section">
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
      <section className="how-section">
        <h1>How to Get Started</h1>
        <p>
          Contact Roots to schedule your initial appointment. Please include the
          reason for your visit and specify whether you are interested in
          booking a bodywork session or herbal consultation.
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

export default HealthAndWellnessPage;
