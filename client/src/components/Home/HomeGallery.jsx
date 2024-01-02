import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "../../constants/products";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        color: "#fff",
        height: "100%",
        cursor: "pointer",
        zIndex: 1,
        transition: "background-color 0.3s",
      }}
      onClick={onClick}
    >
      <FaChevronRight />
    </button>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        color: "#fff",
        height: "100%",
        cursor: "pointer",
        zIndex: 1,
        transition: "background-color 0.3s",
      }}
      onClick={onClick}
    >
      <FaChevronLeft />
    </button>
  );
};

const HomeGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    cssEase: "linear",
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 px-5 md:px-10 bg-blue-500" id="gallery">
      <h1 className="text-4xl text-center font-semibold py-10 text-white">
        Gallery
      </h1>
      <Slider {...settings} className="relative">
        {products.slice(0, 8).map((product) => (
          <div key={product.id} className="rounded-xl p-4 h-72 md:h-72 mx-2">
            <Link to={`/products/${product.id}`}>
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full transition-transform hover:scale-105 rounded-xl border"
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeGallery;
