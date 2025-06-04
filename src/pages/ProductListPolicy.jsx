import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const prohibitedItems = [
  'Narcotic drugs and psychotropic substances as per NDPS Act',
  'Counterfeit or pirated goods',
  'Products infringing on copyrights, trademarks, or intellectual property',
  'Currency, including Indian and foreign (except for collectibles with proper licensing)',
  'Stocks, bonds, securities, or financial instruments',
  'Pornographic material or obscene content as per Section 67 of the IT Act',
  'Firearms, ammunition, or explosive substances (Arms Act)',
  'Live animals or protected wildlife items (Wildlife Protection Act, 1972)',
  'Meat and meat products not permitted by FSSAI or exported without APEDA clearance',
  'Alcohol and alcoholic beverages without FSSAI/FDA and state-level permissions',
  'Medicines, medical devices, or health supplements without CDSCO/FSSAI approval',
  'Products containing banned substances by the Ministry of Health and Family Welfare',
  'E-cigarettes and vaping products (banned under Prohibition of Electronic Cigarettes Act)',
  'Hazardous or radioactive materials',
  'Items promoting hatred, communal violence, or sedition',
  'Used cosmetics, undergarments, or personal hygiene items',
  'Human organs, body parts, or bodily fluids',
  'Antiquities and art objects without ASI clearance (Antiquities and Art Treasures Act)',
  'Items that violate Indian customs, DGFT, or import/export policies',
  'Illegal signal jammers, surveillance, or hacking devices',
  'SIM cards, Aadhaar, PAN, or other government-issued ID documents',
  'Any item prohibited by law or deemed unsafe by relevant Indian authorities'
];



const ProductListingPolicy = () => {
  const [openSections, setOpenSections] = useState({
    uaeProhibitedItems: false,
   UlinkitProhibitedItems: false,
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
    color: '#3770bf',
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
    <Fragment>
      <Helmet>
  <title>Product Listing Policy - Ulinkit</title>
  <meta 
    name="description" 
    content="Understand Ulinkit's product listing policy. Learn the rules, requirements, and best practices to ensure your products meet platform standards." 
  />
  <link rel="canonical" href="https://www.ulinkit.com/productlistingpolicy" />
</Helmet>


   
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '30px 20px' }}>
      <h1 style={{ fontSize: '32px', fontWeight: '600', textAlign: 'center', marginBottom: '10px' }}>
        Product Listing Policy
      </h1>
      <h2 style={{ fontSize: '18px', textAlign: 'center', color: '#666', marginBottom: '25px' }}>
        Effective February 15, 2020
      </h2>

      <div style={{ fontSize: '16px', marginBottom: '30px', lineHeight: '1.7' }}>
        <p>
        This Product Listing Policy applies to the Ulinkit operated by U-Link Outsourcing
            Private Limited. As Ulinkit is governed under Indian law, sellers must comply with all applicable Indian
            regulations and trade policies.
        </p>
        <p>
  You may not post or sell any item that is restricted or prohibited by federal, state, or local law in any
  jurisdiction. While we have provided a general overview of prohibited or restricted categories, this list is not
  exhaustive. As a Seller, you are solely responsible for ensuring that your listings comply with all applicable laws and regulations.
</p>
<p>
Sellers must not list items that are illegal, unsafe, or restricted under Indian laws or guidelines set by
regulatory authorities like DGFT, FSSAI, CDSCO, RBI, or Ministry of Commerce & Industry.
</p>
<p>
Ulinkit reserves the right to take down listings, suspend seller accounts, or take legal action if a violation
of this policy is detected. Sellers are solely responsible for compliance.
</p>

      </div>

      <div style={sectionBox}>
        <h2 onClick={() => toggleSection('uaeProhibitedItems')} style={sectionStyle}>
        Ulinkit Platform-Specific Restrictions
          <span style={arrowStyle(openSections.uaeProhibitedItems)}>▼</span>
        </h2>
        {openSections.uaeProhibitedItems && (
          <ul style={listStyle}>
           <ul>
           <li>No bulk uploading of items without prior verification</li>
              <li>All imported items must comply with BIS and customs labeling rules</li>
              <li>Exporters must follow DGFT licensing and e-commerce export norms</li>
              <li>Health-related products must not make misleading medical claims</li>
              <li>Items violating cultural or religious sentiments may be restricted</li>
              <li>All sellers must provide accurate GST and compliance documents</li>
            </ul>

          </ul>
        )}
      </div>

      <div style={sectionBox}>
  <h2 onClick={() => toggleSection('UlinkitProhibitedItems')} style={sectionStyle}>
    OTHER THINGS PROHIBITED BY Ulinkit
    <span style={arrowStyle(openSections.UlinkitProhibitedItems)}>▼</span>
  </h2>
  {openSections.UlinkitProhibitedItems && (
    <ul style={listStyle}>
      <li>Narcotic drugs and psychotropic substances as per the Narcotic Drugs and Psychotropic Substances Act, 1985</li>
      <li>Firearms, explosives, and ammunition without proper licenses under the Arms Act, 1959</li>
      <li>Counterfeit currency, stamps, and any forged documents</li>
      <li>Products that infringe copyrights, trademarks, or other intellectual property rights</li>
      <li>Live animals, birds, or any wildlife species protected under the Wildlife Protection Act, 1972</li>
      <li>Human remains or any part thereof</li>
      <li>Pornographic materials or obscene content under the Information Technology Act, 2000</li>
      <li>Fake academic certificates, IDs, or government-issued documents</li>
      <li>Sand, minerals, or other restricted items under the Mines and Minerals (Regulation and Development) Act</li>
      <li>Endangered plants or products derived from them as per CITES and Indian environmental laws</li>
      <li>Items that promote hate speech, violence, or discrimination on the basis of religion, caste, sex, or ethnicity</li>
      <li>Lottery tickets, gambling devices, and betting services (offline or online)</li>
      <li>Electronic devices intended to jam, intercept, or monitor communications illegally</li>
      <li>Any goods banned or restricted by the Directorate General of Foreign Trade (DGFT) or the Customs Act, 1962</li>
      <li>Medical drugs or equipment not approved by the Central Drugs Standard Control Organization (CDSCO)</li>
      <li>Food products that violate FSSAI guidelines or labeling norms</li>
      <li>Alcoholic beverages without proper licensing and state-wise approval</li>
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
        <a href="contact-us" style={{ color: '#3770bf', textDecoration: 'underline' }}>
          Contact Us
        </a>
        .
      </h2>
    </div>
    </Fragment>
  );
};

export default ProductListingPolicy;