import React, { useState } from "react";
import TrainingBanner from "../components/TrainingBanner.js";
import styles from "./AboutPage.module.css";
import mimiImage from "../assets/logo.png"; // Replace with actual image paths
import mnriLogo from "../assets/logo.png";
import rmtLogo from "../assets/logo.png";
import tomatisLogo from "../assets/logo.png";

const AboutPage = () => {
  const [showMoreRootsHealth, setShowMoreRootsHealth] = useState(false);
  const [showMoreAboutMimi, setShowMoreAboutMimi] = useState(false);
  const [showMoreTestimonials, setShowMoreTestimonials] = useState({});

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
    <div className={styles.aboutPage}>
      {/* About Roots Section */}
      <section className={`${styles.aboutSection} ${styles.aboutRoots}`}>
        <h1>About Roots</h1>
        <p>
          Roots is a therapy practice dedicated to helping women, infants, and
          children through therapeutic interventions and consulting services.
          Roots consists of two divisions:
        </p>
        <div className={styles.aboutRootsContent}>
          <div className={styles.rootsItem}>
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
          <div className={styles.rootsItem}>
            <h2>Roots for Health and Wellness</h2>
            <p>
              Focuses on issues related to the musculoskeletal system, immune
              system, nervous system, digestive system, as well as hormonal
              imbalances and more. Treatment modalities include a variety of
              bodywork methods and custom herbal formulations and supplements.
            </p>
            {!showMoreRootsHealth && (
              <button
                className={styles.btnToggle}
                onClick={toggleSeeMoreRootsHealth}
              >
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
                  className={styles.btnToggle}
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
      <section className={`${styles.aboutSection} ${styles.aboutMimi}`}>
        <div className={styles.aboutMimi}>
          <div className={styles.aboutMimiContent}>
            <h2>About Mimi</h2>
            <p>
              Since graduating from Downstate Medical Center’s occupational
              therapy program in 2010, Mimi continues to learn techniques to
              broaden her skills within traditional occupational therapy and
              beyond. She seeks to understand the whole person, and get to the
              root of the presenting concerns. Mimi has extensive training in
              sensory motor integration, numerous bodywork modalities, including
              craniosacral therapy and visceral manipulation, MNRI (Level III
              practitioner), and the Tomatis Listening Program (Level III
              practitioner). She has also participated in a 2 year program at
              David Winston’s Center for Herbal Studies.
            </p>
            {!showMoreAboutMimi && (
              <button
                className={styles.btnToggle}
                onClick={toggleSeeMoreAboutMimi}
              >
                See more
              </button>
            )}
            {showMoreAboutMimi && (
              <div>
                <p>
                  Mimi incorporates multiple modalities from her vast training
                  experiences to help her clients maximize their potential. She
                  has a broad range of experience in treating clients with a
                  wide variety of diagnoses and concerns. Mimi’s experience has
                  led her to support clients and caregivers to take
                  responsibility for their therapy process, as she believes that
                  is the key to lasting success. Her role encompasses more than
                  just a practitioner but an educator, consultant, and guide in
                  coaching people in their journey towards success. Carry over
                  home programs of exercises and therapeutic principles are a
                  mandatory and integral part of the process.
                </p>
                <p>
                  The passion Mimi brings to her work is coupled with a genuine
                  desire to help people rise above their challenges. Due to her
                  goal oriented approach, Mimi will help find the necessary
                  therapeutic interventions, whether is it through the wide
                  range of modalities she uses or by helping to find another
                  pracitioner or modality to match one’s needs. Mimi networks
                  and collaberates with other professionals in related fields
                  including doctors and specialists, speech language
                  pathologists, phyiscal therapists, social workers and more in
                  order to ensure that her clients are getting their needs met.
                </p>
                <p>
                  Although Mimi has developed a successful framework and system
                  that has proven results throughtout the year, she treats each
                  client in a unique and individualized way. Taking into account
                  the clients environment, family dynamics, personality, and
                  resources, each client gets their own personalized program.
                </p>
                <button
                  className={styles.btnToggle}
                  onClick={toggleSeeMoreAboutMimi}
                >
                  See less
                </button>
              </div>
            )}
          </div>
          <div className={styles.aboutMimiImage}>
            <img src={mimiImage} alt="Mimi" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <h2>Hear it from Clients & Professionals</h2>

        {/* Testimonial 1 */}
        <div className={styles.testimonial}>
          <blockquote>
            <p>
              "I am thrilled to recommend Mimi as an exceptional occupational
              therapist who has made a profound impact on my child's life. Her
              exceptional caring nature, vast knowledge, and gentle approach
              have created a safe and nurturing environment for my child to grow
              and thrive
              {!showMoreTestimonials["roizy"] ? "..." : "."}
            </p>
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
                  for the rest of her life.
                </p>
              </>
            )}
            <button
              className={styles.btnToggle}
              onClick={() => toggleSeeMoreTestimonial("roizy")}
            >
              {showMoreTestimonials["roizy"] ? "See less" : "See more"}
            </button>
            <footer>- Roizy S., Occupational Therapy Client</footer>
          </blockquote>
        </div>

        {/* Testimonial 2 */}
        <div className={styles.testimonial}>
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
        <div className={styles.testimonial}>
          <blockquote>
            <p>
              "Mimi is currently treating my second child. We saw major
              progress. Mimi is extremely professional and knowledgeable. Both
              my kids have very different needs, and Mimi was able to zero in on
              exactly what each child needs
              {!showMoreTestimonials["faiga"] ? "..." : "."}
            </p>

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
            <button
              className={styles.btnToggle}
              onClick={() => toggleSeeMoreTestimonial("faiga")}
            >
              {showMoreTestimonials["faiga"] ? "See less" : "See more"}
            </button>
            <footer>- Faiga W., Client</footer>
          </blockquote>
        </div>

        {/* Testimonial 4 */}
        <div className={styles.testimonial}>
          <blockquote>
            <p>
              "I have observed Mimi in action over the years and am always
              amazed at how she manages to get children to cooperate with their
              treatment plans, using different motivators for each child. Her
              assessments are thorough and examine every area of the child's
              life
              {!showMoreTestimonials["libby"] ? "..." : "."}
            </p>

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
            <button
              className={styles.btnToggle}
              onClick={() => toggleSeeMoreTestimonial("libby")}
            >
              {showMoreTestimonials["libby"] ? "See less" : "See more"}
            </button>
            <footer>- Libby S., MS-SLP</footer>
          </blockquote>
        </div>

        {/* Testimonial 5 */}
        <div className={styles.testimonial}>
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
      <section className={styles.trainingBanner}>
        <h2>Trained by the Experts</h2>
        <TrainingBanner />
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

export default AboutPage;
