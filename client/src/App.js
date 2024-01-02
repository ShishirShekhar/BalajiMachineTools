import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDesc from "./pages/ProductDesc";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import MobileNav from "./components/MobileNav";

function App() {
  return (
    <div>
      <Router>
        {/* Navigation Bar */}
        <Nav />

        {/* Routing Configuration */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDesc />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
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
