import React, { useState } from 'react';

const prohibitedItems = [
  'Listing of services and jobs',
  'Counterfeit goods or items of any type',
  'Any goods or items that violate the intellectual property rights of any company or individual',
  'Stocks, bonds, investment interests and other securities',
  'Currencies (including digital currencies) and negotiable instruments (for example, cheques)',
  'Items that promote hatred, violence, ethnic, racial or religious intolerance',
  'Artifacts, antiquities and art treasures',
  'Pornographic materials or items',
  'Medical drugs (including over-the-counter)',
  'Medical devices',
  'Drug paraphernalia (for example, marijuana pipes/bongs and grow lights)',
  'E-cigarettes and electronic hookah',
  'Tobacco products, nicotine and e-liquids',
  'Flammable, explosive, hazardous and radioactive chemicals and substances',
  'Fireworks and firecrackers',
  'Firearms and ammunition (or items/toys that look like firearms or ammunition)',
  'Weapons (for example, crossbows and switchblade knives)',
  'Descramblers',
  'Devices designed to intentionally block, jam or interfere with authorized communications',
  'Spy equipment and devices',
  'Bank card readers or “skimmers”',
  'Used SIM cards',
  'Live animals',
  'Animal parts that have been restricted by applicable laws (for example, ivory)',
  'Alcohol for consumption, or food products containing alcohol',
  'Pork products',
  'Any other items prohibited by laws, regulations, sanctions and trade restrictions in any relevant jurisdiction',
  'Residential properties such as houses, villas, and apartments',
  'Automotive items such as motorcycles, cars, and scooters',
  'Medical sexual, fertility or hormonal enhancers and boosters (with the exception of natural supplements)'
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
          This Product Listing Policy applies to the Ulinkit.com website and any mobile applications operated by
          Blink Technologies FZCO and its affiliates <strong>(“Ulinkit”)</strong>.
        </p>
        <p>
          You may not post or sell any item that is restricted or prohibited by a federal, state or local law in any
          jurisdiction. Below, we have listed categories of prohibited or restricted items, but there may be some that
          are not covered here. You, as the Seller, are responsible for ensuring that you are not posting an item that
          is prohibited by law in any jurisdiction.
        </p>
        <p>
         Ulinkit may impose additional restrictions and prohibitions that may not be required by law.Ulinkit may
          update this policy at any time, it is your responsibility to review the policy on a regular basis to ensure
          compliance.
        </p>
        <p>
          Ulinkit, in its sole discretion, reserves the right to determine whether an item is in violation of this
          policy and to demand that you remove an item immediately or terminate your account for violation of this
          policy, per the User Terms And Conditions.
        </p>
      </div>

      <div style={sectionBox}>
        <h2 onClick={() => toggleSection('uaeProhibitedItems')} style={sectionStyle}>
          UAE-SPECIFIC PROHIBITED ITEMS
          <span style={arrowStyle(openSections.uaeProhibitedItems)}>▼</span>
        </h2>
        {openSections.uaeProhibitedItems && (
          <ul style={listStyle}>
            <li>All kinds of narcotic or recreational drugs</li>
            <li>Gambling tools, machineries and devices of all kinds</li>
            <li>Pirated content</li>
            <li>Counterfeit currencies</li>
            <li>Radiation and nuclear fallout contaminated substances</li>
            <li>Items that contradict Islamic faith and public morals</li>
            <li>Items used in black magic, witchcraft or sorcery</li>
            <li>Poppy seeds, or any items containing poppy seeds</li>
            <li>Nylon fishing nets</li>
            <li>
              Any other goods or items, prohibited under the GCC Common Customs Law or any other law or regulation
              applicable in the UAE
            </li>
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
            <li>All kinds of narcotic or recreational drugs</li>
            <li>Gambling tools, machineries and devices of all kinds</li>
            <li>Pirated content</li>
            <li>Counterfeit currencies</li>
            <li>Radiation and nuclear fallout contaminated substances</li>
            <li>Items that contradict Islamic faith and public morals</li>
            <li>Items used in black magic, witchcraft or sorcery</li>
            <li>Poppy seeds, or any items containing poppy seeds</li>
            <li>Nylon fishing nets</li>
            <li>
              Any other goods or items, prohibited under the GCC Common Customs Law or any other law or regulation
              applicable in the UAE
            </li>
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
