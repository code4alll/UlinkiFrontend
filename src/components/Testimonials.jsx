import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    initials: 'IU',
    quote:
      "Joining Ulinkit has been a rewarding experience for my career in finance. The company's commitment to excellence extends beyond products and services to the health and well-being of its employees.",
    name: 'Ivy Umadhay',
    designation: 'Treasury Manager',
    company: 'Ulinkit',
  },
  {
    initials: 'JD',
    quote:
      "Ulinkit is an amazing place to work! The opportunities for growth and learning are immense. I feel valued and supported by my colleagues and the management.",
    name: 'John Doe',
    designation: 'Senior Analyst',
    company: 'Ulinkit',
  },
  {
    initials: 'AS',
    quote:
      "I've been with Ulinkit for several years, and it's been a fantastic journey. The company truly cares about its employees and fosters a collaborative environment.",
    name: 'Alice Smith',
    designation: 'Marketing Specialist',
    company: 'Ulinkit',
  },
];

const styles = {
  container: {
    backgroundColor: '#f9fafb',
    padding: '4rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'sans-serif',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#111827',
    marginBottom: '2.5rem',
    textAlign: 'center',
  },
  carouselWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '720px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#fff',
    fontSize: '2.5rem',
    color: '#4b5563',
    cursor: 'pointer',
    zIndex: 10,
    border: 'none',
    borderRadius: '50%',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease-in-out',
  },
  leftArrow: {
    left: '-60px',
  },
  rightArrow: {
    right: '-60px',
  },
  cardContainer: {
    overflow: 'hidden',
    width: '100%',
  },
  cards: {
    display: 'flex',
    transition: 'transform 0.6s ease-in-out',
  },
  singleCardWrapper: {
    flexShrink: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  testimonialCard: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.06)',
    padding: '2.5rem',
    width: '100%',
    maxWidth: '640px',
    textAlign: 'center',
    transition: 'transform 0.4s ease',
  },
  initialsCircle: {
    backgroundColor: '#1d4ed8',
    color: 'white',
    width: '60px',
    height: '60px',
    borderRadius: '9999px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '0 auto 1.5rem',
  },
  quote: {
    color: '#374151',
    marginBottom: '1.25rem',
    fontStyle: 'italic',
    fontSize: '1.1rem',
    lineHeight: '1.75',
  },
  name: {
    color: '#111827',
    fontWeight: 700,
    fontSize: '1.1rem',
    marginBottom: '0.25rem',
  },
  designation: {
    color: '#6b7280',
    fontSize: '0.95rem',
  },
  dotsContainer: {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '2rem',
  },
  dot: {
    width: '14px',
    height: '14px',
    borderRadius: '9999px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#d1d5db',
    transition: 'all 0.3s ease',
  },
  activeDot: {
    backgroundColor: '#1d4ed8',
    transform: 'scale(1.2)',
  },
};

const TestimonialCard = ({ testimonial }) => (
  <div style={styles.testimonialCard}>
    <div style={styles.initialsCircle}>{testimonial.initials}</div>
    <p style={styles.quote}>"{testimonial.quote}"</p>
    <div style={styles.name}>{testimonial.name}</div>
    <div style={styles.designation}>
      {testimonial.designation}, {testimonial.company}
    </div>
  </div>
);

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>What our employees say?</h2>

      <div style={styles.carouselWrapper}>
        <button
          onClick={goToPrevious}
          style={{ ...styles.arrow, ...styles.leftArrow }}
        >
          &#8592;
        </button>

        <div style={styles.cardContainer}>
          <div
            style={{
              ...styles.cards,
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} style={styles.singleCardWrapper}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={goToNext}
          style={{ ...styles.arrow, ...styles.rightArrow }}
        >
          &#8594;
        </button>
      </div>

      <div style={styles.dotsContainer}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              ...styles.dot,
              ...(currentIndex === index ? styles.activeDot : {}),
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
