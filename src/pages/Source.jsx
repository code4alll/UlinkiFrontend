import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import three from '../assets/user.jpg';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import SellIcon from '@mui/icons-material/Sell';
import CategoryIcon from '@mui/icons-material/Category';
import PaymentIcon from '@mui/icons-material/Payment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { FaRegHandshake, FaGlobeAmericas, FaCreditCard, FaComments } from 'react-icons/fa';





const Source = () => {
  

    return (
        <Fragment>
            <Helmet>
                <title>Ulinkit - Your Global Marketplace for Products and Services</title>
                <meta name="description" content="Discover a world of products and services on Ulinkit. Shop from various categories, explore deals, and enjoy a seamless shopping experience." />
                <link rel="canonical" href="https://www.ulinkit.com/source-on-ulinkit" />
            </Helmet>
            <section className="sourceBanner" style={{ background: '#003953' }}>
                <article className="sourceText">
                    <h1 className="heading4">Faster, cheaper buying for your business</h1>
                    <h2 className="heading" style={{ color: 'white' }}>Do all your wholesale sourcing on one platform. Get the products you need, at the prices you want.</h2>
                    <button className='btn box' style={{ background: 'var(--CodeOne)', width: 'fit-content', padding: '10px 30px' }}>Register</button>
                </article>
                <div className="sourceImg">
                    <img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1729144832/Ulinkit/Only_Box_76a6515490_uxsbgy.webp" alt="products" />
                </div>
            </section>

            
            <section style={{
        backgroundColor: "#f8fafc",
        padding: "80px 0",
        position: "relative"
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px"
        }}>
          <h2 style={{
            color: "#003a4d",
            fontSize: "2rem",
            marginBottom: "3rem",
            textAlign: "center",
            fontWeight: 600
          }}>What Our Customer Says</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem"
          }}>
            {[
              {
                logo: "/Images/Person.avif",
                quote: "Ulinkit is helping us bring healthy items to the Global MarketPlace. We are reaching more customers and making more sales, at no additional cost.",
                author: "Mushahid - Kensmatic Foods"
              },
              {
                logo: "/Images/Person2.avif",
                quote: "Having our products listed on Ulinkit definitely makes sense. All of our products are available online for potential customers to see and get in touch with us directly.",
                author: "Raj Shah  - Sadia Foods"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                style={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  padding: "2.5rem",
                  boxShadow: "0 10px 30px rgba(0, 58, 77, 0.05)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  ':hover': {
                    transform: "translateY(-5px)",
                    boxShadow: "0 15px 35px rgba(0, 58, 77, 0.1)"
                  }
                }}
              >
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "4px",
                  backgroundColor: "#ff5722"
                }}></div>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center"
                }}>
                  <div style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    marginBottom: "1.5rem",
                    border: "3px solid #f0f0f0"
                  }}>
                    <img
                      src={testimonial.logo}
                      alt="Company logo"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        padding: "10px"
                      }}
                    />
                  </div>
                  <div style={{
                    position: "relative",
                    marginBottom: "1.5rem"
                  }}>
                    <span style={{
                      position: "absolute",
                      top: "-20px",
                      left: "-10px",
                      fontSize: "4rem",
                      color: "rgba(0, 58, 77, 0.05)",
                      lineHeight: 0,
                      zIndex: 0
                    }}>"</span>
                    <p style={{
                      fontSize: "1.1rem",
                      color: "#666",
                      fontStyle: "italic",
                      margin: "1rem 0",
                      position: "relative",
                      zIndex: 1,
                      lineHeight: 1.6
                    }}>{testimonial.quote}</p>
                    <span style={{
                      position: "absolute",
                      bottom: "-30px",
                      right: "-10px",
                      fontSize: "4rem",
                      color: "rgba(0, 58, 77, 0.05)",
                      lineHeight: 0,
                      zIndex: 0
                    }}>"</span>
                  </div>
                  <p style={{
                    fontSize: "0.9rem",
                    color: "#999",
                    fontWeight: 500,
                    marginTop: "1rem"
                  }}>{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            <section className="sourceBanner" style={{ background: 'white' }}>
            <article className="sourceTextTwo">
  <h1 className="heading5" style={{ color: '#003953' }}>Why source on Ulinkit?</h1>
  
  <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
      <div className="sourceIcon" style={{ marginRight: '1rem' }}>
        <FaRegHandshake /> {/* Replace with your actual icon */}
      </div>
      <div className="sourceTextBox">
        <p className='heading3'>Boost your profit margins</p>
        <p className="heading2">“Sourcing through Ulinkit has helped us cut costs and increase profits — it's a game-changer for smart businesses.”</p>
      </div>
    </li>

    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
      <div className="sourceIcon" style={{ marginRight: '1rem' }}>
        <FaGlobeAmericas /> {/* Replace with your actual icon */}
      </div>
      <div className="sourceTextBox">
        <p className='heading3'>Source globally, effortlessly</p>
        <p className="heading2">“From India to the Gulf and beyond — Ulinkit connects us with reliable suppliers across 50+ countries, all in one place.”</p>
      </div>
    </li>

    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
      <div className="sourceIcon" style={{ marginRight: '1rem' }}>
        <FaCreditCard /> {/* Replace with your actual icon */}
      </div>
      <div className="sourceTextBox">
        <p className='heading3'>Simplified payments & invoices</p>
        <p className="heading2">“With multi-currency support and easy bank transfers, we finally have payment processes that match our global operations.”</p>
      </div>
    </li>

    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
      <div className="sourceIcon" style={{ marginRight: '1rem' }}>
        <FaComments /> {/* Replace with your actual icon */}
      </div>
      <div className="sourceTextBox">
        <p className='heading3'>Streamlined communication</p>
        <p className="heading2">“Everything is centralized — messages, quotes, and updates. No more juggling emails and apps to stay on top of our orders.”</p>
      </div>
    </li>
  </ul>
</article>


                <div className="sourceImg">
                    <img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1729144832/Ulinkit/Only_Box_76a6515490_uxsbgy.webp" alt="products" />
                </div>
            </section>
            <section className="sourcehow">
    <h1 className="heading5" style={{ color: '#003953' }}>How it works</h1>

    <section className="sourcegrid">
        <article className="sourcegriditem">
            <div className="sourceNum">1</div>
            <div className="sourceStepContent">
                <h1 className="heading3">Create Your Free Account</h1>
                <p className="heading2">Sign up in just 3 quick steps and access the full power of global sourcing.</p>
            </div>
        </article>

        <article className="sourcegriditem">
            <div className="sourceNum">2</div>
            <div className="sourceStepContent">
                <h1 className="heading3">Discover Verified Products</h1>
                <p className="heading2">Explore trusted suppliers and products from India, the Gulf, and over 50+ countries.</p>
            </div>
        </article>

        <article className="sourcegriditem">
            <div className="sourceNum">3</div>
            <div className="sourceStepContent">
                <h1 className="heading3">Place Orders & Make Payments</h1>
                <p className="heading2">Send inquiries, negotiate, and pay securely — all within the platform.</p>
            </div>
        </article>

        <article className="sourcegriditem">
            <div className="sourceNum">4</div>
            <div className="sourceStepContent">
                <h1 className="heading3">Track & Receive Your Shipment</h1>
                <p className="heading2">Enjoy end-to-end visibility with our reliable global shipping and logistics solutions.</p>
            </div>
        </article>
    </section>
</section>


            <section className="valueAdded">
                <img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1729150879/Ulinkit/hands-typing-laptop-computer-coffee-shop_gb2yty.jpg" alt="value" />

                <div className='valuediv'>
                    <h1 className="heading5" style={{ color: '#003953' }}>Value-added services for your business</h1>

                    <section className="valuegrid">
                      
                        <article className="valuegriditem">
    <div className="valueicon"><SellIcon /></div>
    <div className="vlauetext">
        <h1 className="heading3">Seamless Customs & Compliance Support</h1>
        <h2 className="heading2">Ensure smooth international trade with expert handling of customs, regulations, and product clearances — all from one trusted partner.</h2>
    </div>
</article>

<article className="valuegriditem">
    <div className="valueicon"><CategoryIcon /></div>
    <div className="vlauetext">
        <h1 className="heading3">Wide-Range Product Sourcing</h1>
        <h2 className="heading2">Gain access to verified suppliers across diverse categories from the Gulf, India, and 50+ countries — handpicked to meet your business needs.</h2>
    </div>
</article>

<article className="valuegriditem">
    <div className="valueicon"><PaymentIcon /></div>
    <div className="vlauetext">
        <h1 className="heading3">Secure & Flexible Global Payments</h1>
        <h2 className="heading2">Make payments confidently with trusted international gateways, multi-currency support, and secure transactions tailored for global sourcing.</h2>
    </div>
</article>

<article className="valuegriditem">
    <div className="valueicon"><SupportAgentIcon /></div>
    <div className="vlauetext">
        <h1 className="heading3">Dedicated Sourcing & Support Team</h1>
        <h2 className="heading2">Work with experts who understand your market. From sourcing to after-sales — get personalized assistance at every step of your global trade journey.</h2>
    </div>
</article>

                    </section>
                </div>
            </section>

            <section className='sourcelook' style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
  <h1 className="heading5" style={{ color: '#003953' }}>
    Ulinkit by the numbers — growing with businesses like yours.
  </h1>
  <div className="lookgrid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
    <div className="lookitem" style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '16px', width: '220px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)', transition: 'transform 0.3s ease' }}>
      <div className="looknum" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#003953', marginBottom: '0.5rem' }}>2M+</div>
      <p className="heading3" style={{ fontSize: '1rem', fontWeight: '500', color: '#003953' }}>Active SKUs</p>
    </div>
    <div className="lookitem" style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '16px', width: '220px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)', transition: 'transform 0.3s ease' }}>
      <div className="looknum" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#003953', marginBottom: '0.5rem' }}>500K+</div>
      <p className="heading3" style={{ fontSize: '1rem', fontWeight: '500', color: '#003953' }}>Monthly Visitors</p>
    </div>
    <div className="lookitem" style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '16px', width: '220px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)', transition: 'transform 0.3s ease' }}>
      <div className="looknum" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#003953', marginBottom: '0.5rem' }}>22</div>
      <p className="heading3" style={{ fontSize: '1rem', fontWeight: '500', color: '#003953' }}>Product Categories</p>
    </div>
    <div className="lookitem" style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '16px', width: '220px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)', transition: 'transform 0.3s ease' }}>
      <div className="looknum" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#003953', marginBottom: '0.5rem' }}>7.2x</div>
      <p className="heading3" style={{ fontSize: '1rem', fontWeight: '500', color: '#003953' }}>Trade Growth in 6 Months</p>
    </div>
  </div>
</section>



<section className="flexcol wh home" style={{ 
    gap: '60px', 
    backgroundColor: '#f0f0f0',  // Gray background
    color: 'black',  // Black text
    marginBottom: '40px', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: '40px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Shadow effect
}}>
    <article className="flexcol wh" style={{ 
        gap: '20px', 
        textAlign: 'center', 
        width: '100%', 
        maxWidth: '800px' 
    }}>
        <h1 className="heading5" style={{ 
            color: 'black', // Black text color
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' // Subtle shadow on text
        }}>
            Join Ulink today!
        </h1>
        <h2 className="heading2" style={{ 
            color: 'black', // Black text color
            fontSize: '1.25rem', 
            fontWeight: 'normal',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' // Subtle shadow on text
        }}>
            Boost your business and increase your sales anywhere in the world.
        </h2>
    </article>
</section>


        </Fragment>
    )
}

export default Source