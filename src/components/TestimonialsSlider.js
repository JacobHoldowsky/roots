import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TestimonialsSlider.module.css";

const testimonials = [
  {
    quote:
      "I am thrilled to recommend Mimi as an exceptional occupational therapist who has made a profound impact on my child's life. Her exceptional caring nature, vast knowledge, and gentle approach have created a safe and nurturing environment for my child to grow and thrive.",
    extendedQuote:
      "The gym, specifically designed for kids, is a testament to her dedication and expertise. Mimi is not only an expert in occupational therapy but also in MNRI and craniosacral therapy, making her a true gem in her field. Her education and training are evident in every session, and her love and devotion to her work shine through in every interaction.",
    author: "Roizy S., Occupational Therapy Client",
    showMoreKey: "roizy",
  },
  {
    quote:
      "Mimi is a skilled, intuitive therapist who I have the privilege to work with for over 15 years. Mimi has demonstrated expertise in her field and does not rest until she unlocks the key to each child’s success.",
    extendedQuote:
      "Over her years of clinical experience, Mimi has realized a dearth of material which addresses ways in which parents can support children at home and carry over skills they learn in therapy. Recognizing that void, Mimi has created new material in an engaging format which targets life skills and creates the opportunity to strengthen the parent-child connection. Her book takes an area of struggle for a child and transforms it into an opportunity for growth. It promotes practical life skills in a child-friendly, appealing way and shows great promise of success. It is a privilege to know and work with Mimi and watch as she continues to impact the lives of children worldwide.",
    author: "Rivky Reich, Ms Ed, SAS, BCBA, Program Director, HASC Rockland",
    showMoreKey: "rivkyReich",
  },
  {
    quote:
      "You worked with my son a few years ago. I came across old notes from each of our sessions and I am so blown away when I see all the depth, knowledge and understanding in each activity and everything you did with him...",

    author: "T. Silber",
  },
  {
    quote:
      "Mimi is kind and extremely knowledgeable. She uses various methods and customizes her work for each client according to what they need. She’s extremely connected to the kids and makes the sessions really fun. Mimi is also honest when she feels that the kid is ready to move on.",
    author: "C.S., Occupational Therapy Client",
  },
  {
    quote:
      "Mimi is currently treating my second child. We saw major progress. Mimi is extremely professional and knowledgeable. Both my kids have very different needs, and Mimi was able to zero in on exactly what each child needs.",
    extendedQuote:
      "She keeps them very motivated, and they are excited to go. After just a few sessions, my son's teacher commented that he does not stand out among his peers in any way. He follows along just like everyone else.",
    author: "Faiga W., Client",
    showMoreKey: "faiga",
  },
  {
    quote:
      "I have observed Mimi in action over the years and am always amazed at how she manages to get children to cooperate with their treatment plans, using different motivators for each child. Her assessments are thorough and examine every area of the child's life.",
    extendedQuote:
      "Then she crafts custom goals and plans to help each child achieve their fullest potential. I am also impressed at her refusal to stop training—she is never content to stay with her current, vast knowledge but rather aims to upgrade and increase her professional skills.",
    author: "Libby S., MS-SLP",
    showMoreKey: "libby",
  },
  {
    quote:
      "Mimi’s commitment to her clients and to helping others is unparalleled. She is always looking to learn new methods, expand her horizons, while refining the skills she has already acquired. As a colleague, I was extremely impressed with her dedication to the community and to the profession.",
    author: "Malky G., MS OT, Former OT Supervisor",
  },
];

const NextArrow = ({ onClick }) => (
  <div className={`${styles.arrow} ${styles.nextArrow}`} onClick={onClick}>
    &#9654;
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className={`${styles.arrow} ${styles.prevArrow}`} onClick={onClick}>
    &#9664;
  </div>
);

const TestimonialsSlider = () => {
  const [expandedTestimonials, setExpandedTestimonials] = useState({});

  const toggleTestimonialExpansion = (key) => {
    setExpandedTestimonials((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleBeforeChange = () => {
    // Reset the expanded testimonials when the slide is about to change
    setExpandedTestimonials({});
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: handleBeforeChange, // This will trigger before the slide changes
  };

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.sliderh2}>Hear it from Clients & Professionals</h2>
      <Slider {...sliderSettings}>
        {testimonials.map(
          ({ quote, extendedQuote, author, showMoreKey }, index) => (
            <div key={index} className={styles.testimonial}>
              <blockquote>
                <p>
                  {quote}
                  {showMoreKey && !expandedTestimonials[showMoreKey] && ".."}
                </p>
                {showMoreKey && expandedTestimonials[showMoreKey] && (
                  <p>{extendedQuote}</p>
                )}
                {showMoreKey && (
                  <button
                    className={styles.btnToggle}
                    onClick={() => toggleTestimonialExpansion(showMoreKey)}
                  >
                    {expandedTestimonials[showMoreKey]
                      ? "Show Less"
                      : "Read More"}
                  </button>
                )}
                <footer>- {author}</footer>
              </blockquote>
            </div>
          )
        )}
      </Slider>
    </section>
  );
};

export default TestimonialsSlider;
