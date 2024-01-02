import React from "react";
import Hero from "../components/Home/Hero";
import HomeAbout from "../components/Home/HomeAbout";
import HomeGallery from "../components/Home/HomeGallery";
import FeaturedProduct from "../components/Home/FeaturedProduct";
import {
  popularProducts,
  bestProducts,
  featuredProducts,
} from "../constants/products";

const Home = () => {
  return (
    <div id="home" className="home">
      <Hero />
      <section className="my-8">
        <FeaturedProduct title="Popular Products" products={popularProducts} />
      </section>
      <section className="my-8 bg-blue-500 text-white">
        <FeaturedProduct title="Best Products" products={bestProducts} />
      </section>
      <section className="my-8">
        <FeaturedProduct
          title="Featured Products"
          products={featuredProducts}
        />
      </section>
      <HomeGallery />
      <HomeAbout />
    </div>
  );
};

export default Home;
