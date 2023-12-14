import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import whatsapp from "../images/whatsapp.png";

const Footer = () => {
  return (
    <div
      id="footer"
      className="py-4 bg-blue-500 text-white flex flex-col md:flex-row justify-evenly items-center"
    >
      <div className="flex flex-wrap justify-around items-center w-full py-5 md:py-0">
        <div>
          <img src={logo} alt="logo" className="w-48" />
          <p className="text-xl font-bold">Balaji Machine Tools</p>
        </div>
        <div>
          <h1 className="text-2xl">Contact Details</h1>
          <div className="py-2 flex flex-col justify-evenly h-44">
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

      <div className="flex flex-wrap justify-around items-center w-full py-5 md:py-0">
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
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/ShishirShekhar0/"
            >
              <div className="flex items-center">
                <img src={facebook} alt="facebook" className="w-8" />
                <p>Facebook</p>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/sol_shishir"
            >
              <div className="flex items-center">
                <img src={instagram} alt="instagram" className="w-8" />
                <p>Instagram</p>
              </div>
            </a>

            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shishir-shekhar">
              <div className="flex items-center">
                <img src={linkedin} alt="linkedin" className="w-8" />
                <p>Linkedin</p>
              </div>
            </a>

            <a target="_blank" rel="noreferrer" href="https://www.twitter.com/ShishirShekhar0">
              <div className="flex items-center">
                <img src={twitter} alt="twitter" className="w-8" />
                <p>Twitter</p>
              </div>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/+918437680240"
            >
              <div className="flex items-center">
                <img src={whatsapp} alt="whatsapp" className="w-8" />
                <p>Whatsapp</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
