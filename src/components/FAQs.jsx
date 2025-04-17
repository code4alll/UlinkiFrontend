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
      question: "There are no suitable jobs on Ulinkit's job portal. Can I still send my CV?",
      answer:
        "While we encourage you to regularly check our job portal for the latest openings, you are welcome to send your CV to our careers email address. Our recruitment team will review your profile and keep it on file for future opportunities that align with your skills and experience.",
    },
    {
      question: "What happens to my job application once I've applied?",
      answer:
        "Once you submit your application, our recruitment team will carefully review it. If your profile matches the requirements of the role, you will be contacted for the next steps in the recruitment process, which may include an initial screening call, interviews, and assessments. We strive to keep all applicants informed of their application status, although the volume of applications may sometimes cause delays.",
    },
    {
      question: "What is the interview like?",
      answer:
        "Our interview process typically involves one or more stages, depending on the role. You can expect to meet with members of our recruitment team and the hiring manager. The interviews will focus on understanding your experience, skills, and cultural fit with Tradeling. We may also include technical questions or case studies relevant to the position you've applied for. We aim to create a comfortable and engaging environment for you to showcase your abilities.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '48px 16px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '768px',
          margin: '0 auto',
          padding: '0 16px',
        }}
      >
        <h2 style={{ fontSize: '30px', fontWeight: 'bold', color: '#1f2937', marginBottom: '12px' }}>
          FAQ's
        </h2>
        <p style={{ color: '#4b5563', marginBottom: '32px' }}>
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
