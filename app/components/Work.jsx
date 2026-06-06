"use client";
import { assets, workData } from '../../assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Work = () => {
  return (
    <div id='work' className='w-full px-[6%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-md text-gray-500 tracking-widest uppercase text-sm'>
        My portfolio
      </h4>
      <h1 className='text-center text-5xl font-serif mb-4'>My latest works</h1>
      <p className='text-center mb-2 mt-4 mx-auto max-w-2xl text-gray-500 leading-relaxed'>
        With over 7 years of expertise in IT, I specialize in Python, Django,
        TensorFlow, Flutter, and Next.js — delivering high-quality web and
        mobile applications focused on real-world impact.
      </p>

      <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] my-10 gap-5'>
        {workData.map((project, index) => (
          <div
            key={index}
            className='rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 relative cursor-pointer group hover:-translate-y-1 transition-transform duration-300'
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div
              className='aspect-square bg-no-repeat bg-cover bg-center relative'
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300' />

              <div className='bg-white dark:bg-black w-10/12 rounded-lg absolute bottom-4 left-1/2 -translate-x-1/2 py-3 px-4 flex items-center justify-between duration-300 group-hover:bottom-6 border border-gray-100 dark:border-gray-800'>
                <div>
                  <h3 className='font-medium text-sm'>{project.title}</h3>
                  <p className='text-xs text-gray-500 dark:text-gray-400'>{project.description}</p>
                </div>
                <div className='border border-gray-300 dark:border-gray-600 rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-black group-hover:border-black dark:group-hover:bg-white transition-all duration-300 shrink-0'>
                  <Image
                    src={assets.send_icon}
                    alt='open project'
                    className='w-4 group-hover:invert dark:invert'
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer row */}
      <div className='flex items-center justify-center gap-10 flex-wrap'>
        <div className='flex gap-8'>
          {[['7+', 'Years exp.'], ['20+', 'Projects'], ['5', 'Tech stacks']].map(([num, label]) => (
            <div key={label} className='text-center'>
              <p className='text-2xl font-serif font-bold'>{num}</p>
              <p className='text-xs text-gray-500 mt-0.5'>{label}</p>
            </div>
          ))}
        </div>

        <Link
          href="/worksdetails"
          className="flex items-center gap-2 px-6 py-2.5 border border-gray-400 rounded-full text-sm hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black transition-all duration-300"
        >
          Show more
          <Image src={assets.right_arrow_bold} alt="" className="w-4 group-hover:invert" />
        </Link>
      </div>
    </div>
  )
}

export default Work;