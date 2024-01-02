import { Link, useLocation } from "react-router-dom";
import logo from "../images/white_logo.png";

const Nav = () => {
  const location = useLocation();

  return (
    <div
      className={`bg-black bg-opacity-50 px-5 md:px-10 py-4 text-white flex justify-between items-center w-full ${
        location.pathname === "/" ? "fixed" : ""
      } z-10`}
    >
      <div className="flex items-center w-full md:w-fit">
        <Link to="/">
          <div className="flex justify-between items-center gap-2 lg:gap-10">
            <img src={logo} alt="logo" className="w-14" />
            <p className="hidden md:block text-2xl lg:text-3xl font-bold">
              Balaji Machine Tools
            </p>
          </div>
        </Link>
        <div className="flex md:hidden justify-center items-center w-full">
          <p className="text-2xl font-bold">Balaji Machine Tools</p>
        </div>
      </div>
      <div className="md:flex justify-evenly gap-5 lg:gap-10 hidden">
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
