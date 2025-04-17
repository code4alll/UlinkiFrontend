import React, { useState, useEffect } from 'react';

const WebinarAndEBooks = () => {
  const [webinars, setWebinars] = useState([]);
  const [ebooks, setEbooks] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState('webinars');

  // Fetch webinars and e-books data (mock data in this case)
  useEffect(() => {
    const fetchedWebinars = [
      { id: 1, title: 'How to Build a Successful Startup', date: '2025-04-15', image: '/Images/Blog1.webp', description: 'Learn the key strategies for building a successful startup from the ground up, presented by industry experts. Includes actionable insights and real-life case studies.' },
      { id: 2, title: 'Digital Marketing Trends 2025', date: '2025-04-18', image: '/Images/Blog2.webp', description: 'Explore the latest trends in digital marketing for 2025. Learn about AI integration, social media strategies, and more to keep your brand ahead of the competition.' },
      { id: 3, title: 'Building Scalable Web Applications', date: '2025-04-22', image: '/Images/Blog3.webp', description: 'Understand the architecture behind scalable web applications and how to implement best practices in your next project. From frontend to backend solutions.' }
    ];

    const fetchedEbooks = [
      { id: 1, title: 'The Ultimate Guide to React', downloadLink: '/ebooks/react-guide.pdf', image: '/Images/Blog3.webp', description: 'A comprehensive guide for mastering React.js from basics to advanced concepts. Includes code examples, tips, and best practices for creating efficient React applications.' },
      { id: 2, title: 'Mastering JavaScript', downloadLink: '/ebooks/js-master.pdf', image: '/Images/Blog3.webp', description: 'An in-depth book on JavaScript concepts and best practices. From closures and promises to async/await, this guide covers all the essentials for becoming a JavaScript pro.' },
      { id: 3, title: 'CSS Flexbox & Grid: A Complete Guide', downloadLink: '/ebooks/css-flexgrid-guide.pdf', image: '/Images/Blog3.webp', description: 'A step-by-step guide to mastering CSS Flexbox and Grid systems. This book covers everything you need to know to create modern layouts that work across devices.' }
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

  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#f9fafb',
      borderRadius: '0.5rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h2 style={{
        fontSize: '1.875rem',
        textAlign: 'center',
        marginBottom: '2rem',
        fontWeight: '600',
        color: '#1f2937'
      }}>Webinars & E-Books</h2>

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
            backgroundColor: activeTab === 'webinars' ? '#f97316' : '#e5e7eb',
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
            backgroundColor: activeTab === 'ebooks' ? '#f97316' : '#e5e7eb',
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
                      style={{
                        marginTop: '0.5rem',
                        background: 'linear-gradient(to right, #f97316, #ea580c)',
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
                        color: '#3b82f6',
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
  );
};

export default WebinarAndEBooks;