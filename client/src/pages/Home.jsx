import React, { useMemo } from "react";
import { Hero, HomeAbout, HomeGallery, FeaturedProduct } from "../components/home";
import { useProducts } from "../lib/hooks";

const Home = () => {
  const { products } = useProducts();

  // Create featured product sets from fetched data
  const { popularProducts, bestProducts, featuredProducts } = useMemo(() => {
    return {
      popularProducts: products.slice(0, 4),
      bestProducts: products.slice(4, 8),
      featuredProducts: products.slice(8, 12),
    };
  }, [products]);

  return (
    <div id="home" className="home">
      <Hero />
      <FeaturedProduct
        title="Popular Products"
        products={popularProducts}
        className="bg-linear-to-b from-white to-gray-50"
      />
      <FeaturedProduct
        title="Best Products"
        products={bestProducts}
        variant="dark"
        className="u-bg-primary-gradient-br"
      />
      <FeaturedProduct
        title="Featured Products"
        products={featuredProducts}
        className="u-bg-page"
      />
      <HomeGallery products={products} />
      <HomeAbout />
    </div>
  );
};

export default Home;
