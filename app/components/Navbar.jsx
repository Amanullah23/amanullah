"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef(null);
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background Image */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="Header Background"
          className="w-full"
          priority
        />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
      bg-white dark:bg-black text-black dark:text-white transition-colors duration-300
      ${isScroll ? "bg-opacity-50 backdrop-blur-lg shadow-sm dark:shadow-white/20" : ""}
    `}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14 bg-transparent"
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#certificates">Certificates</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button
            className="cursor-pointer"
            onClick={() => setTheme(isDarkMode ? "light" : "dark")}
            aria-label="Toggle Dark Mode"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt={isDarkMode ? "Sun Icon" : "Moon Icon"}
              className="w-6"
            />
          </button>

          <motion.a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 hover:bg-indigo-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-white dark:border-white/50"
            initial={{ opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Arrow Icon"
              className="w-3"
            />
          </motion.a>

          <button
            className="block md:hidden ml-3"
            onClick={openMenu}
            aria-label="Open Mobile Menu"
          >
            <Image src={assets.menu_black} alt="Menu Icon" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              ref={sideMenuRef}
              className="flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-darkHover dark:text-white"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute right-6 top-6" onClick={closeMenu}>
                <Image
                  src={assets.close_black}
                  alt="Close Menu"
                  className="w-5 cursor-pointer"
                />
              </div>

              <li>
                <a onClick={closeMenu} href="#top">
                  Home
                </a>
              </li>
              <li>
                <a onClick={closeMenu} href="#about">
                  About me
                </a>
              </li>
              <li>
                <a onClick={closeMenu} href="#services">
                  Services
                </a>
              </li>
              <li>
                <a onClick={closeMenu} href="#work">
                  My Work
                </a>
              </li>
              <li>
                <a onClick={closeMenu} href="#certificates">
                  Certificates
                </a>
              </li>
              <li>
                <a onClick={closeMenu} href="#contact">
                  Contact me
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
