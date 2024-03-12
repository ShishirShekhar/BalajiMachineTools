import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../constants/navItems";

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
        case "/gallery":
          setActive("gallery");
          break;
        default:
          setActive("");
          break;
      }
    };

    updateIcon();
  }, [page]);


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
