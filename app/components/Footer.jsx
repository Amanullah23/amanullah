"use client";
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "an20kx@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // tooltip disappears after 1.5s
      });
  };

  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' />
        <div 
          className='w-max flex items-center gap-2 mx-auto cursor-pointer hover:text-blue-700 relative'
          onClick={handleCopy}
        >
          <Image src={assets.mail_icon} alt='' className='w-6' />
          <p>{email}</p>
          {copied && (
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded">
              Copied!
            </span>
          )}
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>@ 2025 Amanullah Yawari. All right reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li className='hover:text-blue-500 transition-transform duration-300 hover:translate-y-[-3px]'>
            <a target='_blank' href='https://github.com/Amanullah23'>Github</a>
          </li>
          <li className='hover:text-blue-500 transition-transform duration-300 hover:translate-y-[-3px]'>
            <a target='_blank' href='https://www.linkedin.com/in/amanullah-yawari/'>LinkedIn</a>
          </li>
          <li className='hover:text-blue-500 transition-transform duration-300 hover:translate-y-[-3px]'>
            <a target='_blank' href='https://x.com/theyawari?t=zTjo68BwwvyHkgNo89SX-g&s=09'>X</a>
          </li>
          <li className='hover:text-blue-500 transition-transform duration-300 hover:translate-y-[-3px]'>
            <a target='_blank' href='https://x.com/theyawari?t=zTjo68BwwvyHkgNo89SX-g&s=09'>Facebook</a>
          </li>
          <li className='hover:text-red-500 transition-transform duration-300 hover:translate-y-[-3px]'>
            <a target='_blank' href='https://x.com/theyawari?t=zTjo68BwwvyHkgNo89SX-g&s=09'>Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
