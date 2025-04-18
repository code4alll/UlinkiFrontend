import React, { Fragment, useState } from 'react';
import banner from '../../assets/banner.jpg';
import './Guidelines.css';
import { v4 as uuidv4 } from 'uuid';
import { Helmet } from 'react-helmet-async';

const Guidelines = () => {


    const [activeIndex, setActiveIndex] = useState(null);
    const toggleGuideAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    const gpl = [
        {
          id: uuidv4(),
          title: 'a. General Overview',
          panel: (
            <div>
              <li className='heading2 headMargin'>For all product content-related queries, please reach out to content.support@ulink.com.</li>
              <li className='heading2 headMargin'>Avoid repeating information to improve product visibility in search results.</li>
              <li className='heading2 headMargin'>Include relevant, detailed information to help customers make informed decisions without additional research.</li>
            </div>
          ),
        },
        {
          id: uuidv4(),
          title: 'b. Title Structure',
          panel: (
            <div>
              <li className='heading2 headMargin'>Follow this format: [Brand], [Model Name], [Model Number], [Feature], [Item Type], [Size], [Color], [Quantity]</li>
              <li className='heading2 headMargin'>Example: Graco, Maxi, GTB538, Lightweight, Car Seat - 1-12 Years, Navy Blue, Pack of 1.</li>
              <li className='heading2 headMargin'>Use a short, clear title under 200 characters highlighting key product features.</li>
              <li className='heading2 headMargin'>Always use numerical form for numbers (e.g., "3" not "three").</li>
              <li className='heading2 headMargin'>Use commas or hyphens to separate keywords and product attributes.</li>
              <li className='heading2 headMargin'>Include brand name, model number, size, quantity, and color whenever available.</li>
              <li className='heading2 headMargin'>Avoid keyword stuffing or adding irrelevant terms.</li>
              <li className='heading2 headMargin'>Use sentence case. Avoid using ALL CAPS.</li>
              <li className='heading2 headMargin'>Do not mention pricing, availability, warranty, or company details.</li>
              <li className='heading2 headMargin'>Avoid using special characters like %, $, @, ™, ® in titles.</li>
            </div>
          ),
        },
        {
          id: uuidv4(),
          title: 'c. Product Description',
          panel: (
            <div>
              <li className='heading2 headMargin'>Write descriptions in paragraph form with proper grammar and sentence structure.</li>
              <li className='heading2 headMargin'>Use U.S. English spelling and a friendly tone with a slight promotional touch. Limit: 1000 characters.</li>
              <li className='heading2 headMargin'>Mention key features, including size, color, compatibility, and any unique selling points.</li>
              <li className='heading2 headMargin'>Incorporate commonly searched keywords and related terms naturally.</li>
              <li className='heading2 headMargin'>Include the brand, series, and model number, even if already in the title.</li>
              <li className='heading2 headMargin'>Use sentence case (capitalize only the first word of each sentence or proper nouns).</li>
              <li className='heading2 headMargin'>Use &lt;p&gt; tags for paragraph breaks if applicable.</li>
              <li className='heading2 headMargin'>Do not use ALL CAPS. Stick to sentence case.</li>
              <li className='heading2 headMargin'>Avoid including pricing, availability, company details, or warranty info.</li>
              <li className='heading2 headMargin'>Avoid special characters like %, $, @, ™, ®.</li>
              <li className='heading2 headMargin'>If copying from another source, ensure at least 20% of the content is rewritten to maintain originality.</li>
              <li className='heading2 headMargin'>Do not use time-sensitive or subjective phrases (e.g., “Best deal of 2023”).</li>
              <li className='heading2 headMargin'>Do not include URLs or email addresses.</li>
              <li className='heading2 headMargin'>Avoid advertising language or unsupported claims.</li>
              <li className='heading2 headMargin'>If applicable, upload your A+ or enhanced brand content.</li>
            </div>
          ),
        },
        {
          id: uuidv4(),
          title: 'd. Images',
          panel: (
            <div>
              <li className='heading2 headMargin'>Product should occupy 70% to 85% of the image space.</li>
              <li className='heading2 headMargin'>Image size must be between 100KB and 10MB.</li>
              <li className='heading2 headMargin'>Accepted formats: .png, .jpeg, .jpg, .bmp (No transparent PNGs).</li>
              <li className='heading2 headMargin'>Use sRGB or CMYK color profiles.</li>
              <li className='heading2 headMargin'>Image resolution must be between 500x500 and 1000x1000 pixels.</li>
              <li className='heading2 headMargin'>Use a square aspect ratio (1:1).</li>
              <li className='heading2 headMargin'>Avoid illustrations or graphics; use real product photos only.</li>
              <li className='heading2 headMargin'>Logos or icons cannot replace the actual product image.</li>
              <li className='heading2 headMargin'>Avoid overlays, distracting elements, or additional unrelated items.</li>
              <li className='heading2 headMargin'>Do not use watermarks, borders, or blurry/pixelated images.</li>
              <li className='heading2 headMargin'>Display one unit of the product clearly.</li>
              <li className='heading2 headMargin'>Use a white background for the main image.</li>
              <li className='heading2 headMargin'>Only the main product should appear in the main image—exclude accessories or packaging contents.</li>
              <li className='heading2 headMargin'>You may upload up to 5 secondary images.</li>
              <li className='heading2 headMargin'>Avoid adding text, watermarks, price tags, or backgrounds in the main image.</li>
              <li className='heading2 headMargin'>Do not show multipacks or multiple views in the main image.</li>
              <li className='heading2 headMargin'>Do not include compatible items in the main image (e.g., phones in phone case images).</li>
              <li className='heading2 headMargin'>Minimum 3 images are required for electronics products.</li>
              <li className='heading2 headMargin'>Lifestyle images are allowed as the main image in specific categories (e.g., Furniture, Bedding, Lighting, Curtains) if the product is clearly visible.</li>
            </div>
          ),
        },
        {
          id: uuidv4(),
          title: 'e. Specifications',
          panel: (
            <div>
              <li className='heading2 headMargin'>Ensure your values align with the product listing template requirements.</li>
              <li className='heading2 headMargin'>Key Features: Add a minimum of 2 and up to 6 bullet points. Each feature must not exceed 250 characters.</li>
            </div>
          ),
        },
      ];
      

      const pac = [
        {
            id: uuidv4(),
            title: 'a. General guidelines',
            panel: (
                <div>
                    <li className='heading2 headMargin'>Tradeling.com is a platform that allows you to sell physical products only. Services and Subscriptions are not permitted to be sold on Tradeling.</li>
                    <li className='heading2 headMargin'>Ensure the product brand and item type is permitted to be sold online by UAE law. Alcohol and smoking products, drugs and medical products, and animals are not permitted on the platform.</li>
                    <li className='heading2 headMargin'>Ensure the product details do not contain any graphic or sexual content and the language is professional.</li>
                    <li className='heading2 headMargin'>The official language of the product details must be in English (mandatory) and Arabic (optional) only.</li>
                    <li className='heading2 headMargin'>Ensure that each listing contains one product only. Variants and accessories should be listed separately.</li>
                    <li className='heading2 headMargin'>Ensure your product details are consistent and do not have conflicting information.</li>
                </div>
            ),
        },
        {
            id: uuidv4(),
            title: 'b. Imagery',
            panel: (
                <div>
                    <li className='heading2 headMargin'>The image should be readable for the buyers so they can see the functions and specifications of the product.</li>
                    <li className='heading2 headMargin'>Only one product in the image with a mentioned color and size so the buyers aren’t confused with multiple products and colors. (If the product has multiple variants such as colors or sizes, each variant should be listed separately).</li>
                    <li className='heading2 headMargin'>The image must match the title, key features and description and must not conflict with any of the product details (Example; Red T-shirt Image, whereas the title says blue).</li>
                    <li className='heading2 headMargin'>The images must be a photograph and not an illustration.</li>
                    <li className='heading2 headMargin'>The image must not contain watermarks, contact details, texts or illustrations.</li>
                    <li className='heading2 headMargin'>The images cannot be graphic, inappropriate, or unprofessional.</li>
                    <li className='heading2 headMargin'>The Images must not contain live models (Lingerie, underwear, and sleep wear).</li>
                </div>
            ),
        },
        {
            id: uuidv4(),
            title: 'c. Title',
            panel: (
                <div>
                    <li className='heading2 headMargin'>Title should be clear enough to understand the details of the product.</li>
                    <li className='heading2 headMargin'>Titles should contain the brand as the first word.</li>
                    <li className='heading2 headMargin'>The phrase “Assorted colors” can be used if the image contains the manufacturer’s box or if the colors are mentioned in key features or description.</li>
                    <li className='heading2 headMargin'>The title should not contain multiple variants and should not conflict with the product details and images.</li>
                    <li className='heading2 headMargin'>The titles should not contain irrelevant keywords.</li>
                    <li className='heading2 headMargin'>Titles should not contain typos and/or special characters.</li>
                </div>
            ),
        },
        {
            id: uuidv4(),
            title: 'd. Top Key features',
            panel: (
                <div>
                    <li className='heading2 headMargin'>The key features should highlight the most important functions and features of the product. It’s your chance to mention all the selling points that will help the buyers with their buying decision.</li>
                    <li className='heading2 headMargin'>Add a minimum 2, up to 6 key features per listing.</li>
                    <li className='heading2 headMargin'>Product Usage.</li>
                    <li className='heading2 headMargin'>Compatibility with other devices or products (if needed).</li>
                    <li className='heading2 headMargin'>The key features should not contain promotional details or information about multiple variants and should not conflict with the other product details and images.</li>
                    <li className='heading2 headMargin'>Key features should not contain typos and/or special characters.</li>
                </div>
            ),
        },
        {
            id: uuidv4(),
            title: 'e. Keywords',
            panel: (
                <div>
                    <li className='heading2 headMargin'>Use keywords that are strictly related to the product for better search experience. Use the words or phrases that the buyers would use to search for your products.</li>
                    <li className='heading2 headMargin'>Use words and phrases but not sentences.</li>
                    <li className='heading2 headMargin'>Add a minimum 2, up to 5 keywords per listing.</li>
                </div>
            ),
        },
        {
            id: uuidv4(),
            title: 'f. High-quality description',
            panel: (
                <div>
                    <li className='heading2 headMargin'>The story behind the product.</li>
                    <li className='heading2 headMargin'>Detailed display of usage, functions, specifications, ingredients, materials, and compatibility.</li>
                    <li className='heading2 headMargin'>The description should not contain promotional details or information about multiple variants and should not conflict with the other product details and images.</li>
                </div>
            ),
        },
    ];




    return (
        <Fragment>
            <Helmet>
                <title>Guidelines | Ulinkit - Best Practices for a Smooth Experience</title>
                <meta name="description" content="Review Ulinkit's guidelines for a smooth and enjoyable experience on our platform. Follow our best practices for account management, product listings, and customer interactions." />
                <link rel="canonical" href="https://www.ulinkit.com/guidelines" />
            </Helmet>
            <article className="guide-banner-cont">
                <img className='guideBanner' src={banner} alt="banner" />
                <div className="responsive-text">
                    <div className="flexcol" style={{ gap: '20px' }}>
                        <h1 className="heading4">Upload and update your product catalogue</h1>
                        <h2 className="heading5 clrwhite">Step-by-step guide for sellers</h2>
                    </div>
                </div>
            </article>

            <article className="flexcol-start wh home">
                <h1 className="heading5">1. Guidelines for product listing</h1>
                <div className="flexcol wh">
                    {
                        gpl.map((item, index) => (
                            <Fragment>
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

                <h2 className="heading5">2. Product approval criteria</h2>
                <div className="flexcol wh">
                    {
                        pac.map((item, index) => (
                            <Fragment>
                                <div className={`accordion-guide ${activeIndex === (index + 6) ? 'active' : ''}`} onClick={() => toggleGuideAccordion(index + 6)}>
                                    <p className="heading3">{item.title}</p>
                                </div>
                                <div className="panel-guide" style={{ maxHeight: activeIndex === (index + 6) ? '800px' : '0' }}>
                                    {item.panel}
                                </div>
                            </Fragment>
                        ))
                    }
                </div>

                <h3 className="heading5">3. Attend the webinar on how to upload your products</h3>
                <h4 className="heading2">Do you have questions about uploading your catalogue on Tradeling? Or do you simply need a first-hand demonstration showing how to upload products?
                    Join our free 1-hour webinar, where our experts will show you how to do it and start selling!
                </h4>
                <button className='btn box2 flex' style={{ width: 'fit-content', backgroundColor: 'var(--CodeOne)' }}><div className="heading2">Register Now</div></button>
            </article>
        </Fragment>
    )
}

export default Guidelines