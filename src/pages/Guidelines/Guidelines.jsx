import React, { Fragment, useState } from 'react';
import banner from '../../assets/banner.jpg';
import './Guidelines.css';
import { v4 as uuidv4 } from 'uuid';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';


const Guidelines = () => {
    const navigate = useNavigate();


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
            <li className='heading2 headMargin'>
              For any queries related to product content, please contact us at <a href="mailto:support@ulink.com" className='underline'>support@ulinkit.com</a>.
            </li>
            <li className='heading2 headMargin'>
              Refrain from repeating the same information to enhance product discoverability in search results.
            </li>
            <li className='heading2 headMargin'>
              Provide clear and detailed descriptions to help customers make confident purchase decisions without needing additional research.
            </li>
          </div>
          
          ),
        },
        {
          id: uuidv4(),
          title: 'b. Title Structure',
          panel: (
            <div>
            <li className='heading2 headMargin'>Use the following format for listing titles: [Brand], [Model Name], [Model Number], [Key Feature], [Product Type], [Size], [Color], [Quantity]</li>
            <li className='heading2 headMargin'>Example: Graco, Maxi, GTB538, Lightweight, Car Seat - 1-12 Years, Navy Blue, Pack of 1.</li>
            <li className='heading2 headMargin'>Keep your title concise, clear, and under 200 characters, focusing on the most important product details.</li>
            <li className='heading2 headMargin'>Use numeric digits for all numbers (e.g., "3" instead of "three").</li>
            <li className='heading2 headMargin'>Separate keywords and product attributes using commas or hyphens.</li>
            <li className='heading2 headMargin'>Include brand name, model number, size, color, and quantity when available.</li>
            <li className='heading2 headMargin'>Avoid overusing keywords or including unrelated information.</li>
            <li className='heading2 headMargin'>Use sentence case (capitalize only the first word and proper nouns). Do not use ALL CAPS.</li>
            <li className='heading2 headMargin'>Do not include pricing, stock availability, warranty, or company information in the title.</li>
            <li className='heading2 headMargin'>Avoid using special symbols such as %, $, @, ™, or ® in the title.</li>
          </div>
          
          ),
        },
        {
          id: uuidv4(),
          title: 'c. Product Description',
          panel: (
            <div>
            <li className='heading2 headMargin'>Write product descriptions in clear, well-structured paragraphs using proper grammar.</li>
            <li className='heading2 headMargin'>Use U.S. English with a friendly and slightly promotional tone. Keep the text within 1000 characters.</li>
            <li className='heading2 headMargin'>Highlight key features such as size, color, compatibility, and any unique or standout aspects.</li>
            <li className='heading2 headMargin'>Naturally include relevant keywords and commonly searched terms for better visibility.</li>
            <li className='heading2 headMargin'>Mention the brand, series, and model number—even if they appear in the title.</li>
            <li className='heading2 headMargin'>Use sentence case: capitalize only the first word of each sentence and proper nouns.</li>
            <li className='heading2 headMargin'>Use &lt;p&gt; tags to separate paragraphs where appropriate.</li>
            <li className='heading2 headMargin'>Avoid using ALL CAPS. Maintain a clean, sentence-case format.</li>
            <li className='heading2 headMargin'>Do not mention pricing, stock status, seller details, or warranty information.</li>
            <li className='heading2 headMargin'>Exclude special characters such as %, $, @, ™, and ®.</li>
            <li className='heading2 headMargin'>If referencing content from another source, ensure that at least 20% is rewritten to make it unique.</li>
            <li className='heading2 headMargin'>Avoid using time-based or subjective language (e.g., “Top deal of 2024”).</li>
            <li className='heading2 headMargin'>Do not include links, email addresses, or external contact information.</li>
            <li className='heading2 headMargin'>Stay away from exaggerated claims or unverifiable promotional language.</li>
            <li className='heading2 headMargin'>If available, upload enhanced content such as A+ or branded visuals for added appeal.</li>
          </div>
          
          ),
        },
        {
          id: uuidv4(),
          title: 'd. Images',
          panel: (
            <div>
            <li className='heading2 headMargin'>Ensure the product takes up 70% to 85% of the image frame for optimal visibility.</li>
            <li className='heading2 headMargin'>Image file size should range between 100KB and 10MB.</li>
            <li className='heading2 headMargin'>Supported image formats include .jpg, .jpeg, .png, and .bmp (transparent PNGs are not allowed).</li>
            <li className='heading2 headMargin'>Use sRGB or CMYK color modes for accurate color display.</li>
            <li className='heading2 headMargin'>Images must have a resolution between 500x500 and 1000x1000 pixels.</li>
            <li className='heading2 headMargin'>Maintain a 1:1 (square) aspect ratio for all product images.</li>
            <li className='heading2 headMargin'>Only use real photographs of the product—illustrations or digital graphics are not permitted.</li>
            <li className='heading2 headMargin'>Do not use logos or icons in place of the actual product image.</li>
            <li className='heading2 headMargin'>Keep the image clean—avoid extra elements, overlays, or unrelated objects.</li>
            <li className='heading2 headMargin'>Images must be clear, sharp, and free from watermarks, borders, or distortion.</li>
            <li className='heading2 headMargin'>Display a single, clearly visible unit of the product in the main image.</li>
            <li className='heading2 headMargin'>Use a plain white background for the main product image.</li>
            <li className='heading2 headMargin'>Do not show accessories, packaging contents, or add-ons in the main image.</li>
            <li className='heading2 headMargin'>You may upload up to five additional images to showcase your product.</li>
            <li className='heading2 headMargin'>Avoid using text, watermarks, pricing labels, or complex backgrounds in the main image.</li>
            <li className='heading2 headMargin'>Do not display bundles, multipacks, or different angles in the main image.</li>
            <li className='heading2 headMargin'>Exclude compatible items from the main image (e.g., avoid showing a phone inside a case).</li>
            <li className='heading2 headMargin'>Electronics listings must include at least three high-quality images.</li>
            <li className='heading2 headMargin'>Lifestyle images may be used as the main image for certain categories (e.g., furniture, bedding, lighting, curtains) if the product remains clearly visible and identifiable.</li>
          </div>
          
          ),
        },
        {
          id: uuidv4(),
          title: 'e. Specifications',
          panel: (
            <div>
            <li className='heading2 headMargin'>Make sure all product details match the format and structure of the listing template.</li>
            <li className='heading2 headMargin'>Key features: Include at least 2 and no more than 6 bullet points. Each feature should be concise and limited to 250 characters.</li>
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
                <li className='heading2 headMargin'>Ulinkit is a platform for listing and selling physical products only. Services, subscriptions, or digital goods are not permitted.</li>
                <li className='heading2 headMargin'>Make sure your product complies with local and international laws. Prohibited items include alcohol, tobacco, drugs, medical devices, and live animals.</li>
                <li className='heading2 headMargin'>Product listings must not contain any explicit, graphic, or inappropriate content. All language should be clear, respectful, and professional.</li>
                <li className='heading2 headMargin'>Product information must be provided in English. Additional languages are welcome as long as English is included.</li>
                <li className='heading2 headMargin'>Each product listing must represent a single item. List variants (e.g., sizes or colors) and accessories separately.</li>
                <li className='heading2 headMargin'>Ensure product details are accurate, consistent, and do not contain conflicting or misleading information.</li>
              </div>
              
            ),
        },
        {
            id: uuidv4(),
            title: 'b. Imagery',
            panel: (
                <div>
                <li className='heading2 headMargin'>Product images must be clear and easy to view, allowing buyers to understand key features and specifications at a glance.</li>
                <li className='heading2 headMargin'>Display only one product per image, showing the specific color and size to avoid confusion. If the item has multiple variants, list each variant separately.</li>
                <li className='heading2 headMargin'>Images must accurately reflect the product title, features, and description. Avoid mismatches such as a red item image with a blue item title.</li>
                <li className='heading2 headMargin'>Use real photographs only—illustrations, renderings, or drawings are not allowed.</li>
                <li className='heading2 headMargin'>Images must be free from watermarks, text overlays, contact information, or any added graphics.</li>
                <li className='heading2 headMargin'>Avoid using images that are graphic, unprofessional, or inappropriate in any way.</li>
                <li className='heading2 headMargin'>For specific product categories such as lingerie, underwear, and sleepwear, images must not include live models.</li>
              </div>
              
            ),
        },
        {
            id: uuidv4(),
            title: 'c. Title',
            panel: (
                <div>
                <li className='heading2 headMargin'>Product titles must be clear and informative, giving buyers a quick understanding of what is being offered.</li>
                <li className='heading2 headMargin'>Begin each title with the product's brand name for easy identification and searchability.</li>
                <li className='heading2 headMargin'>Use the term “Assorted colors” only if the image shows the manufacturer’s packaging or if color variety is explained in the features or description.</li>
                <li className='heading2 headMargin'>Do not include multiple variants in a single title. Ensure the title matches the product details and image to avoid confusion.</li>
                <li className='heading2 headMargin'>Avoid using unrelated or misleading keywords in the title.</li>
                <li className='heading2 headMargin'>Titles must be free of spelling errors and must not include special characters or symbols.</li>
              </div>
              
            ),
        },
        {
            id: uuidv4(),
            title: 'd. Top Key features',
            panel: (
                <div>
                <li className='heading2 headMargin'>Key features should clearly present the most essential functions and benefits of the product, helping buyers make informed purchase decisions.</li>
                <li className='heading2 headMargin'>Include at least 2 and up to 6 key features per product listing.</li>
                <li className='heading2 headMargin'>Mention the intended use or purpose of the product where applicable.</li>
                <li className='heading2 headMargin'>Indicate compatibility with other devices or products, if relevant.</li>
                <li className='heading2 headMargin'>Avoid including promotional language, multiple variants, or any conflicting information across the listing.</li>
                <li className='heading2 headMargin'>Ensure each feature is clearly written and free from spelling errors or special characters.</li>
              </div>
              
            ),
        },
        {
            id: uuidv4(),
            title: 'e. Keywords',
            panel: (
                <div>
                <li className='heading2 headMargin'>Choose relevant keywords that accurately describe the product to improve visibility in search results. Think like a buyer—use terms they’re likely to search for.</li>
                <li className='heading2 headMargin'>Include phrases or individual words, not full sentences.</li>
                <li className='heading2 headMargin'>Add a minimum of 2 and a maximum of 5 targeted keywords per product listing.</li>
              </div>
              
            ),
        },
        {
            id: uuidv4(),
            title: 'f. High-quality description',
            panel: (
                <div>
                <li className='heading2 headMargin'>Share the inspiration or story behind the product to build a deeper connection with buyers.</li>
                <li className='heading2 headMargin'>Clearly explain how the product works, its features, specifications, materials, ingredients, and any device or item compatibility.</li>
                <li className='heading2 headMargin'>Avoid promotional language or mentioning multiple product variants. Ensure the description aligns with all other product details and images.</li>
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
                <h4 className="heading2">Do you have questions about uploading your catalogue on Ulinkit? Or do you simply need a first-hand demonstration showing how to upload products?
                    Join our free 1-hour webinar, where our experts will show you how to do it and start selling!
                </h4>
                <button
      onClick={() => navigate('/signup')}
      className='btn box2 flex'
      style={{ width: 'fit-content', backgroundColor: 'var(--CodeOne)' }}
    >
      <div className="heading2">Register Now</div>
    </button>
            </article>
        </Fragment>
    )
}

export default Guidelines