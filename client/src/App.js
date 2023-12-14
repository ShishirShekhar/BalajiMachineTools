import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDesc from "./pages/ProductDesc";
import Footer from "./components/Footer";
import Nav from "./components/Home/Nav";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDesc />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
