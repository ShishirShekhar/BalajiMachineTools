import React from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Gallery from "../components/Home/Gallery";
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
      <About />
      <Gallery />
    </div>
  );
};

export default Home;
