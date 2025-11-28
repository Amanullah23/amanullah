"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e9f9efe9-acff-4271-b5f0-c82d87d5cd43");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[8%] py-5 scroll-mt-20  bg-no-repeat bg-center bg-contain"
    >
      <h4 className="text-center mb-2 text-lg">Connect with me</h4>
      <h1 className="text-center text-4xl sm:text-5xl">Get in touch</h1>

      <p className="text-center mb-0 mt-5 mx-auto max-w-2xl">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5 mb-2">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="w-full p-3 outline-none border border-gray-400 rounded-md"
            name="name"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full p-3 outline-none border border-gray-400 rounded-md"
            name="email"
          />
        </div>

        {/* Text area */}
        <textarea
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border border-gray-400 rounded-md  mb-2"
          name="message"
        ></textarea>

        <button
          type="submit"
          className="cursor-pointer relative z-10 py-3 px-8 w-max flex items-center justify-center gap-3 bg-black/80 dark:bg-white dark:text-black text-white rounded-full mx-auto hover:bg-sky-700 duration-500"
        >
          Submit Now
          <Image
            src={assets.right_arrow_white}
            alt="right arrow"
            className="w-4"
          />
        </button>
        <p className="mt-4 text-center text-gray-500">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
