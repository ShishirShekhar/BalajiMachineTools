import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Gallery from "../components/Home/Gallery";
import Contact from "../components/Home/Contact";
import FeaturedProduct from "../components/Home/FeaturedProduct";
import {
  popularProducts,
  bestProducts,
  featuredProducts,
} from "../constants/products";

const Home = () => {
  return (
    <div id="home">
      <Hero />
        <FeaturedProduct
          title={"Popular Products"}
          products={popularProducts}
        />
        <FeaturedProduct title={"Best Products"} products={bestProducts} />
        <FeaturedProduct
          title={"Featured Products"}
          products={featuredProducts}
        />
      <About />
      <Gallery />
    </div>
  );
};

export default Home;
