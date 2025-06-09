import React, { Fragment, useState, useEffect } from 'react';
import { slider } from '../components/Schemas/images';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Slider from '../components/Slider';
import InfSlider from '../components/InfSlider';
import CategorySection from '../components/CategorySection';
import Carousel from '../components/Carousel';
import CarouselTwo from '../components/CarouselTwo';
import CarouselThree from '../components/CarouselThree';
import CarouselFour from '../components/CarouselFour';
import Square from '../components/UI_Components/Square';
import SquareTwo from '../components/UI_Components/SquareTwo';
import Popup from '../components/Popup';
import ProductCarousel from '../components/ProductCarousel';
const sampleProducts = [
  {
    productId: '1',
    productName: 'CILICAnT Freshcant Moisture Absorber Gel|Dehumidifier|Moisture Absorber For 2 Bhk & 3 Bhk Rooms|Protect Against Moisture, Mold, Fungus & Odor|Refresh Every Place|Lavender Pack Of 12',
    minOrderQuant: 1,
    images: [{ imageUrl: 'https://res.cloudinary.com/dlugyopzh/image/upload/v1749292143/81EV4_t3qGL._AC_SL1500__oyozbg.jpg' }],
    unitPrice: 40,
    sellPrice: 35,
    currencyname: 'USD',
  },
  {
    productId: '2',
    productName: 'freshcant Compact Moisture Absorber By CILICAnT Refresh Every Place, Dehumidifier for Wardrobe/Closets, Storage Compartment, Kitchen, Cupboard, Almirah, Shoe Rack, Bathroom, (Rose pack of 12)',
    minOrderQuant: 2,
    images: [{ imageUrl: 'https://res.cloudinary.com/dlugyopzh/image/upload/v1749292143/81LYJKD_7RL._AC_SL1500__crex2l.jpg' }],
    unitPrice: 40,
    sellPrice: 34,
    currencyname: 'USD',
  },
  {
    productId: '3',
    productName: 'CILICAnT Absorpak Desiccant, Medium Size - 200 Pouches (Approx. 5g Each) for Household, Leather, Storage, Electronics - Moisture Absorbers',
    minOrderQuant: 1,
    images: [{ imageUrl: 'https://res.cloudinary.com/dlugyopzh/image/upload/v1749292142/81oA_xc5RhL._AC_SL1500__mzvtey.jpg' }],
    unitPrice: 30,
    sellPrice: 27,
    currencyname: 'USD',
  },
  {
    productId: '4',
    productName: 'freshcant CILICAnT compact moisture absorber- Refresh Every Place - Fragrance Rose Wardrobe/Closets, Storage Compartment, Kitchen Cabinets, Cupboard, Almirah, Shoe Rack, Bathroom (Pack of 12)',
    minOrderQuant: 2,
    images: [{ imageUrl: 'https://res.cloudinary.com/dlugyopzh/image/upload/v1749292142/81SaZUrY_iL._AC_SL1500__izhkza.jpg' }],
    unitPrice: 40,
    sellPrice: 36,
    currencyname: 'USD',
  },
  {
    productId: '5',
    productName: 'DAVSORB Moisture Absorber - Medium - (Approx 50 gm x 5 Packets)',
    minOrderQuant: 1,
    images: [{ imageUrl: 'https://res.cloudinary.com/dlugyopzh/image/upload/v1749292142/61gqd_C_0DL._AC_SL1000__jegcjx.jpg' }],
    unitPrice: 25,
    sellPrice: 22,
    currencyname: 'USD',
  },
  {
    productId: '6',
    productName: 'MedSea Organic Apple Cider Vinegar – Raw, Unfiltered With The Mother – 500ml Bottle – Natural Detox & Wellness Tonic',
    minOrderQuant: 2,
    images: [{ imageUrl: 'https://res.cloudinary.com/dlugyopzh/image/upload/v1749292141/WhatsApp_Image_2025-06-03_at_20.53.19_fw9m2a.jpg' }],
    unitPrice: 10,
    sellPrice: 8,
    currencyname: 'USD',
  },
  {
    productId: '7',
    productName: 'CILICAnT freshcant Moisture Absorber | Dehumidifier for Office and Workplace | Protect Against Moisture, Mold, Fungus & Odor | Refresh Every Place | Lavender Pack of 12',
    minOrderQuant: 1,
    images: [{ imageUrl: 'https://res.cloudinary.com/dlugyopzh/image/upload/v1749291727/81EV4_t3qGL._AC_SL1500__m6zftw.jpg' }],
    unitPrice: 40,
    sellPrice: 36,
    currencyname: 'USD',
  },
  {
    productId: '8',
    productName: 'DAVSORB Moisture Absorber - Medium - (Approx 50 gm x 5 Packets)',
    minOrderQuant: 2,
    images: [{ imageUrl: 'https://res.cloudinary.com/dlugyopzh/image/upload/v1749292142/61gqd_C_0DL._AC_SL1000__jegcjx.jpg' }],
    unitPrice: 25,
    sellPrice: 22,
    currencyname: 'USD',
  },
];


const Home = () => {

  const navigate = useNavigate();
  const Banner1 = slider[10];
  const DiscountCoupne = slider[8];
  const Banners = slider[7];
  const summer = slider[11];
  const { totalItems, totalItemsTwo, totalItemsThree, totalItemsFour } = useSelector((state) => state.products);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1500);

    return () => clearTimeout(timer); 
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const ShowAll = () => {
    navigate('/search-results')
  }

  return (
    <Fragment>

      <Helmet>
        <title>Ulinkit - Your Global Marketplace for Products and Services</title>
        <meta name="description" content="Discover a world of products and services on Ulinkit. Shop from various categories, explore deals, and enjoy a seamless shopping experience." />
        <link rel="canonical" href="https://www.ulinkit.com/" />
      </Helmet>

      <Slider />

      <div className="flexcol wh home">
        <p className="heading3 wh">Categories</p>
        <CategorySection />
        <div className='discount-pages'>
          <img className='banner-width' src={summer} alt='summer' />
        </div>

        <div className='best-deals-product'>
          <p className="heading3 wh">Consumer Electronics ({totalItems} items)</p>
          <p className='show-all-product' onClick={ShowAll}>Show All</p>
        </div>

        <Carousel />

        <Square />

        <p className="heading3 wh">Food And Beverages ({totalItemsTwo} items)</p>

        <CarouselTwo />

        <div className='discount-pages'>
          <img className='banner-width' src={Banner1} alt='banner' />
        </div>
        <p className="heading3 wh">Fashion And Accessories ({totalItemsThree} items)</p>

        <CarouselThree />

        <div className='discount-pages'>
          <img className='banner-width' src={DiscountCoupne} alt='banner' />
        </div>

        <SquareTwo />

        <p className="heading3 wh">Home and  Kitchen  ({totalItemsFour} items)</p>

        <CarouselFour />
        <ProductCarousel products={sampleProducts}/>

        <div className='discount-pages'>
          <img className='banner-width' src={Banners} alt="banner" />
        </div>
        <p className="heading3 wh">Top Brands</p>
        <InfSlider />
      </div>

      {showPopup && <Popup onClose={closePopup} />}

    </Fragment>
  )
}

export default Home