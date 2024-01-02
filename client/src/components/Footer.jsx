import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/white_logo.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import whatsapp from "../images/whatsapp.png";

const Footer = () => {
  return (
    <div className="bg-blue-500 text-white pb-14 md:pb-0">
      <div
        id="footer"
        className="py-4 flex flex-col md:flex-row justify-evenly items-center"
      >
        {/* Logo and Company Details */}
        <div className="flex flex-wrap justify-around items-center w-full py-5 md:py-0 px-2 md:px-0 gap-2">
          <div>
            <img src={logo} alt="logo" className="w-48" />
            <p className="text-xl font-bold">Balaji Machine Tools</p>
          </div>
          <div className="flex sm:block flex-col justify-center items-center">
            <h1 className="text-2xl">Contact Details</h1>
            <div className="py-2 flex flex-col justify-evenly items-center sm:items-start h-44">
              <p className="text-xl">Address:</p>
              <p>
                G.T Road, Batala <br />
                143505, Punjab, India
              </p>
              <p className="text-xl">Phone No:</p>
              <a href="tel:+918437680240">
                <p>8437680240</p>
              </a>
              <p className="text-xl">Email:</p>
              <a href="mailto:salesbalajimachines@gmail.com">
                <p>salesbalajimachines@gmail.com</p>
              </a>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex flex-wrap justify-around items-center w-full py-5 md:py-0">
          <div>
            <h1 className="text-2xl">Useful Links</h1>
            <div className="py-2 flex flex-col justify-evenly h-44">
              <Link to="/privacy">
                <p>Privacy Policy</p>
              </Link>
              <Link to="/products">
                <p>Products</p>
              </Link>
              <Link to="/about">
                <p>About Us</p>
              </Link>
              <Link to="/contact">
                <p>Contact Us</p>
              </Link>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h1 className="text-2xl">Connect</h1>
            <div className="py-2 flex flex-col justify-evenly h-44">
              {[
                {
                  link: "https://www.facebook.com/ShishirShekhar0/",
                  image: facebook,
                  alt: "Facebook",
                },
                {
                  link: "https://www.instagram.com/sol_shishir",
                  image: instagram,
                  alt: "Instagram",
                },
                {
                  link: "https://www.linkedin.com/in/shishir-shekhar",
                  image: linkedin,
                  alt: "Linkedin",
                },
                {
                  link: "https://www.twitter.com/ShishirShekhar0",
                  image: twitter,
                  alt: "Twitter",
                },
                {
                  link: "https://wa.me/+918437680240",
                  image: whatsapp,
                  alt: "Whatsapp",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                  href={item.link}
                >
                  <div className="flex items-center">
                    <img src={item.image} alt={item.alt} className="w-8" />
                    <p>{item.alt}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Information */}
      <div className="flex flex-col items-center pb-2">
        <a
          href="https://www.linkedin.com/in/shishir-shekhar/"
          target="_blank"
          rel="noreferrer"
        >
          Made by <span className="underline">Shishir Shekhar</span>
        </a>
        <p>© Copyright Balaji Machine Tools {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
