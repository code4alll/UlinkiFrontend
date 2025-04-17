import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Logistics() {
  const [activeNav, setActiveNav] = useState('Services');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const styles = {
    container: {
      fontFamily: "'Inter', Arial, sans-serif",
      margin: 0,
      padding: 0,
      backgroundColor: '#fff',
      color: '#000',
      overflowX: 'hidden',
    },
    navbar: {
      position: 'fixed',
      top: '20px',
      right: '30px',
      display: 'flex',
      gap: '20px',
      fontSize: '14px',
      color: '#fff',
      zIndex: 100,
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      padding: '8px 12px',
      borderRadius: '20px',
      '&:hover': {
        backgroundColor: 'rgba(255,255,255,0.1)',
      },
    },
    activeLink: {
      color: '#ff5f3c',
      backgroundColor: 'rgba(255,255,255,0.1)',
    },
    hero: {
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url("/Images/Blog1.webp")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '180px 10% 100px',
      color: '#fff',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    heroHeading: {
      fontSize: '48px',
      fontWeight: '800',
      lineHeight: '1.2',
      maxWidth: '800px',
      marginBottom: '20px',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
      color: '#fff',
    },
    heroSub: {
      fontSize: '18px',
      maxWidth: '600px',
      color: '#eee',
      lineHeight: '1.6',
      marginBottom: '30px',
    },
    contentSection: {
      display: 'flex',
      padding: '80px 10%',
      gap: '60px',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
    },
    textBlock: {
      flex: '1',
      minWidth: '300px',
    },
    sectionHeading: {
      fontSize: '32px',
      fontWeight: '700',
      marginBottom: '40px',
      color: '#222',
      position: 'relative',
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: '-10px',
        left: '0',
        width: '60px',
        height: '4px',
        backgroundColor: '#ff5f3c',
        borderRadius: '2px',
      },
    },
    service: {
      marginBottom: '30px',
      padding: '20px',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: '#f8f8f8',
        transform: 'translateY(-5px)',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      },
    },
    serviceTitle: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '10px',
      color: '#333',
      display: 'flex',
      alignItems: 'center',
      '&:before': {
        content: '""',
        display: 'inline-block',
        width: '12px',
        height: '12px',
        backgroundColor: '#ff5f3c',
        borderRadius: '50%',
        marginRight: '10px',
      },
    },
    serviceDesc: {
      fontSize: '15px',
      color: '#555',
      lineHeight: '1.7',
    },
    videoBlock: {
      flex: '1',
      minWidth: '300px',
      position: 'relative',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
      display: 'flex',
      
    },
    videoStyle: {
      width: '100%',
      display: 'block',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'scale(1.02)',
      },
    },
    benefitContainer: {
      backgroundColor: '#f9f9f9',
      padding: '80px 10%',
      textAlign: 'center',
    },
    benefitTitle: {
      fontSize: '32px',
      fontWeight: '700',
      marginBottom: '60px',
      color: '#222',
      position: 'relative',
      display: 'inline-block',
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: '-10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60px',
        height: '4px',
        backgroundColor: '#ff5f3c',
        borderRadius: '2px',
      },
    },
    benefitGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '40px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    benefitCard: {
      backgroundColor: '#fff',
      padding: '30px 25px',
      borderRadius: '12px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
      },
    },
    deliveryContainer: {
      backgroundColor: '#eaf6ff',
      padding: '80px 10%',
    },
    deliveryContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'left',
    },
    deliveryTitle: {
      fontSize: '32px',
      fontWeight: '700',
      marginBottom: '15px',
      color: '#222',
    },
    deliveryDesc: {
      fontSize: '16px',
      color: '#444',
      marginBottom: '50px',
      maxWidth: '700px',
      lineHeight: '1.7',
    },
    deliveryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
    },
    deliveryCard: {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
      },
    },
    fulfillmentSection: {
      backgroundColor: '#fff',
      padding: '80px 10%',
      textAlign: 'center',
    },
    fulfillmentTitle: {
      fontSize: '32px',
      fontWeight: '700',
      marginBottom: '60px',
      color: '#222',
      position: 'relative',
      display: 'inline-block',
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: '-10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60px',
        height: '4px',
        backgroundColor: '#ff5f3c',
        borderRadius: '2px',
      },
    },
    fulfillmentGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
      gap: '40px',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    fulfillmentItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    fulfillmentIcon: {
      width: '80px',
      height: '80px',
      backgroundColor: '#fff',
      borderRadius: '20px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'scale(1.1)',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      },
    },
    fulfillmentText: {
      fontSize: '15px',
      color: '#555',
      fontWeight: '500',
    },
    growthSection: {
      background: 'linear-gradient(135deg, #3770bf, #468ff6)',
      padding: '100px 10%',
      textAlign: 'center',
   
    },
    growthTitle: {
      fontSize: '36px',
      fontWeight: '700',
      color: '#fff',
      marginBottom: '20px',
      textShadow: '0 2px 4px rgba(0,0,0,0.2)',
    },
    growthDesc: {
      fontSize: '18px',
      color: 'rgba(255,255,255,0.9)',
      marginBottom: '40px',
      maxWidth: '700px',
      marginLeft: 'auto',
      marginRight: 'auto',
      lineHeight: '1.7',
    },
    growthButton: {
      backgroundColor: '#f97316',
      color: '#fff',
      padding: '0.75rem 1.5rem', // Responsive padding (12px 24px)
      border: 'none',
      whiteSpace: 'nowrap', // Keeps text on one line
      fontWeight: '600',
      cursor: 'pointer',
      fontSize: '1rem', // 16px for better readability
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(249, 115, 22, 0.4)',
      display: 'inline-flex', // allows centering
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '0.5rem', // smooth rounded corners
      maxWidth: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    
      '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: '0 7px 20px rgba(249, 115, 22, 0.5)',
      },
    }
    
    
  };

  const navItems = ['Home', 'About us', 'Services', 'Blog', 'Contact us'];
  
  const fulfillmentData = [
    { name: 'Food & Beverages', icon: '🍔' },
    { name: 'Electronics & Accessories', icon: '📱' },
    { name: 'Office & Stationery', icon: '📝' },
    { name: 'Home & Decor', icon: '🏠' },
    { name: 'Toys & Games', icon: '🧸' },
    { name: 'Beauty & Cosmetics', icon: '💄' },
  ];

  const services = [
    {
      title: 'Global Trade Enablement',
      desc: 'Easily connect with verified international buyers and sellers. Our platform simplifies compliance, documentation, and trade flows for global business expansion.',
    },
    {
      title: 'End-to-End Logistics Support',
      desc: 'From pick-up to delivery, we offer comprehensive logistics solutions including customs clearance, warehousing, and multi-modal transport across borders.',
    },
    {
      title: 'Smart Product Listing & Cataloging',
      desc: 'Showcase your products with professionally designed catalogs, SEO-friendly listings, and smart categorization for better global visibility.',
    },
    {
      title: 'Localized Payment Solutions',
      desc: 'Receive and send payments in local currencies with minimal fees. Our secure platform supports multiple gateways, credit terms, and buyer protection.',
    },
    {
      title: 'Integrated RFQ & Negotiation Tools',
      desc: 'Post or respond to RFQs directly, negotiate in real-time, and convert deals faster with our built-in tools for smart B2B matchmaking.',
    },
    {
      title: 'Multi-language & Multi-currency Support',
      desc: 'Break language and currency barriers. List products and communicate with global users using built-in translation and localized pricing tools.',
    },
    {
      title: 'Verified Partner Network',
      desc: 'Partner with trustworthy logistics, finance, and customs agents in different countries to simplify your global trade experience.',
    },
    {
      title: 'Customizable B2B Storefront',
      desc: 'Launch your own mini-storefront within Ulinkit, complete with branding, product categories, and messaging — no coding needed.',
    }
  ];
  

  const benefits = [
    { title: 'Instant Launch', desc: 'Launch your e-commerce operations right away using our ready-to-go logistics network—no setup time needed.' },
    { title: 'Low-Cost Fulfillment', desc: 'Cut warehousing and shipping costs with our shared, efficient infrastructure, leaving you more budget for growth.' },
    { title: 'Zero Upfront Cost', desc: 'Save your money and time on large fulfillment center or enter into long term contracts. Pay for the time you use our space and fulfillment services.' },
    { title: 'White-Label Solutions', desc: 'Fully customizable services that reflect your brand\'s identity, from packaging to customer communications.' },
    { title: 'End-to-End Visibility', desc: 'Track inventory and orders in real-time with our advanced system, giving you full control and transparency.' },
    { title: 'Elastic Infrastructure', desc: 'Scale your logistics needs up or down seamlessly to match demand, ensuring you only pay for what you need.' },
  ];

  const deliveryFeatures = [
    {
      title: 'Same & Next Day Delivery',
      desc: 'Experience lightning-fast shipping throughout the Global MarketPlace. Reliable service that ensures you arrive on time.',
    },
    {
      title: 'Flexible Payment with COD',
      desc: 'Provide secure cash-on-delivery options, enhancing trust and expanding payment flexibility.',
    },
    {
      title: 'Efficient Returns Handling',
      desc: 'We inspect items, issue refunds, and repair damages. Customers can track the full returns process.',
    },
    {
      title: 'Real-Time Order Processing & Tracking',
      desc: 'We provide real-time tracking information, enhancing the shopping experience.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}
    

      {/* Hero Section */}
      <motion.div 
        style={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          style={styles.heroHeading}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Ecommerce Fulfillment Made Easy by Ulinkit Logistics Services
        </motion.h1>
        <motion.p 
          style={styles.heroSub}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          
          Ulinkit Logistics Services provides a complete solution which is tailor made to your business need.
        </motion.p>
        <motion.button
          style={{
            ...styles.growthButton,
            alignSelf: 'flex-start',
            marginTop: '20px'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Services Section */}
      <motion.div 
        style={styles.contentSection}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div style={styles.textBlock} variants={itemVariants}>
          <h2 style={styles.sectionHeading}>
            Warehousing, Fulfillment, Delivery, Returns & More
          </h2>

          {services.map((item, i) => (
            <motion.div 
              key={i} 
              style={styles.service}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div style={styles.serviceTitle}>{item.title}</div>
              <div style={styles.serviceDesc}>{item.desc}</div>
            </motion.div>
          ))}
        </motion.div>

       
      </motion.div>

      {/* Benefits Section */}
      <motion.div 
        style={styles.benefitContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={styles.benefitTitle}>How can this benefit you?</h2>
        <div style={styles.benefitGrid}>
          {benefits.map((item, i) => (
            <motion.div 
              key={i} 
              style={styles.benefitCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div style={{ fontWeight: '600', marginBottom: '15px', fontSize: '18px', color: '#222' }}>
                {item.title}
              </div>
              <div style={{ fontSize: '15px', color: '#555', lineHeight: '1.6' }}>
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Delivery Section */}
      <motion.div 
        style={styles.deliveryContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div style={styles.deliveryContent}>
          <h2 style={styles.deliveryTitle}>Impress your customers with fast & accurate delivery</h2>
          <p style={styles.deliveryDesc}>
            Streamline your ecommerce logistics and focus on growing your business with Ulinkit's all-in-one delivery solution. Deliver a top-notch customer experience every time, whether shipping domestically or internationally.
          </p>
          <div style={styles.deliveryGrid}>
            {deliveryFeatures.map((card, i) => (
              <motion.div 
                key={i} 
                style={styles.deliveryCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div style={{ fontWeight: '600', marginBottom: '15px', fontSize: '18px', color: '#222' }}>
                  {card.title}
                </div>
                <div style={{ fontSize: '15px', color: '#555', lineHeight: '1.6' }}>
                  {card.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Fulfillment Section */}
      <motion.div 
        style={styles.fulfillmentSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={styles.fulfillmentTitle}>
          Fulfillment that works great for any industry
        </h2>
        <div style={styles.fulfillmentGrid}>
          {fulfillmentData.map((item, i) => (
            <motion.div 
              key={i} 
              style={styles.fulfillmentItem}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div style={styles.fulfillmentIcon}>
                <span style={{ fontSize: '36px' }}>{item.icon}</span>
              </div>
              <p style={styles.fulfillmentText}>{item.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Growth Section */}
      <motion.div 
        style={styles.growthSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={styles.growthTitle}>Grow your business every step of the way</h2>
        <p style={styles.growthDesc}>
          Get tailored tools and services to power every stage of your business – all in one place.
        </p>
        <motion.button 
          style={styles.growthButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Logistics;