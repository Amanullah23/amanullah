"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 mt-2 mb-10">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt=""
          className="rounded-full w-32 mt-20"
        ></Image>
      </motion.div>
      <div>
        <motion.h3
          className="gap-2 text-xl md:text-2xl mb-2"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="text-red-500">Hi</span>, I am{" "}
          <span className="font-bold">Amanullah Yawari</span>
        </motion.h3>
        <motion.h3
          className="text-xl sm:text-6xl lg:text-[35px] font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          frontend developer based in Kabul
        </motion.h3>
        <motion.p
          className="max-w-2xl mx-auto mt-2"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          I am a Frontend Developer & IT Specialist from Kabul, Afghanistan, with 7 years of
          experience in organizations such as the Election Commission of
          Afghanistan, Fanoos, Talia, and Quika. I build modern, responsive, and
          user-friendly web interfaces. I was also a Member of the
          Global Entrepreneurs and Leaders Academy (GELA) Cohort-12.
        </motion.p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full px-4">
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="#contact"
            className="w-full sm:w-auto text-center px-8 py-3 border border-white rounded-full bg-black text-white flex items-center justify-center gap-2 hover:bg-black/90  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            Contact Me
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </motion.a>
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            href="/sample-resume.pdf"
            download
            className="w-full sm:w-auto text-center px-8 py-3 border border-gray-500 rounded-full flex items-center justify-center gap-2 hover:text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 "
          >
            My Resume
            <Image src={assets.download_icon} alt="" className="w-4 " />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Header;
