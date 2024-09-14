// src/pages/AboutPage.js
import React, { useState } from "react";
import Slider from "react-slick";
import "./AboutPage.css";
import mimiImage from "../assets/logo.png";
import mnriLogo from "../assets/logo.png";
import rmtLogo from "../assets/logo.png";
import tomatisLogo from "../assets/logo.png";
// Add more logos as needed

const AboutPage = () => {
  const [showMoreRootsHealth, setShowMoreRootsHealth] = useState(false);
  const [showMoreAboutMimi, setShowMoreAboutMimi] = useState(false);
  const [showMoreTestimonials, setShowMoreTestimonials] = useState({});

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Handle "see more" toggles
  const toggleSeeMoreRootsHealth = () => {
    setShowMoreRootsHealth(!showMoreRootsHealth);
  };

  const toggleSeeMoreAboutMimi = () => {
    setShowMoreAboutMimi(!showMoreAboutMimi);
  };

  const toggleSeeMoreTestimonial = (id) => {
    setShowMoreTestimonials((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="about-page">
      {/* About Roots Section */}
      <section className="about-section about-roots">
        <h1>About Roots</h1>
        <p>
          Roots is a therapy practice dedicated to helping women, infants, and
          children through therapeutic interventions and consulting services.
          Roots consists of two divisions:
        </p>
        <div className="about-roots-content">
          <div className="roots-growth">
            <h2>Roots for Growth and Development</h2>
            <p>
              Focuses on issues related to developmental delays,
              movement/coordination difficulties, sensory dysregulation,
              attention and focusing, visual processing, auditory processing,
              and body-based learning difficulties. Treatment modalities include
              sensory processing, sensory motor integration, reflex integration,
              and therapeutic listening programs.
            </p>
          </div>
          <div className="roots-health">
            <h2>Roots for Health and Wellness</h2>
            <p>
              Focuses on issues related to the musculoskeletal system, immune
              system, nervous system, digestive system, as well as hormonal
              imbalances and more. Treatment modalities include a variety of
              bodywork methods and custom herbal formulations and supplements.
            </p>
            {!showMoreRootsHealth && (
              <button className="btn-toggle" onClick={toggleSeeMoreRootsHealth}>
                See more
              </button>
            )}
            {showMoreRootsHealth && (
              <div>
                <p>
                  At Roots, we believe in a holistic approach to therapy. This
                  means addressing the body, mind, and spirit together for
                  complete wellness. By integrating different therapy methods,
                  we help clients achieve better overall health outcomes.
                </p>
                <button
                  className="btn-toggle"
                  onClick={toggleSeeMoreRootsHealth}
                >
                  See less
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Mimi Section */}
      <section className="about-section about-mimi">
        <div className="about-mimi-content">
          <h2>About Mimi</h2>
          <p>
            Treatment rooted in education, experience, and empathy. Since
            graduating from Downstate Medical Center’s occupational therapy
            program in 2010, Mimi continues to learn techniques to broaden her
            skills within traditional occupational therapy and beyond...
          </p>
          {!showMoreAboutMimi && (
            <button className="btn-toggle" onClick={toggleSeeMoreAboutMimi}>
              See more
            </button>
          )}
          {showMoreAboutMimi && (
            <div>
              <p>
                Mimi seeks to understand the whole person and get to the root of
                the presenting concerns. She has extensive training in sensory
                motor integration, numerous bodywork modalities including
                craniosacral therapy and visceral manipulation, MNRI (Level III
                practitioner), and the Tomatis Listening Program (Level III
                practitioner). She has also participated in a 2-year program at
                David Winston’s Center for Herbal Studies.
              </p>
              <button className="btn-toggle" onClick={toggleSeeMoreAboutMimi}>
                See less
              </button>
            </div>
          )}
        </div>
        <div className="about-mimi-image">
          <img src={mimiImage} alt="Mimi" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Hear it from Clients & Professionals</h2>

        {/* Testimonial 1 */}
        <div className="testimonial">
          <blockquote>
            <p>
              "I am thrilled to recommend Mimi as an exceptional occupational
              therapist who has made a profound impact on my child's life. Her
              exceptional caring nature, vast knowledge, and gentle approach
              have created a safe and nurturing environment for my child to grow
              and thrive{!showMoreTestimonials["roizy"] ? "..." : "."}
            </p>
            <button
              className="btn-toggle"
              onClick={() => toggleSeeMoreTestimonial("roizy")}
            >
              {showMoreTestimonials["roizy"] ? "See less" : "See more"}
            </button>
            {showMoreTestimonials["roizy"] && (
              <>
                <p>
                  The gym, specifically designed for kids, is a testament to her
                  dedication and expertise. Mimi is not only an expert in
                  occupational therapy but also in MNRI and craniosacral
                  therapy, making her a true gem in her field. Her education and
                  training are evident in every session, and her love and
                  devotion to her work shine through in every interaction.
                </p>
                <p>
                  Through Mimi’s guidance and support, my daughter has learned
                  how to be happy in her own skin, a gift that will benefit her
                  for the rest of her life. She has released the weight of her
                  struggles and has begun to embrace her uniqueness, building
                  confidence and self-esteem that will continue to grow.
                </p>
                <p>
                  Mimi has helped my daughter release all the steps that once
                  held her back and has empowered her to take bold steps
                  forward, embracing life with joy, curiosity, and enthusiasm. I
                  am grateful for Mimi and the impact she has had on my child's
                  life. Her expertise, compassion, and dedication make her an
                  outstanding occupational therapist, and I highly recommend her
                  to anyone seeking exceptional therapy services."
                </p>
              </>
            )}
            <footer>- Roizy S., Occupational Therapy Client</footer>
          </blockquote>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial">
          <blockquote>
            <p>
              "Mimi is kind and extremely knowledgeable. She uses various
              methods and customizes her work for each client according to what
              they need. She’s extremely connected to the kids and makes the
              sessions really fun. Mimi is also honest when she feels that the
              kid is ready to move on."
            </p>
            <footer>- C.S., Occupational Therapy Client</footer>
          </blockquote>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonial">
          <blockquote>
            <p>
              "Mimi is currently treating my second child. We saw major
              progress. Mimi is extremely professional and knowledgeable. Both
              my kids have very different needs, and Mimi was able to zero in on
              exactly what each child needs
              {!showMoreTestimonials["faiga"] ? "..." : "."}
            </p>
            <button
              className="btn-toggle"
              onClick={() => toggleSeeMoreTestimonial("faiga")}
            >
              {showMoreTestimonials["faiga"] ? "See less" : "See more"}
            </button>
            {showMoreTestimonials["faiga"] && (
              <>
                <p>
                  She keeps them very motivated, and they are excited to go.
                  After just a few sessions, my son's teacher commented that he
                  does not stand out among his peers in any way. He follows
                  along just like everyone else.
                </p>
                <p>
                  My daughter's teacher said that I brought her a different kid.
                  Thank you, Mimi, for making such a huge difference in our
                  lives."
                </p>
              </>
            )}
            <footer>- Faiga W., Client</footer>
          </blockquote>
        </div>

        {/* Testimonial 4 */}
        <div className="testimonial">
          <blockquote>
            <p>
              "I have observed Mimi in action over the years and am always
              amazed at how she manages to get children to cooperate with their
              treatment plans, using different motivators for each child. Her
              assessments are thorough and examine every area of the child's
              life
              {!showMoreTestimonials["libby"] ? "..." : "."}
            </p>
            <button
              className="btn-toggle"
              onClick={() => toggleSeeMoreTestimonial("libby")}
            >
              {showMoreTestimonials["libby"] ? "See less" : "See more"}
            </button>
            {showMoreTestimonials["libby"] && (
              <>
                <p>
                  Then she crafts custom goals and plans to help each child
                  achieve their fullest potential. I am also impressed at her
                  refusal to stop training—she is never content to stay with her
                  current, vast knowledge but rather aims to upgrade and
                  increase her professional skills by taking frequent training
                  in all aspects of occupational therapy. Any client of Mimi is
                  sure to go far!"
                </p>
              </>
            )}
            <footer>- Libby S., MS-SLP</footer>
          </blockquote>
        </div>

        {/* Testimonial 5 */}
        <div className="testimonial">
          <blockquote>
            <p>
              "Mimi’s commitment to her clients and to helping others is
              unparalleled. She is always looking to learn new methods, expand
              her horizons, while refining the skills she has already acquired.
              As a colleague, I was extremely impressed with her dedication to
              the community and to the profession."
            </p>
            <footer>- Malky G., MS OT, Former OT Supervisor</footer>
          </blockquote>
        </div>
      </section>

      {/* Training and Certifications Slider */}
      <section className="training-banner">
        <h2>Trained by the Experts</h2>
        <Slider {...settings} className="banner-slider">
          <div className="slider-item">
            <img src={mnriLogo} alt="MNRI Logo" />
            <p>MNRI Masgutova Neuro-Sensory-Motor Reflex Integration</p>
          </div>
          <div className="slider-item">
            <img src={rmtLogo} alt="RMT Logo" />
            <p>RMT Rhythmic Movement Training</p>
          </div>
          <div className="slider-item">
            <img src={tomatisLogo} alt="Tomatis Logo" />
            <p>Tomatis Method (Level 1, 2 & 3)</p>
          </div>
          {/* Add more logos and descriptions as needed */}
        </Slider>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info">
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

export default AboutPage;
