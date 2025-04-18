import React, { Fragment, useState, useEffect } from 'react';
import '../Guidelines/Guidelines.css';
import { v4 as uuidv4 } from 'uuid';
import { Helmet } from 'react-helmet-async';
import SearchIcon from '@mui/icons-material/Search';

const FAQPage = () => {


  const [activeIndex, setActiveIndex] = useState(null);
  const toggleGuideAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  //search-bar
  const [queryFaq, setQueryFaq] = useState('');

  const itu = [
    {
      id: uuidv4(),
      title: 'Who We Are?',
      panel: (
        <div>
          <p className='heading2 headMargin'>
            Ulinkit.com is a global B2B eMarketplace reshaping the business-to-business sector with a modern digital ecosystem that's beautifully designed and easy to use.
          </p>
          <p className='heading2 headMargin'>
            Through cutting-edge technology, integrated financial solutions, and a strong team, Ulinkit enables cross-border trade, supports SMEs in scaling, reinvents procurement, and empowers entrepreneurs globally.
          </p>
        </div>
      ),
    },
    {
      id: uuidv4(),
      title: 'Who is Ulinkit for?',
      panel: (
        <div>
          <p className='heading2 headMargin'>
            Ulinkit is designed for businesses of all sizes looking to expand their reach and sell physical products across global markets.
          </p>
          <p className='heading2 headMargin'>
            Title structure for product listings: [Brand], [Model name], [Model number], [Key features], [Item type], [Size], [Color], [Quantity].
          </p>
          <p className='heading2 headMargin'>
            Example: Graco Maxi GTB538 lightweight car seat - 1-12 years, navy blue. <br />
            California Garden Canned, Ready To Eat Chickpeas 400g - Pack of 24.
          </p>
          <p className='heading2 headMargin'>Keep the title under 200 characters, use numerical digits, and avoid keyword stuffing.</p>
          <p className='heading2 headMargin'>Do not use ALL CAPS or include price, availability, or warranty information in the title.</p>
        </div>
      ),
    },
    {
      id: uuidv4(),
      title: 'How can I contact you?',
      panel: (
        <div>
          <p className='heading2 headMargin'>You can contact us through the support section on our website or via the contact form provided on the Help Center.</p>
          <p className='heading2 headMargin'>Use proper grammar, US English spelling, and keep messages within 1000 characters.</p>
          <p className='heading2 headMargin'>Avoid special characters such as %, $, @, ™, ® and don’t include warranty or promotional claims.</p>
          <p className='heading2 headMargin'>A+ content can be uploaded if applicable.</p>
        </div>
      ),
    },
    {
      id: uuidv4(),
      title: 'Where is Ulinkit based?',
      panel: (
        <div>
          <p className='heading2 headMargin'>Ulinkit is headquartered in the UAE, facilitating global trade with trusted sellers and buyers worldwide.</p>
          <p className='heading2 headMargin'>For product images: the product should fill 70–85% of the image space, file size between 100KB and 10MB.</p>
          <p className='heading2 headMargin'>Accepted file types: PNG, JPEG, JPG, BMP.</p>
          <p className='heading2 headMargin'>
            Lifestyle images are allowed as main images in specific categories like Furniture, Beddings, Lights, and Curtains—provided the product is clearly visible.
          </p>
        </div>
      ),
    },
  ];
  
  const sou = [
    {
      id: uuidv4(),
      title: 'How do I register as a Seller on Ulinkit?',
      panel: (<div>
        <p className='heading2 headMargin'>Ulinkit.com is a marketplace for selling **physical products only**. The sale of services or subscriptions is not permitted.</p>
        <p className='heading2 headMargin'>Ensure your product brand and type are legally allowed to be sold online under UAE law. Prohibited items include alcohol, tobacco products, drugs, medical products, and animals.</p>
        <p className='heading2 headMargin'>Product details must not contain any graphic, explicit, or inappropriate content. All language must remain professional.</p>
        <p className='heading2 headMargin'>Product descriptions must be written in **English (mandatory)**. Arabic is optional and can help improve local reach.</p>
        <p className='heading2 headMargin'>Each listing must include **only one product**. Accessories and variants must be listed separately.</p>
        <p className='heading2 headMargin'>Ensure all product information is consistent across the listing and free from contradictions.</p>
      </div>),
    },
    {
      id: uuidv4(),
      title: 'How do I start selling on Ulinkit?',
      panel: (<div>
        <p className='heading2 headMargin'>Product images should be clear and readable so that buyers can understand the product’s features and specifications.</p>
        <p className='heading2 headMargin'>Each image should show only one product with a clearly defined color and size to avoid confusion. If your product has variants (color or size), list them separately.</p>
        <p className='heading2 headMargin'>Images must match the product title, key features, and description. There should be no contradictions (e.g., red shirt in image, blue in title).</p>
        <p className='heading2 headMargin'>Only real photographs are accepted. Illustrations or mockups are not allowed.</p>
        <p className='heading2 headMargin'>Images must not include watermarks, contact details, text overlays, or graphics.</p>
        <p className='heading2 headMargin'>Unprofessional, graphic, or inappropriate images are strictly prohibited.</p>
        <p className='heading2 headMargin'>Images must not contain live models for sensitive categories (e.g., lingerie, underwear, sleepwear).</p>
      </div>),
    },
    {
      id: uuidv4(),
      title: 'What products can I sell on Ulinkit?',
      panel: (<div>
        <p className='heading2 headMargin'>Product titles should be concise, clear, and informative.</p>
        <p className='heading2 headMargin'>Titles must begin with the **brand name**.</p>
        <p className='heading2 headMargin'>You may use "Assorted colors" only if shown in a manufacturer’s box or mentioned in the key features or description.</p>
        <p className='heading2 headMargin'>Avoid including multiple variants in one title. Ensure the title aligns with the product image and description.</p>
        <p className='heading2 headMargin'>Do not include unrelated or misleading keywords in titles.</p>
        <p className='heading2 headMargin'>Titles must be free of typos, excessive capitalization, or special characters.</p>
      </div>),
    },
    {
      id: uuidv4(),
      title: 'What is the benefit of being verified as a Seller?',
      panel: (<div>
        <p className='heading2 headMargin'>Key features help buyers make informed decisions by highlighting the most important functions and benefits of your product.</p>
        <p className='heading2 headMargin'>Include a minimum of 2 and a maximum of 6 key features per listing.</p>
        <p className='heading2 headMargin'>Mention product usage, compatibility with other devices, or technical details if applicable.</p>
        <p className='heading2 headMargin'>Do not use promotional language or mention multiple variants in key features.</p>
        <p className='heading2 headMargin'>Ensure key features are accurate and consistent with the rest of the listing.</p>
        <p className='heading2 headMargin'>Key features must be professionally written, with no spelling errors or unnecessary symbols.</p>
      </div>),
    },
  ];
  
  const spug = [
    {
      id: uuidv4(),
      title: 'How do I list or upload my products on Ulinkit.com?',
      panel: (<div>
        <p className='heading2 headMargin'>Ulinkit.com is a global marketplace dedicated to physical product sales only. The sale of services, subscriptions, or digital items is strictly prohibited.</p>
        <p className='heading2 headMargin'>Ensure that your product type and brand are legally allowed to be sold online according to UAE laws. Prohibited items include alcohol, tobacco products, drugs, medical supplies, and live animals.</p>
        <p className='heading2 headMargin'>Product listings must maintain a professional tone and avoid any graphic or inappropriate content.</p>
        <p className='heading2 headMargin'>All product descriptions must be in English (mandatory). Arabic is optional but encouraged for wider regional reach.</p>
        <p className='heading2 headMargin'>Each listing should represent a single product. Variants or accessories should be listed as separate items.</p>
        <p className='heading2 headMargin'>Product information must be consistent and free from contradictory details.</p>
      </div>),
    },
    {
      id: uuidv4(),
      title: 'How do I update existing products?',
      panel: (<div>
        <p className='heading2 headMargin'>Images should be clear, high quality, and accurately depict the product’s features and specifications.</p>
        <p className='heading2 headMargin'>Each image must show only one product with a specific color and size to avoid confusion. Variants like different colors or sizes must be listed individually.</p>
        <p className='heading2 headMargin'>Product images must align with the title, key features, and description. For example, don’t display a red shirt if the title says blue.</p>
        <p className='heading2 headMargin'>Only real photographs are accepted. Illustrations, mockups, or drawings are not permitted.</p>
        <p className='heading2 headMargin'>Images must not contain watermarks, text overlays, contact information, or logos.</p>
        <p className='heading2 headMargin'>Avoid using unprofessional or inappropriate imagery.</p>
        <p className='heading2 headMargin'>Live models are not permitted for certain categories (e.g., lingerie, underwear, sleepwear).</p>
      </div>),
    },
    {
      id: uuidv4(),
      title: 'How do I upload images of my products?',
      panel: (<div>
        <p className='heading2 headMargin'>Product titles should be concise and clearly reflect the item’s details.</p>
        <p className='heading2 headMargin'>Always start the title with the product’s brand name.</p>
        <p className='heading2 headMargin'>If showing multiple colors in a manufacturer’s box, you may use “Assorted colors” in the title, provided the colors are also mentioned in the key features or description.</p>
        <p className='heading2 headMargin'>Avoid including multiple variants in a single title. The title must reflect the specific product shown in the image and described in the listing.</p>
        <p className='heading2 headMargin'>Do not include unrelated or spammy keywords in the title.</p>
        <p className='heading2 headMargin'>Titles must be free of typos, unnecessary capitalization, or special characters.</p>
      </div>),
    },
    {
      id: uuidv4(),
      title: 'How do I find the right category for my products?',
      panel: (<div>
        <p className='heading2 headMargin'>Key features are crucial for showcasing your product’s value. They should outline the most important benefits and functions.</p>
        <p className='heading2 headMargin'>Include at least 2 and up to 6 key features per listing.</p>
        <p className='heading2 headMargin'>Mention usage instructions, compatibility with other devices, or technical details as necessary.</p>
        <p className='heading2 headMargin'>Avoid promotional phrases or references to multiple variants. Key features should complement the rest of the product information and images.</p>
        <p className='heading2 headMargin'>Ensure that key features are written professionally without spelling errors or symbols.</p>
      </div>),
    },
  ];
  
  const am = [
    {
      id: uuidv4(),
      title: 'What can I sell on Ulinkit.com?',
      panel: (
        <div>
          <p className='heading2 headMargin'>Ulinkit.com is a global marketplace strictly for selling physical products. Services, subscriptions, and digital products are not permitted.</p>
          <p className='heading2 headMargin'>Ensure your product complies with local and international laws. Prohibited items include alcohol, tobacco, controlled substances, medical supplies, and live animals.</p>
          <p className='heading2 headMargin'>Product listings must maintain a professional tone and must not contain graphic, inappropriate, or offensive content.</p>
          <p className='heading2 headMargin'>All product details must be provided in English (mandatory) and may optionally be included in Arabic or other supported languages.</p>
          <p className='heading2 headMargin'>Each listing should represent a single product only. Variants and accessories must be listed individually.</p>
          <p className='heading2 headMargin'>Ensure all product information is consistent and does not contain conflicting or misleading details.</p>
        </div>
      ),
    },
    {
      id: uuidv4(),
      title: 'What are the product image requirements?',
      panel: (
        <div>
          <p className='heading2 headMargin'>Images should be clear and high-quality to accurately reflect the product’s appearance and features.</p>
          <p className='heading2 headMargin'>Each image must display only one product, clearly showing the selected color and size. Different variants should be listed and imaged separately.</p>
          <p className='heading2 headMargin'>Product images must match the title, description, and key features. There should be no discrepancies (e.g., an image of a red shirt with a title mentioning blue).</p>
          <p className='heading2 headMargin'>Only real product photos are allowed—illustrations or computer-generated images are not accepted.</p>
          <p className='heading2 headMargin'>Images must be free of watermarks, logos, contact details, text overlays, or graphic additions.</p>
          <p className='heading2 headMargin'>Images must be professional and appropriate. Graphic, explicit, or offensive visuals are strictly prohibited.</p>
          <p className='heading2 headMargin'>Live models are not allowed for sensitive product categories such as lingerie, underwear, or sleepwear.</p>
        </div>
      ),
    },
    {
      id: uuidv4(),
      title: 'How should I write product titles?',
      panel: (
        <div>
          <p className='heading2 headMargin'>Product titles should be concise and clearly describe the item being sold.</p>
          <p className='heading2 headMargin'>Start the title with the brand name, followed by the product type and key identifier (e.g., “Nike Running Shoes - Black”).</p>
          <p className='heading2 headMargin'>Use “Assorted Colors” only when the packaging displays it or if colors are clearly described in the product details.</p>
          <p className='heading2 headMargin'>Do not include multiple variants in a single title. Avoid any inconsistency with product images or descriptions.</p>
          <p className='heading2 headMargin'>Avoid using irrelevant keywords or filler words.</p>
          <p className='heading2 headMargin'>Titles must be free of spelling errors, typos, or unnecessary special characters.</p>
        </div>
      ),
    },
    {
      id: uuidv4(),
      title: 'What should I include in the key features section?',
      panel: (
        <div>
          <p className='heading2 headMargin'>Key features should summarize the most important functions, specifications, and selling points of the product.</p>
          <p className='heading2 headMargin'>Each listing should have a minimum of 2 and a maximum of 6 key features.</p>
          <p className='heading2 headMargin'>Include key information such as usage, functionality, and compatibility with other devices (if applicable).</p>
          <p className='heading2 headMargin'>Avoid promotional language, listing multiple variants, or any inconsistencies with other product details.</p>
          <p className='heading2 headMargin'>Ensure the key features are grammatically correct and free of typos and symbols.</p>
        </div>
      ),
    },
  ];
  
  const bou = [
    {
      id: uuidv4(),
      title: 'How do I track my orders?',
      panel: (
        <div>
          <p className='heading2 headMargin'>Ulinkit.com is exclusively for selling physical products. Services and subscriptions are not allowed.</p>
          <p className='heading2 headMargin'>Ensure your product type and brand are legally permitted for online sale under UAE law. Items such as alcohol, tobacco, drugs, medical supplies, and animals are strictly prohibited.</p>
          <p className='heading2 headMargin'>Product descriptions must be professional and free from any graphic or explicit content.</p>
          <p className='heading2 headMargin'>English is the mandatory language for listings, while Arabic is optional.</p>
          <p className='heading2 headMargin'>Each listing must represent only one product. Variants and accessories should be listed separately.</p>
          <p className='heading2 headMargin'>Ensure all product details are accurate and consistent, without conflicting information.</p>
        </div>
      ),
    },
    {
      id: uuidv4(),
      title: 'How do returns and refunds work?',
      panel: (
        <div>
          <p className='heading2 headMargin'>Product images should be clear and easily showcase the item’s features and specifications.</p>
          <p className='heading2 headMargin'>Include only one product per image, with accurate color and size details to avoid confusion. If multiple variants exist, list each one separately.</p>
          <p className='heading2 headMargin'>Images must match the title, key features, and description. Avoid inconsistencies (e.g., a red shirt image with a title that says blue).</p>
          <p className='heading2 headMargin'>Use real product photos—illustrations are not accepted.</p>
          <p className='heading2 headMargin'>Do not include watermarks, contact information, or any added text or graphics in the images.</p>
          <p className='heading2 headMargin'>Images must be appropriate, professional, and free of any graphic content.</p>
          <p className='heading2 headMargin'>Images of live models are not allowed for lingerie, underwear, or sleepwear items.</p>
        </div>
      ),
    },
    {
      id: uuidv4(),
      title: 'What is the benefit of verifying my account as a Buyer?',
      panel: (
        <div>
          <p className='heading2 headMargin'>Product titles must clearly convey the item’s details at a glance.</p>
          <p className='heading2 headMargin'>Always start the title with the brand name.</p>
          <p className='heading2 headMargin'>The term “Assorted Colors” is allowed only if the manufacturer’s box is shown or colors are listed in the description or key features.</p>
          <p className='heading2 headMargin'>Avoid including multiple variants in the title. The title must align with the product details and image.</p>
          <p className='heading2 headMargin'>Do not use irrelevant keywords in the title.</p>
          <p className='heading2 headMargin'>Ensure titles are free from typos and special characters.</p>
        </div>
      ),
    },
    {
      id: uuidv4(),
      title: 'How long will it take for my order to be delivered?',
      panel: (
        <div>
          <p className='heading2 headMargin'>Key features should clearly highlight the main functionalities and benefits of the product to aid the customer’s decision-making.</p>
          <p className='heading2 headMargin'>Include a minimum of 2 and up to 6 key features per listing.</p>
          <p className='heading2 headMargin'>Mention the product’s intended usage and its compatibility with other items (if applicable).</p>
          <p className='heading2 headMargin'>Avoid promotional language or details about multiple variants in this section. It should not conflict with the rest of the listing.</p>
          <p className='heading2 headMargin'>Ensure key features are free from spelling errors and special characters.</p>
        </div>
      ),
    },
  ];
  
  const us = [
    {
      id: uuidv4(),
      title: 'What is Request For Quotation (RFQ)?',
      panel: (
        <div>
          <p className='heading2 headMargin'>Ulinkit.com is a marketplace designed exclusively for selling physical products. Services and subscriptions are not permitted.</p>
          <p className='heading2 headMargin'>Ensure that the product brand and type comply with UAE laws for online sales. Prohibited items include alcohol, tobacco, drugs, medical supplies, and animals.</p>
          <p className='heading2 headMargin'>All product descriptions must be professional and free from graphic or explicit content.</p>
          <p className='heading2 headMargin'>Product details must be provided in English (mandatory) and may also be included in Arabic (optional).</p>
          <p className='heading2 headMargin'>Each product listing must feature only one item. Accessories and variants should be listed separately.</p>
          <p className='heading2 headMargin'>Ensure that all product details are accurate, consistent, and free of conflicting information.</p>
        </div>
      ),
    },
    {
      id: uuidv4(),
      title: 'What is Pre-owned: Buy & Sell?',
      panel: (
        <div>
          <p className='heading2 headMargin'>Images must be clear and legible, allowing buyers to easily understand the product's features and specifications.</p>
          <p className='heading2 headMargin'>Only one product should appear in each image, with clearly mentioned color and size to avoid confusion. If multiple variants exist, list them separately.</p>
          <p className='heading2 headMargin'>Images must align with the product title, key features, and description, with no inconsistencies (e.g., red T-shirt image while the title says blue).</p>
          <p className='heading2 headMargin'>All images must be real photographs—illustrations are not accepted.</p>
          <p className='heading2 headMargin'>Images must not include watermarks, contact information, text overlays, or any form of graphic edits.</p>
          <p className='heading2 headMargin'>Images should be appropriate, professional, and free of any offensive content.</p>
          <p className='heading2 headMargin'>Images featuring live models are not allowed for products like lingerie, underwear, or sleepwear.</p>
        </div>
      ),
    },
  ];
  
  const ul = [
    {
      id: uuidv4(),
      title: 'How can I get a quote or estimate on shipping rates?',
      panel: (
        <div>
          <p className='heading2 headMargin'>Ulinkit.com supports the sale of physical products only. Services and subscriptions are not allowed on the platform.</p>
          <p className='heading2 headMargin'>Make sure that the brand and product type comply with UAE online selling regulations. Restricted items include alcohol, tobacco, medical products, drugs, and animals.</p>
          <p className='heading2 headMargin'>Product descriptions must be professional and free of any graphic or explicit content.</p>
          <p className='heading2 headMargin'>All product information must be provided in English (mandatory) and optionally in Arabic.</p>
          <p className='heading2 headMargin'>Each listing must represent a single product only. Variants and accessories should be listed separately.</p>
          <p className='heading2 headMargin'>Ensure that all product information is consistent and does not contain conflicting details.</p>
        </div>
      ),
    },
    {
      id: uuidv4(),
      title: 'How do I get insurance for my cargo and who should pay for it?',
      panel: (
        <div>
          <p className='heading2 headMargin'>Product images must be clear and easily readable so buyers can understand the features and specifications.</p>
          <p className='heading2 headMargin'>Only one product should appear in the image, with a clearly mentioned color and size. If your product has multiple variants (like different colors or sizes), list each variant separately.</p>
          <p className='heading2 headMargin'>Ensure that images accurately match the product title, features, and description. Avoid mismatches (e.g., showing a red T-shirt while the title says blue).</p>
          <p className='heading2 headMargin'>All images must be actual photographs; illustrations are not accepted.</p>
          <p className='heading2 headMargin'>Do not include watermarks, contact details, text overlays, or any graphic elements on the images.</p>
          <p className='heading2 headMargin'>Images must be professional, appropriate, and free from any graphic or offensive content.</p>
          <p className='heading2 headMargin'>Images must not include live models for products like lingerie, underwear, or sleepwear.</p>
        </div>
      ),
    },
  ];
  

  const allItems = [...itu, ...sou, ...spug, ...am, ...bou, ...us, ...ul];
  const [filteredFaqs, setFilteredFaqs] = useState(allItems);

  useEffect(() => {
    if (queryFaq.trim()) {
      const regex = new RegExp(queryFaq.trim(), 'i');
      const filtered = allItems.filter(item => regex.test(item.title));
      setFilteredFaqs(filtered);
    } else {
      setFilteredFaqs(allItems);
    }
  }, [queryFaq]);

  const handleKeyPressFaq = (e) => {
    if (e.key === 'Enter') {
      handleSearchFaq();
    }
  };

  const handleSearchFaq = () => {
    if (queryFaq.trim()) {
      const regex = new RegExp(queryFaq.trim(), 'i');
      const filtered = allItems.filter(item => regex.test(item.title));
      setFilteredFaqs(filtered);
    } else {
      setFilteredFaqs(allItems);
    }
  };





  return (
    <Fragment>
      <Helmet>
        <title>Frequently Asked Questions (FAQ) | Ulinkit - Get Your Answers</title>
        <meta name="description" content="Find answers to common questions about Ulinkit. Our FAQ page covers topics on account management, orders, payments, and more to help you navigate our platform with ease." />
        <link rel="canonical" href="https://www.ulinkit.com/faq" />
      </Helmet>
      <article className="guide-banner-cont">
        <img className='faqBanner' src="https://res.cloudinary.com/dey1tujp8/image/upload/v1719055436/pexels-mart-production-7709189_nhkyis.jpg" alt="banner" />
        <div className="responsive-text">
          <div className="flexcol" style={{ gap: '20px' }}>
            <h1 className="heading4">Help and Support</h1>
            <h2 className="heading4">How Can We Help You?</h2>
            <div className="search-faq">
              <input type='text' value={queryFaq} onChange={(e) => setQueryFaq(e.target.value)} onKeyPress={handleKeyPressFaq} placeholder='Search for your question...' />
              <span>
                <SearchIcon onClick={handleSearchFaq} />
              </span>
            </div>
          </div>
        </div>
      </article>


      {queryFaq ?
        (<div className="flexcol-start wh home">
          <div className="flexcol wh">
            {filteredFaqs.map((item, index) => (
              <Fragment key={uuidv4()}>
                <div className={`accordion-guide ${activeIndex === (index + 1) ? 'active' : ''}`} onClick={() => toggleGuideAccordion(index + 1)}>
                  <p className="heading3">{item.title}</p>
                </div>
                <div className="panel-guide" style={{ maxHeight: activeIndex === (index + 1) ? '800px' : '0' }}>
                  {item.panel}
                </div>
              </Fragment>
            ))}
          </div>
        </div>) : (

          <article className="flexcol-start wh home">
            <h1 className="heading5">1. Introduction to Ulinkit</h1>
            <div className="flexcol wh">
              {
                itu.map((item, index) => (
                  <Fragment key={uuidv4()}>
                    <div className={`accordion-guide ${activeIndex === (index + 1) ? 'active' : ''}`} onClick={() => toggleGuideAccordion(index + 1)}>
                      <p className="heading3">{item.title}</p>
                    </div>
                    <div className="panel-guide" style={{ maxHeight: activeIndex === (index + 1) ? '800px' : '0' }}>
                      {item.panel}
                    </div>
                  </Fragment>
                ))
              }
            </div>

            <h2 className="heading5">2. Selling on Ulinkit</h2>
            <div className="flexcol wh">
              {
                sou.map((item, index) => (
                  <Fragment key={uuidv4()}>
                    <div className={`accordion-guide ${activeIndex === (index + 5) ? 'active' : ''}`} onClick={() => toggleGuideAccordion(index + 5)}>
                      <p className="heading3">{item.title}</p>
                    </div>
                    <div className="panel-guide" style={{ maxHeight: activeIndex === (index + 5) ? '800px' : '0' }}>
                      {item.panel}
                    </div>
                  </Fragment>
                ))
              }
            </div>

            <h3 className="heading5">3. Seller Product Upload Guideline</h3>
            <div className="flexcol wh">
              {
                spug.map((item, index) => (
                  <Fragment key={uuidv4()}>
                    <div className={`accordion-guide ${activeIndex === (index + 9) ? 'active' : ''}`} onClick={() => toggleGuideAccordion(index + 9)}>
                      <p className="heading3">{item.title}</p>
                    </div>
                    <div className="panel-guide" style={{ maxHeight: activeIndex === (index + 9) ? '800px' : '0' }}>
                      {item.panel}
                    </div>
                  </Fragment>
                ))
              }
            </div>

            <h4 className="heading5">4. Account Management</h4>
            <div className="flexcol wh">
              {
                am.map((item, index) => (
                  <Fragment key={uuidv4()}>
                    <div className={`accordion-guide ${activeIndex === (index + 13) ? 'active' : ''}`} onClick={() => toggleGuideAccordion(index + 13)}>
                      <p className="heading3">{item.title}</p>
                    </div>
                    <div className="panel-guide" style={{ maxHeight: activeIndex === (index + 13) ? '800px' : '0' }}>
                      {item.panel}
                    </div>
                  </Fragment>
                ))
              }
            </div>

            <p className="heading5">5. Buying on Ulinkit</p>
            <div className="flexcol wh">
              {
                bou.map((item, index) => (
                  <Fragment key={uuidv4()}>
                    <div className={`accordion-guide ${activeIndex === (index + 17) ? 'active' : ''}`} onClick={() => toggleGuideAccordion(index + 17)}>
                      <p className="heading3">{item.title}</p>
                    </div>
                    <div className="panel-guide" style={{ maxHeight: activeIndex === (index + 17) ? '800px' : '0' }}>
                      {item.panel}
                    </div>
                  </Fragment>
                ))
              }
            </div>

            <p className="heading5">6. Ulinkit Services</p>
            <div className="flexcol wh">
              {
                us.map((item, index) => (
                  <Fragment key={uuidv4()}>
                    <div className={`accordion-guide ${activeIndex === (index + 21) ? 'active' : ''}`} onClick={() => toggleGuideAccordion(index + 21)}>
                      <p className="heading3">{item.title}</p>
                    </div>
                    <div className="panel-guide" style={{ maxHeight: activeIndex === (index + 21) ? '800px' : '0' }}>
                      {item.panel}
                    </div>
                  </Fragment>
                ))
              }
            </div>

            <p className="heading5">7. Ulinkit Logistics</p>
            <div className="flexcol wh">
              {
                ul.map((item, index) => (
                  <Fragment key={uuidv4()}>
                    <div className={`accordion-guide ${activeIndex === (index + 25) ? 'active' : ''}`} onClick={() => toggleGuideAccordion(index + 25)}>
                      <p className="heading3">{item.title}</p>
                    </div>
                    <div className="panel-guide" style={{ maxHeight: activeIndex === (index + 25) ? '800px' : '0' }}>
                      {item.panel}
                    </div>
                  </Fragment>
                ))
              }
            </div>


            <h5 className="heading2">Do you have questions about uploading your catalogue on Ulinkit? Or do you simply need a first-hand demonstration showing how to upload products?
              Join our free 1-hour webinar, where our experts will show you how to do it and start selling!
            </h5>
            <button className='btn box2 flex' style={{ width: 'fit-content', backgroundColor: 'var(--CodeOne)' }}><div className="heading2">Register Now</div></button>
          </article>
        )
      }

    </Fragment>
  )
}

export default FAQPage