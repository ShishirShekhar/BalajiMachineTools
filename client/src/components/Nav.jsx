import { Link, useLocation } from "react-router-dom";
import logo from "../images/white_logo.png";

const Nav = () => {
  const location = useLocation();

  return (
    <div
      className={`bg-black bg-opacity-50 px-10 py-4 text-white flex justify-between items-center w-full ${
        location.pathname === "/" ? "fixed" : ""
      } z-10`}
    >
      <Link to="/">
        <img src={logo} alt="logo" className="w-14" />
      </Link>
      <div className="md:flex justify-evenly w-2/3 hidden">
        <p>
          <a href="/#home">Home</a>
        </p>
        <p>
          <Link to="/products">Our Products</Link>
        </p>
        <p>
          <a href="/#about">About Us</a>
        </p>
        <p>
          <a href="/#gallery">Gallery</a>
        </p>
        <p>
          <a href="/#footer">Contact Us</a>
        </p>
      </div>
    </div>
  );
};

export default Nav;
