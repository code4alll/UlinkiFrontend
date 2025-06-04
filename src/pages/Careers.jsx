import React, { Fragment, useState } from 'react';
import { FaCalendarAlt, FaGlobe, FaUsers } from 'react-icons/fa';
import { GiTalk } from 'react-icons/gi';
import TestimonialCarousel from '../components/Testimonials';
import FAQsSection from '../components/FAQs';
import warehouseImg from '../assets/Warehouse.jpeg';
import { Helmet } from 'react-helmet-async';

const Data = [
  {
    id: 1,
    icon: <FaCalendarAlt style={{ color: '#fc7927', fontSize: '2.5rem' }} />,
    numbersData: '14',
    title: 'Years in business',
  },
  {
    id: 2,
    icon: <FaGlobe style={{ color: '#fc7927', fontSize: '2.5rem' }} />,
    numbersData: '33',
    title: 'Nationalities',
  },
  {
    id: 3,
    icon: <GiTalk style={{ color: '#fc7927', fontSize: '2.5rem' }} />,
    numbersData: '47',
    title: 'Languages spoken',
  },
  {
    id: 4,
    icon: <FaUsers style={{ color: '#fc7927', fontSize: '2.5rem' }} />,
    numbersData: '200+',
    title: 'Talent working here',
  },
];
const DataValue = [
  {
    title: "Integrity",
    image: "https://res.cloudinary.com/dlugyopzh/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1749032761/Integrity_n0gwn0.avif",
    description: "We uphold the highest standards of integrity, fostering trust and transparency in every relationship and decision we make."
  },
  {
    title: "Collaboration",
    image: "https://res.cloudinary.com/dlugyopzh/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1749032760/HandShake_xqrivq.avif",
    description: "We believe in the power of teamwork, uniting diverse perspectives to drive meaningful innovation and impactful solutions."
  },
  {
    title: "Innovation",
    image: "https://res.cloudinary.com/dlugyopzh/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1749032760/People_b6vjjk.avif",
    description: "We are committed to continuous innovation, adapting to change and anticipating the needs of tomorrow's global businesses."
  },
  {
    title: "Diversity",
    image: "https://res.cloudinary.com/dlugyopzh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1749032760/Enhancement_l6febv.avif",
    description: "We celebrate diversity and cultivate an inclusive culture where every voice is heard, valued, and empowered to thrive."
  }
];

const Careers = () => {
  const [hoverStates, setHoverStates] = useState({
    mainButton: false,
    card: false,
    stats: Array(Data.length).fill(false),
    imageCards: Array(4).fill(false),
    learnMore: false,
  });

  const handleHover = (element, isHovering) => {
    setHoverStates(prev => ({
      ...prev,
      [element]: isHovering
    }));
  };

  const handleStatHover = (index, isHovering) => {
    const newStats = [...hoverStates.stats];
    newStats[index] = isHovering;
    setHoverStates(prev => ({
      ...prev,
      stats: newStats
    }));
  };

  const handleImageCardHover = (index, isHovering) => {
    const newImageCards = [...hoverStates.imageCards];
    newImageCards[index] = isHovering;
    setHoverStates(prev => ({
      ...prev,
      imageCards: newImageCards
    }));
  };

  return (
    <Fragment>
      <Helmet>
        <title>Careers at Ulinkit</title>
        <meta 
          name="description" 
          content="Join the Ulinkit team and help shape the future of global commerce. Explore open roles and be part of a mission-driven company connecting the world." 
        />
        <link rel="canonical" href="https://www.ulinkit.com/careers" />
      </Helmet>

      <div style={{ fontFamily: 'sans-serif' }}>
        {/* Hero Section */}
        <div style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundImage: `url('https://res.cloudinary.com/dlugyopzh/image/upload/v1749032760/People_b6vjjk.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '2rem 1rem'
        }}>
          {/* Dark gradient overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5))',
            backdropFilter: 'blur(4px)'
          }}></div>
        
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
            '@media (min-width: 768px)': {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }
          }}>
            {/* Left Text Section */}
            <div style={{
              maxWidth: '800px',
              textAlign: 'center',
              transition: 'all 0.7s',
              '@media (min-width: 768px)': {
                textAlign: 'left',
                flex: 1
              }
            }}>
              <h1 style={{
                fontSize: '2rem',
                fontWeight: 800,
                marginBottom: '1.5rem',
                background: '#3770bf',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.25,
                '@media (min-width: 768px)': {
                  fontSize: '2.5rem'
                }
              }}>
                Join a platform that powers global procurement and distribution — all in one place
                <br />
                <span style={{ color: 'white' }}>It's easier with Ulinkit</span>
              </h1>
        
              <button 
                onMouseEnter={() => handleHover('mainButton', true)}
                onMouseLeave={() => handleHover('mainButton', false)}
                style={{
                  background: hoverStates.mainButton 
                    ? 'linear-gradient(to right, #f97316, #ea580c)' 
                    : 'linear-gradient(to right, #fb923c, #ea580c)',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.375rem',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transform: hoverStates.mainButton ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.3s, background 0.3s',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  display: 'inline-flex',
                }}
              >
                Get in touch
              </button>
            </div>
        
            {/* Right Card Section */}
            <div 
              onMouseEnter={() => handleHover('card', true)}
              onMouseLeave={() => handleHover('card', false)}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(12px)',
                borderRadius: '0.75rem',
                boxShadow: hoverStates.card ? '0 0 20px rgba(139, 92, 246, 0.3)' : '0 4px 6px rgba(0,0,0,0.1)',
                padding: '1.5rem 2rem',
                transition: 'all 0.5s',
                textAlign: 'center',
                width: '100%',
                maxWidth: '24rem',
                marginTop: '2rem',
                '@media (min-width: 768px)': {
                  marginTop: 0,
                  flex: '0 0 auto'
                }
              }}
            >
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                background: 'linear-gradient(to right, #4a00e0, #8e2de2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                <span style={{ marginRight: '0.5rem' }}>♦️</span> Ulinkit
              </div>
              <p style={{ fontSize: '0.875rem', color: 'rgba(229, 231, 235, 0.8)' }}>Global MarketPlace leading wholesale marketplace</p>
              <div style={{
                background: '#4b5563',
                height: '1.5rem',
                borderRadius: '0 0 0.375rem 0.375rem',
                marginTop: '1rem'
              }}></div>
            </div>
          </div>
        </div>
        
        {/* About Section */}
        <div style={{
          backgroundColor: '#f3f4f6',
          padding: '3rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
          '@media (min-width: 768px)': {
            flexDirection: 'row',
            padding: '4rem 2rem'
          }
        }}>
          {/* Left - Images */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '32rem',
            marginBottom: '2rem',
            '@media (min-width: 768px)': {
              marginBottom: 0
            }
          }}>
            <img
              src="https://res.cloudinary.com/dlugyopzh/image/upload/v1749032760/warehouse_bsaxat.jpg"
              alt="Office Building"
              style={{
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
            <img
              src={warehouseImg}
              alt="Team Work"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '80%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '0.5rem',
                boxShadow: '0 20px 25px rgba(0,0,0,0.1)',
                display: 'none',
                '@media (min-width: 768px)': {
                  display: 'block'
                }
              }}
            />
          </div>

          {/* Right - Text */}
          <div style={{ 
            maxWidth: '36rem',
            textAlign: 'center',
            '@media (min-width: 768px)': {
              textAlign: 'left'
            }
          }}>
            <img
              src="https://res.cloudinary.com/dlugyopzh/image/upload/v1749032760/logo2_ftnito.png"
              alt="Ulinkit Logo"
              style={{ 
                marginBottom: '1rem', 
                width: '10rem', 
                height: 'auto',
                marginLeft: 'auto',
                marginRight: 'auto',
                '@media (min-width: 768px)': {
                  marginLeft: 0,
                  marginRight: 0
                }
              }}
            />
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '1rem',
              color: '#1f2937'
            }}>
              Ulinkit stands as the world's leading and most comprehensive business-to-business eMarketplace, committed to simplifying the purchasing process for both buyers and sellers globally.
            </h2>
            <p style={{ color: '#4b5563', lineHeight: '1.6' }}>
              Leveraging our advanced technology, expansive ecosystem, financial solutions, and talented workforce, we enable seamless international trade, connecting businesses worldwide and supporting the growth of SMEs in achieving their business goals.
            </p>
          </div>
        </div>
        
        {/* Stats Section */}
        <div style={{
          backgroundColor: 'white',
          padding: '2.5rem 1rem'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            '@media (min-width: 640px)': {
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem'
            },
            '@media (min-width: 768px)': {
              gap: '2.5rem'
            }
          }}>
            {Data.map((item, index) => (
              <div 
                key={item.id} 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transform: hoverStates.stats[index] ? 'translateY(-5px)' : 'none',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={() => handleStatHover(index, true)}
                onMouseLeave={() => handleStatHover(index, false)}
              >
                <div style={{ marginBottom: '0.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.875rem', fontWeight: 600, color: '#1f2937' }}>{item.numbersData}</h3>
                <p style={{ color: '#6b7280', textAlign: 'center' }}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>

       {/* Core Values Section */}
<section style={{ 
  padding: '4rem 1rem', 
  backgroundColor: '#f9fafb'
}}>
  <div style={{ 
    textAlign: 'center', 
    maxWidth: '720px', 
    margin: '0 auto 3rem'
  }}>
    <h1 style={{ 
      fontSize: '2.25rem', 
      fontWeight: 700, 
      color: '#111827', 
      marginBottom: '1rem' 
    }}>
      Our Core Values
    </h1>
    <p style={{ 
      color: '#6b7280', 
      fontSize: '1rem', 
      lineHeight: '1.8',
      padding: '0 1rem' 
    }}>
      We believe in people-first thinking, integrity, inclusion, and excellence—empowering our team and ensuring customer satisfaction at every level.
    </p>
  </div>

  <div 
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    }}
  >
    {DataValue.map((item, index) => (
      <div
        key={index}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '1rem',
          padding: '1.5rem',
          boxShadow: hoverStates.imageCards[index] 
            ? '0 8px 24px rgba(0, 0, 0, 0.15)' 
            : '0 4px 12px rgba(0, 0, 0, 0.08)',
          transition: 'transform 0.3s, box-shadow 0.3s',
          transform: hoverStates.imageCards[index] ? 'scale(1.03)' : 'scale(1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          minHeight: '360px'
        }}
        onMouseEnter={() => handleImageCardHover(index, true)}
        onMouseLeave={() => handleImageCardHover(index, false)}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: '100%',
            maxWidth: '160px',
            height: 'auto',
            borderRadius: '0.5rem',
            objectFit: 'contain',
            marginBottom: '1rem',
            backgroundColor: '#f3f4f6',
            padding: '0.5rem'
          }}
        />

        <h3 style={{ 
          fontSize: '1.125rem', 
          fontWeight: 600, 
          color: '#1f2937', 
          marginBottom: '0.5rem' 
        }}>
          {item.title}
        </h3>

        {hoverStates.imageCards[index] && (
          <p style={{ 
            fontSize: '0.95rem', 
            color: '#4b5563', 
            marginTop: '0.25rem',
            lineHeight: '1.6' 
          }}>
            {item.description}
          </p>
        )}
      </div>
    ))}
  </div>
</section>

        
        <TestimonialCarousel />
        <FAQsSection />
      </div>
    </Fragment>
  );
};

export default Careers;