import React, { Fragment, useState } from 'react';
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../assets/json/animation.json";
import global from '../assets/global.png';
import finance from '../assets/finance.png';
import shipping from '../assets/shipping.png';
import invoice from '../assets/invoice.png';
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DownloadIcon from '@mui/icons-material/Download';
import PageviewIcon from '@mui/icons-material/Pageview';
import three from '../assets/user.jpg';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import Amazon_Global_Selling_Logo from '../assets/Amazon_Global_Selling_Logo.png';
import dpworld from '../assets/dpworld.png';
import amazon from '../assets/amazon.png';
import howitworks from '../assets/howitworks.png';
import ulinkposter from '../assets/comp.png';
import './Cart/cart.css';
import { Helmet } from 'react-helmet-async';



const BecomeASeller = () => {

    const [activeIndex, setActiveIndex] = useState(null);
      const [hoveredButton, setHoveredButton] = useState(false);
      const [hoveredCard, setHoveredCard] = useState(null);
    
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const navigate = useNavigate();
    const signup = () => {
        navigate('/signup');
    }

    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    //json lottie animation
    const options = {
        animationData: groovyWalkAnimation,
        loop: true,
    };
    const { View } = useLottie(options);
    const howork = [
        {
            id: uuidv4(),
            title: 'Easily Upload and Manage Your Products',
            dis: 'Showcase your products effortlessly. Our team will assist you in uploading your catalog and launching sales campaigns to boost visibility.',
        },
        {
            id: uuidv4(),
            title: 'Streamline Delivery with Ulink Logistics',
            dis: 'Simplify import, export, customs, shipping, warehousing, and last-mile delivery with our end-to-end logistics support.',
        },
        {
            id: uuidv4(),
            title: 'Access Dedicated, Multilingual Customer Support',
            dis: 'From registration to order fulfillment, enjoy personalized account management and responsive customer service in multiple local languages.',
        },
        {
            id: uuidv4(),
            title: 'Boost Sales with Flexible Finance and Credit Solutions',
            dis: 'Empower your buyers with trade finance options. You receive instant payments, while they benefit from structured repayment terms—driving faster and more confident purchases.',
        },
    ];
    


    return (
        <Fragment>
            <Helmet>
                <title>Become A Seller</title>
                <meta name="description" content="Easily sell to the all over the globe without opening a local office. Tens of thousands of verified wholesale buyers are only a few clicks away." />
                <link rel="canonical" href="https://www.ulinkit.com/become-a-seller" />
            </Helmet>

            <article className="svg-bg">
                <div className="svg-content">
                    <h1 className="heading4">Sell more! Unlock the global market.</h1>
                    <h2 className="heading" style={{ color: 'white', fontWeight: '400' }}>Easily sell to the all over the globe without opening a local office. Tens of thousands of verified wholesale buyers are only a few clicks away.</h2>
                    <button onClick={signup} className='btn box flex' style={{ width: 'fit-content', backgroundColor: 'var(--CodeOne)' }}><div className="heading2">Become A Seller</div></button>
                </div>
                <div className="svgifimation">
                    <div className='gifimation'>
                        {View}
                    </div>
                </div>
            </article>

            <article className="sellmore">
                <h1 className="heading5" style={{color: 'var(--CodeTwo)' }}>Sell more! Unlock the global market.</h1>
                <h2 className="heading">Easily sell to the all over the globe without opening a local office. Tens of thousands of verified wholesale buyers are only a few clicks away.</h2>
                <button onClick={signup} className='btn box flex' style={{ width: 'fit-content', backgroundColor: 'var(--CodeOne)' }}><div className="heading2">Become A Seller</div></button>
            </article>

            <article className="flexcol wh home-alt">
                <h1 className="heading5 confidencetrade" style={{ color: 'var(--CodeTwo)' }}>Trade with confidence: We are backed by the govt of India ACT Trade Policy and strategically located at the New Delhi India</h1>
                <div className="perfect-grid">
                    
                    <section className='flexcol' style={{ gap: '20px' }}>
                        <img src={global} className='grid-icon' alt='global' />
                        <h2 className="heading3">Enter the wholesale/retail market anywhere in the world</h2>
                        <h3 className="heading2">Our verified B2B and B2C buyers are looking for products like yours</h3>
                    </section>
                    <section className='flexcol' style={{ gap: '20px' }}>
                        <img src={finance} className='grid-icon' alt='finance' />
                        <h2 className="heading3">Access trade finance & credit insurance</h2>
                        <h3 className="heading2">Access trade finance & credit insurance</h3>
                    </section>
                    <section className='flexcol' style={{ gap: '20px' }}>
                        <img src={shipping} className='grid-icon' alt='shipping' />
                        <h2 className="heading3">Convenient cross-border logistic services</h2>
                        <h3 className="heading2">Experience the integrated digital solutions for shipping, customs clearance, export licences, product registration and more</h3>
                    </section>
                    <section className='flexcol' style={{ gap: '20px' }}>
                        <img src={invoice} className='grid-icon' alt='invoice' />
                        <h2 className="heading3">Find active buyers in the RFQ Marketplace</h2>
                        <h3 className="heading2">Submit bids on open RFQs to connect with buyers who are looking for products like yours</h3>
                    </section>
                </div>
            </article>
            <section style={{
        backgroundColor: "white",
        padding: "80px 0",
        position: "relative",
        zIndex: 1
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px"
        }}>
          <h2 style={{
            color: "#003a4d",
            fontSize: "1.8rem",
            marginBottom: "3rem",
            maxWidth: 800,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            fontWeight: 600,
            lineHeight: 1.3
          }}>
Strategically Located & Officially Backed for Your Success
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            marginTop: "3rem"
          }}>
            {[
  {
    icon: "📊",
    title: "Real-time market insights & analytics",
    description: "Stay ahead of trends with industry data, buyer behavior, and price analysis."
  },
  {
    icon: "🤝",
    title: "Trusted global partnerships",
    description: "Collaborate with certified suppliers and verified buyers from across the globe."
  },
  {
    icon: "📦",
    title: "Seamless order & inventory management",
    description: "Track your orders, manage inventory, and fulfill shipments from one dashboard."
  },
  {
    icon: "📱",
    title: "Mobile-first experience",
    description: "Manage your business on the go with our responsive and intuitive mobile platform."
  },
  {
    icon: "🛡️",
    title: "Secure transactions & data privacy",
    description: "We use advanced encryption and compliance measures to protect your data and payments."
  },
  {
    icon: "🎯",
    title: "Targeted marketing campaigns",
    description: "Promote your products with smart ad placements and featured listings for higher visibility."
  },
  {
    icon: "🧾",
    title: "Automated invoice & tax compliance",
    description: "Generate compliant invoices and manage cross-border tax documents effortlessly."
  },
  {
    icon: "📤",
    title: "Easy product uploads & smart catalogs",
    description: "Upload multiple products, manage categories, and create an optimized catalog in minutes."
  }
]
.map((feature, index) => (
              <div 
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  padding: "2rem",
                  boxShadow: hoveredCard === index ? "0 15px 30px rgba(0, 58, 77, 0.1)" : "0 5px 15px rgba(0, 58, 77, 0.05)",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(0, 58, 77, 0.1)",
                  transform: hoveredCard === index ? "translateY(-5px)" : "none"
                }}
              >
                <div style={{
                  fontSize: "2.5rem",
                  marginBottom: "1.5rem"
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  color: "#003a4d",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  marginBottom: "1rem"
                }}>{feature.title}</h3>
                <p style={{
                  fontSize: "1rem",
                  color: "#666",
                  lineHeight: 1.6
                }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            <article className="howitworks home-alt">
                <div className="perfect-grid2">
                    <div className='ulink-img'>
                        <img src={howitworks} alt="howitworks" />
                    </div>
                    <div className='flexcol-start' style={{ gap: '30px' }}>
                        <h1 className="heading5">How it works</h1>
                        {
                            howork.map((item, index) => (
                                <div className='flexcol-start' key={uuidv4()} style={{ gap: '10px' }}>
                                    <p className="heading3">{index + 1}. {item.title}</p>
                                    <p className="heading2">{item.dis}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="flexcol wh">
                    <div className="flex wh" style={{ gap: '20px' }}>
                        <button onClick={() => handlePageChange(1)} style={{ width: '200px' }} className={currentPage === 1 ? 'toggle-active btn-toggle box flex' : 'btn-toggle box flex'}><div className="heading2">Payment Terms</div></button>
                        <button onClick={() => handlePageChange(2)} style={{ width: '200px' }} className={currentPage === 2 ? 'toggle-active btn-toggle box flex' : 'btn-toggle box flex'}><div className="heading2">Commission Structure</div></button>
                    </div>

                    {currentPage === 1 && (
                        <article className='flexcol wh page'>
                            <h1 className="descrip2">We offer the widest range of payment terms. This ensures that you and your customers can conclude your transactions in a way that best suits your business needs. <br /> You will receive payment twice per month.</h1>
                            <div className="flexcol wh" style={{ gap: '20px' }}>
                                <h2 className='heading'>Available payment terms include</h2>
                                <div className="perfect-grid2">
                                    <div className='flex'>
                                        <CheckCircleIcon style={{ color: 'var(--CodeTwo)' }} /> &nbsp; Debit Card
                                    </div>
                                    <div className='flex'>
                                        <CheckCircleIcon style={{ color: 'var(--CodeTwo)' }} /> &nbsp; Credit Card
                                    </div>
                                    <div className='flex'>
                                        <CheckCircleIcon style={{ color: 'var(--CodeTwo)' }} /> &nbsp; Bank transfer
                                    </div>
                                    <div className='flex'>
                                        <CheckCircleIcon style={{ color: 'var(--CodeTwo)' }} /> &nbsp; Cash on delivery
                                    </div>
                                </div>
                            </div>
                        </article>
                    )}
                    {currentPage === 2 && (
                        <article className='flexcol wh page'>
                            <h1 className="descrip2">Register and become a Ulink seller for free! Based on our simple commission structure you will only ever pay a commission on actual sales, at the lowest rate in the market. No hidden fees.</h1>
                            <div className="toggle-btns">
                                <div className="flex">
                                    <DownloadIcon style={{ color: 'var(--CodeTwo)' }} /> &nbsp; <a href='../assets/json/GOT.epub' className='download-btn' download target='_blank'>DOWNLOAD AS PDF</a>
                                </div>
                                <div className="flex">
                                    <PageviewIcon style={{ color: 'var(--CodeTwo)' }} /> &nbsp; <Link className='download-btn' to='/commission-structure'>VIEW STRUCTURE</Link>
                                </div>
                            </div>
                        </article>
                    )}
                </div>
            </article>

            <article className="flexcol wh home-alt" style={{ backgroundColor: 'var(--bgClr)' }}>
                <section className="perfect-grid2">
                    <div className='flexcol' style={{ gap: '30px', alignItems: 'start' }}>
                        <h1 className="heading5">International sellers, we help you!</h1>
                        <p className='flex-start' style={{ gap: '10px' }}>
                            <CheckCircleIcon style={{ color: 'var(--CodeTwo)' }} />We help with Customs Clearance and Product Registration.
                        </p>
                        <p className='flex-start' style={{ gap: '10px' }}>
                            <CheckCircleIcon style={{ color: 'var(--CodeTwo)' }} />Easily sell anywhere in the world. No need for your own local office.
                        </p>
                        <p className='flex-start' style={{ gap: '10px' }}>
                            <CheckCircleIcon style={{ color: 'var(--CodeTwo)' }} />We offer Exporter of Record services, if you do not have an export licence.
                        </p>
                    </div>
                    <div className='ulink-img'>
                        <img src={ulinkposter} alt="ulinkposter" />
                    </div>
                </section>

                <section className="flexcol wh" style={{ gap: '10px' }}>
                    <h1 className="heading5">Our International trade partners</h1>
                    <h2 className="descrip3">Our trade partners gets exclusive benefits.</h2>
                    <div className="perfect-grid trade">
                        <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 463 93" role="img" data-testid="tradeling-header-logo"><g fill="none"><path fill="#FB641E" d="M53.437 71.577c-10.064 0-18.222-8.158-18.222-18.222 0-10.064 8.158-18.222 18.222-18.222 10.064 0 18.222 8.158 18.222 18.222a18.222 18.222 0 0 1-18.222 18.222"></path><path fill="#FFF" d="M0 23.866 23.866 0l23.866 23.866-23.866 23.866zM98.229 4.746h12.386v12.386H98.229zM110.529 35.718v19.885c0 5.161 3.728 5.255 10.8 4.874v11.185c-17.3 1.912-23.134-3.156-23.134-16.059V35.718h-8.317V23.866h31.454v11.852h-10.803zm44.831-12.809v13.766c-6.4-.764-14.531 2.1-14.531 12.139v22.848h-12.332v-47.8h12.332v8.22c2.486-6.5 8.509-9.176 14.531-9.176m41.354 24.857c0-8.03-5.639-13.479-13.288-13.479-7.551 0-13.192 5.449-13.192 13.479s5.641 13.48 13.192 13.48c7.649 0 13.288-5.45 13.288-13.48m12.331-23.9v47.8h-12.331v-5.64c-3.441 4.3-8.6 6.979-15.582 6.979-12.713 0-23.23-11-23.23-25.238s10.52-25.235 23.23-25.235c6.978 0 12.141 2.677 15.582 6.978v-5.64l12.331-.004zm43.457 23.901c0-8.03-5.64-13.48-13.191-13.48-7.648 0-13.289 5.45-13.289 13.48 0 8.03 5.641 13.478 13.289 13.478 7.551 0 13.191-5.449 13.191-13.478m12.331-43.018v66.915h-12.331v-5.64c-3.441 4.4-8.508 6.979-15.485 6.979-12.81 0-23.326-10.994-23.326-25.236s10.516-25.235 23.331-25.235c6.977 0 12.044 2.582 15.485 6.979V4.746h12.326zm41.389 38.524c-1.531-6.883-6.692-9.655-11.854-9.655-6.6 0-11.091 3.538-12.522 9.655h24.376zM295.51 61.815c4.12.16 8.079-1.607 10.712-4.779l9.94 5.735C311.669 69.271 304.5 73 295.323 73c-16.059 0-26.191-10.994-26.191-25.237 0-14.243 10.223-25.234 25.232-25.234 14.147 0 24.183 11.185 24.183 25.236a28.423 28.423 0 0 1-.477 5.067h-36.038c1.722 6.308 6.979 8.985 13.478 8.985"></path><path fill="#FB641E" d="M322.894.078h12.331v71.583h-12.331zM405.578 42.315v29.347h-12.332V43.844c0-6.5-3.918-9.846-9.465-9.846-6.021 0-10.514 3.537-10.514 11.854v25.81h-12.331v-47.8h12.331v5.353c2.868-4.3 7.84-6.69 14.244-6.69 10.134 0 18.067 7.073 18.067 19.787m43.744 4.687c0-7.552-5.64-13-13.383-13-7.743 0-13.384 5.449-13.384 13 0 7.646 5.642 13.095 13.384 13.095s13.383-5.449 13.383-13.095m12.045-23.135v45.5c0 15.678-12.332 22.752-24.95 22.752-10.228 0-18.449-3.921-22.656-11.663l10.517-6.021c2.007 3.726 5.161 6.69 12.522 6.69 7.742 0 12.522-4.205 12.522-11.758v-5.161c-3.345 4.492-8.507 7.263-15.294 7.263-13.575 0-23.8-10.992-23.8-24.47-.006-13.38 10.222-24.467 23.794-24.467 6.787 0 11.949 2.772 15.294 7.265v-5.93h12.051zm-119.51-12.378a6.717 6.717 0 1 1 12.907 2.593 6.718 6.718 0 0 1-6.253 4.107 6.746 6.746 0 0 1-6.655-6.7M342.219 71.643l.15-47.797 12.331.038-.15 47.797z"></path></g></svg></div>
                        <div><img src={Amazon_Global_Selling_Logo} className='grid-icon' alt="amazon" /></div>
                        <div><img src={dpworld} className='grid-icon' alt="dpworld" /></div>
                        <div><img src={amazon} className='grid-icon' alt="amazon" /></div>
                    </div>
                </section>
            </article>

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
          }}>Success stories</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem"
          }}>
            {[
              {
                logo: "/Images/Person.avif",
                quote: "Ulinkit is helping us bring healthy foods to the Global region. We are reaching more customers and making more sales, at no additional cost.",
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

            <article className="flexcol wh home-alt" style={{ backgroundColor: 'var(--bgClr)' }}>
                <div className="flexcol wh" style={{ gap: '20px' }}>
                    <h1 className="heading5">Frequently asked questions</h1>
                </div>

                <div className="flexcol wh">

                    <section className={`accordion-pd ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleAccordion(1)}>
                        <div className='flex' style={{ gap: '20px' }}>
                            <HelpCenterIcon />
                            <h2 className="heading2">How do I register as a Seller on Ulink?</h2>
                        </div>
                    </section>
                    <div className="panel-pd wh" style={{ maxHeight: activeIndex === 1 ? '300px' : '0' }}>
                        <div className="flexcol-start bas-panel wh">
                            <p className="heading2">Registering as a Seller is easy!</p>
                            <p className="heading2"><a className='heading2' href="/signup">Click here</a> to start creating your Seller account.</p>
                            <p className="heading2">Complete a short form with your personal and business information.</p>
                        </div>
                    </div>

                    <section className={`accordion-pd ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleAccordion(2)}>
                        <div className='flex' style={{ gap: '20px' }}>
                            <HelpCenterIcon />
                            <h2 className="heading2">How do I start selling on Ulink?</h2>
                        </div>
                    </section>
                    <div className="panel-pd wh" style={{ maxHeight: activeIndex === 2 ? '300px' : '0' }}>
                        <div className="flexcol-start bas-panel wh">
                            <p className="heading2">Registering as a Seller is easy!</p>
                            <p className="heading2"><a className='heading2' href="/signup">Click here</a> to start creating your Seller account.</p>
                            <p className="heading2">Complete a short form with your personal and business information.</p>
                        </div>
                    </div>

                    <section className={`accordion-pd ${activeIndex === 3 ? 'active' : ''}`} onClick={() => toggleAccordion(3)}>
                        <div className='flex' style={{ gap: '20px' }}>
                            <HelpCenterIcon />
                            <h2 className="heading2">What products can I sell on Ulink?</h2>
                        </div>
                    </section>
                    <div className="panel-pd wh" style={{ maxHeight: activeIndex === 3 ? '300px' : '0' }}>
                        <div className="flexcol-start bas-panel wh">
                            <p className="heading2">Registering as a Seller is easy!</p>
                            <p className="heading2"><a className='heading2' href="/signup">Click here</a> to start creating your Seller account.</p>
                            <p className="heading2">Complete a short form with your personal and business information.</p>
                        </div>
                    </div>

                    <section className={`accordion-pd ${activeIndex === 4 ? 'active' : ''}`} onClick={() => toggleAccordion(4)}>
                        <div className='flex' style={{ gap: '20px' }}>
                            <HelpCenterIcon />
                            <h2 className="heading2">What is the benefit of being verified as a Seller?</h2>
                        </div>
                    </section>
                    <div className="panel-pd wh" style={{ maxHeight: activeIndex === 4 ? '300px' : '0' }}>
                        <div className="flexcol-start bas-panel wh">
                            <p className="heading2">Registering as a Seller is easy!</p>
                            <p className="heading2"><a className='heading2' href="/signup">Click here</a> to start creating your Seller account.</p>
                            <p className="heading2">Complete a short form with your personal and business information.</p>
                        </div>
                    </div>

                    <Link to="/faq" className='btn box flex' style={{ width: 'fit-content', marginTop: '20px', backgroundColor: 'var(--CodeOne)', whiteSpace: 'nowrap' }} type='submit'><div className="heading2">View all FAQs</div></Link>
                </div>
            </article>

            <article className="flexcol wh home" style={{ gap: '60px', backgroundColor: 'var(--CodeTwoHover)', color: 'white' }}>
                <div className="flexcol wh" style={{ gap: '20px' }}>
                    <h1 className="heading5" style={{ color: 'var(--bgClr)' }}>Join Ulink today!</h1>
                    <h2 className="heading2" style={{ color: 'var(--bgClr)' }}>Boost your business and increase your sales anywhere in the world.</h2>
                </div>
            </article>
        </Fragment>
    );
};

export default BecomeASeller;

