import React, { useState } from "react";
import warehouseImg from "../assets/Warehouse.jpeg";
import { FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const About = () => {
  
  const [hoveredButton, setHoveredButton] = useState(false);
  const [activeTimelineItem, setActiveTimelineItem] = useState(null);
 
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  const timelineData = [
    {
      year: "2010",
      title: "Founded",
      description: "Started as data mining firm in 2011 providing Global business based data to various clients.",
      image: "/Images/Founded.avif",
    },
    {
      year: "2013",
      title: "IT Services",
      description: "Started developing IT tools & outsourced clients Global business promotion activities and backend proces",
      image: "/Images/It.avif",
    },
    {
      year: "2014",
      title: "Milestone Launches",
      description: "Global Partnered with amazon, for the seller onboarding program with more than 2 lac seller onboard.",
      image: "/Images/Enhancement.avif",
    },
    {
      year: "2016",
      title: "Product Assortment",
      description: "Started Global warehousing business with more than 300 storage facility in Dubai, India and USA.",
      image: "/Images/Product.avif",
    },
    {
      year: "2017",
      title: "RFQ & Credit Finance",
      description: "Introduced RFQ/Negotiations & Credit Finance.",
      image: "/Images/Rfq.webp",
    },
    {
      year: "2024",
      title: "Significant Growth",
      description: "So many registered users with an inventory of over a large million items.",
      image: "/Images/Growth.avif",
    },
  ];

  const companies = [
    { name: "Google", logo: "/Images/Google.png" },
    { name: "Amazon", logo: "/Images/Amazon.png" },
    { name: "Facebook", logo: "/Images/Facebook.png" },
    { name: "Apple", logo: "/Images/Apple.png" },
    { name: "HP", logo: "/Images/hp.png" },
    { name: "Samsung", logo: "/Images/samsung.png" },
  ];

  const sliderSettings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
  <Helmet>
  <title>About Ulinkit</title>
  <meta 
    name="description" 
    content="Ulinkit is a global platform connecting sellers and buyers across borders. Learn more about our mission, services, and how we're empowering businesses worldwide." 
  />
  <link rel="canonical" href="https://www.ulinkit.com/become-a-seller" />
</Helmet>

      {/* Hero Section */}
      <div style={{
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundImage: `url("/Images/Company.avif")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
      padding: "5rem 1rem",
    }}>
        {/* Dark overlay with blur */}
        <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}></div>

<motion.div
        style={{
          position: "relative",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1rem",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
          {/* Text Content */}
          <motion.div
          style={{
            maxWidth: "42rem",
            marginBottom: "3rem",
          }}
          whileHover={{ scale: 1.02 }}
        >
            <h1 style={{
            fontSize: "2.25rem",
            fontWeight: 800,
            marginBottom: "1.5rem",
            backgroundImage: '#3770bf',
            WebkitBackgroundClip: "text",
            color: "transparent",
            lineHeight: 1.25,
            color: 'white',
          }}>
            Your one-stop solution for seamless procurement and global distribution
            <br />
            <span style={{ color: "white" }}>It's easier with Ulinkit</span>
          </h1>
          <motion.button
            style={{
              background: "linear-gradient(to right, #fc7927, #ff9857)",
              color: "white",
              fontWeight: "bold",
              padding: "12px 32px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              whiteSpace: "nowrap",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              display: "inline-block",
              width: "fit-content",         // Button fits the content
              overflow: "hidden",           // Prevent text overflow
              textOverflow: "ellipsis",     // Ellipsis if needed
              transition: "all 0.3s ease-in-out",
            }}
            whileHover={{
              background: "linear-gradient(to right, #fc792)",
              scale: 1.05,
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
          </motion.button>


          </motion.div>

          {/* Card */}
          <motion.div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "1rem",
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
              padding: "24px",
              maxWidth: "24rem",
              width: "100%",
              textAlign: "center",
            }}
            whileHover={{ 
              boxShadow: "0 10px 15px rgba(128, 0, 128, 0.3)",
              y: -5
            }}
          >
            <div style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
              background: "#fc7927",

              WebkitBackgroundClip: "text",
              color: "transparent",
            }}>
              <span style={{ marginRight: "0.5rem" }}>♦ Ulinkit</span>
            </div>
            <p style={{
              fontSize: "0.875rem",
              color: "#E5E7EB",
            }}>
            Global leading wholesale marketplace
            </p>
            <div style={{
              backgroundColor: "#4B5563",
              height: "1.5rem",
              borderBottomLeftRadius: "0.5rem",
              marginTop: "1rem",
            }}></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Our Journey Timeline */}
      <div style={{
        padding: "3rem 1rem",
        backgroundColor: "white",
      }}>
        <motion.h2
          style={{
            fontSize: "2.25rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our Journey
        </motion.h2>

        <div style={{
          position: "relative",
          overflowX: "auto",
          paddingBottom: "2rem",
        }}>
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            position: "relative",
            borderTop: "2px solid #d1d5db",
            minWidth: "max-content",
          }}>
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: "220px",
                  margin: "0 1rem",
                  paddingTop: "1rem",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveTimelineItem(index)}
                onMouseLeave={() => setActiveTimelineItem(null)}
              >
                {/* Icon */}
                <div style={{
                  position: "relative",
                  zIndex: 10,
                  backgroundColor: "white",
                  padding: "0.5rem",
                  border: "4px solid #fc7927",
                  borderRadius: "9999px",
                  marginTop: "-1.5rem",
                  transform: activeTimelineItem === index ? "scale(1.2)" : "scale(1)",
                  transition: "all 0.3s ease",
                }}>
                  <FaClock style={{
                    color: "#fc7927",
                    fontSize: "1.25rem",
                  }} />
                </div>

                {/* Year & Title */}
                <div style={{
                  textAlign: "center",
                  marginTop: "1rem",
                }}>
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                  }}>
                    {item.year}
                  </h3>
                  <p style={{
                    color: "#3182ce",
                    fontWeight: 500,
                  }}>
                    {item.title}
                  </p>
                </div>

                {/* Card */}
                <motion.div
                  style={{
                    backgroundColor: "#ffffff",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    border: "1px solid #e5e7eb",
                    marginTop: "1rem",
                    padding: "1rem",
                    borderRadius: "1rem",
                    textAlign: "center",
                    maxWidth: "250px",
                    height: "250px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  whileHover={{ 
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
                    y: -10
                  }}
                >
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "0.375rem",
                      marginBottom: "0.75rem",
                    }}
                    whileHover={{ scale: 1.05 }}
                  />
                  <p style={{
                    color: "#4a4a4a",
                    fontSize: "0.875rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                  }}>
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Who We Are & What We Do */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        padding: "5rem 1rem",
        gap: "2.5rem",
        width: "100%",
        maxWidth: "1280px",
        margin: "0 auto",
      }}>
        {/* Who We Are */}
        <motion.div
          style={{
            backgroundColor: "white",
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
            borderRadius: "1rem",
            padding: "2rem",
            flex: 1,
          }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 15px 25px rgba(0, 0, 0, 0.15)"
          }}
        >
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1rem",
          }}>
            <div style={{
              backgroundColor: "#fde68a",
              color: "#f97316",
              padding: "0.75rem",
              borderRadius: "9999px",
              transition: "all 0.3s ease",
            }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "1.5rem", height: "1.5rem" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-3-3h-4m-4 0H5a3 3 0 00-3 3v2h5m4 0v-6m0 0a4 4 0 00-8 0v6a4 4 0 008 0z"
                />
              </svg>
            </div>
            <h2 style={{
              fontSize: "1.5rem",
              fontWeight: 600,
            }}>
              Who We Are
            </h2>
          </div>
          <p style={{
            color: "#4a4a4a",
            lineHeight: "1.75",
          }}>
       Ulinkit is a premier global B2B marketplace, designed to simplify and accelerate the buying and selling process for businesses worldwide. As a leader in the international trade space, we empower companies of all sizes to grow, connect, and thrive in today’s competitive landscape.

          </p>
        </motion.div>

        {/* What We Do */}
        <motion.div
          style={{
            backgroundColor: "white",
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
            borderRadius: "1rem",
            padding: "2rem",
            flex: 1,
          }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 15px 25px rgba(0, 0, 0, 0.15)"
          }}
        >
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1rem",
          }}>
            <div style={{
              color: "#3b82f6",
              padding: "0.75rem",
              borderRadius: "9999px",
              transition: "all 0.3s ease",
            }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "1.5rem", height: "1.5rem" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h2l1 2h6l1-2h2M9 21V9h6v12M9 3h6v6H9V3z"
                />
              </svg>
            </div>
            <h2 style={{
              fontSize: "1.5rem",
              fontWeight: 600,
            }}>
              What We Do
            </h2>
          </div>
          <p style={{
            color: "#4a4a4a",
            lineHeight: "1.75",
          }}>
           We streamline business procurement by bridging international suppliers with buyers across the Global Marketplace. Ulinkit empowers both sellers and buyers through personalized product solutions and intelligent tools designed to boost efficiency, productivity, and growth.

          </p>
        </motion.div>
      </div>

      {/* Our Vision */}
      <div style={{
        position: "relative",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1.5rem",
        color: "white",
        backgroundImage: `url("/Images/Vision3.avif")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        {/* Gradient Overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4))",
          zIndex: 0,
          backdropFilter: "blur(4px)",
        }}></div>

        {/* Content */}
        <motion.div
          style={{
            position: "relative",
            zIndex: 10,
            maxWidth: "48rem",
            textAlign: "center",
            padding: "2rem",
            borderRadius: "0.75rem",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{
            fontSize: "2.25rem",
            fontWeight: 800,
            marginBottom: "1.5rem",
            background: "linear-gradient(to right, #3770bf, #468ff6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}>
            Our Vision
          </h2>
          <p style={{
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
            color: "#e5e7eb",
          }}>
            Our mission is to revolutionize the B2B ecosystem across the Global MarketPlace region by building a unified platform that effortlessly connects global buyers and sellers. We aim to simplify procurement, enabling businesses to trade with confidence, reduce costs, and save valuable time through a smarter, more efficient purchasing experience.

          </p>
        </motion.div>
      </div>

     {/* Chairman Quote */}
     <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: isMobile ? "column" : "row", // Adjust layout based on screen size
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1rem",
        gap: "2.5rem",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      {/* Image */}
      <motion.div
        style={{
          width: isMobile ? "80%" : "40%", // Increase the image width on mobile
          overflow: "hidden",
          borderRadius: "0.5rem",
          boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "center",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        <img
          src="/Images/2.webp"
          alt="Warehouse"
          style={{
            width: "100%",
            height: "auto", // Keep the aspect ratio intact
            objectFit: "cover",
            borderRadius: "0.5rem",
          }}
        />
      </motion.div>

      {/* Text */}
      <motion.div
        style={{
          width: "100%",
          textAlign: "center",
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p style={{
          color: "#fc7927",
          fontWeight: 600,
          marginBottom: "0.5rem",
        }}>
          Mr Dhiraj Gupta, Chairman of Ulinkit
        </p>
        <h2 style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#1f2937",
          lineHeight: "1.625",
        }}>
          "Ulinkit is all about opportunities. We are investing in the future
          of our people. The brilliant ecosystem approach will create layers
          of growth that build on top of the existing economic structures."
        </h2>
      </motion.div>
    </div>


      {/* Why Ulinkit */}
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "3.5rem 1.5rem",
          textAlign: "center",
          backgroundColor: "#f8fafc",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          style={{
            fontSize: "2.25rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "#fc7927",
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Why Ulinkit?
        </motion.h1>

        <motion.p
          style={{
            fontSize: "1.5rem",
            color: "#1f2937",
            maxWidth: "42rem",
            marginBottom: "0.5rem",
          }}
          whileHover={{ scale: 1.02 }}
        >
          We are the Global MarketPlace region's leading and most extensive B2B marketplace
        </motion.p>

        <motion.h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "#111827",
            marginBottom: "0.5rem",
          }}
          whileHover={{ scale: 1.02 }}
        >
          Everything you need in one B2B integrated platform. It's easier with Ulinkit
        </motion.h2>

        <motion.p
          style={{
            fontSize: "1rem",
            color: "#374151",
            maxWidth: "36rem",
            marginBottom: "1.5rem",
          }}
          whileHover={{ scale: 1.01 }}
        >
          We are committed to resolving the pain points encountered in
          procurement and supply chain operations.
        </motion.p>

        <motion.button
          style={{
            backgroundColor: "#fc7927",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.375rem",
            boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
            cursor: "pointer",
            border: "none",
            fontSize: "1rem",
            fontWeight: 600,
            whiteSpace: "nowrap",
          }}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: "#fb923c",
            boxShadow: "0 12px 20px rgba(0,0,0,0.15)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </motion.div>

      {/* Featured Companies */}
      <div style={{ 
        padding: "2.5rem 1rem",
        backgroundColor: "white",
      }}>
        <motion.h1
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: 600,
            marginBottom: "1.5rem",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          As Featured In
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Slider {...sliderSettings}>
            {companies.map((company, index) => (
              <div key={index} style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 1rem",
              }}>
                <motion.div
                  style={{
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    height: "6rem",
                    width: "10rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                  }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.15)"
                  }}
                >
                  <img
                    src={company.logo}
                    alt={`Logo of ${company.name}`}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                      filter: "grayscale(100%)",
                      opacity: 0.7,
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = "grayscale(0%)";
                      e.currentTarget.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = "grayscale(100%)";
                      e.currentTarget.style.opacity = "0.7";
                    }}
                  />
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </>
  );
};

export default About;