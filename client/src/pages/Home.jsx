import Hero from "../components/Home/Hero"
import Popular from "../components/Home/Popular";
import Best from "../components/Home/Best";
import Featured from "../components/Home/Featured";
import About from "../components/Home/About";
import Gallery from "../components/Home/Gallery";
import Contact from "../components/Home/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Best />
      <Featured />
      <About />
      <Gallery />
      <Contact />
    </div>
  )
}

export default Home;
