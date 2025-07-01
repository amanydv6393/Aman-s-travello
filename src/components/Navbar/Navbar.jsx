import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

export const NavbarLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Blogs", link: "/blogs" },
  { name: "Best Places", link: "/best-places" },
];

const DropdownLinks = [
  { name: "Our Services", link: "/#services" },
  { name: "Top Brands", link: "/#mobile_brands" },
  { name: "Location", link: "/#location" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white dark:bg-gray-900 backdrop-blur-sm text-black dark:text-white shadow-md transition-colors duration-300">
        {/* Top bar */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex items-center justify-between">
              <p className="text-sm">20% off on next booking</p>
              <p>Mobile no. +91 6393282350</p>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-4 font-bold text-2xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} alt="Logo" className="h-16" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                {NavbarLinks.map((item) => (
                  <li key={item.name} className="py-4">
                    <NavLink to={item.link} activeClassName="active">
                      {item.name}
                    </NavLink>
                  </li>
                ))}

                {/* Dropdown */}
                <li className="group relative cursor-pointer">
                  <a
                    href="/#home"
                    className="flex h-[72px] items-center gap-[2px]"
                  >
                    Quick Links{" "}
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white dark:bg-gray-800 p-2 text-black dark:text-white group-hover:block shadow-md transition">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20 dark:hover:bg-primary/30"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            {/* Buttons: Dark Mode Toggle + Book Now + Hamburger */}
            <div className="flex items-center gap-4">
              {/* 🌗 Dark Mode Toggle Switch */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full px-1 transition-all"
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    isDarkMode ? "translate-x-6" : "translate-x-0"
                  }`}
                ></div>
              </button>

              {/* Book Now Button */}
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300 text-white px-3 py-1 rounded-full"
                onClick={handleOrderPopup}
              >
                Book Now
              </button>

              {/* Mobile Hamburger */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
