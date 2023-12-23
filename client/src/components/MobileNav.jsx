import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoHomeOutline, IoHomeSharp } from "react-icons/io5";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import { RiCustomerServiceLine, RiCustomerServiceFill } from "react-icons/ri";

const MobileNav = () => {
  const [active, setActive] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const page = location.pathname;

    const updateIcon = () => {
      if (page === "/") {
        setActive("home");
      } else if (page === "/products") {
        setActive("products");
      } else if (page === "/contact") {
        setActive("contact");
      } else {
        setActive("");
      }
    };

    updateIcon();
  });

  return (
    <div className="fixed bottom-0 bg-white w-full flex md:hidden justify-evenly ">
      <Link to={"/"}>
        {active === "home" ? (
          <div className="flex flex-col items-center py-2 px-4 text-blue-500">
            <IoHomeSharp className="text-2xl" />
            <p className="text-sm">Home</p>
          </div>
        ) : (
          <div className="flex flex-col items-center py-2 px-4">
            <IoHomeOutline className="text-2xl" />
            <p className="text-sm">Home</p>
          </div>
        )}
      </Link>

      <Link to={"/products"}>
        {active === "products" ? (
          <div className="flex flex-col items-center py-2 px-4 text-blue-500">
            <IoSettingsSharp className="text-2xl" />
            <p className="text-sm">Products</p>
          </div>
        ) : (
          <div className="flex flex-col items-center py-2 px-4">
            <IoSettingsOutline className="text-2xl" />
            <p className="text-sm">Products</p>
          </div>
        )}
      </Link>

      <Link to={"/contact"}>
        {active === "contact" ? (
          <div className="flex flex-col items-center py-2 px-4 text-blue-500">
            <RiCustomerServiceFill className="text-2xl" />
            <p className="text-sm">Contact</p>
          </div>
        ) : (
          <div className="flex flex-col items-center py-2 px-4">
            <RiCustomerServiceLine className="text-2xl" />
            <p className="text-sm">Contact</p>
          </div>
        )}
      </Link>
    </div>
  );
};

export default MobileNav;
