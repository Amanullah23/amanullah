"use client";
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg '>All my works details here!</h4>
            <h1 className='text-center text-5xl'>My latest works</h1>
            <p className='text-center mb-12 mt-5 mx-auto max-w-2xl '>
                I’m Amanullah Yawari, an experienced IT
                professional with over six years in networking,
                programming, and system management. I’ve worked on
                projects involving Python, Django, TensorFlow, and Flutter,
                developing web and mobile applications. I’m passionate about
                creating smart, efficient, and user-focused digital solutions.
            </p>
            <Link href="/#work">Back home</Link>
        </div>
    )
}

export default page
