import { Link } from "react-router-dom";
import logo from "../images/logo.png"
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import whatsapp from "../images/whatsapp.png";

const Footer = () => {
  return (
    <div className=" py-4 bg-blue-500 text-white flex justify-evenly">
      <div>
        <img src={logo} alt="logo" className="w-48" />
        <p className="text-xl font-bold">Sachkhand Machine Tools</p>
      </div>
      <div>
        <h1 className="text-2xl">Contact Details</h1>
        <div className="py-2 flex flex-col justify-evenly h-44">
          <p className="text-xl">Address:</p>
          <p>Delux Pulli, G.T Road, Batala - 143505, Punjab, India</p>
          <p className="text-xl">Phone No:</p>
          <p>08037627280</p>
          <p className="text-xl">Email:</p>
          <p>sachkhandworkshop@gmail.com</p>
        </div>
      </div>

      <div>
        <h1 className="text-2xl">Useful Links</h1>
        <div className="py-2 flex flex-col justify-evenly h-44">
          <Link to="/">
            <p>Privacy Policy</p>
          </Link>
          <Link to="/">
            <p>Products</p>
          </Link>
          <Link to="/">
            <p>About Us</p>
          </Link>
          <Link to="/">
            <p>Contact Us</p>
          </Link>
        </div>
      </div>

      <div>
        <h1 className="text-2xl">Connect</h1>
        <div className="py-2 flex flex-col justify-evenly h-44">
          <a href="https://www.facebook.com">
            <div className="flex items-center">
              <img src={facebook} alt="facebook" className="w-8" />
              <p>Facebook</p>
            </div>
          </a>

          <a href="https://www.instagram.com">
            <div className="flex items-center">
              <img src={instagram} alt="instagram" className="w-8" />
              <p>Instagram</p>
            </div>
          </a>

          <a href="https://www.linkedin.com">
            <div className="flex items-center">
              <img src={linkedin} alt="linkedin" className="w-8" />
              <p>Linkedin</p>
            </div>
          </a>

          <a href="https://www.twitter.com">
            <div className="flex items-center">
              <img src={twitter} alt="twitter" className="w-8" />
              <p>Twitter</p>
            </div>
          </a>

          <a href="https://www.whatsapp.com">
            <div className="flex items-center">
              <img src={whatsapp} alt="whatsapp" className="w-8" />
              <p>Whatsapp</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
