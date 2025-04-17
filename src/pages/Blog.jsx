import React, { useState } from 'react';
import myimage from '../assets/myimage.webp'; // Adjust the path as necessary

const App = () => {
  const tags = ['All', 'Sourcing', 'B2B', 'Business Advisor', 'Retailing', 'SRM', 'Fulfillment', 'Payment', 'Warehousing'];

  const blogCards = [
    {
      title: "Ulinkit: Tips for Safe and Smart Bulk Buying",
      subtitle: "Optimise costs while improving procurement efficiency",
      date: "JAN 28, 2025",
      tags: ["Sourcing", "Budgeting", "Fulfillment"]
    },
    {
      title: "Beyond Retail: Selling and Pricing for B2B Wholesale",
      subtitle: "Complexities of B2B wholesale pricing",
      date: "JAN 27, 2025",
      tags: ["Sourcing", "Budgeting", "Fulfillment"]
    },
    {
      title: "Small Business Owners - Buy In Bulk To Save",
      subtitle: "Lower costs through bulk buying",
      date: "JAN 22, 2025",
      tags: ["Sourcing", "Budgeting"]
    },
    {
      title: "Ulinkit Excels - One Of The Best Bulk Wholesalers Of Consumer Electronics",
      subtitle: "Successful procurement requires reliable sources",
      date: "JAN 22, 2025",
      tags: ["Sourcing"]
    },
    {
      title: "The Benefits Of Buying From Wholesale Marketplaces",
      subtitle: "A smart choice for small retailers",
      date: "DEC 17, 2024",
      tags: ["B2B", "Sourcing", "Business Advisor"]
    },
    {
      title: "The Go-To Online Wholesale Marketplace For B2B Buyers And Sellers",
      subtitle: "Transforming procurement in the UAE",
      date: "DEC 17, 2024",
      tags: ["B2B", "Sourcing", "Business Advisor"]
    },
    {
      title: "The 8 Main Steps In The Procurement Process",
      subtitle: "Procurement processes vary greatly depending on business needs.",
      date: "JAN 17, 2023",
      tags: ["B2B", "Business Advisor"]
    },
    {
      title: "5 Ways For Resellers To Spot Category and Product Trends",
      subtitle: "How to master the art of product demand prediction",
      date: "NOV 30, 2022",
      tags: ["B2B", "Business Advisor"]
    },
    {
      title: "Opportunities, Advantages Of Reselling",
      subtitle: "Insights on how to stay ahead of your competitors",
      date: "NOV 30, 2022",
      tags: ["B2B", "Sourcing", "Business Advisor"]
    },
    {
      title: "5 Steps - Creating a Strategic Procurement Process",
      subtitle: "Minimize risk with a strategic procurement plan",
      date: "NOV 29, 2022",
      tags: ["B2B", "Sourcing", "Business Advisor"]
    }
  ];

  // State for hover effects
  const [hoveredTag, setHoveredTag] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(false);

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f4f4' }}>

      {/* Header */}
     

      {/* Hero Section */}
      <section style={{ display: 'flex', padding: '4rem 2rem', backgroundColor: '#e6e6e6', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', marginLeft: '2rem', marginRight: '2rem' }}>
        <div style={{ maxWidth: '500px' }}>
          <p style={{ fontWeight: 'bold', color: '#000' }}>Featured Post</p>
          <h1 style={{ fontSize: '2rem', margin: '0.5rem 0', color: '#000' }}>Ulinkit: The Go-To Online Wholesale Marketplace</h1>
          <p style={{ color: '#000' }}>Transforming procurement in the UAE.</p>
          <button
            style={{
              backgroundColor: hoveredButton ? '#ff8533' : '#ff6600',
              color: 'white',
              padding: '0.5rem 1rem',
              marginTop: '1rem',
              border: 'none',
              borderRadius: '4px',
              transition: 'background-color 0.3s ease, transform 0.3s ease', // Added transform transition
              transform: hoveredButton ? 'scale(1.05)' : 'scale(1)', // Scaling effect
              boxShadow: hoveredButton ? '0 4px 12px rgba(0, 0, 0, 0.2)' : 'none', // Add shadow effect
            }}
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
          >
            READ MORE
          </button>
        </div>
        <img
          src={myimage}
          alt="Hero"
          style={{
            width: '40%',
            borderRadius: '8px',
            minWidth: '300px',
            marginTop: '1rem'
          }}
        />
      </section>

      {/* Tag Filters */}
      <div style={{ padding: '1rem 2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {tags.map(tag => (
          <button
            key={tag}
            style={{
              border: '1px solid #00344b',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              backgroundColor: hoveredTag === tag ? '#e6f7ff' : 'white',
              cursor: 'pointer',
              color: '#000',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={() => setHoveredTag(tag)}
            onMouseLeave={() => setHoveredTag(null)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Blog + Sidebar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '2rem' }}>

        {/* Blog Cards */}
        <div style={{ flex: '3', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
          {blogCards.map((card, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              width: '320px',
              color: 'black',
              padding: '1.2rem',
              borderRadius: '8px',
              boxShadow: '0 0 8px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
            }}>
            <img
  src="/Images/Blog1.webp"
  alt="blog"
  style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }}
/>

              <div style={{ margin: '0.8rem 0', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {card.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.6rem',
                      backgroundColor: '#f0f0f0',
                      borderRadius: '4px',
                      fontWeight: 'bold'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 style={{ fontSize: '1.1rem', margin: '0.5rem 0', lineHeight: '1.3' }}>{card.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1rem', flex: '1' }}>{card.subtitle}</p>
              <p style={{ fontSize: '0.75rem', color: '#999', marginTop: 'auto' }}>
                <span style={{ fontWeight: 'bold' }}>Ulinkit</span> · {card.date}
              </p>
            </div>
          ))}
        </div>

        {/* Sidebar CTA */}
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          marginLeft: '2rem',
          maxWidth: '300px',
          height: 'fit-content',
          borderRadius: '8px',
          boxShadow: '0 0 8px rgba(0,0,0,0.1)',
        }}>
          <h4 style={{ color: '#00344b', marginBottom: '0.5rem' }}>Become a Buyer</h4>
          <h2 style={{ color: 'black', fontSize: '1.5rem', marginBottom: '1rem' }}>Product sourcing made easy!</h2>
          <p style={{ color: 'black', lineHeight: '1.6' }}>
            All your wholesale sourcing needs on one platform. Get the products you require, at the prices you need,
            whether you are a reseller or sourcing supplies for your business.
          </p>
          <button style={{
            backgroundColor: '#00344b',
            color: 'white',
            marginTop: '1.5rem',
            padding: '0.7rem 1.2rem',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            width: '100%'
          }}>
            REGISTER TODAY
          </button>
        </div>
      </div>

      {/* Footer */}
    
    </div>
  );
};

export default App;