"use client";
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Work = () => {
    return (
        <div id='work' className='w-full px-[6%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg '>My portfolio</h4>
            <h1 className='text-center text-5xl'>My latest works</h1>
            <p className='text-center mb-2 mt-5 mx-auto max-w-2xl '>
                With over 7 years of expertise in IT, I have honed my skills in networking, programming, and system management. I specialize in Python, Django, TensorFlow, Flutter, and Next.js, delivering high-quality web and mobile applications. I am passionate about creating innovative, efficient, and user-focused digital solutions that solve real-world problems - more exciting works are coming soon.
            </p>

            <div className={'grid grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] my-10 gap-5'}>
                {workData.map((project, index) => (
                    <div
                        key={index}
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                    >
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h3 className='font-normal '>{project.title}</h3>
                                <p className='text-sm text-gray-700'>{project.description}</p>
                            </div>

                            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-linear-300'>
                                <Image src={assets.send_icon} alt='send icon' className='w-5' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Link
                href="/worksdetails"
                className="w-max px-5 py-3 border border-gray-500 rounded-full flex items-center gap-2 mx-auto hover:bg-sky-700 hover:text-white"
            >
                Show more
                <Image src={assets.right_arrow_bold} alt="" className="w-4" />
            </Link>
        </div>
    )
}

export default Work;
