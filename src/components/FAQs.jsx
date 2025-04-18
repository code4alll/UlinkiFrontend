import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div style={{ borderBottom: '1px solid #e5e7eb', padding: '16px 0' }}>
      <div
        onClick={toggleOpen}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1f2937' }}>{question}</h3>
        <div style={{ transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
          <svg
            style={{ width: '20px', height: '20px', color: '#4b5563' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" />
            )}
          </svg>
        </div>
      </div>
      {isOpen && (
        <div style={{ marginTop: '8px', color: '#374151', transition: 'opacity 0.3s ease' }}>
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQsSection = () => {
  const faqsData = [
    {
      question: "There are no suitable jobs on Ulinkit's job portal. Can I still submit my CV?",
      answer:
        "Although we recommend checking our job portal regularly for new openings, you are welcome to send your CV to our careers email address. Our recruitment team will review your profile and keep it on file for future roles that align with your qualifications and experience.",
    },
    {
      question: "What happens after I submit my job application?",
      answer:
        "Once you submit your application, our recruitment team will carefully assess your profile. If your qualifications match the requirements of the role, you will be contacted for the next steps, which may include an initial screening call, interviews, and assessments. We aim to keep all applicants informed about the status of their application, although response times may vary depending on the volume of applications.",
    },
    {
      question: "What can I expect from the interview process?",
      answer:
        "Our interview process typically involves multiple stages, depending on the role. You'll have the opportunity to meet with our recruitment team and the hiring manager. The interviews will focus on your experience, skills, and cultural fit with Ulinkit. You may also be asked technical questions or work on case studies relevant to the role you've applied for. We strive to provide a comfortable and engaging environment to allow you to demonstrate your capabilities.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '48px 16px',
        textAlign: 'center',
        overflowX: 'hidden',  // Prevents horizontal overflow
      }}
    >
      <div
        style={{
          maxWidth: '100%',  // Allow the container to use full width of the screen
          margin: '0 auto',
          padding: '0 16px',
          boxSizing: 'border-box',  // Ensures padding is within width
        }}
      >
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '12px',
        }}>
          FAQ's
        </h2>
        <p style={{
          color: '#4b5563',
          marginBottom: '32px',
          fontSize: '1rem',
        }}>
          A section dedicated to addressing common queries about the recruitment process, company benefits, and more.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqsData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <button
          style={{
            marginTop: '24px',
            background: 'linear-gradient(to right, #fb923c, #ea580c)',
            color: '#fff',
            fontWeight: 'bold',
            padding: '12px 24px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transform: 'scale(1)',
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            fontSize: '1rem',
            maxWidth: '100%',  // Ensure the button doesn't overflow
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Explore all
        </button>
      </div>
    </div>
  );
};

export default FAQsSection;
