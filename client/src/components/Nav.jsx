import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/white_logo.png";

const Nav = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/#home", label: "Home" },
    { path: "/products", label: "Our Products" },
    { path: "/about", label: "About Us" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <div
      className={`px-5 md:px-10 py-4 text-white flex justify-between items-center w-full ${
        location.pathname === "/"
          ? "fixed z-10 bg-black bg-opacity-50"
          : "bg-blue-500"
      }`}
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
        {navLinks.map((link, index) => (
          <p key={index}>
            {link.path.startsWith("/") ? (
              <Link to={link.path}>{link.label}</Link>
            ) : (
              <a href={link.path}>{link.label}</a>
            )}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Nav;
