import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";
import { Home, Info, BookOpen, Image, HelpCircle, MapPin   } from "lucide-react";

const menuItems = [
  { id: "home", label: "Home", icon: <Home size={20} /> },
  { id: "visi-misi", label: "Tentang", icon: <Info size={20} /> },
  { id: "pricing", label: "Katalog", icon: <BookOpen size={20} /> },
  { id: "galeri", label: "Galeri", icon: <Image size={20} /> },
  { id: "faq-card", label: "FaQ", icon: <HelpCircle size={20} /> },
  { id: "map", label: "Lokasi", icon: <MapPin  size={20} /> },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollActive(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkColor = (itemId) => {
    if (!scrollActive && activeLink === "home") {
      return "text-white-500";
    }
    return activeLink === itemId ? "text-blue-500" : "text-blue-500";
  };

  return (
    <>
      {/* DESKTOP HEADER */}
      <header
        className={`fixed top-0 w-full z-20 transition-all duration-300 ${
          scrollActive ? "bg-white-500 shadow-md pt-0" : "bg-black bg-opacity-30 pt-1"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-2 sm:py-2">
          <div className="flex items-center">
            <img src="/assets/logo.png" alt="Logo" className="w-34 h-14" />
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 items-center">
            {menuItems.map((item) => (
              <LinkScroll
                key={item.id}
                activeClass="active"
                to={item.id}
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => setActiveLink(item.id)}
                className={`group px-4 py-2 mx-2 cursor-pointer inline-block relative transition-all duration-300 ${getLinkColor(
                  item.id
                )}`}
              >
                {item.label}
                {activeLink === item.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-500"
                  />
                )}
                <span className="absolute left-0 -bottom-1 w-full h-[2px] scale-x-0 group-hover:scale-x-100 bg-red-500 transition-transform duration-300 origin-left"></span>
              </LinkScroll>
            ))}
          </ul>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4">
        <div className="bg-white-500 py-2 rounded-t-xl shadow-t">
          <ul className="flex justify-between text-xs text-center">
            {menuItems.map((item) => (
              <LinkScroll
                key={item.id}
                activeClass="active"
                to={item.id}
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => setActiveLink(item.id)}
                className={`flex-1 px-1 py-2 flex flex-col items-center border-t-2 ${
                  activeLink === item.id
                    ? "text-blue-500 border-blue-500"
                    : "text-gray-200 border-transparent"
                }`}
              >
                <div>{item.icon}</div>
                <span className="text-[11px] leading-tight mt-1">{item.label}</span>
              </LinkScroll>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
