import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Nav = () => {
  return (
    <div className="bg-black bg-opacity-50 px-10 py-4 text-white flex justify-between items-center w-full z-10">
      <img src={logo} alt="logo" className="w-10" />
      <div className="flex justify-evenly w-2/3">
        <p>
          <Link to="/">Home</Link>
        </p>
        <div className="relative group">
          <p>Our Product</p>
          <div className="absolute -top-60 group-hover:top-12 transition-all bg-black bg-opacity-50 w-full">
            <p className="p-2 border-b-2 border-black text-white">Hello</p>
            <p className="p-2 border-b-2 border-black text-white">Hello</p>
            <p className="p-2 border-b-2 border-black text-white">Hello</p>
            <p className="p-2 border-b-2 border-black text-white">Hello</p>
            <p className="p-2 border-b-2 border-black text-white">Hello</p>
          </div>
        </div>
        <p>
          <a href="#about">About Us</a>
        </p>
        <p>
          <a href="#contact">Contact Us</a>
        </p>
      </div>
    </div>
  );
};

export default Nav;
