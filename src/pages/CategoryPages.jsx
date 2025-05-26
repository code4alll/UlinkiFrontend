import React, { Fragment, lazy, Suspense, useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate, useParams } from "react-router-dom";
import ImageImport from "../components/Schemas/ImageImport";
const BrandCarousel = lazy(() => import("../components/BrandCarousel"));
import Sliders from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/productSlice";
import ProductCard from "../components/ProductCard";
import defaulImg from "../assets/default.jpg";
import { Helmet } from "react-helmet-async";

const CategoryPages = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const [productShow, setProductShow] = useState([]);

  //  Electronic Object Image
  const sliderItems = [
    { image: ImageImport.Mobile, title: "Mobile Phone" },
    { image: ImageImport.Camera, title: "Camera" },
    { image: ImageImport.HeadPhone, title: "Audio & Studio" },
    { image: ImageImport.Game, title: "Gaming" },
    { image: ImageImport.Laptop, title: "Laptop" },
    { image: ImageImport.Powerbank, title: "Powerbank" },
    { image: ImageImport.Router, title: "Network" },
    { image: ImageImport.TV, title: "Television" },
  ];

  //  Stationary Object Image
  const stationaryItems = [
    { image: ImageImport.GeneralSuppliers, name: "General Suppliers" },
    { image: ImageImport.Files, name: "Files & Folders" },
    { image: ImageImport.Art, name: "Art & Crafts" },
    { image: ImageImport.Tapes, name: "Tapes & Adhesives" },
    { image: ImageImport.Writing, name: "Writing Instruments" },
    { image: ImageImport.Board, name: "Boards & Easels" },
    { image: ImageImport.Desk, name: "Desk & Supplies" },
    { image: ImageImport.WritingMaterial, name: "Writing Material" },
  ];
  //  product show
  const dispatch = useDispatch();
  // const { products } = useSelector((state) => state.products);
  const {
    products = [],
    status,
    error,
  } = useSelector((state) => state.products);
  //pagination
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(15);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts({ page, size }));
    }
  }, [dispatch, page, size, status]);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  const NextArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          position: "absolute",
          top: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          borderRadius: "50%",
          cursor: "pointer",
          filter: "drop-shadow(5px 5px 5px gray)",
          width: "40px",
          height: "40px",
          zIndex: "999",
          right: "0%",
        }}
        onClick={onClick}
      >
        <ChevronRightIcon />
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          position: "absolute",
          top: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          borderRadius: "50%",
          cursor: "pointer",
          filter: "drop-shadow(5px 5px 5px gray)",
          width: "40px",
          height: "40px",
          zIndex: "999",
        }}
        onClick={onClick}
      >
        <ChevronLeftIcon />
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 7,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 460,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  //  conditionaly render the page
  const renderPage = () => {
    <Helmet>
      <title>Category Pages | Ulinkit - Secure Online Shopping Platform</title>
      <meta
        name="title"
        content="Explore Top Categories: Electronics, Fashion, Home, Beauty & More"
      />
      <link rel="canonical" href="https://www.ulinkit.com/category-pages" />
    </Helmet>;
    const ShowAll = () => {
      navigate("/search-results");
    };
    const handleFilterFashion = () => {
      const filterfashion = products.filter(
        (product) => product.selectedSupOption === "FashionAndAccessories",
      );
      navigate("/search-results", {
        state: {
          selectedSupOption: "FashionAndAccessories",
          products: filterfashion,
        },
      });
    };
    const handleFilterElectronic = () => {
      const filterElectronic = products.filter(
        (product) => product.selectedSupOption === "ConsumerElectronics",
      );
      navigate("/search-results", {
        state: {
          selectedSupOption: "ConsumerElectronics",
          products: filterElectronic,
        },
      });
    };
    switch (category) {
      case "trending":
        return (
          <div className="discount-pages">
            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.Discount}
                alt="discount"
              />
            </div>
            <div className="best-deals-product">
              <div className="best-deals " onClick={handleFilterFashion}>
                <img
                  className="top-deal-1"
                  src={ImageImport.FashionBeauty}
                  alt="fashionaccessories"
                />
              </div>
              <div className="best-deals " onClick={handleFilterElectronic}>
                <img
                  className="top-deal-1"
                  src={ImageImport.ElecronicsDeals}
                  alt="ConsumerElectronics"
                />
              </div>
            </div>
            <div className="all-offers-deals">
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.Electronic}
                  alt="electronic"
                />
                {/*  img are show the main condition only the main container are show in the pages are the main  */}
                <div className="">
                  <h4 className="offer-title">Electronic Acceseries</h4>
                </div>
              </div>
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.Stationary}
                  alt="stationary"
                />
                <div className="">
                  <h4 className="offer-title">Office Stationary</h4>
                </div>
              </div>
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.FoodBeverage}
                  alt="foodbeverages"
                />
                <div className="">
                  <h4 className="offer-title">Food & Beverages</h4>
                </div>
              </div>
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.PersonalCare}
                  alt="personalcare"
                />
                <div className="">
                  <h4 className="offer-title">Personal Care</h4>
                </div>
              </div>
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.HomeKitchen}
                  alt="homekichen"
                />
                <div className="">
                  <h4 className="offer-title">Home & Kitchen</h4>
                </div>
              </div>
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.BeautyProduct}
                  alt="beautyproduct"
                />
                <div className="">
                  <h4 className="offer-title">Beauty & Cosmetic</h4>
                </div>
              </div>
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.Fashion}
                  alt="fashion"
                />
                <div className="">
                  <h4 className="offer-title">Fashion Acceseries</h4>
                </div>
              </div>
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.Electronic}
                  alt="electronic"
                />
                <div className="">
                  <h4 className="offer-title">Electronic Acceseries</h4>
                </div>
              </div>
            </div>
            <div className="best-deals-product">
              <div className="">
                <h3>Unbetable Price!</h3>
              </div>
              <div className="">
                <h4 className="show-all-product" onClick={ShowAll}>
                  Show All
                </h4>
              </div>
            </div>
            <div className="show-all">
              {products.map((product, index) => (
                <a
                  className="show-img-detail"
                  key={index}
                  href={`/product-details/${product.productId}`}
                >
                  <img
                    className="product-img-size"
                    src={
                      product.images && product.images.length > 0
                        ? product.images[0].imageUrl
                        : defaulImg
                    }
                    alt="img"
                  />
                  <div className="product-detail-info">
                    <p className="product-title">
                      {truncateText(product.productName, 20)}{" "}
                    </p>
                    <p className="product-price">
                      {product.currencySymbol}
                      {parseFloat(product.sellPrice).toFixed(2)}/ piece incl
                      value
                    </p>
                    <div className="flex" style={{ gap: "10px" }}>
                      <p className="product-discount">
                        {product.currencySymbol}
                        {parseFloat(product.unitPrice).toFixed(2)}
                      </p>
                      <span className="discount-percentage">
                        {(
                          ((product.unitPrice - product.sellPrice) /
                            product.unitPrice) *
                          100
                        ).toFixed(2)}
                        % OFF
                      </span>
                    </div>
                    <p className="product-quantity">
                      Min Order: {product.minOrderQuant} peace
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        );
      // Electronics Category page
      case "electronic":
        //  coditionly rend  the electronic category item
        return (
          <div className="discount-pages">
            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.RealmiBanner}
                alt="ralmibanner"
              />
            </div>
            <div className="best-deals-product">
              <div className="best-deals">
                <img className="top-deal-1" src={ImageImport.Boat} alt="boat" />
              </div>
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.Sumsung}
                  alt="sumsung"
                />
              </div>
            </div>
            <div className="best-deals-product">
              <div className="">
                <h3>Browse By Category</h3>
              </div>
            </div>
            <div className="category-section">
              <Sliders {...settings}>
                {sliderItems.map((category, index) => (
                  <div key={index} className="category-image">
                    <div className="category-image-sub">
                      <img
                        className="img-aspect"
                        src={category.image}
                        alt={category.name}
                      />
                      <div className="cate-title">
                        <p className="category-img-title">{category.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Sliders>
            </div>
            <img
              className="banner-width"
              src={ImageImport.Tclbanner}
              alt="tclbanner"
            />
            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter(
                      (product) =>
                        product.selectedSupOption === "ConsumerElectronics",
                    )
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>
            <img className="banner-width" src={ImageImport.Sumsungbanner}></img>
            <div className="best-deals-product">
              <div className="">
                <h3>Shop By Brand</h3>
              </div>
              <div className="">
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>
            <div className="product-slider-cont product-width">
              <BrandCarousel />
            </div>
            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.MobileBanner}
                alt="mobilebanner"
              />
            </div>
            <div className="best-deals-product">
              <div className="flex">
                <h3>Next Day Delivery</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>

              <div className="">
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>
            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter(
                      (product) =>
                        product.selectedSupOption === "ConsumerElectronics",
                    )
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>
            <div className="best-deals-product">
              <div className="flex">
                <h3>Best Selling Mobile Acceseries</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>

              <div className="">
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>
            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter(
                      (product) =>
                        product.selectedSupOption === "ConsumereElectronics",
                    )
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>
            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.OldItemBanner}
                alt="olditembanner"
              />
            </div>
          </div>
        );
      // Statinary page show here
      case "stationary":
        return (
          <div className="discount-pages">
            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.StationaryBanner}
                alt="stationarybanner"
              />
            </div>
            <div className="all-offers-deals">
              <div className="offer-1 printer">
                <img
                  className="offer-img-width"
                  src={ImageImport.Printer}
                  alt="printer"
                />
                <div className="">
                  <h4 className="offer-title">Printer, Scanner</h4>
                </div>
              </div>
              <div className="offer-1 tonorlnk">
                <img
                  className="offer-img-width"
                  src={ImageImport.TonorsLnk}
                  alt="tonorslink"
                />
                <div className="">
                  <h4 className="offer-title">Tonors & Lnk</h4>
                </div>
              </div>
              <div className="offer-1 paper ">
                <img
                  className="offer-img-width"
                  src={ImageImport.Paper}
                  alt="paper"
                />
                <div className="">
                  <h4 className="offer-title">Printing Paper</h4>
                </div>
              </div>
              <div className="offer-1 office">
                <img
                  className="offer-img-width"
                  src={ImageImport.OfficeInsrument}
                  alt="officeInsrument"
                />
                <div className="">
                  <h4 className="offer-title">Office Machine</h4>
                </div>
              </div>
            </div>
            <div className="best-deals-product">
              <div className="">
                <h3>Browse By Category</h3>
              </div>
            </div>
            <div className="category-section">
              <Sliders {...settings}>
                {stationaryItems.map((category, index) => (
                  <div key={index} className="category-image">
                    <div className="category-image-sub">
                      <img
                        className="img-aspect"
                        src={category.image}
                        alt={category.name}
                      />
                      <div className="cate-title">
                        <p className="category-img-title">{category.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Sliders>
            </div>
            <div className="best-deals-product">
              <div className="">
                <h3>Shop By Brand</h3>
              </div>
              <div className="">
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>
            <div className="product-slider-cont product-width">
              <BrandCarousel />
            </div>

            <div className="best-deals-product">
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.Slider1}
                  alt="slider1"
                />
              </div>
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.Sumsung}
                  alt="sumsung"
                />
              </div>
            </div>
            <div className="best-deals-product">
              <div className="flex">
                <h3>Best Selling Mobile Acceseries</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div className="">
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>
            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter(
                      (product) =>
                        product.selectedSupOption === "OfficeAndStationery",
                    )
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>
            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter(
                      (product) =>
                        product.selectedSupOption === "OfficeAndStationery",
                    )
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>
          </div>
        );
      case "food":
        return (
          <div className="discount-pages">
            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.FoodBanner}
                alt="foodbanner"
              />
            </div>
            <div className="best-deals-product">
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.Cornflakeses}
                  alt="cornflakeses"
                />
              </div>
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.Biscuit}
                  alt="biscuit"
                />
              </div>
            </div>

            <div className="best-deals-product">
              <div className="flex">
                <h3>Best Selling Mobile Acceseries</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div className="">
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>
            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter(
                      (product) =>
                        product.selectedSupOption === "OfficeAndStationery",
                    )
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>
            <div className="all-offers-deals">
              <div className="offer-1 printer">
                <img
                  className="offer-img-width"
                  src={ImageImport.Chocklates}
                  alt="chocklates"
                />
                <div className="">
                  <h4 className="offer-title">Chocklates</h4>
                </div>
              </div>
              <div className="offer-1 tonorlnk">
                <img
                  className="offer-img-width"
                  src={ImageImport.Pantry}
                  alt="pantry"
                />
                <div className="">
                  <h4 className="offer-title">Pantry</h4>
                </div>
              </div>
              <div className="offer-1 paper ">
                <img
                  className="offer-img-width"
                  src={ImageImport.Milk}
                  alt="milk"
                />
                <div className="">
                  <h4 className="offer-title">Milk</h4>
                </div>
              </div>
              <div className="offer-1 office">
                <img
                  className="offer-img-width"
                  src={ImageImport.Beverages}
                  alt="beverages"
                />
                <div className="">
                  <h4 className="offer-title">Beverages</h4>
                </div>
              </div>
            </div>
            <div className="best-deals-product">
              <div className="flex">
                <h3>Best Selling Mobile Acceseries</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div className="">
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>
            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter(
                      (product) =>
                        product.selectedSupOption === "OfficeAndStationery",
                    )
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>

            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.RealJuice}
                alt="RealJuice"
              />
            </div>
          </div>
        );
      case "personalcare":
        return (
          <div className="discount-pages">
            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.FoodBanner}
                alt="foodbanner"
              />
            </div>

            <div className="best-deals-product">
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.Cornflakeses}
                  alt="cornflakeses"
                />
              </div>
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.Biscuit}
                  alt="biscuit"
                />
              </div>
            </div>

            <div className="best-deals-product">
              <div className="flex">
                <h3>Top Personal Care Products</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div>
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>

            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter(
                      (product) =>
                        product.selectedSupOption === "OfficeAndStationery",
                    )
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>

            <div className="all-offers-deals">
              <div className="offer-1 printer">
                <img
                  className="offer-img-width"
                  src={ImageImport.Chocklates}
                  alt="skin-care"
                />
                <div>
                  <h4 className="offer-title">Skin Care</h4>
                </div>
              </div>
              <div className="offer-1 tonorlnk">
                <img
                  className="offer-img-width"
                  src={ImageImport.Pantry}
                  alt="hair-care"
                />
                <div>
                  <h4 className="offer-title">Hair Care</h4>
                </div>
              </div>
              <div className="offer-1 paper ">
                <img
                  className="offer-img-width"
                  src={ImageImport.Milk}
                  alt="oral-care"
                />
                <div>
                  <h4 className="offer-title">Oral Care</h4>
                </div>
              </div>
              <div className="offer-1 office">
                <img
                  className="offer-img-width"
                  src={ImageImport.Beverages}
                  alt="fragrances"
                />
                <div>
                  <h4 className="offer-title">Fragrances</h4>
                </div>
              </div>
            </div>

            <div className="best-deals-product">
              <div className="flex">
                <h3>Top Personal Care Products</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div>
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>

            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter(
                      (product) =>
                        product.selectedSupOption === "OfficeAndStationery",
                    )
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>

            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.RealJuice}
                alt="RealJuice"
              />
            </div>
          </div>
        );

      case "kitchen":
        return (
          <div className="discount-pages">
            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.FoodBanner}
                alt="foodbanner"
              />
            </div>

            <div className="best-deals-product">
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.Cornflakeses}
                  alt="cornflakeses"
                />
              </div>
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.Biscuit}
                  alt="biscuit"
                />
              </div>
            </div>

            <div className="best-deals-product">
              <div className="flex">
                <h3>Top Kitchen Essentials</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div className="">
                <h4 className="show-all-product">Show All Kitchen Items</h4>
              </div>
            </div>

            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter(
                      (product) => product.selectedSupOption === "Kitchen",
                    )
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>

            <div className="all-offers-deals">
              <div className="offer-1 printer">
                <img
                  className="offer-img-width"
                  src={ImageImport.Chocklates}
                  alt="chocklates"
                />
                <div className="">
                  <h4 className="offer-title">Cookware Sets</h4>
                </div>
              </div>
              <div className="offer-1 tonorlnk">
                <img
                  className="offer-img-width"
                  src={ImageImport.Pantry}
                  alt="pantry"
                />
                <div className="">
                  <h4 className="offer-title">Kitchen Storage</h4>
                </div>
              </div>
              <div className="offer-1 paper">
                <img
                  className="offer-img-width"
                  src={ImageImport.Milk}
                  alt="milk"
                />
                <div className="">
                  <h4 className="offer-title">Cooking Ingredients</h4>
                </div>
              </div>
              <div className="offer-1 office">
                <img
                  className="offer-img-width"
                  src={ImageImport.Beverages}
                  alt="beverages"
                />
                <div className="">
                  <h4 className="offer-title">Beverage Prep</h4>
                </div>
              </div>
            </div>

            <div className="best-deals-product">
              <div className="flex">
                <h3>Must-Have Kitchen Products</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div className="">
                <h4 className="show-all-product">Explore All Essentials</h4>
              </div>
            </div>

            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter(
                      (product) => product.selectedSupOption === "Kitchen",
                    )
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>

            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.RealJuice}
                alt="RealJuice"
              />
            </div>
          </div>
        );

      case "beauty":
        return (
          <div className="discount-pages">
            {/* Main Beauty Banner */}
            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.BeautyBanner}
                alt="beauty-banner"
              />
            </div>

            {/* Highlighted Beauty Products */}
            <div className="best-deals-product">
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.Lipstick}
                  alt="lipstick"
                />
              </div>
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.FaceCream}
                  alt="face-cream"
                />
              </div>
            </div>

            {/* Best Selling Beauty Products Section */}
            <div className="best-deals-product">
              <div className="flex">
                <h3>Best Selling Beauty Products</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div className="">
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>

            {/* Product Slider - Filter by Beauty Category */}
            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter((product) => product.selectedSupOption === "Beauty")
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>

            {/* Beauty Offer Categories */}
            <div className="all-offers-deals">
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.MakeupKit}
                  alt="makeup-kit"
                />
                <div>
                  <h4 className="offer-title">Makeup Kits</h4>
                </div>
              </div>
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.SkinCare}
                  alt="skin-care"
                />
                <div>
                  <h4 className="offer-title">Skin Care</h4>
                </div>
              </div>
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.HairCare}
                  alt="hair-care"
                />
                <div>
                  <h4 className="offer-title">Hair Care</h4>
                </div>
              </div>
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.Perfume}
                  alt="perfume"
                />
                <div>
                  <h4 className="offer-title">Perfumes</h4>
                </div>
              </div>
            </div>

            {/* Another Best Selling Section */}
            <div className="best-deals-product">
              <div className="flex">
                <h3>Top Rated Beauty Essentials</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div className="">
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>

            {/* Product Slider - Again */}
            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter((product) => product.selectedSupOption === "Beauty")
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>

            {/* Ending Banner */}
            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.BeautySale}
                alt="beauty-sale-banner"
              />
            </div>
          </div>
        );

      case "fashion":
        return (
          <div className="discount-pages">
            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.FashionBanner}
                alt="fashion-banner"
              />
            </div>

            <div className="best-deals-product">
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.MenWear}
                  alt="Men Wear"
                />
              </div>
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.WomenWear}
                  alt="Women Wear"
                />
              </div>
            </div>

            <div className="best-deals-product">
              <div className="flex">
                <h3>Best Selling Fashion Accessories</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div className="">
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>
            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter(
                      (product) =>
                        product.selectedSupOption === "FashionAndAccessories",
                    )
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>

            <div className="all-offers-deals">
              <div className="offer-1 shoes">
                <img
                  className="offer-img-width"
                  src={ImageImport.ShoesOffer}
                  alt="Shoes"
                />
                <div>
                  <h4 className="offer-title">Footwear</h4>
                </div>
              </div>
              <div className="offer-1 bags">
                <img
                  className="offer-img-width"
                  src={ImageImport.BagsOffer}
                  alt="Bags"
                />
                <div>
                  <h4 className="offer-title">Bags & Backpacks</h4>
                </div>
              </div>
              <div className="offer-1 watches">
                <img
                  className="offer-img-width"
                  src={ImageImport.WatchesOffer}
                  alt="Watches"
                />
                <div>
                  <h4 className="offer-title">Watches</h4>
                </div>
              </div>
              <div className="offer-1 jewelry">
                <img
                  className="offer-img-width"
                  src={ImageImport.JewelryOffer}
                  alt="Jewelry"
                />
                <div>
                  <h4 className="offer-title">Jewelry</h4>
                </div>
              </div>
            </div>

            <div className="best-deals-product">
              <div className="flex">
                <h3>Trending Outfits</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div className="">
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>
            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter(
                      (product) =>
                        product.selectedSupOption === "FashionAndAccessories",
                    )
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>

            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.FashionSaleBanner}
                alt="fashion-sale-banner"
              />
            </div>
          </div>
        );

      case "automotive":
        return (
          <div className="discount-pages">
            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.AutomotiveBanner}
                alt="automotive-banner"
              />
            </div>

            <div className="best-deals-product">
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.CarPolish}
                  alt="car-polish"
                />
              </div>
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.TyreCleaner}
                  alt="tyre-cleaner"
                />
              </div>
            </div>

            <div className="best-deals-product">
              <div className="flex">
                <h3>Top Automotive Accessories</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div className="">
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>

            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter(
                      (product) => product.selectedSupOption === "Automotive",
                    )
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>

            <div className="all-offers-deals">
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.CarFreshener}
                  alt="car-freshener"
                />
                <div className="">
                  <h4 className="offer-title">Car Fresheners</h4>
                </div>
              </div>
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.EngineOil}
                  alt="engine-oil"
                />
                <div className="">
                  <h4 className="offer-title">Engine Oils</h4>
                </div>
              </div>
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.CarCovers}
                  alt="car-covers"
                />
                <div className="">
                  <h4 className="offer-title">Car Covers</h4>
                </div>
              </div>
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.CarVacuum}
                  alt="car-vacuum"
                />
                <div className="">
                  <h4 className="offer-title">Car Vacuum Cleaners</h4>
                </div>
              </div>
            </div>

            <div className="best-deals-product">
              <div className="flex">
                <h3>Trending Automotive Gadgets</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div className="">
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>

            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter(
                      (product) => product.selectedSupOption === "Automotive",
                    )
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>

            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.AutomotiveBottomBanner}
                alt="automotive-bottom-banner"
              />
            </div>
          </div>
        );

      case "babycenter":
        return (
          <div className="discount-pages">
            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.BabyBanner}
                alt="babybanner"
              />
            </div>

            <div className="best-deals-product">
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.BabyWipes}
                  alt="babywipes"
                />
              </div>
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.BabyFood}
                  alt="babyfood"
                />
              </div>
            </div>

            <div className="best-deals-product">
              <div className="flex">
                <h3>Best Selling Baby Essentials</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div>
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>

            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter(
                      (product) => product.selectedSupOption === "BabyCare",
                    )
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>

            <div className="all-offers-deals">
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.BabyLotion}
                  alt="babylotion"
                />
                <h4 className="offer-title">Baby Lotion</h4>
              </div>
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.Diapers}
                  alt="diapers"
                />
                <h4 className="offer-title">Diapers</h4>
              </div>
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.BabyToys}
                  alt="babytoys"
                />
                <h4 className="offer-title">Toys</h4>
              </div>
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.BabyShampoo}
                  alt="babyshampoo"
                />
                <h4 className="offer-title">Shampoo</h4>
              </div>
            </div>

            <div className="best-deals-product">
              <div className="flex">
                <h3>Top Picks for New Parents</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div>
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>

            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter(
                      (product) => product.selectedSupOption === "BabyCare",
                    )
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>

            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.BabyCareBanner}
                alt="babycarebanner"
              />
            </div>
          </div>
        );

      case "homegarden":
        return (
          <div className="discount-pages">
            {/* Banner */}
            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.GardenBanner}
                alt="home-garden-banner"
              />
            </div>

            {/* Top Deals */}
            <div className="best-deals-product">
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.GardenTools}
                  alt="garden tools"
                />
              </div>
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.HomeDecor}
                  alt="home decor"
                />
              </div>
            </div>

            {/* Best Sellers */}
            <div className="best-deals-product">
              <div className="flex">
                <h3>Top Home & Garden Picks</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div>
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>
            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter(
                      (product) =>
                        product.selectedSupOption === "HomeAndGarden",
                    )
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>

            {/* Category Offers */}
            <div className="all-offers-deals">
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.IndoorPlants}
                  alt="Indoor Plants"
                />
                <div>
                  <h4 className="offer-title">Indoor Plants</h4>
                </div>
              </div>
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.Kitchenware}
                  alt="Kitchenware"
                />
                <div>
                  <h4 className="offer-title">Kitchenware</h4>
                </div>
              </div>
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.Lighting}
                  alt="Lighting"
                />
                <div>
                  <h4 className="offer-title">Lighting</h4>
                </div>
              </div>
              <div className="offer-1">
                <img
                  className="offer-img-width"
                  src={ImageImport.GardenFurniture}
                  alt="Garden Furniture"
                />
                <div>
                  <h4 className="offer-title">Garden Furniture</h4>
                </div>
              </div>
            </div>

            {/* Another Product Section */}
            <div className="best-deals-product">
              <div className="flex">
                <h3>Home Essentials You’ll Love</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div>
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>
            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter(
                      (product) =>
                        product.selectedSupOption === "HomeAndGarden",
                    )
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>

            {/* Footer Banner */}
            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.HomeStyleBanner}
                alt="home-style"
              />
            </div>
          </div>
        );

      case "petanimal":
        return (
          <div className="discount-pages">
            {/* Banner for Pet Animals */}
            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.PetBanner}
                alt="pet-banner"
              />
            </div>

            {/* Top Deals for Pet Animal Products */}
            <div className="best-deals-product">
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.DogFood}
                  alt="dog-food"
                />
              </div>
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.CatToys}
                  alt="cat-toys"
                />
              </div>
            </div>

            {/* Best Selling Pet Accessories Section */}
            <div className="best-deals-product">
              <div className="flex">
                <h3>Best Selling Pet Accessories</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div>
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>

            {/* Product Slider for Pet Accessories */}
            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter(
                      (product) =>
                        product.selectedSupOption === "PetAccessories",
                    )
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>

            {/* Additional Offers Section */}
            <div className="all-offers-deals">
              <div className="offer-1 dog-food">
                <img
                  className="offer-img-width"
                  src={ImageImport.DogFoodPack}
                  alt="dog-food-pack"
                />
                <div>
                  <h4 className="offer-title">Dog Food</h4>
                </div>
              </div>
              <div className="offer-1 cat-care">
                <img
                  className="offer-img-width"
                  src={ImageImport.CatCare}
                  alt="cat-care"
                />
                <div>
                  <h4 className="offer-title">Cat Care</h4>
                </div>
              </div>
              <div className="offer-1 aquarium">
                <img
                  className="offer-img-width"
                  src={ImageImport.AquariumSupplies}
                  alt="aquarium-supplies"
                />
                <div>
                  <h4 className="offer-title">Aquarium Supplies</h4>
                </div>
              </div>
              <div className="offer-1 small-animals">
                <img
                  className="offer-img-width"
                  src={ImageImport.SmallAnimals}
                  alt="small-animals"
                />
                <div>
                  <h4 className="offer-title">Small Animals</h4>
                </div>
              </div>
            </div>

            {/* Another Best Selling Pet Accessories Section */}
            <div className="best-deals-product">
              <div className="flex">
                <h3>Best Selling Pet Accessories</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div>
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>

            {/* Second Product Slider */}
            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter(
                      (product) =>
                        product.selectedSupOption === "PetAccessories",
                    )
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>

            {/* Closing Banner */}
            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.PetCareBanner}
                alt="pet-care-banner"
              />
            </div>
          </div>
        );

      case "toys":
        return (
          <div className="discount-pages">
            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.ToysBanner}
                alt="toysbanner"
              />
            </div>

            <div className="best-deals-product">
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.ToyCar}
                  alt="toycar"
                />
              </div>
              <div className="best-deals">
                <img className="top-deal-1" src={ImageImport.Doll} alt="doll" />
              </div>
            </div>

            <div className="best-deals-product">
              <div className="flex">
                <h3>Best Selling Toys</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div>
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>

            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter((product) => product.selectedSupOption === "Toys")
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>

            <div className="all-offers-deals">
              <div className="offer-1 toys-special">
                <img
                  className="offer-img-width"
                  src={ImageImport.Puzzle}
                  alt="puzzle"
                />
                <div>
                  <h4 className="offer-title">Puzzle Sets</h4>
                </div>
              </div>
              <div className="offer-1 toys-special">
                <img
                  className="offer-img-width"
                  src={ImageImport.BoardGame}
                  alt="boardgame"
                />
                <div>
                  <h4 className="offer-title">Board Games</h4>
                </div>
              </div>
              <div className="offer-1 toys-special">
                <img
                  className="offer-img-width"
                  src={ImageImport.ActionFigure}
                  alt="actionfigure"
                />
                <div>
                  <h4 className="offer-title">Action Figures</h4>
                </div>
              </div>
              <div className="offer-1 toys-special">
                <img
                  className="offer-img-width"
                  src={ImageImport.StuffedToy}
                  alt="stuffedtoy"
                />
                <div>
                  <h4 className="offer-title">Stuffed Toys</h4>
                </div>
              </div>
            </div>

            <div className="best-deals-product">
              <div className="flex">
                <h3>Best Selling Toys</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div>
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>

            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter((product) => product.selectedSupOption === "Toys")
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>

            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.ToysPromoBanner}
                alt="toysPromo"
              />
            </div>
          </div>
        );

      case "refurbish":
        return (
          <div className="discount-pages">
            <div className="banner-page">
              {/* Use a refurbish-related banner */}
              <img
                className="banner-width"
                src={ImageImport.RefurbishBanner}
                alt="refurbishbanner"
              />
            </div>

            <div className="best-deals-product">
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.RefurbishedLaptop}
                  alt="refurbished laptop"
                />
              </div>
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.RefurbishedPhone}
                  alt="refurbished phone"
                />
              </div>
            </div>

            <div className="best-deals-product">
              <div className="flex">
                <h3>Top Refurbished Products</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div>
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>

            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter(
                      (product) => product.selectedSupOption === "Refurbished",
                    )
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>

            <div className="all-offers-deals">
              <div className="offer-1 refurbished-laptop">
                <img
                  className="offer-img-width"
                  src={ImageImport.RefurbishedLaptopOffer}
                  alt="refurbished laptop offer"
                />
                <div>
                  <h4 className="offer-title">Refurbished Laptops</h4>
                </div>
              </div>
              <div className="offer-1 refurbished-phone">
                <img
                  className="offer-img-width"
                  src={ImageImport.RefurbishedPhoneOffer}
                  alt="refurbished phone offer"
                />
                <div>
                  <h4 className="offer-title">Refurbished Phones</h4>
                </div>
              </div>
              <div className="offer-1 refurbished-tablet">
                <img
                  className="offer-img-width"
                  src={ImageImport.RefurbishedTabletOffer}
                  alt="refurbished tablet offer"
                />
                <div>
                  <h4 className="offer-title">Refurbished Tablets</h4>
                </div>
              </div>
              <div className="offer-1 refurbished-accessories">
                <img
                  className="offer-img-width"
                  src={ImageImport.RefurbishedAccessoriesOffer}
                  alt="refurbished accessories offer"
                />
                <div>
                  <h4 className="offer-title">Refurbished Accessories</h4>
                </div>
              </div>
            </div>

            <div className="best-deals-product">
              <div className="flex">
                <h3>More Refurbished Deals</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div>
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>

            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter(
                      (product) => product.selectedSupOption === "Refurbished",
                    )
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>

            <div className="banner-page">
              {/* Maybe a footer banner related to refurbish */}
              <img
                className="banner-width"
                src={ImageImport.RefurbishFooterBanner}
                alt="refurbish footer"
              />
            </div>
          </div>
        );

      case "sports":
        return (
          <div className="discount-pages">
            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.SportsBanner}
                alt="sportsbanner"
              />
            </div>

            <div className="best-deals-product">
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.SportsShoes}
                  alt="sportsshoes"
                />
              </div>
              <div className="best-deals">
                <img
                  className="top-deal-1"
                  src={ImageImport.Footballs}
                  alt="footballs"
                />
              </div>
            </div>

            <div className="best-deals-product">
              <div className="flex">
                <h3>Best Selling Sports Equipment</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div>
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>

            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter((product) => product.selectedSupOption === "Sports")
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>

            <div className="all-offers-deals">
              <div className="offer-1 shoes">
                <img
                  className="offer-img-width"
                  src={ImageImport.SportsShoes}
                  alt="sports shoes"
                />
                <div>
                  <h4 className="offer-title">Sports Shoes</h4>
                </div>
              </div>
              <div className="offer-1 balls">
                <img
                  className="offer-img-width"
                  src={ImageImport.Footballs}
                  alt="footballs"
                />
                <div>
                  <h4 className="offer-title">Footballs</h4>
                </div>
              </div>
              <div className="offer-1 apparels">
                <img
                  className="offer-img-width"
                  src={ImageImport.SportsWear}
                  alt="sportswear"
                />
                <div>
                  <h4 className="offer-title">Sportswear</h4>
                </div>
              </div>
              <div className="offer-1 accessories">
                <img
                  className="offer-img-width"
                  src={ImageImport.SportsAccessories}
                  alt="sports accessories"
                />
                <div>
                  <h4 className="offer-title">Accessories</h4>
                </div>
              </div>
            </div>

            <div className="best-deals-product">
              <div className="flex">
                <h3>Popular Sports Gear</h3>
                <p className="item-count">({productShow.length} Items)</p>
              </div>
              <div>
                <h4 className="show-all-product">Show All</h4>
              </div>
            </div>

            <div className="product-slider-cont">
              <Sliders {...settings}>
                {Array.isArray(products) &&
                  products
                    .filter((product) => product.selectedSupOption === "Sports")
                    .map((product) => (
                      <div
                        className="show-img-detail-sup"
                        key={product.productId}
                      >
                        <Suspense fallback={<Loader />}>
                          <ProductCard
                            name={product.productName}
                            moq={product.minOrderQuant}
                            id={product.productId}
                            img={
                              product.images && product.images.length > 0
                                ? product.images[0].imageUrl
                                : defaulImg
                            }
                            unitPrice={product.unitPrice}
                            currency={product.currencySymbol}
                            salePrice={product.sellPrice}
                          />
                        </Suspense>
                      </div>
                    ))}
              </Sliders>
            </div>

            <div className="banner-page">
              <img
                className="banner-width"
                src={ImageImport.SportsPromo}
                alt="sports promo"
              />
            </div>
          </div>
        );
    }
  };
  return (
    <>
      <Suspense fallback={<Loader />}>{renderPage()}</Suspense>
    </>
  );
};
export default CategoryPages;
