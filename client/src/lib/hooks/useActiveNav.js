import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook to track active navigation item based on current route
 * @returns {string} - The active navigation label
 */
export const useActiveNav = () => {
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
        case "/about":
          setActive("about");
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

  return active;
};
