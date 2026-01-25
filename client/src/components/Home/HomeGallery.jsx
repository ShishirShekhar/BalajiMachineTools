import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Section, Stack } from "../ui";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        padding: "0 ",
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
        padding: "0 5px",
      }}
      onClick={onClick}
    >
      <FaChevronLeft />
    </button>
  );
};

const HomeGallery = ({ products = [] }) => {
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
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Section
      id="gallery"
      padding="xl"
      maxWidth="max-w-6xl"
      className="u-bg-primary-gradient-br overflow-hidden text-white"
    >
      <Stack align="center" gap="3" className="fade-in-up text-center">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Gallery</h1>
        <div className="u-divider-white" />
        <p className="text-base text-white/90 sm:text-lg">
          Explore our wide range of quality products
        </p>
      </Stack>

      <Slider {...settings} className="gallery-slider relative mt-10">
        {products.slice(0, 8).map((product) => (
          <div key={product.id} className="px-2 sm:px-3">
            <Link to={`/products/${product.id}`}>
              <div className="group u-hover-lift h-56 overflow-hidden rounded-2xl bg-white p-3 shadow-lg sm:h-72 sm:p-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-full w-full rounded-xl object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </Section>
  );
};

export default HomeGallery;
