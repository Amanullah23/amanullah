import { assets } from '@/assets/assets'
import React from 'react'
import Image from "next/image";


const Certificate = () => {
  return (
    <div className='w-full px-[12%] py-10 scroll-mt-5'>
      <h4 className='text-center mb-2 text-lg '>Awards & Recognitions</h4>
      <h1 className='text-center text-5xl'>Achievements and Certifications</h1>
      <p className='text-center mb-5 mt-5 mx-auto max-w-2xl '>
      Over the past seven years, I have earned multiple prestigious certificates and recognitions from global organizations such as Cisco, WEI, Femstech Worldwide, HP, and Kabul University. These achievements reflect my continuous growth, dedication, and passion for technology and innovation — with more exciting accomplishments to be shared soon.
      </p>

      <div className="bg-gray-100 py-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Certificate 1 */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image
              src={assets.certificate}
              alt="Certificate 1"
              width={500}
              height={350}
              className="w-full h-60 object-cover"
            />
          </div>

          {/* Certificate 2 */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image
              src={assets.certificate_eng}
              alt="Certificate 2"
              width={500}
              height={350}
              className="w-full h-60 object-cover"
            />
          </div>

          {/* Certificate 3 */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image
              src={assets.cert_hp_1}
              alt="Certificate 3"
              width={500}
              height={350}
              className="w-full h-60 object-cover"
            />
          </div>

          {/* Certificate 4 */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image
              src={assets.cert_hp_2}
              alt="Certificate 4"
              width={500}
              height={350}
              className="w-full h-60 object-cover"
            />
          </div>

          {/* Certificate 5 */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image
              src={assets.cert_3}
              alt="Certificate 5"
              width={500}
              height={350}
              className="w-full h-60 object-cover"
            />
          </div>
          <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300">
            <Image
              src={assets.cert_4}
              alt="Certificate 6"
              width={500}
              height={350}
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white text-lg font-semibold text-center">FEMSTECH WORLDWIDE CERTIFICATE</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Certificate
