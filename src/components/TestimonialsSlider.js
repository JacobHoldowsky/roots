import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TestimonialsSlider.module.css"; // Updated CSS file

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
  const [expandedTestimonials, setExpandedTestimonials] = React.useState({});

  const toggleTestimonialExpansion = (key) => {
    setExpandedTestimonials((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 50000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className={styles.testimonials}>
      <h2>What Clients & Professionals Are Saying</h2>
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonial}>
            <blockquote>
              <p>
                {testimonial.quote}
                {testimonial.showMoreKey &&
                  !expandedTestimonials[testimonial.showMoreKey] &&
                  ".."}
              </p>
              {testimonial.showMoreKey &&
                expandedTestimonials[testimonial.showMoreKey] && (
                  <p>{testimonial.extendedQuote}</p>
                )}
              {testimonial.showMoreKey && (
                <button
                  className={styles.btnToggle}
                  onClick={() =>
                    toggleTestimonialExpansion(testimonial.showMoreKey)
                  }
                >
                  {expandedTestimonials[testimonial.showMoreKey]
                    ? "Show Less"
                    : "Read More"}
                </button>
              )}
              <footer>- {testimonial.author}</footer>
            </blockquote>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialsSlider;
