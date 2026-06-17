"use client";
import { assets } from "../../assets/assets";
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

  const isDarkMode = mounted && theme === "dark";

  // prevent body scroll when mobile menu open
  useEffect(() => {
    if (!mounted) return;
    if (isMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev || "";
      };
    }
    return () => {
      if (document.body) document.body.style.overflow = "";
    };
  }, [isMenuOpen, mounted]);

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

  // nav links — using absolute paths so they work on /blog, /services, etc.
  const navLinks = [
    { label: "Home", href: "/#top" },
    { label: "About me", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "My Work", href: "/#work" },
    { label: "Certificates", href: "/#certificates" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      {/* Background Image — only in light mode, hidden on dark */}
      {mounted && !isDarkMode && (
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
          <Image
            src={assets.header_bg_color}
            alt=""
            aria-hidden="true"
            className="w-full"
            priority
          />
        </div>
      )}

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
          bg-white dark:bg-black text-black dark:text-white transition-colors duration-300
          ${isScroll ? "bg-opacity-50 backdrop-blur-lg shadow-sm dark:shadow-white/20" : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="/#top" aria-label="Go to top">
          <Image
            src={mounted && isDarkMode ? assets.logo_dark : assets.logo}
            alt="Amanullah Yawari"
            className="w-28 cursor-pointer mr-14 bg-transparent"
            priority
          />
        </a>

        {/* Desktop Menu — Contact link excluded here, shown separately */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 font-Ovo ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          {navLinks.slice(0, 6).map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            className="cursor-pointer"
            onClick={() => setTheme(isDarkMode ? "light" : "dark")}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <Image
              src={mounted && isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              aria-hidden="true"
              className="w-6"
            />
          </button>

          {/* Desktop Contact CTA */}
          <motion.a
            href="/#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4
              transition-all hover:-translate-y-1 hover:scale-105 hover:text-black
              dark:border-white/50 dark:hover:text-white font-Ovo"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Contact
            <Image
              src={mounted && isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              aria-hidden="true"
              className="w-3"
            />
          </motion.a>

          {/* Mobile menu open button */}
          <button
            className="block md:hidden ml-3"
            onClick={openMenu}
            aria-label="Open mobile menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <Image
              src={assets.menu_black}
              alt=""
              aria-hidden="true"
              className={`w-6 ${isDarkMode ? "invert filter" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence initial={false} mode="wait">
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/40 z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={closeMenu}
                aria-hidden="true"
              />

              {/* Drawer */}
              <motion.aside
                id="mobile-menu"
                ref={sideMenuRef}
                className="flex md:hidden flex-col gap-4 py-20 px-6 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen
                  bg-rose-50 dark:bg-neutral-900 text-black dark:text-white shadow-lg"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                aria-modal="true"
                role="dialog"
                aria-label="Mobile navigation"
              >
                {/* Close button */}
                <div className="absolute right-4 top-4">
                  <button
                    onClick={closeMenu}
                    aria-label="Close mobile menu"
                    className="p-1"
                  >
                    <Image
                      src={assets.close_black}
                      alt=""
                      aria-hidden="true"
                      className={`w-5 ${isDarkMode ? "invert filter" : ""}`}
                    />
                  </button>
                </div>

                {/* Mobile nav links — all links including Contact */}
                <ul className="flex flex-col gap-1 mt-6">
                  {navLinks.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        onClick={closeMenu}
                        href={href}
                        className="block py-3 px-2 text-lg font-Ovo rounded-lg
                          hover:bg-rose-100 dark:hover:bg-white/10 transition-colors duration-150"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Social hint at bottom */}
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-white/10 text-sm text-gray-500 dark:text-gray-400 font-Ovo">
                  Available for new projects
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;