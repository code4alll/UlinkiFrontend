import React, { useState, useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

const WebinarAndEBooks = () => {
  const [webinars, setWebinars] = useState([]);
  const [ebooks, setEbooks] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState('webinars');
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    questions: ''
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // Fetch webinars and e-books data (mock data in this case)
  useEffect(() => {
    const fetchedWebinars = [
      { id: 1, title: 'How to Build a Successful Startup', date: '2025-04-15', image: 'https://res.cloudinary.com/dlugyopzh/image/upload/v1749031193/Blog1_iirgts.avif', description: 'Learn the key strategies for building a successful startup from the ground up, presented by industry experts. Includes actionable insights and real-life case studies.' },
      { id: 2, title: 'Digital Marketing Trends 2025', date: '2025-04-18', image: 'https://res.cloudinary.com/dlugyopzh/image/upload/v1749031193/Blog2_qhxcpo.avif', description: 'Explore the latest trends in digital marketing for 2025. Learn about AI integration, social media strategies, and more to keep your brand ahead of the competition.' },
      { id: 3, title: 'Building Scalable Web Applications', date: '2025-04-22', image: 'https://res.cloudinary.com/dlugyopzh/image/upload/v1749031193/Blog3_b9dvgg.avif', description: 'Understand the architecture behind scalable web applications and how to implement best practices in your next project. From frontend to backend solutions.' }
    ];

    const fetchedEbooks = [
      {
        id: 1,
        title: 'The Global Freelancer’s Toolkit',
        downloadLink: '/ebooks/global-freelancer-toolkit.pdf',
        image: 'https://res.cloudinary.com/dlugyopzh/image/upload/v1749031193/Logistics_dqpn1l.webp',
        description: 'Empower your freelance career with this essential guide covering tools, platforms, and strategies for success in both local and global markets. Ideal for service providers on Ulinkit.'
      },
      {
        id: 2,
        title: 'Selling Globally: A Guide for Local Entrepreneurs',
        downloadLink: '/ebooks/selling-globally-guide.pdf',
        image: 'https://res.cloudinary.com/dlugyopzh/image/upload/v1749031193/Logistics4_iddjfv.avif',
        description: 'Learn how to take your local products and services to international markets. This book covers online marketplace tips, shipping strategies, and cross-border communication skills.'
      },
      {
        id: 3,
        title: 'The Digital Nomad Handbook',
        downloadLink: '/ebooks/digital-nomad-handbook.pdf',
        image: 'https://res.cloudinary.com/dlugyopzh/image/upload/v1749031192/Digital_Handbook_gtj3x3.webp',
        description: 'Designed for remote workers and entrepreneurs, this guide provides practical tips for working from anywhere. Includes visa info, co-working spaces, and earning globally while living locally.'
      }
    ];
    

    setWebinars(fetchedWebinars);
    setEbooks(fetchedEbooks);
  }, []);

  const handleCardHover = (id) => {
    setHoveredCard(id);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleRegisterClick = (webinar) => {
    setSelectedWebinar(webinar);
    setShowRegistrationForm(true);
    setRegistrationSuccess(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Registration data:', {
      webinar: selectedWebinar,
      attendee: formData
    });
    
    // Simulate successful registration
    setRegistrationSuccess(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setShowRegistrationForm(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        questions: ''
      });
    }, 3000);
  };

  const closeModal = () => {
    setShowRegistrationForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      questions: ''
    });
  };

  return (
    <Fragment>

   
    <Helmet>
  <title>Webinars - Ulinkit</title>
  <meta 
    name="description" 
    content="Access expert-led webinars to grow your business on Ulinkit. Learn strategies, tips, and platform features to maximize your global reach." 
  />
  <link rel="canonical" href="https://www.ulinkit.com/webinar" />
</Helmet>

    <div style={{
      padding: '2rem',
      backgroundColor: '#f9fafb',
      borderRadius: '0.5rem',
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative'
    }}>
      <h2 style={{
        fontSize: '1.875rem',
        textAlign: 'center',
        marginBottom: '2rem',
        fontWeight: '600',
        color: '#1f2937'
      }}>Webinars & E-Books</h2>

      {/* Registration Form Modal */}
      {showRegistrationForm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '0.5rem',
            width: '100%',
            maxWidth: '500px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
          }}>
            {registrationSuccess ? (
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#10b981' }}>Registration Successful!</h3>
                <p>Thank you for registering for "{selectedWebinar.title}".</p>
                <p>We've sent the webinar details to your email.</p>
                <button
                  onClick={closeModal}
                  style={{
                    marginTop: '1.5rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#fc7927',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.375rem',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Register for {selectedWebinar.title}</h3>
                  <button 
                    onClick={closeModal}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                      color: '#6b7280'
                    }}
                  >
                    &times;
                  </button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '0.375rem',
                        border: '1px solid #d1d5db',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '0.375rem',
                        border: '1px solid #d1d5db',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '0.375rem',
                        border: '1px solid #d1d5db',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Company/Organization</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleFormChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '0.375rem',
                        border: '1px solid #d1d5db',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Questions for the Speaker (Optional)</label>
                    <textarea
                      name="questions"
                      value={formData.questions}
                      onChange={handleFormChange}
                      rows="3"
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '0.375rem',
                        border: '1px solid #d1d5db',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      backgroundColor: '#fc7927',
                      color: 'white',
                      border: 'none',
                      borderRadius: '0.375rem',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                  >
                    Complete Registration
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Tab Navigation */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem',
        gap: '1rem'
      }}>
        <button
          onClick={() => handleTabChange('webinars')}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            fontWeight: '600',
            backgroundColor: activeTab === 'webinars' ? '#fc7927' : '#e5e7eb',
            color: activeTab === 'webinars' ? 'white' : '#4b5563',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          Webinars
        </button>
        <button
          onClick={() => handleTabChange('ebooks')}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            fontWeight: '600',
            backgroundColor: activeTab === 'ebooks' ? '#fc7927' : '#e5e7eb',
            color: activeTab === 'ebooks' ? 'white' : '#4b5563',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          E-Books
        </button>
      </div>

      {/* Webinars Section */}
      {activeTab === 'webinars' && (
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            color: '#374151'
          }}>Upcoming Webinars</h3>
          <p style={{
            color: '#4b5563',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>Join us for live webinars where industry experts share their knowledge on cutting-edge topics. Stay ahead of the curve by learning about the latest trends and best practices!</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {webinars.length > 0 ? (
              webinars.map(webinar => (
                <div
                  key={webinar.id}
                  onMouseEnter={() => handleCardHover(webinar.id)}
                  onMouseLeave={handleCardLeave}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    transform: hoveredCard === webinar.id ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: hoveredCard === webinar.id ? '0 10px 15px rgba(0, 0, 0, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <img
                    src={webinar.image}
                    alt={webinar.title}
                    style={{
                      width: '100%',
                      height: '14rem',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ padding: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: '#1f2937'
                    }}>{webinar.title}</h4>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#4b5563',
                      marginTop: '0.5rem'
                    }}>{webinar.description}</p>
                    <p style={{
                      marginTop: '1rem',
                      fontSize: '0.875rem',
                      color: '#6b7280'
                    }}>Date: {webinar.date}</p>
                    <button
                      onClick={() => handleRegisterClick(webinar)}
                      style={{
                        marginTop: '0.5rem',
                        background: 'linear-gradient(to right, #fc7927, #ea580c)',
                        color: 'white',
                        fontWeight: 'bold',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.375rem',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease',
                        transform: hoveredCard === webinar.id ? 'scale(1.05)' : 'scale(1)'
                      }}
                    >
                      Register
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No webinars available at the moment.</p>
            )}
          </div>
        </div>
      )}

      {/* E-Books Section */}
      {activeTab === 'ebooks' && (
        <div>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            color: '#374151'
          }}>Available E-Books</h3>
          <p style={{
            color: '#4b5563',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>Download free e-books to enhance your skills in web development, digital marketing, and more. Learn at your own pace and start your journey toward becoming an expert!</p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {ebooks.length > 0 ? (
              ebooks.map(ebook => (
                <div
                  key={ebook.id}
                  onMouseEnter={() => handleCardHover(ebook.id)}
                  onMouseLeave={handleCardLeave}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    transform: hoveredCard === ebook.id ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: hoveredCard === ebook.id ? '0 10px 15px rgba(0, 0, 0, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <img
                    src={ebook.image}
                    alt={ebook.title}
                    style={{
                      width: '100%',
                      height: '14rem',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ padding: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: '#1f2937'
                    }}>{ebook.title}</h4>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#4b5563',
                      marginTop: '0.5rem'
                    }}>{ebook.description}</p>
                    <a
                      href={ebook.downloadLink}
                      download
                      style={{
                        display: 'inline-block',
                        marginTop: '1rem',
                        color: '#3770bf',
                        fontWeight: '600',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        ':hover': {
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p>No e-books available at the moment.</p>
            )}
          </div>
        </div>
      )}
    </div>
    </Fragment>
  );
};

export default WebinarAndEBooks;