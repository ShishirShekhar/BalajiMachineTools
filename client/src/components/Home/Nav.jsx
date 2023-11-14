import logo from "../../images/logo.png";

const Nav = () => {
  return (
    <div className="bg-black bg-opacity-50 px-10 py-4 text-white flex justify-between items-center w-full fixed z-10">
      <img src={logo} alt="logo" className="w-10" />
      <div className="flex justify-evenly w-2/3">
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#popular">Our Products</a>
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
    </div>
  );
};

export default Nav;
