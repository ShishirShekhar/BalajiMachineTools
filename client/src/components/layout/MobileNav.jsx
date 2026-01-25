import { Link } from "react-router-dom";
import { navItems } from "../../lib/config";
import { useActiveNav } from "../../lib/hooks";

const MobileNav = () => {
  const active = useActiveNav();

  return (
    <nav
      className="fixed bottom-0 z-50 flex w-full justify-evenly border-t-2 bg-white/95 shadow-2xl backdrop-blur-sm md:hidden"
      role="navigation"
      aria-label="Mobile navigation"
    >
      {navItems.map((item) => {
        const isActive = active === item.label.toLowerCase();
        return (
          <Link
            key={item.label}
            to={item.path}
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}
            className={`relative flex flex-col items-center px-4 py-3 transition-all duration-300 ${
              isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-400"
            }`}
          >
            {isActive && (
              <span className="absolute top-0 left-1/2 h-1 w-12 -translate-x-1/2 transform rounded-b-full bg-blue-600" />
            )}
            <span className={`transform transition-transform ${isActive ? "scale-110" : ""}`}>
              {isActive ? item.iconActive : item.iconInactive}
            </span>
            <p className={`mt-1 text-xs font-medium ${isActive ? "font-semibold" : ""}`}>
              {item.label}
            </p>
          </Link>
        );
      })}
    </nav>
  );
};

export default MobileNav;
