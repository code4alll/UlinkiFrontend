import React, { useState } from 'react';

const Press = () => {
  const [activeTab, setActiveTab] = useState('In The News');
  const [hoveredBox, setHoveredBox] = useState(null);


  const newsData = [
    {
      date: 'April 5 2025',
      title: 'Ulinkit hits a milestone with 2 million products across 20+ categories',
      desc: 'This achievement reflects Ulinkit’s rapid growth and commitment to offering diverse products, providing businesses greater flexibility and competitive margins.',
      image: '/Images/Blog1.webp',
    },
    {
      date: 'March 20 2025',
      title: 'Ulinkit partners with Free Zones to enhance international trade',
      desc: 'Through this partnership, Ulinkit aims to simplify cross-border logistics and improve import/export efficiency for global B2B traders.',
      image: '/Images/Blog2.webp',
    },
    {
      date: 'March 2 2025',
      title: 'Ulinkit introduces Smart Procurement Tools for buyers',
      desc: 'The new AI-powered procurement suite empowers buyers with better pricing, supplier discovery, and real-time insights, boosting business productivity.',
      image: '/Images/Blog3.webp',
    },
    {
      date: 'February 15 2025',
      title: 'Ulinkit launches Seller Academy to empower global vendors',
      desc: 'The new initiative helps sellers maximize visibility, optimize listings, and navigate competitive international B2B markets with ease and strategy.',
      image: '/Images/Blog4.webp',
    },
    {
      date: 'January 28 2025',
      title: 'Ulinkit signs MoU with Global Export Authorities',
      desc: 'This strategic collaboration is set to boost exports by providing businesses with seamless access to new global markets through Ulinkit’s robust platform.',
      image: '/Images/Blog5.webp',
    },
    {
      date: 'January 5 2025',
      title: 'Ulinkit opens AI-enabled fulfillment center to support faster logistics',
      desc: 'The new facility will support faster order processing, intelligent inventory management, and streamlined delivery across international locations.',
      image: '/Images/Blog6.webp',
    },
    {
      date: 'December 18 2024',
      title: 'Ulinkit launches Global Seller Connect Program',
      desc: 'This initiative is designed to onboard and support sellers worldwide in expanding their reach via Ulinkit’s trusted B2B marketplace.',
      image: '/Images/Blog2.webp',
    },
    {
      date: 'December 1 2024',
      title: 'Ulinkit hosts first Virtual B2B Expo with 500+ exhibitors',
      desc: 'The event brought together global suppliers and buyers under one digital roof, enabling seamless networking and live product demonstrations.',
      image: '/Images/Blog1.webp',
    },
  ];
  


  return (
    <div style={{
      margin: 0,
      fontFamily: "'Segoe UI', sans-serif",
      backgroundColor: 'white',
      position: 'relative'
    }}>
      {/* Header Section */}
      <div style={{
        backgroundColor: 'white',
        color: '#fc7927',
        padding: '40px',
        position: 'relative'
      }}>
        <h1 style={{ fontSize: '40px', margin: 0 }}>Press</h1>
        <p style={{ margin: '10px 0' }}>
          For press requests please email:<br />
          <a href="mailto:press@Ulinkit.com" style={{
            color: '#fc7927',
            textDecoration: 'none',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
          onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
          >
            press@Ulinkit.com
          </a>
        </p>

        {/* Press Downloads */}
        <div style={{
          position: 'absolute',
          top: '30px',
          right: '30px',
          backgroundColor: 'white',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          padding: '20px',
          color: 'black'
        }}>
          <h3 style={{ margin: '0 0 15px' }}>Press downloads</h3>
          <button style={{
            background: 'none',
            border: 'none',
            color: '#fc7927',
            cursor: 'pointer',
            marginRight: '15px',
            fontWeight: 'bold',
            transition: 'all 0.2s ease',
            padding: '5px 10px',
            borderRadius: '4px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#fff0ed';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >
            ⬇ Download Press Kit
          </button>
          <button style={{
            background: 'none',
            border: 'none',
            color: '#fc7927',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.2s ease',
            padding: '5px 10px',
            borderRadius: '4px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#fff0ed';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >
            ⬇ Download Logos
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottom: '1px solid #ccc',
        color: 'black'
      }}>
        {['In The News', 'Press Releases'].map(tab => (
          <div 
            key={tab}
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              position: 'relative',
              borderBottom: activeTab === tab ? '2px solid #fc7927' : 'none',
              fontWeight: activeTab === tab ? 'bold' : 'normal',
              color: activeTab === tab ? '#00394f' : '#666',
              transition: 'all 0.2s ease'
            }}
            onClick={() => setActiveTab(tab)}
            onMouseEnter={(e) => {
              if (activeTab !== tab) {
                e.currentTarget.style.color = '#fc7927';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab) {
                e.currentTarget.style.color = '#666';
              }
            }}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* News Grid */}
      <div style={{
        padding: '40px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '25px'
      }}>
        {newsData.map((news, idx) => (
          <div 
            key={idx}
            style={{
              border: '1px solid #ddd',
              borderRadius: '12px',
              padding: '20px',
              backgroundColor: '#fafafa',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease',
              transform: hoveredBox === idx ? 'translateY(-5px)' : 'none',
              boxShadow: hoveredBox === idx ? '0 8px 20px rgba(0,0,0,0.1)' : '0 4px 10px rgba(0,0,0,0.05)',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoveredBox(idx)}
            onMouseLeave={() => setHoveredBox(null)}
          >
            <img 
              src={news.image} 
              alt="news logo" 
              style={{ width: '50px', height: 'auto', marginBottom: '15px' }} 
            />
            <h3 style={{ fontSize: '14px', color: '#888', margin: '0 0 5px' }}>{news.date}</h3>
            <h4 style={{ 
              fontSize: '18px', 
              color: '#fc7927', 
              margin: '0 0 10px',
              transition: 'color 0.2s ease',
              color: hoveredBox === idx ? '#fc7927' : '#00394f'
            }}>
              {news.title}
            </h4>
            <p style={{ fontSize: '15px', color: '#333' }}>{news.desc}</p>
            <a 
              href="#" 
              style={{
                textDecoration: 'none',
                color: '#fc7927',
                fontWeight: 'bold',
                display: 'inline-block',
                marginTop: '10px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = 'underline';
                e.currentTarget.style.color = '#fc7927';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = 'none';
                e.currentTarget.style.color = '#fc7927';
              }}
            >
              READ MORE
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Press;