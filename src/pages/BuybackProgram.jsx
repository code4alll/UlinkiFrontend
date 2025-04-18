import React from 'react';
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const BuybackProgram = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to bottom right, #468ff6, #3770bf)',
    textAlign: 'center',
    padding: '1rem',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '1.5rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '100%',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  };

  const descriptionStyle = {
    fontSize: '1.125rem',
    color: '#4b5563',
    marginBottom: '1.5rem',
  };

  const buttonStyle = {
    display: 'inline-block',
    backgroundColor: '#fc7927',
    color: '#ffffff',
    padding: '1rem 2rem',
   
    fontSize: '0.875rem',
    fontWeight: 500,
    boxShadow: '0 4px 8px rgba(79, 70, 229, 0.3)',
    cursor: 'not-allowed',
    opacity: 0.8,
  };

  const iconContainerStyle = {
    color: '#fc7927',
    marginBottom: '1rem',
  };

  return (
    <div style={containerStyle}>
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        style={cardStyle}
      >
        <div style={iconContainerStyle}>
          <Rocket size={48} className="animate-bounce" />
        </div>
        <h1 style={titleStyle}>Buyback Program</h1>
        <p style={descriptionStyle}>
          We’re gearing up to launch our exclusive Buyback Offers!
          Soon, you’ll be able to sell your old items for value and upgrade in just a few clicks.
        </p>
        <div style={buttonStyle}>Coming Soon</div>
      </motion.div>
    </div>
  );
};

export default BuybackProgram;
