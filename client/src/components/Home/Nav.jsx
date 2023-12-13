import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Nav = () => {
  return (
    <div className="bg-black bg-opacity-50 px-10 py-4 text-white flex justify-between items-center w-full fixed z-10">
      <Link to="/">
        <img src={logo} alt="logo" className="w-10" />
      </Link>
      <div className="flex justify-evenly w-2/3 md:hidden">
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <Link to="/product">Our Products</Link>
        </p>
        <p>
          <a href="#about">About Us</a>
        </p>
        <p>
          <a href="#gallery">Gallery</a>
        </p>
        <p>
          <a href="#contact">Contact Us</a>
        </p>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Nav;
