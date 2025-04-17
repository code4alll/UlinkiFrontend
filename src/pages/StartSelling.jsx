import React, { useState } from 'react';

const BecomeSeller = () => {
  const [activeTab, setActiveTab] = useState('payment');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I register as a Seller on Ulinkit?",
      answer: "You can register by clicking the 'Become a Seller' button and filling out our simple registration form. Our team will review your application and get back to you within 2 business days."
    },
    {
      question: "How do I start selling on Ulinkit?",
      answer: "Once approved, you can upload your product catalog, set your prices, and start receiving orders. Our team will guide you through the entire process."
    },
    {
      question: "What products can I sell on Ulinkit?",
      answer: "We accept a wide range of products across multiple categories including food & beverage, electronics, home goods, and industrial supplies. Some restricted items may require additional documentation."
    },
    {
      question: "What is the benefit of being verified as a Seller?",
      answer: "Verified sellers receive a trust badge, appear higher in search results, and gain access to premium features like trade financing and logistics support."
    },
    {
      question: "How to get verified as a Seller?",
      answer: "Complete your profile, submit required business documents, and maintain good order fulfillment metrics. Our verification team will review your application."
    },
    {
      question: "Can I sell in the UAE?",
      answer: "Yes! Ulinkit handles all the local requirements, customs clearance, and product registration needed to sell in UAE markets."
    }
  ];

  return (
    <div style={{
      fontFamily: "'Inter', Arial, sans-serif",
      color: "#333",
      lineHeight: 1.6,
      margin: 0,
      padding: 0,
      maxWidth: '100%',
      overflowX: 'hidden'
    }}>
      {/* Hero Section */}
      <section style={{
        backgroundColor: "#003a4d",
        color: "white",
        padding: "80px 0 0",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          '@media (max-width: 768px)': {
            flexDirection: "column"
          }
        }}>
          <div style={{
            width: "50%",
            paddingBottom: 100,
            '@media (max-width: 768px)': {
              width: "100%",
              paddingBottom: 40
            }
          }}>
            <h1 style={{
              fontSize: "2.8rem",
              marginBottom: "1.5rem",
              fontWeight: 700,
              lineHeight: 1.2
            }}>Sell more! Unlock the MENA market.</h1>
            <p style={{
              fontSize: "1.1rem",
              marginBottom: "2rem",
              lineHeight: 1.6,
              opacity: 0.9
            }}>
              Easily sell to the UAE without opening a local office. Tens of thousands
              of verified wholesale buyers are only a few clicks away.
            </p>
            <button 
              onMouseEnter={() => setHoveredButton(true)}
              onMouseLeave={() => setHoveredButton(false)}
              style={{
                backgroundColor: hoveredButton ? "#e64a19" : "#ff5722",
                color: "white",
                whiteSpace:'nowrap',
                padding: "14px 90px",
                border: "none",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: "pointer",
                borderRadius: "4px",
                transition: "all 0.3s ease",
                boxShadow: hoveredButton ? "0 8px 16px rgba(255, 87, 34, 0.3)" : "0 4px 8px rgba(255, 87, 34, 0.2)",
                transform: hoveredButton ? "translateY(-2px)" : "none"
              }}>
              BECOME A SELLER
            </button>
            <div style={{
              display: "flex",
              alignItems: "center",
              marginTop: "2rem",
              fontSize: "0.9rem",
              opacity: 0.8
            }}>
              Backed by: <img 
                src="/Images/Dubai.png" 
                alt="Dubai Government logo" 
                style={{ 
                  height: "40px", 
                  marginLeft: "10px",
                  filter: "brightness(0) invert(1)"
                }} 
              />
            </div>
          </div>
          <div style={{
            width: "50%",
            position: "relative",
            '@media (max-width: 768px)': {
              width: "100%",
              marginTop: "40px"
            }
          }}>
            <img
              src="/Images/Selling.webp"
              alt="Ulinkit platform with shipping boxes"
              style={{
                width: "100%",
                maxWidth: 600,
                borderRadius: "8px",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                transform: "perspective(1000px) rotateY(-5deg)",
                transition: "transform 0.5s ease",
                ':hover': {
                  transform: "perspective(1000px) rotateY(0deg)"
                }
              }}
            />
          </div>
        </div>
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100px",
          backgroundColor: "white",
          borderRadius: "100% 100% 0 0",
          transform: "scale(1.5)"
        }}></div>
      </section>

      {/* Trust Section */}
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
            Trade with confidence: we are backed by the Dubai Government and strategically located at the Dubai Airport
            Free Zone.
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            marginTop: "3rem"
          }}>
            {[
              {
                icon: "🌐",
                title: "Enter the wholesale market in MENA",
                description: "Our verified B2B buyers are looking for products like yours."
              },
              {
                icon: "💰",
                title: "Access trade finance & credit insurance",
                description: "Secure payment solutions and risk protection for your transactions."
              },
              {
                icon: "🚚",
                title: "Convenient cross-border logistic services",
                description: "Integrated digital solutions for shipping, customs clearance, export licenses, and more."
              },
              {
                icon: "📝",
                title: "Find active buyers in the RFQ Marketplace",
                description: "Submit bids on open RFQs to connect with buyers looking for your products."
              }
            ].map((feature, index) => (
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

      {/* How it works section */}
      <section style={{
        backgroundColor: "#f8fafc",
        padding: "80px 0",
        position: "relative"
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          '@media (max-width: 768px)': {
            flexDirection: "column"
          }
        }}>
          <div style={{
            width: "45%",
            '@media (max-width: 768px)': {
              width: "100%",
              marginBottom: "3rem"
            }
          }}>
            <div style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              padding: "2rem",
              boxShadow: "0 10px 30px rgba(0, 58, 77, 0.1)",
              border: "1px solid rgba(0, 58, 77, 0.1)"
            }}>
              <img
                src="/Images/Blog2.webp"
                alt="How it works process diagram"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "4px"
                }}
              />
            </div>
          </div>
          <div style={{
            width: "55%",
            paddingLeft: "3rem",
            '@media (max-width: 768px)': {
              width: "100%",
              paddingLeft: 0
            }
          }}>
            <h2 style={{
              color: "#003a4d",
              fontSize: "2rem",
              marginBottom: "2rem",
              fontWeight: 600
            }}>How it works</h2>

            {[
              {
                title: "1. Easily upload and manage your products",
                description: "Showcase your products in the best way. Our team will help you upload your catalogue and launch sales promotions."
              },
              {
                title: "2. Use Tradeling Logistics to get your products to market",
                description: "Look no further for seamless support with import, export, customs, shipping, warehousing, and last-mile delivery.",
                link: true
              },
              {
                title: "3. Get world-class customer support",
                description: "Count on hands-on support and account management from the moment you register. Your buyers will receive fast and responsive customer service in the local languages of their choice."
              },
              {
                title: "4. Boost your sales: we offer finance and credit solutions to your buyers",
                description: "Your buyers can apply for trade finance with us. You get paid immediately and the buyer has set repayment terms with us; it eases their cashflow and encourages them to buy faster and with greater confidence.",
                link: true
              }
            ].map((step, index) => (
              <div key={index} style={{
                marginBottom: "2rem",
                paddingBottom: "2rem",
                borderBottom: index < 3 ? "1px solid rgba(0, 58, 77, 0.1)" : "none"
              }}>
                <h3 style={{
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  color: "#003a4d",
                  marginBottom: "0.8rem"
                }}>{step.title}</h3>
                <p style={{
                  fontSize: "1rem",
                  color: "#666",
                  marginBottom: "1rem",
                  lineHeight: 1.6
                }}>{step.description}</p>
                {step.link && (
                  <a href="#" style={{
                    color: "#003a4d",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    transition: "all 0.2s ease",
                    ':hover': {
                      color: "#ff5722"
                    }
                  }}>
                    LEARN MORE <span style={{ marginLeft: "5px", fontSize: "1rem" }}>→</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment terms section */}
      <section style={{
        backgroundColor: "white",
        padding: "80px 0",
        position: "relative"
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px"
        }}>
          <div style={{
            display: "flex",
            marginBottom: 0,
            borderBottom: "1px solid #e0e0e0"
          }}>
            <button
              onClick={() => setActiveTab('payment')}
              style={{
                padding: "15px 30px",
                fontWeight: 600,
                backgroundColor: activeTab === 'payment' ? "#003a4d" : "#f5f5f5",
                color: activeTab === 'payment' ? "white" : "#666",
                cursor: "pointer",
                border: "none",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                transition: "all 0.2s ease"
              }}
            >
              Payment terms
            </button>
            <button
              onClick={() => setActiveTab('commission')}
              style={{
                padding: "15px 30px",
                fontWeight: 600,
                backgroundColor: activeTab === 'commission' ? "#003a4d" : "#f5f5f5",
                color: activeTab === 'commission' ? "white" : "#666",
                cursor: "pointer",
                border: "none",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                transition: "all 0.2s ease"
              }}
            >
              Commission structure
            </button>
          </div>
          <div style={{
            border: "1px solid #e0e0e0",
            borderTop: "none",
            padding: "40px",
            borderRadius: "0 0 8px 8px",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)"
          }}>
            {activeTab === 'payment' ? (
              <>
                <p style={{
                  marginBottom: "1.5rem",
                  fontSize: "1rem",
                  color: "#666",
                  lineHeight: 1.6
                }}>
                  We offer the widest range of payment terms. This ensures that you and your customers can conclude your
                  transactions in a way that best suits your business needs. You will receive payment twice per month.
                </p>
                <p style={{
                  marginBottom: "1.5rem",
                  fontSize: "1rem",
                  color: "#666"
                }}>Available payment terms include:</p>

                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                  gap: "1rem",
                  marginTop: "1.5rem"
                }}>
                  {["Debit Card", "Credit Card", "Bank transfer", "Cash on delivery"].map((method, index) => (
                    <div key={index} style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "12px 16px",
                      backgroundColor: "#f8fafc",
                      borderRadius: "4px"
                    }}>
                      <span style={{
                        color: "#ff5722",
                        marginRight: "10px",
                        fontWeight: "bold",
                        fontSize: "1.2rem"
                      }}>✓</span>
                      <span style={{ fontSize: "0.95rem" }}>{method}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div>
                <p style={{
                  marginBottom: "1.5rem",
                  fontSize: "1rem",
                  color: "#666",
                  lineHeight: 1.6
                }}>
                  Our commission structure is designed to be competitive and fair. We only succeed when you succeed.
                </p>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "2rem",
                  marginTop: "2rem"
                }}>
                  {[
                    { category: "Electronics", rate: "5-8%" },
                    { category: "Food & Beverage", rate: "7-10%" },
                    { category: "Industrial Supplies", rate: "4-7%" },
                    { category: "Home Goods", rate: "6-9%" }
                  ].map((item, index) => (
                    <div key={index} style={{
                      backgroundColor: "#f8fafc",
                      padding: "1.5rem",
                      borderRadius: "8px",
                      borderLeft: "4px solid #003a4d"
                    }}>
                      <h3 style={{
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        color: "#003a4d",
                        marginBottom: "0.5rem"
                      }}>{item.category}</h3>
                      <p style={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "#ff5722",
                        margin: 0
                      }}>{item.rate}</p>
                      <p style={{
                        fontSize: "0.8rem",
                        color: "#666",
                        marginTop: "0.5rem"
                      }}>commission rate</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* International sellers section */}
      <section style={{
        backgroundColor: "#f8fafc",
        padding: "80px 0",
        position: "relative"
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          '@media (max-width: 768px)': {
            flexDirection: "column"
          }
        }}>
          <div style={{
            width: "50%",
            '@media (max-width: 768px)': {
              width: "100%",
              marginBottom: "3rem"
            }
          }}>
            <h2 style={{
              color: "#003a4d",
              fontSize: "2rem",
              marginBottom: "2rem",
              fontWeight: 600
            }}>International sellers, we help you!</h2>

            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem"
            }}>
              {[
                "We help with Customs Clearance and Product Registration.",
                "Easily sell in the Middle East. No need for your own local office.",
                "We offer Exporter of Record services, if you do not have an export licence."
              ].map((benefit, index) => (
                <div key={index} style={{
                  display: "flex",
                  alignItems: "flex-start"
                }}>
                  <span style={{
                    color: "#ff5722",
                    marginRight: "15px",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    flexShrink: 0,
                    marginTop: "2px"
                  }}>✓</span>
                  <p style={{
                    fontSize: "1.1rem",
                    color: "#333",
                    margin: 0,
                    lineHeight: 1.5
                  }}>{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            '@media (max-width: 768px)': {
              width: "100%"
            }
          }}>
            <div style={{
              position: "relative",
              width: "100%",
              maxWidth: 500
            }}>
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridTemplateRows: "repeat(3, 1fr)",
                zIndex: 1
              }}>
                {["China", "UK", "India", "Turkey", "Taiwan", "USA", "Spain"].map((country, index) => (
                  <div 
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      transform: `rotate(${Math.random() * 10 - 5}deg)`,
                      transition: "transform 0.3s ease",
                      ':hover': {
                        transform: "scale(1.1) rotate(0deg)"
                      }
                    }}
                  >
                    <div style={{
                      backgroundColor: "white",
                      borderRadius: "4px",
                      padding: "8px 12px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <img 
                        src={`/Images/flags/${country.toLowerCase()}.webp`} 
                        alt={`${country} flag`} 
                        style={{
                          height: "20px",
                          width: "30px",
                          marginRight: "8px",
                          objectFit: "cover"
                        }} 
                      />
                      <span style={{ fontSize: "0.8rem" }}>{country}</span>
                    </div>
                  </div>
                ))}
              </div>
              <img 
                src="/Images/global_Logistics.webp" 
                alt="Global logistics" 
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 15px 30px rgba(0, 58, 77, 0.1)",
                  border: "1px solid rgba(0, 58, 77, 0.1)"
                }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trade partners section */}
      <section style={{
        backgroundColor: "white",
        padding: "80px 0",
        borderTop: "1px solid #eee"
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          textAlign: "center"
        }}>
          <h2 style={{
            color: "#003a4d",
            fontSize: "2rem",
            marginBottom: "0.5rem",
            fontWeight: 600
          }}>Our International trade partners</h2>
          <p style={{
            fontSize: "1.1rem",
            color: "#666",
            marginBottom: "3rem"
          }}>Our trade partners get exclusive benefits.</p>

          <div style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "2rem",
            marginTop: "2rem"
          }}>
            {["Make it Kenya", "Malaysian Chamber of Commerce", "MODS", "Belarus Chamber of Commerce", "CEPIT", "CCI France UAE"].map((partner, index) => (
              <div 
                key={index}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  padding: "1.5rem",
                  boxShadow: "0 5px 15px rgba(0, 58, 77, 0.05)",
                  border: "1px solid rgba(0, 58, 77, 0.1)",
                  transition: "all 0.3s ease",
                  ':hover': {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 25px rgba(0, 58, 77, 0.1)"
                  }
                }}
              >
                <img 
                  src={`/Images/Partners/${partner.replace(/\s+/g, '-').toLowerCase()}.png`} 
                  alt={partner} 
                  style={{
                    height: "60px",
                    width: "auto",
                    maxWidth: "150px",
                    objectFit: "contain",
                    filter: "grayscale(100%)",
                    opacity: 0.7,
                    transition: "all 0.3s ease",
                    ':hover': {
                      filter: "grayscale(0%)",
                      opacity: 1
                    }
                  }} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success stories section */}
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
                logo: "/Images/Blog2.webp",
                quote: "Ulinkit is helping us bring healthy foods to the UAE region. We are reaching more customers and making more sales, at no additional cost.",
                author: "Henry Haddad, Kensmatic Foods"
              },
              {
                logo: "/Images/Blog1.webp",
                quote: "Having our products listed on Ulinkit definitely makes sense. All of our products are available online for potential customers to see and get in touch with us directly.",
                author: "Sao Marcos , BRF - Sadia Foods"
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

      {/* FAQ section */}
      <section style={{
        backgroundColor: "white",
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
          }}>Frequently asked questions</h2>

          <div style={{
            maxWidth: 800,
            margin: "0 auto"
          }}>
            {faqs.map((faq, index) => (
              <div 
                key={index}
                style={{
                  borderBottom: "1px solid #eee",
                  transition: "all 0.3s ease"
                }}
              >
                <div 
                  onClick={() => toggleFaq(index)}
                  style={{
                    padding: "20px 0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    ':hover': {
                      color: "#003a4d"
                    }
                  }}
                >
                  <p style={{
                    fontWeight: 500,
                    margin: 0,
                    fontSize: "1.1rem",
                    transition: "all 0.2s ease"
                  }}>{faq.question}</p>
                  <span style={{
                    fontSize: "1rem",
                    color: "#003a4d",
                    transition: "all 0.3s ease",
                    transform: expandedFaq === index ? "rotate(180deg)" : "none"
                  }}>▼</span>
                </div>
                {expandedFaq === index && (
                  <div style={{
                    padding: "0 0 20px 0",
                    animation: "fadeIn 0.3s ease"
                  }}>
                    <p style={{
                      fontSize: "1rem",
                      color: "#666",
                      lineHeight: 1.6,
                      margin: 0
                    }}>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        backgroundColor: "#003a4d",
        padding: "60px 0",
        textAlign: "center"
      }}>
        <div style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "0 40px"
        }}>
          <h2 style={{
            color: "white",
            fontSize: "2rem",
            marginBottom: "1.5rem",
            fontWeight: 600
          }}>Ready to grow your business in Dubai?</h2>
          <p style={{
            color: "rgba(255, 255, 255, 0.9)",
            fontSize: "1.1rem",
            marginBottom: "2rem",
            lineHeight: 1.6
          }}>
            Join hundreds of international sellers already expanding their reach with Ulinkit.
          </p>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
  <button 
    onMouseEnter={() => setHoveredButton(true)}
    onMouseLeave={() => setHoveredButton(false)}
    style={{
      backgroundColor: hoveredButton ? "#e64a19" : "#ff5722",
      color: "white",
      padding: "16px 40px", // much safer
      border: "none",
      fontWeight: 600,
      fontSize: "1.1rem",
      cursor: "pointer",
      borderRadius: "4px",
      transition: "all 0.3s ease",
      boxShadow: hoveredButton
        ? "0 8px 16px rgba(255, 87, 34, 0.3)"
        : "0 4px 8px rgba(255, 87, 34, 0.2)",
      transform: hoveredButton ? "translateY(-2px)" : "none",
      whiteSpace: "nowrap", // no wrapping
      maxWidth: "100%",     // prevents overflow
      overflow: "hidden",   // clips anything extra
      textOverflow: "ellipsis", // adds "..." if needed
    }}>
 Read More
  </button>
</div>



        </div>
      </section>
    </div>
  );
};

export default BecomeSeller;