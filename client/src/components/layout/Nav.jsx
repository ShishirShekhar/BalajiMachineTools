import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/white_logo.png";

const NAV_LINKS = [
  { path: "/#home", label: "Home" },
  { path: "/products", label: "Our Products" },
  { path: "/about", label: "About Us" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact Us" },
];

const SCROLL_THRESHOLD = 50;

const Nav = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const getNavStyles = () => {
    if (isHomePage) {
      return scrolled
        ? "bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg"
        : "bg-black/30 backdrop-blur-md border-b border-white/10";
    }
    return "bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg";
  };

  const isActiveLink = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed z-50 flex w-full items-center justify-between px-4 py-3 text-white transition-all duration-300 sm:px-5 sm:py-4 md:px-10 ${getNavStyles()}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <Link
        to="/"
        className="flex items-center gap-2 transition-transform duration-300 hover:scale-105 lg:gap-10"
      >
        <img src={logo} alt="logo" className="w-12 drop-shadow-lg sm:w-14" />
        <p className="hidden text-lg font-bold tracking-wide sm:text-2xl md:block lg:text-3xl">
          Balaji Machine Tools
        </p>
        <p className="flex text-base font-bold tracking-wide sm:text-xl md:hidden">
          Balaji Machine Tools
        </p>
      </Link>

      <div className="hidden justify-evenly gap-3 md:flex lg:gap-10">
        {NAV_LINKS.map((link) => (
          <div key={link.path} className="group relative">
            {link.path.startsWith("/") ? (
              <Link
                to={link.path}
                className={`font-medium transition-colors duration-300 hover:text-yellow-400 ${
                  isActiveLink(link.path) ? "text-yellow-400" : ""
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                href={link.path}
                className="font-medium transition-colors duration-300 hover:text-yellow-400"
              >
                {link.label}
              </a>
            )}
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                isActiveLink(link.path) ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
