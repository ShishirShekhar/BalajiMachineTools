import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseFill } from "react-icons/ri";
import logo from "../images/logo.png";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  const switchMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div
      className={`bg-black bg-opacity-50 px-10 py-4 text-white flex justify-between items-center w-full ${
        location.pathname === "/" ? "fixed" : ""
      } z-10`}
    >
      <Link to="/">
        <img src={logo} alt="logo" className="w-10" />
      </Link>
      <div className="md:flex justify-evenly w-2/3 hidden">
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <Link to="/products">Our Products</Link>
        </p>
        <p>
          <a href="#about">About Us</a>
        </p>
        <p>
          <a href="#gallery">Gallery</a>
        </p>
        <p>
          <a href="#footer">Contact Us</a>
        </p>
      </div>
      <button className="text-xl md:hidden" onClick={switchMenu}>
        {menu ? <RiCloseFill onClick={switchMenu} /> : <RxHamburgerMenu />}
      </button>
      {menu && (
        <div className="absolute bg-black bg-opacity-75 w-screen h-screen top-0 left-0 flex flex-col justify-center items-center text-3xl font-bold">
          <RiCloseFill
            className="absolute top-5 right-10"
            onClick={switchMenu}
          />
          <p className="hamburger-option" onClick={switchMenu}>
            <a href="/#home">Home</a>
          </p>
          <p className="hamburger-option" onClick={switchMenu}>
            <Link to="/products">Our Products</Link>
          </p>
          <p className="hamburger-option" onClick={switchMenu}>
            <a href="/#about">About Us</a>
          </p>
          <p className="hamburger-option" onClick={switchMenu}>
            <a href="/#gallery">Gallery</a>
          </p>
          <p className="hamburger-option" onClick={switchMenu}>
            <a href="/#footer">Contact Us</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Nav;
