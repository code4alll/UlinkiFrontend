import React, { useState } from 'react';

const prohibitedItems = [
  'Listing of services or job opportunities',
  'Counterfeit goods or any form of fake items',
  'Goods or items that infringe upon the intellectual property rights of any individual or entity',
  'Stocks, bonds, investment interests, and other securities',
  'Currencies (including digital currencies) and negotiable instruments (e.g., cheques)',
  'Items that promote hatred, violence, or intolerance based on ethnicity, race, or religion',
  'Artifacts, antiquities, and valuable art pieces',
  'Pornographic materials or related items',
  'Medical drugs (including over-the-counter medications)',
  'Medical devices and equipment',
  'Drug paraphernalia (e.g., marijuana pipes, bongs, and grow lights)',
  'E-cigarettes and electronic hookahs',
  'Tobacco products, nicotine, and e-liquids',
  'Flammable, explosive, hazardous, and radioactive chemicals or substances',
  'Fireworks, firecrackers, and other explosive devices',
  'Firearms, ammunition, or replicas of firearms or ammunition',
  'Weapons (e.g., crossbows, switchblade knives)',
  'Descramblers or illegal signal decoders',
  'Devices intended to block, jam, or interfere with authorized communications',
  'Spy equipment or surveillance devices',
  'Bank card readers or “skimming” devices',
  'Used SIM cards',
  'Live animals',
  'Animal parts that are restricted by law (e.g., ivory)',
  'Alcohol intended for consumption, or food products containing alcohol',
  'Pork and pork-based products',
  'Any other items prohibited by law, regulations, sanctions, or trade restrictions in any jurisdiction',
  'Residential properties such as houses, villas, and apartments',
  'Automotive items such as motorcycles, cars, and scooters',
  'Medical sexual enhancers, fertility boosters, or hormonal products (except for natural supplements)'
];


const ProductListingPolicy = () => {
  const [openSections, setOpenSections] = useState({
    uaeProhibitedItems: false,
    tradelingProhibitedItems: false,
    fullPolicy: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sectionStyle = {
    cursor: 'pointer',
    color: '#FFA500',
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'all 0.3s ease',
  };

  const arrowStyle = (isOpen) => ({
    display: 'inline-block',
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
  });

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '1.5rem',
    fontSize: '16px',
    lineHeight: '1.8',
    transition: 'all 0.3s ease',
  };

  const sectionBox = {
    marginBottom: '25px',
    paddingBottom: '10px',
    borderBottom: '1px solid #e0e0e0',
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '30px 20px' }}>
      <h1 style={{ fontSize: '32px', fontWeight: '600', textAlign: 'center', marginBottom: '10px' }}>
        Product Listing Policy
      </h1>
      <h2 style={{ fontSize: '18px', textAlign: 'center', color: '#666', marginBottom: '25px' }}>
        Effective February 15, 2020
      </h2>

      <div style={{ fontSize: '16px', marginBottom: '30px', lineHeight: '1.7' }}>
        <p>
        This Product Listing Policy applies to the Ulinkit.com website and any mobile applications operated by U-Link Outsourcing private Limited and its affiliates  <strong>(“Ulinkit”)</strong>.
        </p>
        <p>
  You may not post or sell any item that is restricted or prohibited by federal, state, or local law in any
  jurisdiction. While we have provided a general overview of prohibited or restricted categories, this list is not
  exhaustive. As a Seller, you are solely responsible for ensuring that your listings comply with all applicable laws and regulations.
</p>
<p>
  Ulinkit may impose additional platform-specific restrictions that go beyond legal requirements. These restrictions may
  be updated at any time. It is your responsibility to regularly review this policy to ensure your continued compliance.
</p>
<p>
  Ulinkit reserves the right, at its sole discretion, to determine whether an item violates this policy. We may require
  immediate removal of such items, and repeated violations may result in suspension or termination of your account in
  accordance with our User Terms and Conditions.
</p>

      </div>

      <div style={sectionBox}>
        <h2 onClick={() => toggleSection('uaeProhibitedItems')} style={sectionStyle}>
          GLOBAL MARKETPLACE-SPECIFIC PROHIBITED ITEMS
          <span style={arrowStyle(openSections.uaeProhibitedItems)}>▼</span>
        </h2>
        {openSections.uaeProhibitedItems && (
          <ul style={listStyle}>
           <ul>
  <li>Any narcotics or recreational drugs of any kind</li>
  <li>Gambling equipment, machinery, and devices</li>
  <li>Pirated or unauthorized content</li>
  <li>Counterfeit currency or monetary items</li>
  <li>Substances contaminated by radiation or nuclear fallout</li>
  <li>Items that violate Islamic principles or public morality</li>
  <li>Items associated with black magic, witchcraft, or sorcery</li>
  <li>Poppy seeds or any products containing poppy seeds</li>
  <li>Nylon-based fishing nets</li>
  <li>
    Any goods or items prohibited by the GCC Common Customs Law or any other law or regulation applicable in the UAE
  </li>
</ul>

          </ul>
        )}
      </div>

      <div style={sectionBox}>
        <h2 onClick={() => toggleSection('tradelingProhibitedItems')} style={sectionStyle}>
          OTHER THINGS PROHIBITED BY Ulinkit
          <span style={arrowStyle(openSections.tradelingProhibitedItems)}>▼</span>
        </h2>
        {openSections.tradelingProhibitedItems && (
          <ul style={listStyle}>
            <ul>
  <li>Any narcotic substances or recreational drugs</li>
  <li>Gambling equipment, machinery, and devices of any kind</li>
  <li>Pirated or unauthorized content</li>
  <li>Counterfeit currencies or monetary instruments</li>
  <li>Substances contaminated by radiation or nuclear fallout</li>
  <li>Items that conflict with Islamic beliefs or public morality</li>
  <li>Items associated with black magic, witchcraft, or sorcery</li>
  <li>Poppy seeds or any products containing poppy seeds</li>
  <li>Fishing nets made of nylon</li>
  <li>
    Any other goods or items prohibited under the GCC Common Customs Law or any other applicable law or regulation in the UAE
  </li>
</ul>

          </ul>
        )}
      </div>

      <div style={sectionBox}>
        <h2 onClick={() => toggleSection('fullPolicy')} style={sectionStyle}>
          Prohibited Items List
          <span style={arrowStyle(openSections.fullPolicy)}>▼</span>
        </h2>
        {openSections.fullPolicy && (
          <ul style={listStyle}>
            {prohibitedItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <h2 style={{ textAlign: 'center', fontSize: '18px', marginTop: '30px' }}>
        If you have any questions regarding the Product Listing Policy, please{' '}
        <a href="contact-us" style={{ color: '#3087d1', textDecoration: 'underline' }}>
          Contact Us
        </a>
        .
      </h2>
    </div>
  );
};

export default ProductListingPolicy;
