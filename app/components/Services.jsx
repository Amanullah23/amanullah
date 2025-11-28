"use client";
import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div id='services' className='w-full px-[12%] py-6 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg '>What I offer</h4>
            <h1 className='text-center text-5xl'>My services</h1>
            <p className='text-center mb-12 mt-5 mx-auto max-w-4xl'>
            With <b>over 7 years of experience</b> in IT and software development, I deliver professional services that <b>turn ideas into high-impact digital solutions.</b> I have <b>excellent communication skills</b>, collaborate seamlessly with top-tier teams, and maintain a <b>wide network of connections</b> with both local and international companies. This allows me to provide <b>tailored, innovative, and reliable solutions</b> that meet the unique needs of each client.
            </p>
            
            <div className={'gap-6 my-10 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]'}>
            {serviceData.map(({icon, title, description, link}, index)=>(
                <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:-translate-x-1 duration-500 hover:shadow-sm shadow-blue-500/50 dark:text-white'>
                    <Image src={icon} alt='' className='w-10'></Image>
                    <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white'>{description}</p>
                    <a href="services" className='flex items-center gap-2 text-sm mt-5'>Read more <Image src={assets.right_arrow} alt='' className='w-4'></Image></a>
                </div>
            ))}
            </div>

        </div>
    )
}

export default Services
