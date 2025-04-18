import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import three from '../assets/user.jpg';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import SellIcon from '@mui/icons-material/Sell';
import CategoryIcon from '@mui/icons-material/Category';
import PaymentIcon from '@mui/icons-material/Payment';


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
                    <div className="sourceTextBox">
                        <p className='heading3'>Increase your margins</p>
                        <p className="heading2">“I don’t mind admitting it’s the secret behind our higher profits...”</p>
                    </div>
                    <div className="sourceTextBox">
                        <p className='heading3'>Easily import from anywhere</p>
                        <p className="heading2">“great selection from Dubai, India or more than 50 other countries.”</p>
                    </div>
                    <div className="sourceTextBox">
                        <p className='heading3'>Convenient payment & invoicing</p>
                        <p className="heading2">“a relief to pay for everything with a quick bank transfer.”</p>
                    </div>
                    <div className="sourceTextBox">
                        <p className='heading3'>One place to communicate</p>
                        <p className="heading2">“Frankly, never going back to chasing suppliers across email, phone and chat apps.”</p>
                    </div>
                </article>
                <div className="sourceImg">
                    <img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1729144832/Ulinkit/Only_Box_76a6515490_uxsbgy.webp" alt="products" />
                </div>
            </section>

            <section className='sourcehow'>
                <h1 className="heading5" style={{ color: '#003953' }}>How it works</h1>
                <section className='sourcegrid'>
                    <article className='sourcegriditem'>
                        <div className="sourceNum">1</div>
                        <h1 className="heading2">Register for free in 3 easy steps</h1>
                    </article>
                    <article className='sourcegriditem'>
                        <div className="sourceNum">2</div>
                        <h1 className="heading2">Browse 4 million+ products</h1>
                    </article>
                    <article className='sourcegriditem'>
                        <div className="sourceNum">3</div>
                        <h1 className="heading2">Order & Pay</h1>
                    </article>
                    <article className='sourcegriditem'>
                        <div className="sourceNum">4</div>
                        <h1 className="heading2">Get it fast with our shipping solutions</h1>
                    </article>
                </section>
            </section>

            <section className="valueAdded">
                <img src="https://res.cloudinary.com/dey1tujp8/image/upload/v1729150879/Ulinkit/hands-typing-laptop-computer-coffee-shop_gb2yty.jpg" alt="value" />

                <div className='valuediv'>
                    <h1 className="heading5" style={{ color: '#003953' }}>Value-added services for your business</h1>

                    <section className="valuegrid">
                        <article className="valuegriditem">
                            <div className="valueicon"><InsertDriveFileIcon /></div>
                            <div className="vlauetext">
                                <h1 className="heading3">Customs and product clearance registration</h1>
                                <h2 className="heading2">Enjoy peace of mind that your products are compliant with local standards. One point of contact, hassle-free process. All your certification needs addressed.</h2>
                            </div>
                        </article>
                        <article className="valuegriditem">
                            <div className="valueicon"><SellIcon /></div>
                            <div className="vlauetext">
                                <h1 className="heading3">Customs and product clearance registration</h1>
                                <h2 className="heading2">Enjoy peace of mind that your products are compliant with local standards. One point of contact, hassle-free process. All your certification needs addressed.</h2>
                            </div>
                        </article>
                        <article className="valuegriditem">
                            <div className="valueicon"><CategoryIcon /></div>
                            <div className="vlauetext">
                                <h1 className="heading3">Customs and product clearance registration</h1>
                                <h2 className="heading2">Enjoy peace of mind that your products are compliant with local standards. One point of contact, hassle-free process. All your certification needs addressed.</h2>
                            </div>
                        </article>
                        <article className="valuegriditem">
                            <div className="valueicon"><PaymentIcon /></div>
                            <div className="vlauetext">
                                <h1 className="heading3">Customs and product clearance registration</h1>
                                <h2 className="heading2">Enjoy peace of mind that your products are compliant with local standards. One point of contact, hassle-free process. All your certification needs addressed.</h2>
                            </div>
                        </article>
                    </section>
                </div>
            </section>

            <section className='sourcelook'>
                <h1 className="heading5" style={{ color: '#003953' }}>Look no further. We have it all. And we keep growing.</h1>
                <div className="lookgrid">
                    <div className="lookitem">
                        <div className="looknum">4 mill+</div>
                        <p className="heading3" style={{ color: '#003953' }}>SKU’s</p>
                    </div>
                    <div className="lookitem">
                        <div className="looknum">350k+</div>
                        <p className="heading3" style={{ color: '#003953' }}>unique visitors/month</p>
                    </div>
                    <div className="lookitem">
                        <div className="looknum">14</div>
                        <p className="heading3" style={{ color: '#003953' }}>categories</p>
                    </div>
                    <div className="lookitem">
                        <div className="looknum">5.5x</div>
                        <p className="heading3" style={{ color: '#003953' }}>trade volume growth in the last 6 months</p>
                    </div>
                </div>
            </section>

            <section className="flexcol wh home" style={{ gap: '60px', backgroundColor: '#3770bf', color: 'white', marginBottom:'40px' }}>
                <article className="flexcol wh" style={{ gap: '20px' }}>
                    <h1 className="heading5" style={{ color: 'var(--bgClr)' }}>Join Ulink today!</h1>
                    <h2 className="heading2" style={{ color: 'var(--bgClr)' }}>Boost your business and increase your sales anywhere in the world.</h2>
                </article>
            </section>
        </Fragment>
    )
}

export default Source