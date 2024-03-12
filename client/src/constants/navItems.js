import { IoHomeOutline, IoHomeSharp } from "react-icons/io5";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import { RiCustomerServiceLine, RiCustomerServiceFill } from "react-icons/ri";
import { RiGalleryLine, RiGalleryFill } from "react-icons/ri";

export const navItems = [
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
  {
    path: "/gallery",
    iconActive: <RiGalleryFill className="text-2xl" />,
    iconInactive: <RiGalleryLine className="text-2xl" />,
    label: "Gallery",
  },
];
