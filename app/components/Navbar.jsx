"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [mounted, setMounted] = useState(false);
  const sideMenuRef = useRef(null);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // mounted guard to avoid hydration mismatch with next-themes
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = theme === "dark";

  // prevent body scroll when mobile menu open
  useEffect(() => {
    if (isMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev || "";
      };
    }
    // ensure restored if closed programmatically
    return () => {
      if (document.body) document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  // don't render anything until theme is mounted
  if (!mounted) return null;

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
        ${isScroll ? "bg-opacity-50 backdrop-blur-lg shadow-sm dark:shadow-white/20" : ""}`}
        role="navigation"
      >
        <a href="#top" aria-label="Go to top">
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
          <li><a href="#top" className="font-Ovo">Home</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">My Work</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#contact">Contact me</a></li>
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
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 transition hover:-translate-y-1 hover:scale-110 hover:text-black dark:border-white/50 dark:hover:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Arrow Icon"
              className="w-3"
            />
          </motion.a>

          {/* Mobile menu open button */}
          <button
            className="block md:hidden ml-3"
            onClick={openMenu}
            aria-label="Open Mobile Menu"
          >
            {/* Use invert filter in dark mode so black icon becomes visible */}
            <Image
              src={assets.menu_black}
              alt="Menu Icon"
              className={`w-6 ${isDarkMode ? "invert filter" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence initial={false} mode="wait">
          {isMenuOpen && (
            <motion.aside
              ref={sideMenuRef}
              className="flex md:hidden flex-col gap-4 py-20 px-6 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-neutral-900 text-black dark:text-white shadow-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.36 }}
              aria-modal="true"
              role="dialog"
            >
              <div className="absolute right-4 top-4">
                <button
                  onClick={closeMenu}
                  aria-label="Close Mobile Menu"
                  className="p-1"
                >
                  <Image
                    src={assets.close_black}
                    alt="Close Menu"
                    className={`w-5 ${isDarkMode ? "invert filter" : ""}`}
                  />
                </button>
              </div>

              <ul className="flex flex-col gap-4 mt-6">
                <li>
                  <a onClick={closeMenu} href="#top" className="block py-2 text-lg">
                    Home
                  </a>
                </li>
                <li>
                  <a onClick={closeMenu} href="#about" className="block py-2 text-lg">
                    About me
                  </a>
                </li>
                <li>
                  <a onClick={closeMenu} href="#services" className="block py-2 text-lg">
                    Services
                  </a>
                </li>
                <li>
                  <a onClick={closeMenu} href="#work" className="block py-2 text-lg">
                    My Work
                  </a>
                </li>
                <li>
                  <a onClick={closeMenu} href="#certificates" className="block py-2 text-lg">
                    Certificates
                  </a>
                </li>
                <li>
                  <a onClick={closeMenu} href="#contact" className="block py-2 text-lg">
                    Contact me
                  </a>
                </li>
              </ul>
            </motion.aside>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
