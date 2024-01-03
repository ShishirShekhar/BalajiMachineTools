import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import ProductDesc from "./pages/ProductDesc";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import MobileNav from "./components/MobileNav";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        {/* Navigation Bar */}
        <Nav />

        {/* Routing Configuration */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDesc />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer Section */}
        <Footer />

        {/* Mobile Navigation */}
        <MobileNav />
      </Router>
    </div>
  );
}

export default App;
