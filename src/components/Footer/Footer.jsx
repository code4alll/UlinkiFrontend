import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './footer.css';
import whatsapp from '../../assets/whatsappicon.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import visa from '../../assets/visa.png';
import mastercard from '../../assets/mastercard.png';
import paypal from '../../assets/paypal.png';
import upi from '../../assets/upi.png';
import netbanking from '../../assets/netbanking.png';



const Footer = () => {

  //clicks
  const [isClickedFooter, setIsClickedFooter] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newsEmail, setNewsEmail] = useState('');

  const handleClickFooter = (event) => {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    // Simulate an asynchronous operation (like an API call)
    setTimeout(() => {
      setIsClickedFooter(prevState => !prevState);
      setIsSubmitting(false);
      setNewsEmail('');
    }, 1500);
  };

  const closepopup = (event) => {
    event.preventDefault();
    setIsClickedFooter(prevState => !prevState);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (isClickedFooter) {
        setIsClickedFooter(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isClickedFooter]);





  return (
    <Fragment>
      <div className="supContFooter">
        <article className="footer-section">
          <section className="footer">
            <h1 className="footer-title">Buy On Ulinkit</h1>
            <div className="item-list">
              <Link to="/source-on-ulinkit" className="itemLink">Source on Ulinkit</Link>
              <Link to="/payment-method" className="itemLink">Payment Methods</Link>
              <Link to="/all-categories" className="itemLink">All Categories</Link>
              <Link to="/rfqmarketplace" className="itemLink">RFQ Marketplace</Link>
            </div>
          </section>
          <section className="footer">
            <h1 className="footer-title">Sell on Ulinkit</h1>
            <div className="item-list">
              <Link to="/become-a-seller" className="itemLink">Start Selling</Link>
              <Link to="/webinar" className="itemLink">Webinar & E-Books</Link>
              <Link to="/logistics" className="itemLink">Ulink Logistics</Link>
              <Link to="/product-List-Policy" className="itemLink">Product Listing Policy</Link>
            </div>
          </section>
          <section className="footer">
            <h1 className="footer-title">About Ulinkit</h1>
            <div className="item-list">
              <Link to="/about-Us" className="itemLink">About Us</Link>
              <Link to="/press" className="itemLink">Press</Link>
              <Link to="/careers" className="itemLink">Careers</Link>
              <Link to="/blog" className="itemLink">Blog</Link>
            </div>
          </section>
          <section className="footer">
            <h1 className="footer-title">Help & Contact</h1>
            <div className="item-list">
              <Link to="/faq" className="itemLink">Help</Link>
              <Link to="/contact-us" className="itemLink">Contact Us</Link>
              <Link to="/commission-structure" className="itemLink">Commission Structure</Link>
              <Link to="/guidelines" className="itemLink">Guidelines</Link>
            </div>
          </section>
          <section className="footer">
            <h1 className="footer-title">Ulink Services</h1>
            <div className="item-list">
              <Link to="/enterprise" className="itemLink">Enterprise</Link>
             
            </div>
          </section>
          <section className="footer">
            <h1 className="footer-title">Procurement</h1>
            <div className="item-list">
              <Link to="/payment-method" className="itemLink">Payment Methods</Link>
              <Link to="/buy-Back-Program" className="itemLink">Buy Back Program</Link>
            </div>
          </section>
        </article>

        <div className="footer-nav">
          <section className="fsecone">
            <h1 className="footer-title2">Stay Updated</h1>
            <form className={`flex subscribe ${isClickedFooter ? 'clicked' : ''}`} onSubmit={handleClickFooter}>
              <input type="text" name="email_updates" className="box flex" placeholder="Enter your email to get updates" value={newsEmail} onChange={(e) => setNewsEmail(e.target.value)} required />

              <button type="submit" className="btn2 box flex" style={{ width: 'fit-content' }} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Subscribe'}
              </button>

              {isClickedFooter && (
                <div className="footer-popup footer-subscribe">
                  <div className="wrapper-footer">
                    <p className='thankyoutext'>Thank you !</p>
                    <div className="flexcol wh">
                      <p>Thanks for subscribing to our news letter. </p>
                      <p>You should receive a confirmation email soon. </p>
                    </div>
                    <button type="button" onClick={closepopup} className="go-home"> Close </button>
                  </div>
                </div>
              )}
            </form>
          </section>

          <article className="supfsectwo">
            <section className="fsectwo">
              <h1 className="footer-title2">Connect With Us</h1>
              <div className="flex" style={{ gap: '10px' }}>
                <img src={whatsapp} style={{ width: '30px' }} alt="whatsapp" />
                <div className="flexcol" style={{ gap: '2px' }}>
                  <p className="number">+91 8750518844</p>
                  <p className="whtext">Chat On WhatsApp</p>
                </div>
              </div>
            </section>

            <section className="fsectwo">
              <h1 className="footer-title2">Follow Us On</h1>
              <div className="flex" style={{ gap: '20px' }}>
                <a href="https://www.facebook.com/profile.php?id=61559396105110" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/u_linkitus?igsh=MWMyaGV4MWN0ejFtbA%3D%3D" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon />
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                  <YouTubeIcon />
                </a>
                <a href="https://www.linkedin.com/in/ulink-it-88522b308/" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                </a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                  <XIcon />
                </a>
              </div>
            </section>
          </article>
        </div>
        <div className="footerfooter">
          <div className="ffone">
            <img src={mastercard} alt="mastercard" />
            <img src={visa} alt="visa" />
            <img src={paypal} alt="paypal" />
            <img src={upi} alt="upi" />
            <img src={netbanking} alt="netbanking" />
          </div>
          <div className="ffone">
            <Link to="/privacy-policy">Privacy policy</Link>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
            <Link to="/return-policy">Return and Refund policy</Link>
          </div>
          <div className="fftwo">
            <Link>© 2024 ulinkit.com. All rights reserved. U-Link outsourcing pvt. ltd. - Delhi, Uttam Nagar, Milap Nagar, School Road</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;