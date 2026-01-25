import { Link } from "react-router-dom";
import logo from "../../images/white_logo.png";
import { social } from "../../lib/data";

const CONTACT_INFO = [
  {
    label: "Address",
    value: "G.T Road, Batala, 143505, Punjab, India",
  },
  { label: "Phone", value: "8437680240", href: "tel:+918437680240" },
  { label: "Phone", value: "9814771618", href: "tel:+919814771618" },
  {
    label: "Email",
    value: "salesbalajimachines@gmail.com",
    href: "mailto:salesbalajimachines@gmail.com",
  },
];

const FOOTER_LINKS = [
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Products", path: "/products" },
  { label: "About Us", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact Us", path: "/contact" },
];

const Footer = () => {
  return (
    <div className="u-bg-primary-gradient-br pb-12 text-white sm:pb-14 md:pb-0">
      <div
        id="footer"
        className="flex flex-col items-center justify-evenly py-6 sm:py-8 md:flex-row"
      >
        {/* Logo and Company Details */}
        <div className="flex w-full flex-wrap items-center justify-around gap-2 px-4 py-4 sm:gap-4 sm:px-2 sm:py-5 md:px-0 md:py-0">
          <div className="text-center sm:text-left">
            <img src={logo} alt="logo" className="mx-auto w-32 sm:mx-0 sm:w-48" />
            <p className="mt-2 text-lg font-bold sm:text-xl">Balaji Machine Tools</p>
          </div>
          <div className="flex w-full flex-col items-center justify-center sm:block sm:w-auto">
            <h1 className="mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">Contact Details</h1>
            <div className="flex min-h-44 flex-col items-center justify-evenly space-y-2 py-2 sm:items-start">
              {CONTACT_INFO.map((item) => (
                <div key={`${item.label}-${item.value}`} className="flex flex-col">
                  <p className="text-base font-semibold sm:text-lg">{item.label}:</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm break-all transition-colors hover:text-yellow-400 sm:text-base"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-center text-sm text-gray-100 sm:text-left sm:text-base">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex w-full flex-wrap items-center justify-around py-5 md:py-0">
          <div>
            <h1 className="mb-4 text-2xl font-bold">Useful Links</h1>
            <div className="flex h-44 flex-col justify-evenly space-y-2 py-2">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="transition-colors duration-300 hover:text-yellow-400"
                >
                  <p>{link.label}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h1 className="mb-4 text-2xl font-bold">Connect</h1>
            <div className="flex h-44 flex-col justify-evenly space-y-2 py-2">
              {social.map((item, index) => (
                <a
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                  href={item.link}
                  className="transition-all duration-300 hover:translate-x-2 hover:text-yellow-400"
                >
                  <div className="flex items-center gap-2">
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
      <div className="flex flex-col items-center border-t border-white/20 pt-8 pb-4 text-sm">
        <a
          href="https://www.linkedin.com/in/shishir-shekhar/"
          target="_blank"
          rel="noreferrer"
          className="mb-2 transition-colors hover:text-yellow-400"
        >
          Made with ❤️ by <span className="font-semibold underline">Shishir Shekhar</span>
        </a>
        <p className="text-gray-200">© Copyright Balaji Machine Tools {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
