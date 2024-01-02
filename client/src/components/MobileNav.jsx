import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoHomeOutline, IoHomeSharp } from "react-icons/io5";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import { RiCustomerServiceLine, RiCustomerServiceFill } from "react-icons/ri";

const MobileNav = () => {
  const [active, setActive] = useState("home");
  const location = useLocation();
  const page = location.pathname;

  useEffect(() => {
    const updateIcon = () => {
      switch (page) {
        case "/":
          setActive("home");
          break;
        case "/products":
          setActive("products");
          break;
        case "/contact":
          setActive("contact");
          break;
        default:
          setActive("");
          break;
      }
    };

    updateIcon();
  }, [page]);

  const navItems = [
    {
      path: "/",
      iconActive: <IoHomeSharp className="text-2xl" />,
      iconInactive: <IoHomeOutline className="text-2xl" />,
      label: "Home",
    },
    {
      path: "/products",
      iconActive: <IoSettingsSharp className="text-2xl" />,
      iconInactive: <IoSettingsOutline className="text-2xl" />,
      label: "Products",
    },
    {
      path: "/contact",
      iconActive: <RiCustomerServiceFill className="text-2xl" />,
      iconInactive: <RiCustomerServiceLine className="text-2xl" />,
      label: "Contact",
    },
  ];

  return (
    <div className="fixed bottom-0 bg-white w-full flex md:hidden justify-evenly border-t-2">
      {navItems.map((item, index) => (
        <Link key={index} to={item.path}>
          <div
            className={`flex flex-col items-center py-2 px-4 ${
              active === item.label.toLowerCase() ? "text-blue-500" : ""
            }`}
          >
            {active === item.label.toLowerCase()
              ? item.iconActive
              : item.iconInactive}
            <p className="text-sm">{item.label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MobileNav;
