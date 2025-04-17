import React, { useState } from 'react';

const Press = () => {
  const [activeTab, setActiveTab] = useState('In The News');
  const [hoveredBox, setHoveredBox] = useState(null);


    const newsData = [
      {
        date: 'June 28 2022',
        title: 'Ulinkit reaches 1 million unique products on the platform in 14 categories',
        desc: 'This milestone will help businesses have a variety of options with great opportunities to save and make generous margins for their business growth.',
        image: '/Images/Blog1.webp',
      },
      {
        date: 'June 7 2022',
        title: 'Al Etihad Credit Bureau, Tradeling ink credit facilities agreement targeting UAE businesses',
        desc: 'Al Etihad Credit Bureau (AECB) signed an agreement with Tradeling, a MENA-based B2B e-commerce platform, to facilitate offering buyers on the site better credit facilities.',
        image: '/Images/Blog1.webp',
      },
      {
        date: 'May 23 2022',
        title: 'Is this new secret to success helping entrepreneurs reach record profit margins: The B2B2C model',
        desc: 'Tradeling, a hyper-growing e-marketplace focused on B2B transactions in the MENA region, has recorded exceptional revenue growth of more than 35 percent month-on-month...',
        image: '/Images/Blog1.webp',
      },
      {
        date: 'April 27 2022',
        title: 'Ulinkit launches its second fulfilment centre in the UAE',
        desc: 'The new facility is part of Tradeling’s strategy to strengthen its operations in the UAE and expand its footprint across the MENA region, starting with Egypt and Saudi Arabia.',
        image: '/Images/Blog2.webp',
      },
      {
        date: 'April 12 2022',
        title: 'Dubai-based Tradeling partners with Hong-Kong’s electronics manufacturer Astrum',
        desc: 'Ulinkit will be the exclusive distributor of Astrum’s goods in the MENA region.',
        image: '/Images/Blog3.webp',
      },
      {
        date: 'March 9 2022',
        title: 'Ulinkit and CCI France UAE join hands to drive global sourcing',
        desc: 'Ulinkit signed an MoU with CCI France UAE to strengthen global sourcing of a large breadth of products and services for the region’s B2B eMarketplace.',
        image: '/Images/Blog4.webp',
      },
      {
        date: 'March 8 2022',
        title: 'Inside the progress achieved by women in tech in the Middle East',
        desc: 'Today’s world has transformed to include women in decision making processes a lot more and I feel like my opinion matters and my talent and experience is being appreciated.',
        image: '/Images/Blog1.webp',
      },
      {
        date: 'February 28 2022',
        title: 'Ulinkit unlocks the MENA Region to Danish businesses',
        desc: 'The Trade Council of Denmark signed an MoU with Tradeling to increase trade volume between Denmark-based companies and MENA-based buyers.',
        image: '/Images/Blog1.webp',
      },
      {
        date: 'January 19 2022',
        title: 'Ulinkit signs MoU with Hutchison Ports Ajman',
        desc: 'This agreement includes faster cargo clearance and delivery to Tradeling’s facilities for businesses importing goods into the UAE.',
        image: '/Images/Blog1.webp',
      },
      {
        date: 'January 11 2022',
        title: 'Former Aramex COO Iyad Kamal joins Tradeling’s board',
        desc: 'Iyad Kamal brings vast logistics experience to help develop Tradeling’s logistics expansion plans across the MENA region.',
        image: '/Images/Blog1.webp',
      },
      {
        date: 'February 28 2022',
        title: 'Ulinkit unlocks the MENA Region to Danish businesses through a new partnership with The Trade Council of Denmark',
        desc: 'The Trade Council of Denmark (TC MENA) has signed a Memorandum of Understanding (MoU) with Tradeling to promote Denmark-based companies to increase trade volume between the companies and MENA-based buyers.',
        image: '/Images/Blog1.webp',
      },
      {
        date: 'January 19 2022',
        title: 'Ulinkit signs MoU with Hutchison Ports Ajman',
        desc: 'The agreement will open new opportunities, including faster cargo clearance and delivery to Tradeling’s facilities for businesses globally to import goods into the UAE.',
        image: '/Images/Blog1.webp',
      },
      {
        date: 'January 11 2022',
        title: 'Former Aramex COO Iyad Kamal gets appointed to Tradeling’s board',
        desc: 'Iyad Kamal, a seasoned logistics and supply chain expert and business operations executive brings vast experience in cross-border logistics and operations and will be collaborating with Tradeling’s executive management team in developing the company’s logistics expansion plans and capabilities in the UAE and across the MENA region.',
        image: '/Images/Blog1.webp',
      },
      {
        date: 'December 21 2021',
        title: 'Ulinkit signs MoU with UK Department of International Trade',
        desc: 'New understanding to help businesses tap into the £12.0 billion trade between the two countries. UAE was the UK’s 23rd largest trading partner accounting for 1.0 percent of total UK trade.',
        image: '/Images/Blog1.webp',
      },
      {
        date: 'December 14 2021',
        title: 'Dubai-based Tradeling Appoints Harry Pappas as Chief Financial Officer',
        desc: 'Ulinkit, the eMarketplace focused on business-to-business (B2B) transactions in the Middle East and North Africa has announced the appointment of Harry Pappas as Chief Financial Officer (CFO), effective immediately.',
        image: '/Images/Blog1.webp',
      },
      {
        date: 'November 28 2021',
        title: 'Etihad Credit Insurance and Tradeling sign deal to boost trade in MENA region',
        desc: 'ECI will provide Tradeling’s customers with solutions that will protect them against risks arising from customers’ insolvency, protracted defaults as well as supply and political challenges.',
        image: '/Images/Blog1.webp',
      },
      {
        date: 'November 11 2021',
        title: 'Ulinkit unlocks the MENA region for Indian sellers by signing an MOU with Trade India',
        desc: 'Through this vital partnership, Tradeling will provide a holistic solution for sellers based in India; utilising Tradeling\'s platform to list and trade their products.',
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
        color: '#00394f',
        padding: '40px',
        position: 'relative'
      }}>
        <h1 style={{ fontSize: '40px', margin: 0 }}>Press</h1>
        <p style={{ margin: '10px 0' }}>
          For press requests please email:<br />
          <a href="mailto:press@tradeling.com" style={{
            color: '#ff5a3c',
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
            color: '#ff5a3c',
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
            color: '#ff5a3c',
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
              borderBottom: activeTab === tab ? '2px solid #ff5a3c' : 'none',
              fontWeight: activeTab === tab ? 'bold' : 'normal',
              color: activeTab === tab ? '#00394f' : '#666',
              transition: 'all 0.2s ease'
            }}
            onClick={() => setActiveTab(tab)}
            onMouseEnter={(e) => {
              if (activeTab !== tab) {
                e.currentTarget.style.color = '#ff5a3c';
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
              color: '#00394f', 
              margin: '0 0 10px',
              transition: 'color 0.2s ease',
              color: hoveredBox === idx ? '#ff5a3c' : '#00394f'
            }}>
              {news.title}
            </h4>
            <p style={{ fontSize: '15px', color: '#333' }}>{news.desc}</p>
            <a 
              href="#" 
              style={{
                textDecoration: 'none',
                color: '#ff5a3c',
                fontWeight: 'bold',
                display: 'inline-block',
                marginTop: '10px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = 'underline';
                e.currentTarget.style.color = '#e04a2d';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = 'none';
                e.currentTarget.style.color = '#ff5a3c';
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